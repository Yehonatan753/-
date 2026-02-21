import scrapedPlants from './scrapedPlants.json';
import lizardImg from '@/assets/lizard.jpg';
import aquaFishImg from '@/assets/aqua-fish.png';
import fishOrnamentalImg from '@/assets/fish-ornamental.png';
import fishPredatorImg from '@/assets/fish-predator.png';
import fishPondImg from '@/assets/fish-pond.png';
import nurseryHeroImg from '@/assets/nursery-hero.png';

// Image URLs
export const U = {
  animals: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80',
  aqua: aquaFishImg,
  nursery: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
  dog: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
  cat: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80',
  bird: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600&q=80',
  ham: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&q=80',
  lizard: lizardImg,
  plants: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80',
  flowers: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&q=80',
  trees: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80',
  herbs: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80',
  fert: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
  succ: 'https://images.unsplash.com/photo-1509423381768-0c18e5d77e48?w=600&q=80',
  nurseryHero: nurseryHeroImg,
  aq1: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=400&q=80',
  aq2: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&q=80',
  aq3: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=400&q=80',
  aq4: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&q=80',
  aq5: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&q=80',
  aq6: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80',
};

export interface Product {
  n: string;
  b: string;
  c: string;
  d: string;
  s: string[];
  img?: string;
}

export interface NurseryProduct {
  n: string;
  b: string;
  d: string;
  s?: string[];
  img?: string;
}

export interface AnimalSub {
  id: string;
  name: string;
  color: string;
  img: string;
}

export interface NurseryCategory {
  id: string;
  name: string;
  d: string;
  img: string;
  tag: string;
}

export interface AquaticFish {
  n: string;
  d: string;
  img: string;
}

export interface AquaticEquipment {
  n: string;
  d: string;
  cat?: string;
}

export const ASUBS: AnimalSub[] = [
   { id: 'dogs', name: 'כלבים', color: '#009688', img: U.dog },
   { id: 'cats', name: 'חתולים', color: '#9c27b0', img: U.cat },
   { id: 'birds', name: 'ציפורים', color: '#ff9800', img: U.bird },
   { id: 'rodents', name: 'מכרסמים', color: '#e91e63', img: U.ham },
   { id: 'reptiles', name: 'זוחלים', color: '#4caf50', img: U.lizard },
];

