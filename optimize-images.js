// optimize-images.js
const fs    = require('fs');
const path  = require('path');
const sharp = require('sharp');

const DIR = path.join(__dirname, 'assets', 'images');

const SLOTS = {
  'hero.jpg':             { w: 2400, h: 1350, q: 82 },
  'about.jpg':            { w: 1600, h: 1200, q: 82 },
  'nursery.jpg':          { w: 1200, h: 900,  q: 82 },
  'lower-primary.jpg':    { w: 1200, h: 900,  q: 82 },
  'upper-primary.jpg':    { w: 1200, h: 900,  q: 82 },
  'principal.jpg':        { w: 1200, h: 1200, q: 82 },
  'campus.jpg':           { w: 1600, h: 1200, q: 82 },
  'children-reading.jpg': { w: 1600, h: 1200, q: 82 },
  'assembly.jpg':         { w: 1600, h: 1200, q: 82 },
  'sports-day.jpg':       { w: 1600, h: 1200, q: 82 },
};

(async () => {
  const files = fs.readdirSync(DIR).filter(f => f.toLowerCase().endsWith('.jpg'));
  if (files.length === 0) {
    console.log('No .jpg files found in', DIR);
    return;
  }

  for (const f of files) {
    const slot = SLOTS[f];
    if (!slot) {
      console.log(`• ${f} — no rule, leaving as is`);
      continue;
    }

    const full = path.join(DIR, f);
    const tmp  = path.join(DIR, '.tmp-' + f);

    try {
      const before = fs.statSync(full).size;
      await sharp(full)
        .rotate()
        .resize({
          width:  slot.w,
          height: slot.h,
          fit: 'cover',
          position: 'center',
          withoutEnlargement: true
        })
        .jpeg({ quality: slot.q, mozjpeg: true })
        .toFile(tmp);

      fs.renameSync(tmp, full);
      const after = fs.statSync(full).size;
      console.log(
        '✔ ' + f.padEnd(24) + '  ' + slot.w + '×' + slot.h + '   ' +
        (before / 1024).toFixed(0) + ' KB → ' + (after / 1024).toFixed(0) + ' KB'
      );
    } catch (err) {
      if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
      console.error('✘ ' + f + ':', err.message);
    }
  }

  console.log('\nDone. Now hard-reload the browser (Ctrl+Shift+R).');
})();