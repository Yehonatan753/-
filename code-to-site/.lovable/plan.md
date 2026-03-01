
# פתרון פרוגרמטי — מיפוי תמונות JSON ל-NP

## הבעיה

הניסיונות הקודמים שכתבו מחדש את מערך ה-NP (168 מוצרים) נכשלו/פספסו מוצרים בגלל מגבלות טוקן. הפתרון הנכון: **לא לגעת ב-NP**, אלא לתת לקוד לעשות את העבודה בזמן ריצה.

---

## שני שינויים בלבד

### שינוי 1 — שמירת ה-JSON כקובץ פרויקט

מעתיק את הקובץ:
```
user-uploads://Thunderbit_6c3572_20260219_203906-2.json
→ src/data/scrapedPlants.json
```

### שינוי 2 — הוספת 3 שורות ל-storeData.ts

**בראש הקובץ** — import אחד:
```typescript
import scrapedPlants from './scrapedPlants.json';
```

**בתחתית הקובץ** (אחרי הגדרת `BRANDS`, לפני ה-export האחרון) — לולאת מיפוי:

```typescript
// === Dynamic image injection from scraped JSON ===
const FALLBACKS: Record<string, string> = {
  'herbs': 'https://yarok-lavan.co.il/wp-content/uploads/2026/01/תבלינים-מיקס-3-1.jpg',
  'indoor-green': 'https://yarok-lavan.co.il/wp-content/uploads/2026/01/צמחי-פנים-3-scaled-1.jpg',
  'indoor-flowering': 'https://yarok-lavan.co.il/wp-content/uploads/2026/01/צמחי-פנים-3-scaled-1.jpg',
  'shrubs': 'https://yarok-lavan.co.il/wp-content/uploads/2025/03/%D7%91%D7%95%D7%92%D7%95%D7%A0%D7%91%D7%99%D7%9C%D7%99%D7%94-2-520x520.jpg',
  'garden-winter': 'https://yarok-lavan.co.il/wp-content/uploads/2026/01/צמחי-גן-4-1.jpg',
  'garden-summer': 'https://yarok-lavan.co.il/wp-content/uploads/2026/01/צמחי-גן-4-1.jpg',
  'garden-yearly': 'https://yarok-lavan.co.il/wp-content/uploads/2026/01/צמחי-גן-4-1.jpg',
  'equipment': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
};

const plantImageMap = new Map<string, string>(
  (scrapedPlants as Array<{ "שם הצמח": string; "תמונת הצמח": string }>)
    .map(item => [item["שם הצמח"], item["תמונת הצמח"]])
);

Object.entries(NP).forEach(([categoryKey, products]) => {
  products.forEach(product => {
    const scrapedImg = plantImageMap.get(product.n);
    if (scrapedImg && scrapedImg.trim() !== '') {
      product.img = scrapedImg;
    } else if (!product.img || product.img.trim() === '') {
      product.img = FALLBACKS[categoryKey] ?? FALLBACKS['equipment'];
    }
  });
});
```

---

## למה זה עובד

```
זמן בניה (build time):
  scrapedPlants.json  ──────►  Map<שם, URL>
                                    │
  NP object (168 מוצרים)           │
       │                           │
       └──► forEach ──► lookup ────┘
                  │
                  ├── מצא התאמה? → product.img = URL מה-JSON
                  └── לא נמצא?  → product.img = FALLBACK לפי קטגוריה
```

הלוגיקה רצה פעם אחת כשהמודול נטען. לאחר מכן כל הרכיבים קוראים את NP עם התמונות הנכונות.

---

## מה לא משתנה

- מערך ה-NP — לא נגעים בו בכלל
- כל שאר הקובץ (AP, AQ, BRANDS, NURSERY_ARTICLES) — ללא שינוי
- שום קומפוננטה אחרת לא מושפעת

---

## Technical Details

### טיפוס TypeScript

ה-import של JSON עובד ב-Vite מחוץ לקופסה — TypeScript יסיק אוטומטית את הטיפוס. ה-`as Array<...>` cast מבטיח type safety.

### סדר השינויים

1. העתקת הקובץ JSON ל-`src/data/scrapedPlants.json`
2. הוספת import בשורה 7 (אחרי imports הקיימים)
3. הוספת לולאת מיפוי בסוף הקובץ (שורה 495+)