export const AP: Record<string, { f: { b: string[]; c: string[] }; p: Product[] }> = {
  dogs: {
    f: { b: ['Royal Canin', 'Purina Pro Plan', 'Monge', 'Josera', "Hill's", 'Ambrosia', 'AlphaDog', 'מגוון'], c: ['מזון יבש', 'ציוד'] },
    p: [
      { n: 'Royal Canin Mini Adult', b: 'Royal Canin', c: 'מזון יבש', d: 'מזון יבש סופר פרמיום לכלבים קטנים בוגרים (1-10 ק"ג). שומר על פרווה מבריקה ועיכול תקין.', s: ['2 ק"ג', '4 ק"ג', '8 ק"ג'], img: 'https://cdn.royalcanin-weshare-online.io/rYBngGsBaxEApQ6FnBpy/v2/mini-ad-sd-bhn-packshot' },
      { n: 'Royal Canin Maxi Adult', b: 'Royal Canin', c: 'מזון יבש', d: 'מזון סופר פרמיום לכלבים גדולים (26-44 ק"ג). מועשר לתמיכה במפרקים ובעצמות.', s: ['15 ק"ג'], img: 'https://cdn.royalcanin-weshare-online.io/C4BigGsBaxEApQ6FUhcP/v2/maxi-ad-sd-bhn-packshot' },
      { n: 'Pro Plan Adult Medium עוף', b: 'Purina Pro Plan', c: 'מזון יבש', d: 'מזון סופר פרמיום לכלבים בינוניים עם טכנולוגיית OPTIBALANCE.', s: ['14 ק"ג'], img: 'https://www.purina.co.il/sites/default/files/styles/product_tile/public/2024-05/Pro%20Plan%20Medium%20Adult%20Chicken.png' },
      { n: 'Monge All Breeds Adult', b: 'Monge', c: 'מזון יבש', d: 'מזון סופר פרמיום איטלקי, מבוסס עוף ואורז לכלבים בוגרים.', s: ['12 ק"ג'], img: 'https://www.monge.com/wp-content/uploads/2023/04/monge-all-breeds-adult-chicken-rice.png' },
      { n: 'Josera Adult Balance', b: 'Josera', c: 'מזון יבש', d: 'מזון גרמני מופחת שומן לכלבים מבוגרים או פחות פעילים.', s: ['15 ק"ג'], img: 'https://www.josera.de/media/image/product/balance-dog.png' },
      { n: "Hill's Science Plan Adult", b: "Hill's", c: 'מזון יבש', d: "תזונה מדעית מוכחת לכלבים בוגרים לתמיכה במערכת החיסונית.", s: ['12 ק"ג'], img: 'https://www.hillspet.co.il/content/dam/cp-sites/hills/hills-pet/en_us/products/dog-food/sp-canine-adult-chicken-barley-dry.png' },
      { n: 'Ambrosia Grain Free Adult', b: 'Ambrosia', c: 'מזון יבש', d: 'מזון הוליסטי ללא דגנים, עשיר בחלבון טרי מהחי.', s: ['12 ק"ג'], img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80' },
      { n: 'AlphaDog Breeder', b: 'AlphaDog', c: 'מזון יבש', d: 'שק חיסכון ענק ואיכותי למגדלים וכלבי עבודה.', s: ['22 ק"ג'], img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80' },
      { n: 'רצועות ורתמות מקצועיות', b: 'מגוון', c: 'ציוד', d: 'מגוון רצועות הולכה, קולרים ורתמות איכותיות מבית Dorgan וספקים מורשים.', s: [], img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&q=80' },
      { n: 'צעצועי נשיכה ואינטראקציה', b: 'מגוון', c: 'ציוד', d: 'צעצועי קונג, חבלי משיכה וכדורים עמידים לכלבים.', s: [], img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&q=80' },
    ],
  },
  cats: {
    f: { b: ['Royal Canin', 'Purina Pro Plan', 'Friskies', 'Monge', 'Josera', "Hill's", 'Ambrosia', 'Ever Clean', 'מגוון'], c: ['מזון יבש', 'מזון רטוב', 'חול', 'ציוד'] },
    p: [
      { n: 'Royal Canin Sterilised 37', b: 'Royal Canin', c: 'מזון יבש', d: 'מזון ייעודי לחתולים מסורסים למניעת השמנה ובעיות בדרכי השתן.', s: ['4 ק"ג', '10 ק"ג'], img: 'https://cdn.royalcanin-weshare-online.io/woDigGsBaxEApQ6FWhfg/v2/sterilised-37-fhn-packshot' },
      { n: 'Royal Canin Kitten', b: 'Royal Canin', c: 'מזון יבש', d: 'מזון עשיר לגורי חתולים בתקופת הגדילה הקריטית.', s: ['4 ק"ג'], img: 'https://cdn.royalcanin-weshare-online.io/mIBigGsBaxEApQ6FVBf2/v2/kitten-fhn-packshot' },
      { n: 'Pro Plan Adult Cat', b: 'Purina Pro Plan', c: 'מזון יבש', d: 'תזונה מתקדמת לחתולים בוגרים לתמיכה בכליות.', s: ['3 ק"ג', '10 ק"ג'], img: 'https://www.purina.co.il/sites/default/files/styles/product_tile/public/2024-05/Pro%20Plan%20Adult%20Cat%20Chicken.png' },
      { n: 'Friskies Adult', b: 'Friskies', c: 'מזון יבש', d: 'מזון מאוזן וטעים במיוחד מבית פורינה.', s: ['10 ק"ג'], img: 'https://www.purina.co.il/sites/default/files/styles/product_tile/public/2024-05/Friskies%20Adult%20Cat.png' },
      { n: 'Monge Cat Kitten', b: 'Monge', c: 'מזון יבש', d: 'מזון איטלקי סופר פרמיום מבוסס עוף לגורי חתולים.', s: ['1.5 ק"ג', '10 ק"ג'], img: 'https://www.monge.com/wp-content/uploads/2023/04/monge-cat-kitten.png' },
      { n: 'Josera Cat Adult', b: 'Josera', c: 'מזון יבש', d: 'מזון גרמני מעולה וקל לעיכול לחתולי בית.', s: ['10 ק"ג'], img: 'https://www.josera.de/media/image/product/leger-cat.png' },
      { n: "Hill's Science Plan Cat", b: "Hill's", c: 'מזון יבש', d: "נוסחה מדויקת לשמירה על מסת שריר רזה ובריאות מיטבית.", s: ['10 ק"ג'], img: 'https://www.hillspet.co.il/content/dam/cp-sites/hills/hills-pet/en_us/products/cat-food/sp-feline-adult-chicken-dry.png' },
      { n: 'Ambrosia Grain Free Cat', b: 'Ambrosia', c: 'מזון יבש', d: 'מזון ללא דגנים העונה על הצרכים הקרניבוריים הטבעיים של החתול.', s: ['10 ק"ג'], img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80' },
      { n: 'Friskies מעדנים', b: 'Friskies', c: 'מזון רטוב', d: 'מעדני פאוצ׳ ברוטב או פטה במגוון טעמים.', s: ['85 גרם'], img: 'https://www.purina.co.il/sites/default/files/styles/product_tile/public/2024-05/Friskies%20Wet%20Cat.png' },
      { n: 'Ever Clean Extra Strong', b: 'Ever Clean', c: 'חול', d: 'חול מתגבש סופר-פרמיום, מנטרל ריחות בעוצמה גבוהה.', s: ['10 ליטר'], img: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400&q=80' },
      { n: 'מתקני גירוד ועצי חתול', b: 'מגוון', c: 'ציוד', d: 'עצי חתול, משטחי גירוד מקרטון וחבל לתעסוקה בריאה.', s: [], img: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400&q=80' },
    ],
  },
  birds: {
    f: { b: ['Medioni', 'מגוון'], c: ['מזון', 'ציוד'] },
    p: [
      { n: 'מדיוניקס תוכונים', b: 'Medioni', c: 'מזון', d: 'תערובת זרעים מאוזנת ונקייה המותאמת לתוכונים.', s: ['1 ק"ג', '4 ק"ג'], img: 'https://medioni.co.il/wp-content/uploads/2017/02/600-IMG_7877_%D7%AA%D7%95%D7%9B%D7%95%D7%A0%D7%99%D7%9D_1_%D7%A7%D7%92-300x300.jpg' },
      { n: 'מדיוניקס קוקטיל וציפורי אהבה', b: 'Medioni', c: 'מזון', d: 'תערובת עשירה לתוכים בינוניים.', s: ['1 ק"ג', '4 ק"ג'], img: 'https://medioni.co.il/wp-content/uploads/2017/09/600-IMG_7873_%D7%A7%D7%95%D7%A7%D7%95%D7%98%D7%9C_1_%D7%A7%D7%92-300x300.jpg' },
      { n: 'מדיוניקס תוכים גדולים', b: 'Medioni', c: 'מזון', d: 'תערובת ייעודית לתוכים גדולים כגון ג׳אקו וארה.', s: ['1 ק"ג', '4 ק"ג'], img: 'https://medioni.co.il/wp-content/uploads/2017/02/%D7%AA%D7%95%D7%9B%D7%99%D7%9D-%D7%92%D7%93%D7%95%D7%9C%D7%99%D7%9D-800-%D7%92%D7%A8%D7%9D-300x300.jpg' },
      { n: 'כלובי ציפורים ואביזרים', b: 'מגוון', c: 'ציוד', d: 'מגוון כלובים, מתקני מים, כלי אוכל וצעצועים לציפורים.', s: [], img: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&q=80' },
    ],
  },
  rodents: {
    f: { b: ['Medioni', 'מגוון'], c: ['מזון', 'ציוד'] },
    p: [
      { n: 'מדיוניקס מכרסמים', b: 'Medioni', c: 'מזון', d: 'תערובת כופתיות וזרעים לארנבים, אוגרים ושרקנים.', s: ['1 ק"ג', '4 ק"ג'], img: 'https://medioni.co.il/wp-content/uploads/2017/02/%D7%9E%D7%9B%D7%A8%D7%A1%D7%9E%D7%99%D7%9D-1-%D7%A7%D7%92-%D7%97%D7%93%D7%A9-300x300.jpg' },
      { n: 'אספסת וחציר', b: 'Medioni', c: 'מזון', d: 'חציר טבעי הכרחי לעיכול תקין של מכרסמים.', s: ['1 ק"ג'], img: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&q=80' },
      { n: 'מצעים וכלובים למכרסמים', b: 'מגוון', c: 'ציוד', d: 'שבבי עץ, מצע נייר, כלובי רשת וגלגלי ריצה.', s: [], img: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&q=80' },
    ],
  },
  reptiles: {
    f: { b: ['מגוון'], c: ['מזון', 'ציוד'] },
    p: [
      { n: 'מזון יבש לצבי מים', b: 'מגוון', c: 'מזון', d: 'מקלות צפים עשירים בסידן לצבי מים.', s: ['250 גרם'], img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80' },
      { n: 'טרריומים ותאורת חימום', b: 'מגוון', c: 'ציוד', d: 'טרריומים מזכוכית, נורות חימום ו-UVB לזוחלים.', s: [], img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80' },
    ],
  },
};

// ── Yarok-Lavan nursery article type & data ─────────────────────
export interface NurseryArticle {
  title: string;
  desc: string;
  img: string;
  content: string;
  link?: string;
}

export const NURSERY_ARTICLES: NurseryArticle[] = [
  {
    title: "כיצד שותלים?",
    desc: "סדר פעולות לשתילה נכונה בגינה, הכנת הקרקע וטיפול ראשוני.",
    img: "https://yarok-lavan.co.il/wp-content/uploads/2026/01/%D7%90%D7%9E%D7%A0%D7%95%D7%9F-%D7%95%D7%AA%D7%9E%D7%A8-%D7%A0%D7%A0%D7%A1%D7%99-3-1024x576.jpg",
    content: "שתילה נכונה היא הבסיס לכל צמח בריא. שלב ראשון: חפרו בור הגדול פי 1.5 מגוש השורשים של הצמח. שלב שני: ערבבו את האדמה שהוצאתם עם קומפוסט איכותי (יחס של 1:3 לטובת האדמה). שלב שלישי: שחררו בעדינות את שורשי הצמח לפני ההכנסה לבור כדי לעודד צימוח החוצה. כסו באדמה, הדקו קלות (לא למעוך!), והשקו בהצפה מיד לאחר השתילה כדי להוציא כיסי אוויר. השקיה ראשונה: בצעו השקיה עמוקה ב-3 הימים הראשונים ולאחר מכן עברו להשקיה מותאמת לסוג הצמח. בחורים אקלים ישראלי, הצהרים בקיץ — הימנעו מהשקיה בשעות החמות ביותר."
  },
  {
    title: "גידול גרניום",
    desc: "הצמח החסכוני ביותר במים. כל הסודות לגידול מוצלח ופריחה שופעת.",
    img: "https://yarok-lavan.co.il/wp-content/uploads/2026/01/%D7%92%D7%A8%D7%A0%D7%99%D7%95%D7%9D-%D7%96%D7%A7%D7%95%D7%A3-%D7%9C%D7%99%D7%A6%D7%99-1024x768.jpg",
    content: "הגרניום (פלרגוניום) הוא מלך הגינה הישראלית, ויש לו חוק אחד חשוב: הוא שונא עודף מים. השקו רק כשהשכבה העליונה של האדמה יבשה לחלוטין. כדי לעודד פריחה שופעת לאורך כל השנה, הקפידו לגזום פרחים נבולים (קיטום) ברגע שהם מסיימים לפרוח. דשנו בדשן עשיר באשלגן אחת לשבועיים בעונת הלבלוב, וודאו שהוא מקבל לפחות 4-6 שעות שמש ישירה ביום. גיזום שנתי: בסוף החורף, גזמו את הגרניום בחזרה לשליש מגובהו — זה יגרום לצמח להתחדש וליצור ענפים חדשים ופריחה שופעת יותר בקיץ הבא."
  },
  {
    title: "תכנון גינת תבלינים",
    desc: "איך לתכנן גינת תבלינים דקורטיבית, שילוב ריחות ותכונות מרפא.",
    img: "https://yarok-lavan.co.il/wp-content/uploads/2026/01/%D7%97%D7%A1%D7%94-%D7%A1%D7%9C%D7%A0%D7%95%D7%91%D7%94-1-1024x768.jpg",
    content: "גינת תבלינים מוצלחת דורשת חלוקה לאזורי השקיה. אל תשתלו רוזמרין ולבנדר (חסכוניים במים) באותה אדנית עם נענע ובזיליקום (אוהבי מים). מקמו את צמחי התה (נענע, לואיזה, לימונית) באזור קרוב למטבח לגישה נוחה. תנו לנענע עציץ משלה — היא משתלטת באגרסיביות על שורשים של צמחים אחרים. הקפידו על שמש מלאה לרוב התבלינים (לפחות 6 שעות ביום). שילובים מומלצים: בזיליקום + עגבניות (מרחיק מזיקים), לבנדר + רוזמרין (גינה ים-תיכונית יבשה), נענע + לואיזה (פינת תה ריחנית)."
  },
  {
    title: "איך לא להרוג צמחי בית?",
    desc: "מדריך פשוט למתחילים — השקיה נכונה, תאורה וטעויות נפוצות.",
    img: "https://yarok-lavan.co.il/wp-content/uploads/2026/01/%D7%A4%D7%95%D7%98%D7%95%D7%A1-2-1024x768.jpg",
    content: "הסיבה מספר אחת למוות של צמחי בית היא השקיית יתר, שגורמת לריקבון שורשים. חוק האצבע: עדיף לייבש קצת מאשר להציף. בדקו עם האצבע בעומק 3 ס\"מ — אם לח, אל תשקו. תאורה: רוב צמחי הבית (פוטוס, מונסטרה) צריכים אור בהיר אך לא שמש ישירה שעלולה לשרוף את העלים. הקפידו לנקות את העלים מאבק פעם בחודש בעזרת מטלית לחה כדי לאפשר פוטוסינתזה תקינה. טעות נפוצה נוספת: עציץ קטן מדי — כשהשורשים צפופים, הצמח מתקשה לקלוט מים ומזון. החליפו עציץ אחת לשנה-שנתיים לגדול יותר ב-2-3 ס\"מ."
  },
  {
    title: "שתילת צמחים רב שנתיים",
    desc: "כל מה שצריך לדעת על צמחים שחיים ופורחים מספר שנים ברציפות.",
    img: "https://yarok-lavan.co.il/wp-content/uploads/2026/01/%D7%9E%D7%A4%D7%9C%D7%99%D7%AA-%D7%9C%D7%99%D7%9C-%D7%9B%D7%95%D7%9B%D7%91%D7%99%D7%9D-1024x576.jpg",
    content: "צמחים רב-שנתיים הם ההשקעה הטובה ביותר לגינה: שותלים פעם אחת ונהנים שנים רבות. הסוד הוא ההכנה: תמיד הוסיפו חומר אורגני (קומפוסט, גרוטאות עץ) לאדמה לפני השתילה. גרניום, לוונדר, אגפנתוס ורוזמרין הם הרב-שנתיים הקלים ביותר לאקלים הישראלי. שנה ראשונה: ההתבססות קריטית — השקיה סדירה ב-12 החודשים הראשונים, גם לצמחים עמידי בצורת. לאחר התבססות, רובם דורשים מינימום תחזוקה. גיזום שנתי בסוף הפריחה יאריך את חיי הצמח ויגרום לפריחה שופעת יותר."
  },
  {
    title: "גידול רקפת — מדריך מקצועי",
    desc: "איך לשמור על פריחת החורף העדינה לאורך זמן בבית ובגינה.",
    img: "https://yarok-lavan.co.il/wp-content/uploads/2025/01/%D7%A8%D7%A7%D7%A4%D7%AA-%D7%A4%D7%A8%D7%97-%D7%A2%D7%A0%D7%A7-8-1024x768.jpg",
    content: "הרקפת (ציקלמן) היא כוכבת החורף הישראלי. הכלל הראשון: אל תשקו על הפקעת — תמיד שפכו מים לצלחת מתחת לעציץ ותנו לצמח לשאוב מלמטה. זה מונע ריקבון הפקעת. מיקום: קר ומואר — חלון צפוני בבית, או מרפסת מוגנת מרוחות חזקות. כשפרחים קמלים — הוציאו את כל הגבעול עד הבסיס (לא רק את הפרח) כדי לעודד גבעולים חדשים. בסוף הפריחה (מרץ-אפריל): הפחיתו השקיה בהדרגה, תנו לעלים ליבש, ואחסנו את הפקעת במקום קריר ויבש עד לסוף הקיץ — ואז שתלו מחדש."
  },
];

// מסנני חיפוש מתקדמים מ-ירוק לבן
export const NURSERY_FILTERS = {
  growth: ['מטפס', 'משתרע', 'נשפך', 'שיחי'],
  season: ['אביב', 'קיץ', 'סתיו', 'חורף', 'כל השנה'],
  water:  ['מעטה', 'רגילה', 'מרובה'],
  light:  ['מקום מואר', 'ללא קרינה ישירה', 'עוצמות אור נמוכות', 'שמש ישירה'],
};

// Nursery categories — 4 main Yarok-Lavan categories (keeping old IDs in NP for data compat)
export const NC: NurseryCategory[] = [
  { id: 'garden', name: 'צמחי גן', d: 'גרניום, רקפת, אמנון ותמר, פטוניה ועוד', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/03/%D7%91%D7%92%D7%95%D7%A0%D7%99%D7%94-%D7%A8%D7%A7%D7%A1-520x520.jpg', tag: 'גינה' },
  { id: 'indoor', name: 'צמחי פנים', d: 'סחלב, מונסטרה, סנסיווריה, פוטוס ועוד', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/03/%D7%9E%D7%A4%D7%9C%D7%99%D7%AA-%D7%9E%D7%99%D7%A0%D7%99-520x520.jpg', tag: 'בית' },
  { id: 'shrubs', name: 'שיחים ומטפסים', d: 'בוגונביליה, היביסקוס, יסמין ועוד', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/03/%D7%91%D7%95%D7%92%D7%95%D7%A0%D7%91%D7%99%D7%9C%D7%99%D7%94-2-520x520.jpg', tag: 'שיחים' },
  { id: 'herbs', name: 'תבלינים וירקות', d: 'בזיליקום, נענע, רוזמרין, תות שדה', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/03/%D7%AA%D7%91%D7%9C%D7%99%D7%A0%D7%99%D7%9D-%D7%9E%D7%99%D7%A7%D7%A1-3-1-520x520.jpg', tag: 'תבלינים' },
];

// Nursery products with yarok-lavan style images
const FB_GARDEN = 'https://yarok-lavan.co.il/wp-content/uploads/2026/01/צמחי-גן-4-1.jpg';
const FB_INDOOR = 'https://yarok-lavan.co.il/wp-content/uploads/2026/01/צמחי-פנים-3-scaled-1.jpg';
const FB_SHRUBS = 'https://yarok-lavan.co.il/wp-content/uploads/2025/03/%D7%91%D7%95%D7%92%D7%95%D7%A0%D7%91%D7%99%D7%9C%D7%99%D7%94-2-520x520.jpg';
const FB_HERBS  = 'https://yarok-lavan.co.il/wp-content/uploads/2026/01/תבלינים-מיקס-3-1.jpg';
const FB_EQUIP  = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80';

export const NP: Record<string, NurseryProduct[]> = {
  'garden-winter': [
    { n: 'רקפת', b: 'ירוק לבן', d: 'פרח עדין ויפהפה לחורף, פורח בצבעי ורוד, לבן, סגול ואדום. מתאים לעציצים ולגינה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/01/%D7%A8%D7%A7%D7%A4%D7%AA-%D7%A4%D7%A8%D7%97-%D7%A2%D7%A0%D7%A7-8-1024x768.jpg' },
    { n: 'אמנון ותמר', b: 'ירוק לבן', d: 'פרח חלק ומיוחד, זמין בגרסאות ננסיות וענקיות. פריחה אלגנטית לגינה ולעציץ.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20186131456429-400x300.jpg' },
    { n: 'אסטר סיני', b: 'ירוק לבן', d: 'פריחה צבעונית במגוון גוונים. פרח חורפי פופולרי לערוגות ולגינות.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אסטר_בלגי3-400x300.jpg' },
    { n: 'סיגל', b: 'ירוק לבן', d: 'פרח ריחני ועדין, פורח בחורף ובתחילת האביב. אידאלי לצל חלקי.', img: FB_GARDEN },
    { n: 'בגוניה ספרקלר', b: 'ירוק לבן', d: 'בגוניה פורחת עד, פריחה רצופה בצבעים חזקים. מתאימה לעציצים ולערוגות.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בגוניה_ספרקלר-_ורוד2-400x300.jpg' },
    { n: 'בגוניה פורחת עד', b: 'ירוק לבן', d: 'פריחה בלתי פוסקת כל העונה, בצבעי ורוד, אדום ולבן.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/בגוניה-פורחת-עד-400x300.jpg' },
    { n: 'אקווילגיה', b: 'ירוק לבן', d: 'פרח ייחודי בצורת פעמון, פורח באביב. מתאים לגינות צל.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/אקווילגיה-2-400x300.jpg' },
    { n: 'פעמוני גשם', b: 'ירוק לבן', d: 'פקעת פורחת לאחר גשמות, פריחה בלבן וורוד. חסרת תחזוקה.', img: FB_GARDEN },
    { n: 'נרקיס חצוצרה', b: 'ירוק לבן', d: 'פקעת חורפית פופולרית, פרחים צהובים ולבנים. שתילה בסתיו.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/%D7%A0%D7%A8%D7%A7%D7%99%D7%A1-%D7%97%D7%A6%D7%95%D7%A6%D7%A8%D7%94-2-400x300.jpg' },
    { n: 'יקינטון', b: 'ירוק לבן', d: 'פרח ריחני מאוד, פורח בחורף בצבעי ורוד, סגול, לבן וכחול.', img: FB_GARDEN },
    { n: 'אירוס כרתי', b: 'ירוק לבן', d: 'פרח ישראלי קלאסי, פורח בחורף בצבעי סגול וכחול.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20231317495690-400x300.jpg' },
    { n: 'כלנית', b: 'ירוק לבן', d: 'פרח בר ישראלי, פורח בחורף באדום, סגול ולבן. סמל החורף הישראלי.', img: FB_GARDEN },
    { n: 'נורית', b: 'ירוק לבן', d: 'פרח רב-עלי בצבעים עזים, פורח בחורף ובאביב. יפהפה בזרי פרחים.', img: FB_GARDEN },
    { n: 'לבנדר ים תיכוני', b: 'ירוק לבן', d: 'פרח חורפי סגול-כחול, עמיד ליובש. ריחני ומושך דבורים.', img: FB_GARDEN },
    { n: 'פרימולה', b: 'ירוק לבן', d: 'פרח חורפי צבעוני, ננסי. מתאים לעציצים ולערוגות מוצלות.', img: FB_GARDEN },
    { n: 'ציקלמן פרסי', b: 'ירוק לבן', d: 'גרסה מטופחת של הרקפת, פרחים גדולים ומרשימים.', img: FB_GARDEN },
    { n: 'סנפדרגון (לוע ארי חורפי)', b: 'ירוק לבן', d: 'פריחה חורפית זקופה בגוונים חמים. לערוגות ולגינות.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/03/%D7%9C%D7%95%D7%A2-%D7%94%D7%90%D7%A8%D7%99-%D7%A0%D7%9E%D7%95%D7%9A-2-1-520x520.jpg' },
    { n: 'ויולה', b: 'ירוק לבן', d: 'פרח חורפי קטן וקסום, צבעים מגוונים. מתאים לעציצים ותיבות חלון.', img: FB_GARDEN },
    { n: 'לופינוס', b: 'ירוק לבן', d: 'פריחה מרשימה בצורת שיבולת, בצבעים חזקים. שתילה בסתיו-חורף.', img: FB_GARDEN },
    { n: 'דלפיניום', b: 'ירוק לבן', d: 'פרח גבוה ומלכותי בגוני כחול וסגול. מרהיב בערוגות גינה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20198191062716-400x300.jpg' },
  ],
  'garden-summer': [
    { n: 'פטוניה', b: 'ירוק לבן', d: 'עונתית ורב-שנתית, פריחה שופעת בצבעים עזים כל הקיץ.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/03/%D7%9E%D7%A4%D7%9C%D7%99%D7%AA-%D7%9E%D7%99%D7%A0%D7%99-520x520.jpg' },
    { n: 'וינקה', b: 'ירוק לבן', d: 'פריחה שופעת כל הקיץ, עמידה בחום קיצוני.', img: FB_GARDEN },
    { n: 'גזניה', b: 'ירוק לבן', d: 'פרח שמש צבעוני, נפתח באור ונסגר בלילה. עמיד ליובש.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גזניה_זוחלת-_כסופה4-400x300.jpg' },
    { n: 'פורטולקה', b: 'ירוק לבן', d: 'פרח קיצי עמיד ביותר ליובש, פריחה בצבעים חזקים.', img: FB_GARDEN },
    { n: 'אגרטום', b: 'ירוק לבן', d: 'פרח קיצי ננסי בגוני כחול וסגול. מושך פרפרים ודבורים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אגרטום-_סגול_32-400x300.jpg' },
    { n: 'אנגלוניה', b: 'ירוק לבן', d: 'פרח קיצי זקוף בגוני ורוד, סגול ולבן. פריחה ארוכה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/202412512132996-400x300.jpg' },
    { n: 'אפטניה', b: 'ירוק לבן', d: 'צמח סוקולנטי פורח, כיסוי קרקע מצוין. עמיד ליובש.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אפטניה_32-400x300.jpg' },
    { n: 'בידנס (דושן)', b: 'ירוק לבן', d: 'פרח צהוב זהוב, פריחה שופעת כל הקיץ. מתאים לתליה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/202412512324436-400x300.jpg' },
    { n: 'אבולבולוס', b: 'ירוק לבן', d: 'פרח כחול-סגול עדין, גדילה שטוחה. מתאים לתליה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אבולבולוס_37-400x300.jpg' },
    { n: 'לוע ארי', b: 'ירוק לבן', d: 'פרח זקוף במגוון צבעים, פריחה ארוכה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/03/%D7%9C%D7%95%D7%A2-%D7%94%D7%90%D7%A8%D7%99-%D7%A0%D7%9E%D7%95%D7%9A-2-1-520x520.jpg' },
    { n: 'בשמת (אמפטיינס)', b: 'ירוק לבן', d: 'פרח צל מעולה, פריחה רציפה בצבעים חזקים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20198198541159-400x300.jpg' },
    { n: 'אקמלה פיקאבו', b: 'ירוק לבן', d: 'פרח ייחודי בצורת כפתור, צהוב-כתום.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/2019411283942-400x300.jpg' },
    { n: 'זיניה', b: 'ירוק לבן', d: 'פרח קיצי צבעוני וחזק, קל לגידול. מושך פרפרים.', img: FB_GARDEN },
    { n: 'טגטס (ציפורן חתול)', b: 'ירוק לבן', d: 'פרח קיצי בגוני צהוב, כתום ואדום. מרחיק מזיקים.', img: FB_GARDEN },
    { n: 'גומפרנה', b: 'ירוק לבן', d: 'פרח כדורי בגוני ורוד וסגול, מתייבש יפה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גומפרנה-_סגול_22-400x300.jpg' },
    { n: 'סלביה (מרוות הגינה)', b: 'ירוק לבן', d: 'פריחה אדומה או סגולה זקופה, מושכת יונקי דבש.', img: FB_GARDEN },
    { n: 'קוסמוס', b: 'ירוק לבן', d: 'פרח עדין ואוורירי, קל לגידול. פריחה בורוד, לבן וכתום.', img: FB_GARDEN },
    { n: 'צלוזיה (כרבולת התרנגול)', b: 'ירוק לבן', d: 'פרח ייחודי בצורת להבה, בצבעים חמים.', img: FB_GARDEN },
    { n: 'פנטס', b: 'ירוק לבן', d: 'פרח כוכבי קטן, פריחה בקיץ בורוד, אדום ולבן.', img: FB_GARDEN },
    { n: 'גיבסנית (היפסופילה)', b: 'ירוק לבן', d: 'פרחי ענן לבנים או ורודים, נהדר כרקע לזרי פרחים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גיפסנית-_ורוד7-400x300.jpg' },
  ],
  'garden-yearly': [
    { n: 'גרניום צרפתי', b: 'ירוק לבן', d: 'חסכוני במים, מיקס צבעים מרהיב. פריחה כמעט כל השנה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גרניום_צרפתי-_זנים_עדכניים_34-400x300.jpg' },
    { n: 'לוונדר', b: 'ירוק לבן', d: 'צמח ריחני ורב-שנתי, פרחים סגולים. עמיד ליובש.', img: FB_GARDEN },
    { n: 'אגפנתוס', b: 'ירוק לבן', d: 'פרח כדורי כחול-סגול על גבעול גבוה. רב-שנתי ומרשים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אגפנתוס_35-400x300.jpg' },
    { n: 'גרמית (פלרגוניום)', b: 'ירוק לבן', d: 'פריחה מתמשכת כל השנה, בגוונים חמים. חסכוני במים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/גרמית-3-400x300.jpg' },
    { n: 'ורבנה', b: 'ירוק לבן', d: 'צמח כיסוי קרקע פורח, פריחה כל השנה בצבעים עזים.', img: FB_GARDEN },
    { n: 'אריופס (עינן מסרקני)', b: 'ירוק לבן', d: 'פרח צהוב דמוי חמנייה, פריחה כל השנה. עמיד ליובש.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20192211359174-400x300.jpg' },
    { n: 'בולבין', b: 'ירוק לבן', d: 'צמח סוקולנטי עם פריחה כתומה-צהובה. חסכוני במים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בולבין4-400x300.jpg' },
    { n: 'ארכובית מקורקפת', b: 'ירוק לבן', d: 'פרח כתום-צהוב, פריחה ממושכת. כיסוי קרקע מצוין.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/ארכובית_מקורקפת4-400x300.jpg' },
    { n: 'אשולציה קליפורנית', b: 'ירוק לבן', d: 'פרח בר כתום-צהוב, פריחה באביב-קיץ.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אשולציה_26-400x300.jpg' },
    { n: 'גזניה רב-שנתית', b: 'ירוק לבן', d: 'פרח שמש צבעוני שפורח כמעט כל השנה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/202112231003426-400x300.jpg' },
    { n: 'לנטנה', b: 'ירוק לבן', d: 'שיח פורח כל השנה במגוון צבעים. עמיד ביותר, מושך פרפרים.', img: FB_GARDEN },
    { n: 'כליל החורש (רוזמרין זוחל)', b: 'ירוק לבן', d: 'כיסוי קרקע ריחני, פריחה כחולה-סגולה. חסכוני במים.', img: FB_GARDEN },
    { n: 'גרביליאה', b: 'ירוק לבן', d: 'שיח אוסטרלי מרשים, פריחה ורודה-אדומה ייחודית.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גרוויליאה_ברכיסטכיאה_22-400x300.jpg' },
    { n: 'כנפן (סטכיס)', b: 'ירוק לבן', d: 'עלים כסופים רכים כקטיפה, כיסוי קרקע. עמיד ליובש.', img: FB_GARDEN },
    { n: 'איפומאה (כף הנהר)', b: 'ירוק לבן', d: 'צמח מטפס מהיר, פרחים סגולים וורודים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20211223842771-400x300.jpg' },
    { n: 'דורנתוס', b: 'ירוק לבן', d: 'פרח סוקולנטי צבעוני, כיסוי קרקע מרשים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/דורנטה_גיישה_גירל9-400x300.jpg' },
    { n: 'רודבקיה', b: 'ירוק לבן', d: 'פרח צהוב דמוי חמנייה עם מרכז כהה. רב-שנתי ועמיד.', img: FB_GARDEN },
    { n: 'אכילאה (אלף-עלה)', b: 'ירוק לבן', d: 'צמח רב-שנתי עם פריחה שטוחה בצבעים חמים.', img: FB_GARDEN },
    { n: 'גאורה', b: 'ירוק לבן', d: 'פרחים עדינים ורודים או לבנים על גבעולים ארוכים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גאורה-_ורוד_כהה_22-400x300.jpg' },
    { n: 'אוסטאוספרמום', b: 'ירוק לבן', d: 'פרח דמוי חמנייה בצבעים רבים, פריחה כמעט כל השנה.', img: FB_GARDEN },
  ],
  'indoor-green': [
    { n: 'מונסטרה דליציוזה', b: 'ירוק לבן', d: 'עלים גדולים ומחוררים, צמח פנים מרשים ואייקוני.', img: FB_INDOOR },
    { n: 'מונסטרה אדנסוני', b: 'ירוק לבן', d: 'מונסטרה עם עלים מחוררים קטנים יותר, מטפסת.', img: FB_INDOOR },
    { n: 'פוטוס', b: 'ירוק לבן', d: 'צמח פנים קלאסי, קל לגידול ומטהר אוויר.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2026/01/%D7%A4%D7%95%D7%98%D7%95%D7%A1-2-1024x768.jpg' },
    { n: 'פוטוס זהוב', b: 'ירוק לבן', d: 'עלים ירוקים עם גוון זהוב, מטפס ומתלה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2026/01/%D7%A4%D7%95%D7%98%D7%95%D7%A1-2-1024x768.jpg' },
    { n: 'סנסווריה (חרב הנחש)', b: 'ירוק לבן', d: 'עמיד ביותר, מתאים למתחילים. מטהר אוויר.', img: FB_INDOOR },
    { n: 'סנסווריה צילינדרית', b: 'ירוק לבן', d: 'גרסה צילינדרית ייחודית. מודרנית ומינימליסטית.', img: FB_INDOOR },
    { n: 'פיקוס אלסטיקה', b: 'ירוק לבן', d: 'עלים גדולים ומבריקים, ירוקים כהים. צמח קלאסי.', img: FB_INDOOR },
    { n: 'פיקוס ליראטה (כינור)', b: 'ירוק לבן', d: 'עלים גדולים בצורת כינור, צמח סטייטמנט.', img: FB_INDOOR },
    { n: 'פיקוס בנימינה', b: 'ירוק לבן', d: 'עץ פנים ירוק-עד עם ענפים נשפכים. קלאסי.', img: FB_INDOOR },
    { n: 'דרצנה למון ליים', b: 'ירוק לבן', d: 'עלים מוארכים בגוני ירוק-צהוב בהיר.', img: FB_INDOOR },
    { n: 'דרצנה מרגינטה', b: 'ירוק לבן', d: 'עלים צרים ואדמדמים, צורה דמוית דקל.', img: FB_INDOOR },
    { n: 'דקל ארקה (דיפסיס)', b: 'ירוק לבן', d: 'דקל פנים פופולרי, עלים נוצתיים אלגנטיים.', img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80' },
    { n: 'דקל חמדוריאה', b: 'ירוק לבן', d: 'דקל פנים ננסי, מתאים לחללים קטנים. סובל צל.', img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80' },
    { n: 'דקל קנציה', b: 'ירוק לבן', d: 'דקל פנים אלגנטי עם עלים רחבים.', img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80' },
    { n: 'זמיקוקולוס (ZZ)', b: 'ירוק לבן', d: 'עלים מבריקים כהים, עמיד ביותר. דורש מעט אור ומים.', img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80' },
    { n: 'אגלונמה', b: 'ירוק לבן', d: 'עלים צבעוניים בגוני ירוק, ורוד וכסף.', img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80' },
    { n: 'דיפנבכיה', b: 'ירוק לבן', d: 'עלים גדולים ירוקים עם דוגמאות לבנות.', img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80' },
    { n: 'במבוק המזל', b: 'ירוק לבן', d: 'צמח שמביא מזל לפי הפנג שואי. קל לגידול.', img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80' },
    { n: 'ברכיכיטון בונסאי', b: 'ירוק לבן', d: 'בונסאי אוסטרלי עם גזע בקבוק מעניין.', img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80' },
    { n: 'אופרקוליקריה בונסאי', b: 'ירוק לבן', d: 'בונסאי מדגסקרי נדיר עם גזע עבה. צמח יוקרה.', img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80' },
    { n: 'זית בונסאי', b: 'ירוק לבן', d: 'עץ זית מעוצב כבונסאי, ירוק-עד ואלגנטי.', img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80' },
    { n: 'פילודנדרון', b: 'ירוק לבן', d: 'עלים לבביים ירוקים, מטפס או שפוך. מטהר אוויר.', img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80' },
    { n: 'קלתאה', b: 'ירוק לבן', d: 'עלים מעוטרים בדוגמאות מרהיבות, מתקפלים בלילה.', img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80' },
    { n: 'ספטיפילום (שושנת השלום)', b: 'ירוק לבן', d: 'פרחים לבנים אלגנטיים, מטהר אוויר מעולה. סובל צל.', img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80' },
    { n: 'יוקה פנים', b: 'ירוק לבן', d: 'עלים חרביים ירוקים כהים, צמח עמיד ומרשים.', img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80' },
  ],
  'indoor-flowering': [
    { n: 'סחלב פאלנופסיס', b: 'ירוק לבן', d: 'סחלב הפנים הפופולרי ביותר, פריחה ארוכה.', img: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&q=80' },
    { n: 'סחלב אונסידיום', b: 'ירוק לבן', d: 'סחלב "רוקדות בנות", פרחים צהובים קטנים.', img: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&q=80' },
    { n: 'אנטוריום', b: 'ירוק לבן', d: 'פריחה אדומה או ורודה מבריקה, כמעט כל השנה.', img: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&q=80' },
    { n: 'גרברה', b: 'ירוק לבן', d: 'פרח עמיד בצבעים עזים. מושלם למתנה.', img: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&q=80' },
    { n: 'הורטנזיה', b: 'ירוק לבן', d: 'פריחה מרהיבה בכחול, ורוד ולבן.', img: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&q=80' },
    { n: 'גרדניה', b: 'ירוק לבן', d: 'פרח לבן ריחני במיוחד. צמח יוקרה.', img: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&q=80' },
    { n: 'בגוניה ורד', b: 'ירוק לבן', d: 'בגוניה עם פרחים כפולים דמויי ורד.', img: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&q=80' },
    { n: 'גוזמניה', b: 'ירוק לבן', d: 'ברומליה טרופית עם פרח מרכזי אדום-כתום.', img: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&q=80' },
    { n: 'וריסיאה חרב', b: 'ירוק לבן', d: 'ברומליה עם פרח בצורת חרב בצבעים חמים.', img: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&q=80' },
    { n: 'אמריליס', b: 'ירוק לבן', d: 'פרח גדול ומרשים על גבעול גבוה. פורח בחורף.', img: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&q=80' },
    { n: 'זיגוקקטוס (קקטוס חג המולד)', b: 'ירוק לבן', d: 'קקטוס פורח בחורף, פרחים ורודים וקורלים.', img: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&q=80' },
    { n: 'ורד ענבר (ננסי)', b: 'ירוק לבן', d: 'ורד ננסי לעציץ, פריחה חוזרת בצבעים מגוונים.', img: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&q=80' },
    { n: 'חרצית כריזנטמה', b: 'ירוק לבן', d: 'פרח עונתי עם פריחה שופעת. מטהר אוויר.', img: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&q=80' },
    { n: 'בת שבע', b: 'ירוק לבן', d: 'צמח פנים עם פריחה ורודה-סגולה עדינה.', img: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&q=80' },
    { n: 'בת קלה צבעונית', b: 'ירוק לבן', d: 'צמח פנים עם עלים צבעוניים ופריחה מיוחדת.', img: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&q=80' },
    { n: 'חלבלוב הדור (קלנכואה)', b: 'ירוק לבן', d: 'סוקולנט פורח בצבעים עזים, פריחה ארוכה.', img: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&q=80' },
    { n: 'סיננגיה (גלוקסיניה)', b: 'ירוק לבן', d: 'פרח קטיפתי בצבעים עמוקים. צמח מתנה מהמם.', img: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&q=80' },
    { n: 'אורכידאה דנדרוביום', b: 'ירוק לבן', d: 'סחלב עם פרחים רבים לאורך הגבעול.', img: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&q=80' },
  ],
  shrubs: [
    { n: 'בוגונביליה רגילה', b: 'ירוק לבן', d: 'שיח מטפס פורח בצבעי ורוד, סגול, כתום ולבן.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בוגונביליה_210-400x300.jpg' },
    { n: 'בוגונביליה גלברה', b: 'ירוק לבן', d: 'זן חלק ללא קוצים, פריחה צפופה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בוגונביליה_גלברה_39-400x300.jpg' },
    { n: 'בוגונביליה תאילנדית', b: 'ירוק לבן', d: 'זן כפול-פרחים מיוחד מתאילנד.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20198198485732-400x300.jpg' },
    { n: 'היביסקוס', b: 'ירוק לבן', d: 'שיח פורח בפריחה טרופית, פרחים גדולים בצבעים עזים.', img: FB_SHRUBS },
    { n: 'יסמין', b: 'ירוק לבן', d: 'מטפס ריחני במיוחד, פרחים לבנים. ניחוח מאגי.', img: FB_SHRUBS },
    { n: 'ביגנוניה', b: 'ירוק לבן', d: 'מטפס פורח בכתום ואדום, פריחה שופעת.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/ביגנוניה6-400x300.jpg' },
    { n: 'בודליה דוד (שיח הפרפרים)', b: 'ירוק לבן', d: 'שיח פורח בסגול וורוד, מושך פרפרים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20231415261086-400x300.jpg' },
    { n: 'אלמנדה', b: 'ירוק לבן', d: 'שיח/מטפס טרופי, פרחים צהובים גדולים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201981818413825-400x300.jpg' },
    { n: 'אבוטילון (פעמונית)', b: 'ירוק לבן', d: 'שיח עם פרחים בצורת פעמון, בצבעים חמים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אבוטילון6-400x300.jpg' },
    { n: 'אבליה גדולת פרחים', b: 'ירוק לבן', d: 'שיח ירוק-עד עם פריחה ורודה-לבנה ריחנית.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201981818312072-400x300.jpg' },
    { n: 'בן עוזרר הודי', b: 'ירוק לבן', d: 'שיח עם פריחה צבעונית מרהיבה, עמיד לחום.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201942215273817-400x300.jpg' },
    { n: 'בן עוזרר סוככני', b: 'ירוק לבן', d: 'עץ נוי עם כיפת עלים סוככנית.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201942215335854-400x300.jpg' },
    { n: 'אדניום (שושנת המדבר)', b: 'ירוק לבן', d: 'צמח מדברי עם גזע בקבוק ופרחים ורודים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201933113262697-400x300.jpg' },
    { n: 'אקליפטוס כדורי', b: 'ירוק לבן', d: 'עלים כדוריים כחלחלים, ריחניים. פופולרי בזרי פרחים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20231415123639-400x300.jpg' },
    { n: 'אספרגוס מאירי', b: 'ירוק לבן', d: 'צמח נוי ירוק בהיר עם מרקם עדין.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אספרגוס_מאירי14-400x300.jpg' },
    { n: 'סנדבילה (דיפלדניה)', b: 'ירוק לבן', d: 'מטפס טרופי עם פרחים ורודים גדולים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/דיפלדניה-סנדבילה-3-400x300.jpg' },
    { n: 'אלמון הודי', b: 'ירוק לבן', d: 'עץ נשיר עם פריחה ורודה מרהיבה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201962618204445-400x300.jpg' },
    { n: 'במבוק', b: 'ירוק לבן', d: 'צמח גדילה מהירה, מתאים למחיצות. ירוק-עד.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/במבוק15-400x300.jpg' },
    { n: 'ברהניה מושלגת', b: 'ירוק לבן', d: 'שיח עם פריחה לבנה שופעת, דמוית שלג.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/ברהניה_מושלגת4-400x300.jpg' },
    { n: 'ברהניה ננסית', b: 'ירוק לבן', d: 'גרסה ננסית לגידול בעציץ ובגינה קטנה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/ברהניה_לבנה_ננסית2-400x300.jpg' },
    { n: 'פלומבגו', b: 'ירוק לבן', d: 'שיח/מטפס עם פרחים כחולים עדינים. עמיד ליובש.', img: FB_SHRUBS },
    { n: 'טקומה', b: 'ירוק לבן', d: 'שיח/מטפס עם פרחים צהובים זקופים.', img: FB_SHRUBS },
    { n: 'דורנטה', b: 'ירוק לבן', d: 'שיח פורח בסגול וכחול, מושך פרפרים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/2019819933430-400x300.jpg' },
    { n: 'הרדנברגיה', b: 'ירוק לבן', d: 'מטפס אוסטרלי עם אשכולות פרחים סגולים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/03/%D7%94%D7%A8%D7%93%D7%A0%D7%91%D7%A8%D7%92%D7%99%D7%94-%D7%A1%D7%92%D7%95%D7%9C-2-520x520.jpg' },
    { n: 'ורד גינה', b: 'ירוק לבן', d: 'ורדים לגינה במגוון צבעים וריחות. מלכת הפרחים.', img: FB_SHRUBS },
  ],
  herbs: [
    { n: 'בזיליקום ירוק', b: 'ירוק לבן', d: 'תבלין חיוני למטבח האיטלקי, ריחני וטעים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בזיל_ירוק_28-400x300.jpg' },
    { n: 'בזיליקום סגול', b: 'ירוק לבן', d: 'זן סגול דקורטיבי וטעים. ייחודי ביופי ובטעם.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בזיל_מגיק_מאונטיין-_סגול_25-400x300.jpg' },
    { n: 'בזיליקום תאילנדי', b: 'ירוק לבן', d: 'טעם אניס ייחודי, למאכלים אסיאתיים.', img: FB_HERBS },
    { n: 'רוזמרין', b: 'ירוק לבן', d: 'צמח תבלין רב-שנתי, לגינה ולעציץ.', img: FB_HERBS },
    { n: 'נענע', b: 'ירוק לבן', d: 'לתה, למאכלים ולמשקאות. ריחנית ומרעננת.', img: FB_HERBS },
    { n: 'מנטה (מנטה פפרמינט)', b: 'ירוק לבן', d: 'ארומטית ומרעננת, לתה ולמוחיטו.', img: FB_HERBS },
    { n: 'אורגנו', b: 'ירוק לבן', d: 'תבלין ים תיכוני חיוני, לפיצות ורטבים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אורגנו9-400x300.jpg' },
    { n: 'מרווה', b: 'ירוק לבן', d: 'צמח רב-שנתי ריחני, לבשר ולתה.', img: FB_HERBS },
    { n: 'זוטא לבנה', b: 'ירוק לבן', d: 'תבלין ריחני לתה ולמאכלים. צמח בר ישראלי.', img: FB_HERBS },
    { n: 'פטרוזיליה', b: 'ירוק לבן', d: 'תבלין בסיסי למטבח, עשיר בוויטמינים.', img: FB_HERBS },
    { n: 'שמיר', b: 'ירוק לבן', d: 'תבלין עדין לדגים, סלטים וחמוצים.', img: FB_HERBS },
    { n: 'כוסברה', b: 'ירוק לבן', d: 'תבלין חיוני למטבח המזרחי.', img: FB_HERBS },
    { n: 'שיבא', b: 'ירוק לבן', d: 'צמח תבלין מסורתי לתה. ריחני וארומטי.', img: FB_HERBS },
    { n: 'רודה (פיגם)', b: 'ירוק לבן', d: 'צמח תבלין מסורתי, עלים ריחניים.', img: FB_HERBS },
    { n: 'לימונית (לואיזה)', b: 'ירוק לבן', d: 'צמח ריחני לתה, טעם לימוני מרענן.', img: FB_HERBS },
    { n: 'תות שדה', b: 'ירוק לבן', d: 'שתיל תות שדה לגידול ביתי.', img: FB_HERBS },
    { n: 'פלפל נוי', b: 'ירוק לבן', d: 'פלפלים צבעוניים דקורטיביים, חריפים.', img: FB_HERBS },
    { n: 'רוקט (רוקולה)', b: 'ירוק לבן', d: 'עלי סלט חריפים-אגוזיים. גידול קל ומהיר.', img: FB_HERBS },
    { n: 'עגבניות שרי', b: 'ירוק לבן', d: 'שתילי עגבניות שרי לגידול ביתי.', img: FB_HERBS },
    { n: 'חסה', b: 'ירוק לבן', d: 'ירק עלים בסיסי, גידול קל ומהיר.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2026/01/%D7%97%D7%A1%D7%94-%D7%A1%D7%9C%D7%A0%D7%95%D7%91%D7%94-1-1024x768.jpg' },
    { n: 'פלפל חריף', b: 'ירוק לבן', d: 'שתילי פלפל חריף לגידול ביתי.', img: FB_HERBS },
    { n: 'תימין', b: 'ירוק לבן', d: 'תבלין ריחני רב-שנתי, לבשרים ותבשילים.', img: FB_HERBS },
    { n: 'מליסה (דבורנית)', b: 'ירוק לבן', d: 'צמח ריחני בטעם לימוני, לתה ולמשקאות.', img: FB_HERBS },
  ],
  equipment: [
    { n: 'דשן נוזלי לפריחה', b: 'Dorgan', d: 'מעודד פריחה עשירה וצבעונית.', s: ['500 מ"ל', '1 ליטר'], img: FB_EQUIP },
    { n: 'דשן אוניברסלי', b: 'Dorgan', d: 'לכל סוגי הצמחים, מאוזן ומלא.', s: ['500 מ"ל', '1 ליטר'], img: FB_EQUIP },
    { n: 'דשן להדרים', b: 'Dorgan', d: 'מותאם לעצי הדר — לימון, תפוז, אשכולית.', s: ['500 מ"ל', '1 ליטר'], img: FB_EQUIP },
    { n: 'דשן לסחלבים', b: 'Dorgan', d: 'פורמולה מיוחדת לסחלבים, מעודד פריחה חוזרת.', s: ['250 מ"ל', '500 מ"ל'], img: FB_EQUIP },
    { n: 'דשן ביו-אורגני', b: 'Dorgan', d: 'אורגני לירקות ותבלינים. בטוח לגידול אכיל.', s: ['500 מ"ל', '1 ליטר'], img: FB_EQUIP },
    { n: 'דשן שחרור איטי', b: 'Dorgan', d: 'גרגירים מבוקרים לשחרור הדרגתי.', s: ['1 ק"ג', '5 ק"ג'], img: FB_EQUIP },
    { n: 'דשן לצמחי פנים', b: 'Dorgan', d: 'מותאם לצמחי בית, מזין ומחזק.', s: ['250 מ"ל', '500 מ"ל'], img: FB_EQUIP },
    { n: 'דשן לדשא', b: 'Dorgan', d: 'לדשא ירוק ושופע. תזונה מאוזנת.', s: ['1 ק"ג', '5 ק"ג'], img: FB_EQUIP },
    { n: 'אדמה לעציצים', b: 'מגוון', d: 'תערובת אדמה איכותית לעציצים.', s: ['10 ליטר', '20 ליטר', '50 ליטר'], img: FB_EQUIP },
    { n: 'אדמה לסחלבים', b: 'מגוון', d: 'תערובת קליפות אורנים לסחלבים.', s: ['5 ליטר', '10 ליטר'], img: FB_EQUIP },
    { n: 'אדמה לקקטוסים', b: 'מגוון', d: 'תערובת מנקזת לסוקולנטים וקקטוסים.', s: ['5 ליטר', '10 ליטר'], img: FB_EQUIP },
    { n: 'קומפוסט', b: 'מגוון', d: 'להעשרת הקרקע. אורגני ומזין.', s: ['20 ליטר', '50 ליטר'], img: FB_EQUIP },
    { n: 'עציצים פלסטיק', b: 'מגוון', d: 'במגוון גדלים וצבעים. קלים ועמידים.', img: FB_EQUIP },
    { n: 'עציצי חרס', b: 'מגוון', d: 'עציצים קלאסיים מחרס, נושמים ויפים.', img: FB_EQUIP },
    { n: 'עציצי קרמיקה', b: 'מגוון', d: 'עציצים מעוצבים מקרמיקה. אלגנטיים.', img: FB_EQUIP },
    { n: 'כלי גינון', b: 'מגוון', d: 'את, מגרפה, מזמרה, כפפות ועוד.', img: FB_EQUIP },
    { n: 'מערכות השקיה', b: 'מגוון', d: 'טפטפות, צינורות, טיימרים ואביזרי השקיה.', img: FB_EQUIP },
    { n: 'תומכים ורשתות', b: 'מגוון', d: 'תומכי צמחים, רשתות הדלייה ומוטות.', img: FB_EQUIP },
  ],
};

// Populate new NC alias ids by combining existing product arrays
NP.garden = [...(NP['garden-winter'] || []), ...(NP['garden-summer'] || []), ...(NP['garden-yearly'] || [])];
NP.indoor = [...(NP['indoor-green'] || []), ...(NP['indoor-flowering'] || [])];


export const AQ_FISH: AquaticFish[] = [
  { n: 'דגי נוי', d: "סקלר, גופי, מולי, טטרה ועוד", img: fishOrnamentalImg },
  { n: 'דגי טורפים', d: 'ציקלידים, אוסקר, ארוונה', img: fishPredatorImg },
  { n: 'דגי בריכה', d: 'דגי זהב, קוי, זנים שונים', img: fishPondImg },
];

export const AQ_EQUIP: AquaticEquipment[] = [
  { n: 'ציוד נלווה', d: 'אקווריומים, בריכות, אביזרים', cat: 'אביזרים ועיצוב' },
  { n: 'פילטרים', d: 'פילטרים, משאבות, ציוד טכני', cat: 'ציוד ואקווריומים' },
  { n: 'אקווריום / בריכות / אקוופוניקה', d: 'מערכות שלמות', cat: 'ציוד ואקווריומים' },
];

// === מוצרי אקווטיקה מפורטים ===
export const AQ_PRODUCTS: { f: { b: string[]; c: string[] }; p: Product[] } = {
  f: {
    b: ['Tetra', 'Sera', 'JBL', 'Tropical', 'מגוון'],
    c: ['מזון דגי נוי', 'מזון דגים טורפים', 'מזון דגי בריכה', 'טיפול במים', 'ציוד ואקווריומים', 'אביזרים ועיצוב']
  },
  p: [
    // === מזון דגי נוי ===
    { n: 'Tetra Min פתיתים', b: 'Tetra', c: 'מזון דגי נוי', d: 'מזון בסיסי בפתיתים לכל דגי הנוי הטרופיים. פורמולה מאוזנת עם ויטמינים, מינרלים וחלבון איכותי. מכיל פרה-ביוטיקה לעיכול בריא ומים נקיים יותר. המזון הנמכר ביותר בעולם לדגי נוי.', s: ['100 מ"ל', '250 מ"ל', '1000 מ"ל'], img: 'https://www.tetra.net/medias/tetra-min-100ml-T269-front.png' },
    { n: 'Tetra Min גרנולות', b: 'Tetra', c: 'מזון דגי נוי', d: 'מזון בגרנולות קטנות לדגי נוי טרופיים. שוקע לאט, מתאים לדגים שניזונים בשכבה האמצעית.', s: ['100 מ"ל', '250 מ"ל'], img: 'https://www.tetra.net/medias/tetra-min-granules-100ml-T139-front.png' },
    { n: 'Tetra Pro Energy', b: 'Tetra', c: 'מזון דגי נוי', d: 'מזון פרמיום בטכנולוגיית רקיקים. עתיר אנרגיה עם שומנים איכותיים למרץ וחיוניות.', s: ['100 מ"ל', '250 מ"ל'], img: 'https://www.tetra.net/medias/tetra-pro-energy-100ml-T141-front.png' },
    { n: 'Tetra Pro Colour', b: 'Tetra', c: 'מזון דגי נוי', d: 'מזון פרמיום להגברת צבעים. מכיל מרכזי צבע טבעיים כמו אסטקסנטין וקנטקסנטין.', s: ['100 מ"ל', '250 מ"ל'], img: 'https://www.tetra.net/medias/tetra-pro-colour-100ml-T140-front.png' },
    { n: 'Tetra Betta', b: 'Tetra', c: 'מזון דגי נוי', d: 'מזון ייעודי לדגי בטה (לוחם סיאמי). פתיתים קטנים צפים, מועשרים בצבע טבעי.', s: ['27 גרם', '85 גרם'], img: 'https://www.tetra.net/medias/tetra-betta-27g-T160-front.png' },
    { n: 'Tetra Pleco Tablets', b: 'Tetra', c: 'מזון דגי נוי', d: 'טבליות שוקעות לדגי קרקעית צמחונים (פלקו, אנסיסטרוס). מכילות ספירולינה וזוכיני.', s: ['120 טבליות', '275 טבליות'], img: 'https://www.tetra.net/medias/tetra-pleco-tablets-120tab-T199-front.png' },
    { n: 'Tetra TabiMin', b: 'Tetra', c: 'מזון דגי נוי', d: 'טבליות שוקעות לדגי קרקעית (קורידורס, לואצ\'ים). מזון מלא עם חלבון גבוה.', s: ['120 טבליות', '275 טבליות'], img: 'https://www.tetra.net/medias/tetra-tabimin-120tab-T173-front.png' },
    { n: 'Tetra Guppy', b: 'Tetra', c: 'מזון דגי נוי', d: 'מזון ייעודי לגופים ודגים חיי-לידה. פתיתים מיני צפים.', s: ['100 מ"ל'], img: 'https://www.tetra.net/medias/tetra-guppy-100ml-T237-front.png' },
    { n: 'Sera Vipan Nature', b: 'Sera', c: 'מזון דגי נוי', d: 'מזון בסיסי בפתיתים לכל דגי הנוי, ללא צבעים ומשמרים מלאכותיים. פורמולה גרמנית איכותית.', s: ['100 מ"ל', '250 מ"ל', '1000 מ"ל'], img: 'https://www.sera.de/media/image/product/sera-vipan-nature-250ml.jpg' },
    { n: 'Sera GVG-Mix Nature', b: 'Sera', c: 'מזון דגי נוי', d: 'תערובת פתיתים עם חטיפי בשר (גמביליה, דפניה, ארטמיה). מדמה תזונה טבעית.', s: ['100 מ"ל', '250 מ"ל'], img: 'https://www.sera.de/media/image/product/sera-gvg-mix-nature-250ml.jpg' },
    { n: 'Sera Granured', b: 'Sera', c: 'מזון דגי נוי', d: 'גרנולות שוקעות לאט לציקלידים קטנים. עם ספירולינה ו-10% קריל.', s: ['100 מ"ל', '250 מ"ל'], img: 'https://www.sera.de/media/image/product/sera-granured-250ml.jpg' },
    { n: 'Sera Granugreen', b: 'Sera', c: 'מזון דגי נוי', d: 'גרנולות ירוקות לציקלידים צמחוניים. 30% ספירולינה.', s: ['100 מ"ל', '250 מ"ל'], img: 'https://www.sera.de/media/image/product/sera-granugreen-250ml.jpg' },
    { n: 'JBL NovoGrano Mix', b: 'JBL', c: 'מזון דגי נוי', d: 'מזון בגרנולות לדגי אקווריום. פורמולת PRONOVO עם חלבון מחרקים. שוקע לאט.', s: ['100 מ"ל', '250 מ"ל'], img: 'https://www.jbl.de/images/product/pronovo-bel-grano-m-250ml.jpg' },
    { n: 'JBL NovoGrano Colour', b: 'JBL', c: 'מזון דגי נוי', d: 'גרנולות להגברת צבעים לדגי נוי. עם אסטקסנטין טבעי.', s: ['100 מ"ל', '250 מ"ל'], img: 'https://www.jbl.de/images/product/pronovo-color-grano-m-250ml.jpg' },
    { n: 'JBL NovoBel', b: 'JBL', c: 'מזון דגי נוי', d: 'מזון בסיסי בפתיתים לכל דגי הנוי. 7 סוגי פתיתים שונים.', s: ['100 מ"ל', '250 מ"ל', '1000 מ"ל'], img: 'https://www.jbl.de/images/product/pronovo-bel-flakes-m-250ml.jpg' },
    { n: 'Tropical SuperVit', b: 'Tropical', c: 'מזון דגי נוי', d: 'מזון בפתיתים פולני פרמיום. תערובת 8 סוגי פתיתים עם ארטמיה, ספירולינה וויטמינים.', s: ['100 מ"ל', '250 מ"ל', '1000 מ"ל'], img: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=400&q=80' },

    // === מזון דגים טורפים ===
    { n: 'Sera Cichlid Red XL', b: 'Sera', c: 'מזון דגים טורפים', d: 'גרנולות גדולות לציקלידים טורפים גדולים. 10% ספירולינה להגברת צבעים.', s: ['250 מ"ל', '1000 מ"ל'], img: 'https://www.sera.de/media/image/product/sera-cichlid-red-xl-1000ml.jpg' },
    { n: 'Sera Cichlid Green XL', b: 'Sera', c: 'מזון דגים טורפים', d: 'גרנולות גדולות לציקלידים צמחוניים. 30% ספירולינה.', s: ['250 מ"ל', '1000 מ"ל'], img: 'https://www.sera.de/media/image/product/sera-cichlid-green-xl-1000ml.jpg' },
    { n: 'Sera Cichlid Sticks', b: 'Sera', c: 'מזון דגים טורפים', d: 'מקלות צפים לציקלידים גדולים. חלבון מדגים ומחרקים.', s: ['250 מ"ל', '1000 מ"ל'], img: 'https://www.sera.de/media/image/product/sera-cichlid-sticks-1000ml.jpg' },
    { n: 'Tetra Cichlid Sticks', b: 'Tetra', c: 'מזון דגים טורפים', d: 'מקלות צפים לציקלידים. פורמולה BioActive עם חלבון גבוה.', s: ['250 מ"ל', '500 מ"ל', '1000 מ"ל'], img: 'https://www.tetra.net/medias/tetra-cichlid-sticks-250ml-T198-front.png' },
    { n: 'Tetra Cichlid Granules', b: 'Tetra', c: 'מזון דגים טורפים', d: 'גרנולות לציקלידים בינוניים וגדולים. שוקעות לאט.', s: ['250 מ"ל', '500 מ"ל'], img: 'https://www.tetra.net/medias/tetra-cichlid-granules-250ml-T197-front.png' },
    { n: 'JBL NovoStick XL', b: 'JBL', c: 'מזון דגים טורפים', d: 'מקלות מזון לציקלידים גדולים. פורמולת PRONOVO עם 15% חלבון מחרקים.', s: ['250 מ"ל', '1000 מ"ל'], img: 'https://www.jbl.de/images/product/pronovo-stick-xl-1000ml.jpg' },
    { n: 'Sera Arowana', b: 'Sera', c: 'מזון דגים טורפים', d: 'מזון ייעודי לדגי ארוונה ודגים טורפים עליונים. מקלות צפים גדולים.', s: ['250 מ"ל', '1000 מ"ל'], img: 'https://www.sera.de/media/image/product/sera-arowana-1000ml.jpg' },
    { n: 'מזון חי — ארטמיה', b: 'מגוון', c: 'מזון דגים טורפים', d: 'שרימפס ארטמיה חי/קפוא — מקור חלבון טבעי מעולה לכל סוגי הדגים.', s: [], img: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&q=80' },
    { n: 'מזון קפוא — תולעי דם', b: 'מגוון', c: 'מזון דגים טורפים', d: 'תולעי דם (בלאדוורם) קפואים — חטיף חלבוני אהוב על רוב הדגים.', s: [], img: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&q=80' },

    // === מזון דגי בריכה ===
    { n: 'Tetra Pond Sticks', b: 'Tetra', c: 'מזון דגי בריכה', d: 'מקלות מזון צפים לדגי בריכה (קוי, דגי זהב). פורמולה מאוזנת.', s: ['1 ליטר', '4 ליטר', '10 ליטר'], img: 'https://www.tetra.net/medias/tetra-pond-sticks-1l-T735-front.png' },
    { n: 'Tetra Pond Koi Sticks', b: 'Tetra', c: 'מזון דגי בריכה', d: 'מזון ייעודי לדגי קוי. מקלות צפים עם חלבון גבוה ומועשר בצבעים.', s: ['1 ליטר', '4 ליטר', '10 ליטר'], img: 'https://www.tetra.net/medias/tetra-pond-koi-sticks-1l-T757-front.png' },
    { n: 'Tetra Goldfish', b: 'Tetra', c: 'מזון דגי בריכה', d: 'מזון בפתיתים לדגי זהב. פורמולה מותאמת עם מרכיבי צבע.', s: ['100 מ"ל', '250 מ"ל', '1000 מ"ל'], img: 'https://www.tetra.net/medias/tetra-goldfish-100ml-T183-front.png' },
    { n: 'Sera Pond Mix Royal', b: 'Sera', c: 'מזון דגי בריכה', d: 'תערובת מזון מגוונת לכל דגי הבריכה. מקלות, פתיתים וגרנולות.', s: ['1 ליטר', '3 ליטר', '10 ליטר'], img: 'https://www.sera.de/media/image/product/sera-pond-mix-royal-3800ml.jpg' },
    { n: 'Sera KOI Professional', b: 'Sera', c: 'מזון דגי בריכה', d: 'מזון פרמיום גרמני לדגי קוי. טכנולוגיית עיבוד ייחודית ששומרת על ויטמינים.', s: ['500 גרם', '2.2 ק"ג', '7 ק"ג'], img: 'https://www.sera.de/media/image/product/sera-koi-professional-2200g.jpg' },
    { n: 'JBL Pond Sticks', b: 'JBL', c: 'מזון דגי בריכה', d: 'מקלות מזון לדגי בריכה. פורמולת PRONOVO עם חלבון מחרקים.', s: ['1 ליטר', '5 ליטר', '10.5 ליטר'], img: 'https://www.jbl.de/images/product/pronovo-pond-sticks-m-5500ml.jpg' },

    // === טיפול במים ===
    { n: 'Tetra AquaSafe', b: 'Tetra', c: 'טיפול במים', d: 'מנטרל כלור ומתכות כבדות ממי ברז. הופך מי ברז למים בטוחים לדגים תוך שניות.', s: ['100 מ"ל', '250 מ"ל', '500 מ"ל'], img: 'https://www.tetra.net/medias/tetra-aquasafe-250ml-T762-front.png' },
    { n: 'Sera Aquatan', b: 'Sera', c: 'טיפול במים', d: 'מנטרל כלור, כלורמין ומתכות כבדות. מוסיף קרום מגן על עור הדגים.', s: ['100 מ"ל', '250 מ"ל', '500 מ"ל'], img: 'https://www.sera.de/media/image/product/sera-aquatan-250ml.jpg' },
    { n: 'JBL Biotopol', b: 'JBL', c: 'טיפול במים', d: 'מתקן מים לאקווריום. מנטרל כלור ומתכות כבדות, מוסיף קרום מגן.', s: ['100 מ"ל', '250 מ"ל', '500 מ"ל'], img: 'https://www.jbl.de/images/product/jbl-biotopol-250ml.jpg' },
    { n: 'Sera Bio Nitrivec', b: 'Sera', c: 'טיפול במים', d: 'חיידקים חיים להפעלת הפילטר הביולוגי. מפרק אמוניה וניטריט.', s: ['100 מ"ל', '250 מ"ל'], img: 'https://www.sera.de/media/image/product/sera-bio-nitrivec-250ml.jpg' },
    { n: 'Tetra SafeStart', b: 'Tetra', c: 'טיפול במים', d: 'חיידקי נטרוספירה חיים — מאפשר הכנסת דגים מיידית לאקווריום חדש.', s: ['50 מ"ל', '100 מ"ל', '250 מ"ל'], img: 'https://www.tetra.net/medias/tetra-safestart-100ml-T763-front.png' },
    { n: 'Sera pH/KH Minus', b: 'Sera', c: 'טיפול במים', d: 'מוריד pH וקשיות קרבונטית. לדגים טרופיים הדורשים מים רכים.', s: ['100 מ"ל', '250 מ"ל'], img: 'https://www.sera.de/media/image/product/sera-ph-kh-minus-250ml.jpg' },
    { n: 'ערכת בדיקת מים', b: 'מגוון', c: 'טיפול במים', d: 'ערכת בדיקה לפרמטרים חיוניים: pH, אמוניה, ניטריט, ניטראט ו-KH.', s: [], img: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=400&q=80' },

    // === ציוד ואקווריומים ===
    { n: 'אקווריומים מוכנים', b: 'מגוון', c: 'ציוד ואקווריומים', d: 'אקווריומים מזכוכית במגוון גדלים (20-500 ליטר). חלקם כמערכת שלמה עם פילטר, תאורה ומחמם.', s: ['20 ליטר', '60 ליטר', '120 ליטר', '200+ ליטר'], img: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=400&q=80' },
    { n: 'פילטר פנימי', b: 'מגוון', c: 'ציוד ואקווריומים', d: 'פילטרים פנימיים לאקווריומים קטנים ובינוניים. סינון מכני וביולוגי.', s: [], img: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=400&q=80' },
    { n: 'פילטר חיצוני', b: 'מגוון', c: 'ציוד ואקווריומים', d: 'פילטרים חיצוניים (קניסטר) לאקווריומים בינוניים וגדולים. סינון רב-שלבי.', s: [], img: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=400&q=80' },
    { n: 'מחממי מים', b: 'מגוון', c: 'ציוד ואקווריומים', d: 'מחממי מים עם תרמוסטט מובנה. שומרים על טמפרטורה קבועה (24-28°C).', s: ['25W', '50W', '100W', '200W', '300W'], img: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=400&q=80' },
    { n: 'תאורת LED לאקווריום', b: 'מגוון', c: 'ציוד ואקווריומים', d: 'פסי תאורת LED מותאמים לאקווריום. ספקטרום מלא לצמחים חיים.', s: [], img: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=400&q=80' },
    { n: 'משאבות אוויר', b: 'מגוון', c: 'ציוד ואקווריומים', d: 'משאבות אוויר לחמצון האקווריום. שקטות ואמינות.', s: [], img: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=400&q=80' },

    // === אביזרים ועיצוב ===
    { n: 'צמחים מלאכותיים', b: 'מגוון', c: 'אביזרים ועיצוב', d: 'צמחים מלאכותיים לאקווריום במגוון גדלים וצבעים. בטוחים לדגים.', s: [], img: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=400&q=80' },
    { n: 'סלעים ושורשים', b: 'מגוון', c: 'אביזרים ועיצוב', d: 'סלעים טבעיים ושורשי עץ. ליצירת אקווסקייפ טבעי ומרהיב.', s: [], img: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=400&q=80' },
    { n: 'חצץ וחול', b: 'מגוון', c: 'אביזרים ועיצוב', d: 'מצעים לאקווריום — חצץ טבעי, חול קוורץ, אדמת שתילה.', s: ['2.5 ק"ג', '5 ק"ג', '10 ק"ג'], img: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=400&q=80' },
    { n: 'קישוטים ומסתורים', b: 'מגוון', c: 'אביזרים ועיצוב', d: 'קישוטים, מערות ומסתורים. מקומות מחבוא לדגים.', s: [], img: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=400&q=80' },
    { n: 'רקע לאקווריום', b: 'מגוון', c: 'אביזרים ועיצוב', d: 'רקעים מודפסים ותלת-ממדיים לאקווריום.', s: [], img: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=400&q=80' },
    { n: 'רשתות ואביזרי תחזוקה', b: 'מגוון', c: 'אביזרים ועיצוב', d: 'רשתות דגים, מגבי אצות, שואבי חצץ וציוד תחזוקה.', s: [], img: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=400&q=80' },
  ],
};

export const BRANDS = [
  { t: 'בעלי חיים', b: ['Royal Canin', 'Purina Pro Plan', 'Friskies', 'Monge', 'Josera', "Hill's", 'Ambrosia', 'Ever Clean', 'Medioni', 'AlphaDog'] },
  { t: 'אקווטיקה', b: ['Tetra', 'Sera', 'JBL', 'Tropical'] },
  { t: 'משתלה', b: ['ירוק לבן', 'Dorgan', 'דשנית'] },
];

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
