const fs = require('fs');
const puppeteer = require('puppeteer');
const {join} = require('path');

const parentDir = join(__dirname, '..');

const cvHtmlPath = `file:${join(parentDir, 'web', 'index.html')}?type=pdf`;
const cvPdfDir = join(parentDir, 'dist');
const cvPdfPath = join(cvPdfDir, 'Ilya_Siamionau_CV.pdf');

if (!fs.existsSync(cvPdfDir)) {
    fs.mkdirSync(cvPdfDir);
}

(async () => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.emulateMediaType('screen');

    await page.goto(cvHtmlPath, {waitUntil: 'networkidle0'});

    await page.pdf({
        path: cvPdfPath,
        format: 'A4',
        margin: {top: '10mm', right: '20mm', bottom: '10mm', left: '20mm'},
        scale: 0.95,
    });

    await browser.close();
})();
