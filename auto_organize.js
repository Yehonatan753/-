const fs = require('fs');
const path = require('path');

const baseDir = "c:\\Users\\User\\Downloads\\אתר החיי והצומח";

const folders = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory() && !f.startsWith('.') && f !== 'code-to-site');

const determineFolder = (fileName) => {
    const lower = fileName.toLowerCase();
    if (lower.includes('netfish')) return 'ציוד דייג (חכות ורולרים)';

    // Read snippet of JSON to guess
    if (lower.endsWith('.json')) {
        try {
            const content = fs.readFileSync(path.join(baseDir, fileName), 'utf8');
            const snippet = content.substring(0, 5000).toLowerCase();
            if (snippet.includes('dogs') || snippet.includes('כלבים') || snippet.includes('כלב') || snippet.includes('puppy')) return 'בעלי חיים (כלבים)';
            if (snippet.includes('cats') || snippet.includes('חתולים') || snippet.includes('חתול')) return 'בעלי חיים (חתולים)';
            if (snippet.includes('birds') || snippet.includes('ציפורים') || snippet.includes('תוכי')) return 'בעלי חיים (ציפורים)';
            if (snippet.includes('rodents') || snippet.includes('מכרסמים') || snippet.includes('ארנב') || snippet.includes('אוגר')) return 'בעלי חיים (מכרסמים)';
            if (snippet.includes('reptiles') || snippet.includes('זוחלים') || snippet.includes('נחש')) return 'בעלי חיים (זוחלים)';
            if (snippet.includes('aquatics') || snippet.includes('דגים') || snippet.includes('דגי נוי') || snippet.includes('tetra')) return 'אקווטיקה (דגי נוי)';
            if (snippet.includes('nursery') || snippet.includes('צמחי') || snippet.includes('משתלה') || snippet.includes('דשן')) return 'משתלה (צמחי גן כל השנה)';
        } catch (e) { }
    }

    if (lower.includes('מוצרים')) {
        // Just put in a generic place if we don't know
        return 'משתלה (צמחי גן כל השנה)';
    }

    return null;
};

const items = fs.readdirSync(baseDir);
items.forEach(item => {
    if (item === 'organize.js' || item === 'organize_folders.ps1' || item === 'auto_organize.js') return;

    const fullPath = path.join(baseDir, item);
    const stat = fs.statSync(fullPath);

    // Check if it's one of the files we want to move
    let target = null;
    if (item.includes('netfish_extracted') || item.includes('tmp_netfish') || item.includes('netfish')) {
        target = 'ציוד דייג (חכות ורולרים)';
    } else if (item.includes('extract-data') || item.includes('Thunderbit')) {
        target = determineFolder(item);
    } else if (item.includes('לאתר החיי והצומח (תמונות מוצרים)')) {
        target = 'החיי והצומח\\זיכרון'; // Not a valid sub-folder in this context, wait, we are in אתר החיי והצומח.
        // Let's create a "תמונות - ארכיון" folder here
        target = 'ארכיון גלובלי';
    } else if (item === 'מוצרים.xlsx') {
        target = 'ארכיון גלובלי';
    }

    if (target) {
        const targetDir = path.join(baseDir, target);
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }

        const destPath = path.join(targetDir, item);
        try {
            fs.renameSync(fullPath, destPath);
            console.log(`Moved ${item} -> ${target}`);
        } catch (e) {
            console.error(`Failed to move ${item}:`, e);
        }
    }
});
