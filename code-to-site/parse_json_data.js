const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/User/Downloads/אתר החיי והצומח/code-to-site';
const dataDir = path.join('c:/Users/User/Downloads/אתר החיי והצומח');

const extract1 = path.join(dataDir, 'extract-data-2026-02-21 (1).json');
const extract2 = path.join(dataDir, 'extract-data-2026-02-21 (2).json');
const extract3 = path.join(dataDir, 'extract-data-2026-02-20.json');
const thunderbit = path.join(dataDir, 'Thunderbit_bf0174_20260220_160404.json');

let allDogs = [];
let allCats = [];

function addProduct(dep, item) {
    if (dep === 'dogs' || dep === 'כלב') {
        allDogs.push(item);
    } else if (dep === 'cats' || dep === 'חתול') {
        allCats.push(item);
    }
}

// 1. Parse extract-data-2026-02-21 (1) & (2)
[extract1, extract2].forEach(file => {
    if (fs.existsSync(file)) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        Object.values(data).forEach(item => {
            if (item && item.n && item.n !== 'בדיקה') {
                addProduct(item.department, {
                    n: item.n.trim(),
                    b: item.b ? item.b.trim() : 'מגוון',
                    c: item.c ? item.c.trim() : 'מזון יבש',
                    d: item.d ? item.d.trim() : '',
                    s: Array.isArray(item.s) ? item.s.filter(x => x !== 'בדיקה') : [],
                    img: item.img || ''
                });
            }
        });
    }
});

// 2. Parse extract-data-2026-02-20.json
if (fs.existsSync(extract3)) {
    const data = JSON.parse(fs.readFileSync(extract3, 'utf8'));
    if (data.nbi_shop_products) {
        data.nbi_shop_products.forEach(item => {
            addProduct(item.department, {
                n: item.hebrew_name ? item.hebrew_name.trim() : '',
                b: item.brand ? item.brand.trim() : 'מגוון',
                c: item.hebrew_category ? item.hebrew_category.trim() : 'מזון יבש',
                d: item.hebrew_description ? item.hebrew_description.trim() : '',
                s: Array.isArray(item.sizes_and_weights) ? item.sizes_and_weights.map(s => s.value) : [],
                img: item.image_url || ''
            });
        });
    }
}

// 3. Parse Thunderbit
if (fs.existsSync(thunderbit)) {
    const data = JSON.parse(fs.readFileSync(thunderbit, 'utf8'));
    data.forEach(item => {
        let name = item['שם המוצר'];
        if (name) {
            let brand = item['מותג'] || 'מגוון';
            brand = brand.split('-')[0].trim(); // "מונג - MONGE" -> "מונג"
            addProduct(item['מתאים לחיה מסוג'], {
                n: name.trim(),
                b: brand,
                c: 'מזון יבש', // Default category since it's missing
                d: '',
                s: [],
                img: item['תמונת המוצר'] || ''
            });
        }
    });
}

// Deduplicate by name
function dedupe(arr) {
    const seen = new Set();
    return arr.filter(item => {
        if (!item.n) return false;
        if (seen.has(item.n)) return false;
        seen.add(item.n);
        return true;
    });
}

const uniqueDogs = dedupe(allDogs);
const uniqueCats = dedupe(allCats);

const outPath = path.join(projectRoot, 'src', 'data', 'importedData.ts');
let content = `import { Product } from '../types';\n\n`;

content += `export const IMPORTED_DOGS: Product[] = ${JSON.stringify(uniqueDogs, null, 2)};\n\n`;
content += `export const IMPORTED_CATS: Product[] = ${JSON.stringify(uniqueCats, null, 2)};\n`;

fs.writeFileSync(outPath, content, 'utf8');

console.log(`Extracted ${uniqueDogs.length} dogs and ${uniqueCats.length} cats products.`);
