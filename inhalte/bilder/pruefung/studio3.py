"""Studio look v3: cleaner cut-out (faint grey haze and specks no longer count as product), product centred on its
real outline, colours kept as in the original, brighter and flatter paper backdrop."""
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage

FILL = 0.74
BG_TOP, BG_BOTTOM = (251, 251, 249), (242, 242, 238)

def backdrop(size):
    t = np.linspace(0, 1, size)[:, None] ** 1.6
    top, bot = np.array(BG_TOP, float), np.array(BG_BOTTOM, float)
    col = top[None, :] * (1 - t[..., None]) + bot[None, :] * t[..., None]
    return Image.fromarray(np.repeat(col, size, axis=1).astype(np.uint8), 'RGB')

def cutout(im, holes=True, haze=True):
    a = np.asarray(im).astype(np.int16)
    mn, chroma = a.min(axis=2), a.max(axis=2) - a.min(axis=2)
    light = ((mn > 236) & (chroma < 14)) | (((mn > 212) & (chroma < 10)) if haze else False)
    lab, _ = ndimage.label(light)
    border = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
    obj = ~np.isin(lab, list(border))
    obj = ndimage.binary_opening(obj, iterations=1)
    lab2, n = ndimage.label(obj)
    if n > 1:
        sizes = ndimage.sum(obj, lab2, range(1, n + 1))
        keep = np.isin(lab2, [i + 1 for i, s in enumerate(sizes) if s >= max(sizes.max() * 0.004, 30)])
        obj = keep
    # enclosed pure-white areas (inside a reel bail, plier rings, spinner frames) are background, not product;
    # large flat clipped regions only, so specular highlights and white or pearl lures stay intact
    flat = (mn >= 247) & (chroma < 8)
    lab3, n3 = ndimage.label(flat & obj)
    if n3 and holes:
        sizes = ndimage.sum(np.ones_like(mn), lab3, range(1, n3 + 1))
        big = [i + 1 for i, s in enumerate(sizes) if s >= mn.size * 0.0012]
        if big:
            hole = ndimage.binary_dilation(np.isin(lab3, big), iterations=1) & (mn > 225) & (chroma < 16)
            obj = obj & ~hole
    alpha = ndimage.gaussian_filter(obj.astype(np.float32), 0.8)
    return Image.fromarray((np.clip(alpha, 0, 1) * 255).astype(np.uint8), 'L')

def studio3(im, size=1400, sharpen=(1.0, 70, 2), jpeg_source=False, holes=True, haze=True):
    alpha = cutout(im, holes, haze)
    box = alpha.point(lambda v: 255 if v > 128 else 0).getbbox()
    if not box: return backdrop(size)
    obj, m = im.crop(box), alpha.crop(box)
    if jpeg_source:
        import cv2
        obj = Image.fromarray(np.clip(cv2.bilateralFilter(np.asarray(obj).astype(np.float32), 5, 10, 3), 0, 255).astype(np.uint8))
    s = size * FILL / max(obj.size)
    ns = (max(1, round(obj.width * s)), max(1, round(obj.height * s)))
    obj, m = obj.resize(ns, Image.LANCZOS), m.resize(ns, Image.LANCZOS)
    r, p, t = sharpen
    obj = obj.filter(ImageFilter.UnsharpMask(radius=r, percent=p, threshold=t))
    # optical centre: halfway between the outline box and the product's visual mass (hooks hanging below pull less)
    ma = np.asarray(m).astype(float)
    cy = (ma.sum(1) * np.arange(ns[1])).sum() / max(ma.sum(), 1)
    oy = round(((ns[1] / 2) - cy) * 0.5)
    x, y = (size - ns[0]) // 2, (size - ns[1]) // 2 - round(size * 0.015) + oy
    out = backdrop(size)
    sh = Image.new('L', (size, size), 0); sh.paste(m, (x, y + round(size * 0.022)))
    sh = sh.filter(ImageFilter.GaussianBlur(size * 0.02)).point(lambda v: int(v * 0.24))
    out.paste(Image.new('RGB', (size, size), (46, 44, 36)), mask=sh)
    out.paste(obj, (x, y), mask=m)
    return out
