import os, sys, concurrent.futures as cf
sys.path.insert(0, os.path.dirname(__file__))
from studio3 import studio3
from PIL import Image
import cv2, numpy as np
O='/tmp/claude-0/-home-user-s-dlicht2/9ef00763-2e2e-5b31-ae46-786da106baf1/scratchpad/'
os.makedirs(O+'v3', exist_ok=True)
def load(f):
    src = Image.open(O+'orig/'+f)
    if src.mode in ('RGBA','LA','P'):
        src = src.convert('RGBA'); bg = Image.new('RGB', src.size, (255,255,255)); bg.paste(src, mask=src.split()[-1]); src = bg
    src = src.convert('RGB')
    if max(src.size) < 1100:  # small source: AI upscale x2 first
        sr = cv2.dnn_superres.DnnSuperResImpl_create(); sr.readModel(O+'sr/EDSR_x2.pb'); sr.setModel('edsr', 2)
        src = Image.fromarray(cv2.cvtColor(sr.upsample(cv2.cvtColor(np.asarray(src), cv2.COLOR_RGB2BGR)), cv2.COLOR_BGR2RGB))
    return src
def run(f):
    try:
        holes = f[12:].startswith(('stromjaeger','uferrolle','kraftwerfer','kompaktcaster','allroundcaster','feingriff','kraftzange','snap-set','doppelklinge','krautkoenig','buschjaeger','grossjaeger'))
        out = studio3(load(f), 1400, jpeg_source=f.lower().endswith(('.jpg','.jpeg')), holes=holes, haze=False)
        out.save(O+'v3/'+f.rsplit('.',1)[0]+'.jpg', 'JPEG', quality=86, optimize=True, progressive=True)
        return 'ok'
    except Exception as e: return f+' '+repr(e)
fs = sorted(os.listdir(O+'orig'))
with cf.ProcessPoolExecutor(4) as ex: res = list(ex.map(run, fs))
print(len(res), [r for r in res if r != 'ok'][:5])
