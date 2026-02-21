import lizardImg from '@/assets/lizard.jpg';
import aquaFishImg from '@/assets/aqua-fish.png';
import fishOrnamentalImg from '@/assets/fish-ornamental.png';
import fishPredatorImg from '@/assets/fish-predator.png';
import fishPondImg from '@/assets/fish-pond.png';
import nurseryHeroImg from '@/assets/nursery-hero.png';

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
  nurseryHero: nurseryHeroImg,
};

export interface Product { n: string; b: string; c: string; d: string; s: string[]; img?: string; }
export interface NurseryProduct { n: string; b: string; d: string; s?: string[]; img?: string; }
export interface AnimalSub { id: string; name: string; color: string; img: string; }
export interface NurseryCategory { id: string; name: string; d: string; img: string; tag: string; }
export interface AquaticFish { n: string; d: string; img: string; }
export interface AquaticEquipment { n: string; d: string; cat?: string; }
export interface NurseryArticle { title: string; desc: string; img: string; content: string; link?: string; }

export const NURSERY_ARTICLES: NurseryArticle[] = [
  {
    title: "כיצד שותלים?",
    desc: "סדר פעולות לשתילה נכונה בגינה, הכנת הקרקע וטיפול ראשוני.",
    img: "https://yarok-lavan.co.il/wp-content/uploads/2026/01/%D7%90%D7%9E%D7%A0%D7%95%D7%9F-%D7%95%D7%AA%D7%9E%D7%A8-%D7%A0%D7%A0%D7%A1%D7%99-3-1024x576.jpg",
    content: "שתילה נכונה היא הבסיס לכל צמח בריא. שלב ראשון: חפרו בור הגדול פי 1.5 מגוש השורשים של הצמח. שלב שני: ערבבו את האדמה שהוצאתם עם קומפוסט איכותי (יחס של 1:3 לטובת האדמה). שלב שלישי: שחררו בעדינות את שורשי הצמח לפני ההכנסה לבור כדי לעודד צימוח החוצה. כסו באדמה, הדקו קלות, והשקו בהצפה מיד לאחר השתילה כדי להוציא כיסי אוויר."
  },
  {
    title: "גידול גרניום",
    desc: "הצמח החסכוני ביותר במים. כל הסודות לגידול מוצלח ופריחה שופעת.",
    img: "https://yarok-lavan.co.il/wp-content/uploads/2026/01/%D7%92%D7%A8%D7%A0%D7%99%D7%95%D7%9D-%D7%96%D7%A7%D7%95%D7%A3-%D7%9C%D7%99%D7%A6%D7%99-1024x768.jpg",
    content: "הגרניום (פלרגוניום) הוא מלך הגינה הישראלית, ויש לו חוק אחד חשוב: הוא שונא עודף מים. השקו רק כשהשכבה העליונה של האדמה יבשה לחלוטין. כדי לעודד פריחה שופעת לאורך כל השנה, הקפידו לגזום פרחים נבולים ברגע שהם מסיימים לפרוח. דשנו בדשן עשיר באשלגן אחת לשבועיים בעונת הלבלוב."
  },
  {
    title: "תכנון גינת תבלינים",
    desc: "איך לתכנן גינת תבלינים דקורטיבית, שילוב ריחות ותכונות מרפא.",
    img: "https://yarok-lavan.co.il/wp-content/uploads/2026/01/%D7%97%D7%A1%D7%94-%D7%A1%D7%9C%D7%A0%D7%95%D7%91%D7%94-1-1024x768.jpg",
    content: "גינת תבלינים מוצלחת דורשת חלוקה לאזורי השקיה. אל תשתלו רוזמרין ולבנדר (חסכוניים במים) באותה אדנית עם נענע ובזיליקום (אוהבי מים). תנו לנענע עציץ משלה — היא משתלטת באגרסיביות על שורשים של צמחים אחרים. הקפידו על שמש מלאה לרוב התבלינים."
  },
  {
    title: "איך לא להרוג צמחי בית?",
    desc: "מדריך פשוט למתחילים — השקיה נכונה, תאורה וטעויות נפוצות.",
    img: "https://yarok-lavan.co.il/wp-content/uploads/2026/01/%D7%A4%D7%95%D7%98%D7%95%D7%A1-2-1024x768.jpg",
    content: "הסיבה מספר אחת למוות של צמחי בית היא השקיית יתר, שגורמת לריקבון שורשים. חוק האצבע: עדיף לייבש קצת מאשר להציף. בדקו עם האצבע בעומק 3 ס\"מ — אם לח, אל תשקו. רוב צמחי הבית צריכים אור בהיר אך לא שמש ישירה שעלולה לשרוף את העלים."
  }
];

export const ASUBS: AnimalSub[] = [
   { id: 'dogs', name: 'כלבים', color: '#009688', img: U.dog },
   { id: 'cats', name: 'חתולים', color: '#9c27b0', img: U.cat },
   { id: 'birds', name: 'ציפורים', color: '#ff9800', img: U.bird },
   { id: 'rodents', name: 'מכרסמים', color: '#e91e63', img: U.ham },
   { id: 'reptiles', name: 'זוחלים', color: '#4caf50', img: U.lizard },
];

export const AP: Record<string, { f: { b: string[]; c: string[] }; p: Product[] }> = {
  dogs: {
    f: { 
      b: ['Royal Canin', 'Purina Pro Plan', 'Monge', 'Josera', "Hill's", 'Ambrosia', 'AlphaDog', 'מגוון'], 
      c: ['מזון יבש', 'מזון רטוב', 'אביזרים', 'צעצועים', 'היגיינה וטיפוח'] 
    },
    p: [
      // מזון יבש
      { n: 'Royal Canin Mini Adult', b: 'Royal Canin', c: 'מזון יבש', d: 'מזון סופר פרמיום לכלבים קטנים מ-10 ק"ג.', s: ['2 ק"ג', '8 ק"ג'], img: 'https://cdn.royalcanin-weshare-online.io/rYBngGsBaxEApQ6FnBpy/v2/mini-ad-sd-bhn-packshot' },
      { n: 'Royal Canin Maxi Adult', b: 'Royal Canin', c: 'מזון יבש', d: 'מזון סופר פרמיום לכלבים גדולים לתמיכה במפרקים.', s: ['15 ק"ג'], img: 'https://cdn.royalcanin-weshare-online.io/C4BigGsBaxEApQ6FUhcP/v2/maxi-ad-sd-bhn-packshot' },
      { n: 'Royal Canin Medium Puppy', b: 'Royal Canin', c: 'מזון יבש', d: 'תזונה לגורי כלבים מגזע בינוני בתקופת הגדילה.', s: ['4 ק"ג', '15 ק"ג'], img: 'https://cdn.royalcanin-weshare-online.io/s4BjgGsBaxEApQ6F1hoP/v2/medium-puppy-bhn-packshot' },
      { n: 'Royal Canin French Bulldog Adult', b: 'Royal Canin', c: 'מזון יבש', d: 'מזון מותאם אישית לצרכים של בולדוג צרפתי.', s: ['3 ק"ג', '9 ק"ג'], img: 'https://cdn.royalcanin-weshare-online.io/s4BjgGsBaxEApQ6F1hoP/v2/medium-puppy-bhn-packshot' },
      { n: 'Pro Plan Adult Medium Chicken', b: 'Purina Pro Plan', c: 'מזון יבש', d: 'מזון מתקדם על בסיס עוף לכלבים בינוניים.', s: ['14 ק"ג'], img: 'https://www.purina.co.il/sites/default/files/styles/product_tile/public/2024-05/Pro%20Plan%20Medium%20Adult%20Chicken.png' },
      { n: 'Pro Plan Puppy Sensitive Skin', b: 'Purina Pro Plan', c: 'מזון יבש', d: 'מזון סלמון עשיר באומגה לגורים רגישים בעור.', s: ['12 ק"ג'], img: 'https://www.purina.co.il/sites/default/files/styles/product_tile/public/2024-05/Pro%20Plan%20Medium%20Adult%20Chicken.png' },
      { n: 'Monge All Breeds Salmon', b: 'Monge', c: 'מזון יבש', d: 'מזון סופר פרמיום איטלקי, מבוסס סלמון עשיר באומגה.', s: ['2.5 ק"ג', '12 ק"ג'], img: 'https://www.monge.com/wp-content/uploads/2023/04/monge-all-breeds-adult-salmon-rice.png' },
      { n: 'Monge Mini Adult Lamb', b: 'Monge', c: 'מזון יבש', d: 'כבש ואורז לגזעים קטנים, קל במיוחד לעיכול.', s: ['2.5 ק"ג', '7.5 ק"ג'], img: 'https://www.monge.com/wp-content/uploads/2023/04/monge-all-breeds-adult-salmon-rice.png' },
      { n: 'Josera Kids', b: 'Josera', c: 'מזון יבש', d: 'מזון גידול איכותי במיוחד לגזעים בינוניים וגדולים.', s: ['15 ק"ג'], img: 'https://www.josera.de/media/image/product/kids-dog.png' },
      { n: 'Josera Adult Balance', b: 'Josera', c: 'מזון יבש', d: 'מזון מופחת שומן לכלבים מבוגרים או פחות פעילים.', s: ['15 ק"ג'], img: 'https://www.josera.de/media/image/product/balance-dog.png' },
      { n: "Hill's Science Plan Large Breed", b: "Hill's", c: 'מזון יבש', d: "תזונה מדעית לכלבים מגזע גדול.", s: ['14 ק"ג'], img: 'https://www.hillspet.co.il/content/dam/cp-sites/hills/hills-pet/en_us/products/dog-food/sp-canine-adult-chicken-barley-dry.png' },
      { n: 'Ambrosia Grain Free Salmon', b: 'Ambrosia', c: 'מזון יבש', d: 'מזון הוליסטי ללא דגנים מבוסס סלמון טרי.', s: ['12 ק"ג'], img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80' },
      { n: 'AlphaDog Breeder Professional', b: 'AlphaDog', c: 'מזון יבש', d: 'שק חיסכון מקצועי ואיכותי למגדלים ופנסיונים.', s: ['22 ק"ג'], img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80' },
      // מזון רטוב
      { n: 'מעדן Monge עוף וירקות', b: 'Monge', c: 'מזון רטוב', d: 'שימורים סופר פרמיום חתוכים ברוטב.', s: ['400 גרם'], img: 'https://www.monge.com/wp-content/uploads/2023/04/monge-dog-grill-chicken.png' },
      { n: 'פאוצ` Royal Canin לכלבים קטנים', b: 'Royal Canin', c: 'מזון רטוב', d: 'נתחי בשר רכים לכלבים מגזע קטן.', s: ['85 גרם'], img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80' },
      // אביזרים
      { n: 'מיטה אורטופדית לכלב', b: 'מגוון', c: 'אביזרים', d: 'מיטה איכותית רחיצה לתמיכה מושלמת במפרקים.', s: ['M', 'L', 'XL'], img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&q=80' },
      { n: 'רתמת K9 מקצועית', b: 'מגוון', c: 'אביזרים', d: 'רתמה ארגונומית חזקה במיוחד לטיולים.', s: ['S', 'M', 'L'], img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80' },
      { n: 'רצועת הולכה נגללת (פלקסי)', b: 'מגוון', c: 'אביזרים', d: 'רצועה אוטומטית ארוכה המעניקה חופש תנועה.', s: ['5 מטר', '8 מטר'], img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80' },
      { n: 'קערת נירוסטה עם תחתית מונעת החלקה', b: 'מגוון', c: 'אביזרים', d: 'קערת אוכל/מים איכותית וקלה לניקוי.', s: ['בינוני', 'גדול'], img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80' },
      { n: 'כלוב טיסה תקינת IATA', b: 'מגוון', c: 'אביזרים', d: 'כלוב נשיאה קשיח ובטיחותי לטיסות ולרכב.', s: ['S', 'L', 'XXL'], img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&q=80' },
      // צעצועים
      { n: 'צעצוע קונג (KONG) מקורי', b: 'מגוון', c: 'צעצועים', d: 'צעצוע גומי עמיד במיוחד למילוי בחטיפים.', s: ['M', 'L', 'XL'], img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80' },
      { n: 'חבל משיכה דנטלי עבה', b: 'מגוון', c: 'צעצועים', d: 'חבל כותנה למשחקי משיכה ולניקוי שיניים טבעי.', s: [], img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&q=80' },
      { n: 'כדור מצפצף עמיד במיוחד', b: 'מגוון', c: 'צעצועים', d: 'כדור משחק מגומי קופצני עם צפצפה פנימית.', s: [], img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80' },
      // היגיינה וטיפוח
      { n: 'שמפו לכלבים לעור רגיש', b: 'מגוון', c: 'היגיינה וטיפוח', d: 'שמפו היפואלרגני מועשר באלוורה ושיבולת שועל.', s: ['500 מ"ל'], img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80' },
      { n: 'קולר נגד קרציות ופרעושים (סרסטו/סקליבור)', b: 'מגוון', c: 'היגיינה וטיפוח', d: 'הגנה היקפית לאורך חודשים נגד טפילים.', s: ['לכלב קטן', 'לכלב גדול'], img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80' },
      { n: 'פדים לאילוף גורים לעשיית צרכים', b: 'מגוון', c: 'היגיינה וטיפוח', d: 'משטחי החתלה סופגים עם חומר המושך את הגור.', s: ['30 יחידות'], img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&q=80' },
      { n: 'מברשת מתירה קשרים (פרמינטור)', b: 'מגוון', c: 'היגיינה וטיפוח', d: 'מברשת מקצועית להסרת פרווה מתה ודילול כפול.', s: [], img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80' }
    ]
  },
  cats: {
    f: { 
      b: ['Royal Canin', 'Purina Pro Plan', 'Friskies', 'Monge', 'Josera', "Hill's", 'Ambrosia', 'Ever Clean', 'מגוון'], 
      c: ['מזון יבש', 'מזון רטוב', 'חול', 'אביזרים', 'צעצועים', 'היגיינה וטיפוח'] 
    },
    p: [
      // מזון יבש
      { n: 'Royal Canin Sterilised 37', b: 'Royal Canin', c: 'מזון יבש', d: 'מזון מותאם לחתולים מסורסים לשמירה על משקל.', s: ['4 ק"ג', '10 ק"ג'], img: 'https://cdn.royalcanin-weshare-online.io/woDigGsBaxEApQ6FWhfg/v2/sterilised-37-fhn-packshot' },
      { n: 'Royal Canin Kitten', b: 'Royal Canin', c: 'מזון יבש', d: 'מעודד גדילה בריאה ומערכת עיכול חזקה לגורים.', s: ['4 ק"ג'], img: 'https://cdn.royalcanin-weshare-online.io/mIBigGsBaxEApQ6FVBf2/v2/kitten-fhn-packshot' },
      { n: 'Royal Canin Hairball Care', b: 'Royal Canin', c: 'מזון יבש', d: 'מפחית משמעותית היווצרות כדורי פרווה.', s: ['2 ק"ג', '4 ק"ג'], img: 'https://cdn.royalcanin-weshare-online.io/woDigGsBaxEApQ6FWhfg/v2/sterilised-37-fhn-packshot' },
      { n: 'Pro Plan Adult Cat Chicken', b: 'Purina Pro Plan', c: 'מזון יבש', d: 'תזונה מתקדמת התומכת בבריאות הכליות.', s: ['3 ק"ג', '10 ק"ג'], img: 'https://www.purina.co.il/sites/default/files/styles/product_tile/public/2024-05/Pro%20Plan%20Adult%20Cat%20Chicken.png' },
      { n: 'Pro Plan Delicate Turkey', b: 'Purina Pro Plan', c: 'מזון יבש', d: 'מזון על בסיס הודו לחתולים בעלי עיכול רגיש.', s: ['3 ק"ג'], img: 'https://www.purina.co.il/sites/default/files/styles/product_tile/public/2024-05/Pro%20Plan%20Adult%20Cat%20Chicken.png' },
      { n: 'Friskies Seafood Sensations', b: 'Friskies', c: 'מזון יבש', d: 'תערובת טעמי ים שחתולים פשוט טורפים.', s: ['10 ק"ג'], img: 'https://www.purina.co.il/sites/default/files/styles/product_tile/public/2024-05/Friskies%20Adult%20Cat.png' },
      { n: 'Friskies Meat Lovers', b: 'Friskies', c: 'מזון יבש', d: 'תערובת בשרים עשירה במיוחד לחתולי חצר ובית.', s: ['10 ק"ג'], img: 'https://www.purina.co.il/sites/default/files/styles/product_tile/public/2024-05/Friskies%20Adult%20Cat.png' },
      { n: 'Monge Cat Kitten', b: 'Monge', c: 'מזון יבש', d: 'סופר פרמיום איטלקי עשיר בחלבון לגורים.', s: ['1.5 ק"ג', '10 ק"ג'], img: 'https://www.monge.com/wp-content/uploads/2023/04/monge-cat-kitten.png' },
      { n: 'Josera Catelux', b: 'Josera', c: 'מזון יבש', d: 'מושלם לאניני טעם, מכיל סיבים המסייעים נגד פרווה.', s: ['10 ק"ג'], img: 'https://www.josera.de/media/image/product/catelux-cat.png' },
      { n: "Hill's Feline Adult", b: "Hill's", c: 'מזון יבש', d: "נוסחה מדויקת לאיזון מינרלים וחיזוק המערכת.", s: ['10 ק"ג'], img: 'https://www.hillspet.co.il/content/dam/cp-sites/hills/hills-pet/en_us/products/cat-food/sp-feline-adult-chicken-dry.png' },
      { n: 'Ambrosia Cat Turkey & Salmon', b: 'Ambrosia', c: 'מזון יבש', d: 'מזון הוליסטי ללא דגנים - הודו וסלמון.', s: ['5 ק"ג'], img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80' },
      // מזון רטוב
      { n: 'מעדני פאוצ` Pro Plan ברוטב', b: 'Purina Pro Plan', c: 'מזון רטוב', d: 'נתחים מובחרים לשמירה על רמות לחות בגוף החתול.', s: ['85 גרם x 12'], img: 'https://www.purina.co.il/sites/default/files/styles/product_tile/public/2024-05/Pro%20Plan%20Adult%20Cat%20Chicken.png' },
      { n: 'פחיות פנסי פיסט (Fancy Feast)', b: 'Friskies', c: 'מזון רטוב', d: 'פחיות גורמה פרימיום לחתולים פונקים במיוחד.', s: ['85 גרם'], img: 'https://www.purina.co.il/sites/default/files/styles/product_tile/public/2024-05/Friskies%20Adult%20Cat.png' },
      // חול
      { n: 'Ever Clean Extra Strong Clumping', b: 'Ever Clean', c: 'חול', d: 'חול מתגבש סופר-פרמיום עוצמתי נגד ריחות.', s: ['10 ליטר'], img: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400&q=80' },
      { n: 'Ever Clean Multiple Cat', b: 'Ever Clean', c: 'חול', d: 'התגבשות מהירה לבתים עם מספר חתולים.', s: ['10 ליטר'], img: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400&q=80' },
      { n: 'Ever Clean Lavender', b: 'Ever Clean', c: 'חול', d: 'חול מתגבש עם שחרור אקטיבי של ניחוח לבנדר.', s: ['10 ליטר'], img: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400&q=80' },
      { n: 'חול קריסטל סיליקה לחתול', b: 'מגוון', c: 'חול', d: 'סופח נוזלים באופן מוחלט, דורש החלפה רק פעם בחודש.', s: ['3.8 ליטר'], img: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400&q=80' },
      // אביזרים
      { n: 'עץ גירוד 3 קומות לחתול', b: 'מגוון', c: 'אביזרים', d: 'מתקן תעסוקה יציב, כולל בית מסתור ומשטחי סיזל.', s: [], img: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400&q=80' },
      { n: 'שירותים סגורים לחתול', b: 'מגוון', c: 'אביזרים', d: 'ארגז חול סגור למניעת פיזור חול וריחות בבית.', s: ['רגיל', 'ג' + 'מבו'], img: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400&q=80' },
      { n: 'מזרקת מים חשמלית', b: 'מגוון', c: 'אביזרים', d: 'מעודדת שתייה בעזרת מים זורמים ופילטר פחם.', s: ['2 ליטר'], img: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400&q=80' },
      // צעצועים
      { n: 'חכת משחק עם נוצות', b: 'מגוון', c: 'צעצועים', d: 'לעידוד אינסטינקט הציד ושריפת אנרגיה.', s: [], img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80' },
      { n: 'עכברי קטניפ', b: 'מגוון', c: 'צעצועים', d: 'מארז עכברי משחק ממולאים בצמח הקטניפ המשגע חתולים.', s: ['מארז 3'], img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80' },
      { n: 'לייזר לחתול', b: 'מגוון', c: 'צעצועים', d: 'צעצוע לייזר בטוח לתעסוקה מרובה.', s: [], img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80' },
      // היגיינה וטיפוח
      { n: 'שמפו ללא שטיפה לחתולים (קצף)', b: 'מגוון', c: 'היגיינה וטיפוח', d: 'לניקוי מהיר של הפרווה בלי להכניס את החתול למים.', s: ['200 מ"ל'], img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80' },
      { n: 'מסרק סליקר (Slicker)', b: 'מגוון', c: 'היגיינה וטיפוח', d: 'מברשת צפופה להוצאת פלומה תחתונה בחילופי עונות.', s: [], img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80' }
    ]
  },
  birds: {
    f: { 
      b: ['Medioni', 'מגוון'], 
      c: ['מזון', 'אביזרים', 'צעצועים'] 
    },
    p: [
      { n: 'מדיוניקס תוכונים', b: 'Medioni', c: 'מזון', d: 'תערובת זרעים מאוזנת ונקייה במיוחד.', s: ['1 ק"ג', '4 ק"ג', '20 ק"ג'], img: 'https://medioni.co.il/wp-content/uploads/2017/02/600-IMG_7877_%D7%AA%D7%95%D7%9B%D7%95%D7%A0%D7%99%D7%9D_1_%D7%A7%D7%92-300x300.jpg' },
      { n: 'מדיוניקס קוקטיל', b: 'Medioni', c: 'מזון', d: 'תערובת עשירה לתוכים בינוניים וציפורי אהבה.', s: ['1 ק"ג', '4 ק"ג'], img: 'https://medioni.co.il/wp-content/uploads/2017/09/600-IMG_7873_%D7%A7%D7%95%D7%A7%D7%95%D7%98%D7%9C_1_%D7%A7%D7%92-300x300.jpg' },
      { n: 'מדיוניקס תוכים גדולים פרימיום', b: 'Medioni', c: 'מזון', d: 'תערובת כופתיות וגרעינים לג`אקו, ארה ואמזונה.', s: ['2 ק"ג', '15 ק"ג'], img: 'https://medioni.co.il/wp-content/uploads/2017/02/%D7%AA%D7%95%D7%9B%D7%99%D7%9D-%D7%92%D7%93%D7%95%D7%9C%D7%99%D7%9D-800-%D7%92%D7%A8%D7%9D-300x300.jpg' },
      { n: 'מדיוניקס פינקים וכנרים', b: 'Medioni', c: 'מזון', d: 'תערובת זרעים דקים לציפורי שיר.', s: ['1 ק"ג'], img: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&q=80' },
      { n: 'כלוב האכלה לתוכי גדול A11', b: 'מגוון', c: 'אביזרים', d: 'כלוב מתכת אל-חלד על גלגלים כולל כלי אוכל.', s: [], img: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&q=80' },
      { n: 'כלוב האכלה סטנדרטי', b: 'מגוון', c: 'אביזרים', d: 'כלוב פלסטיק ורשת לציפורי שיר או תוכונים.', s: [], img: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&q=80' },
      { n: 'אבן גיר / סבידה', b: 'מגוון', c: 'אביזרים', d: 'לאספקת סידן ושחיקת המקור.', s: [], img: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&q=80' },
      { n: 'נדנדה ומראות לכלוב', b: 'מגוון', c: 'צעצועים', d: 'אביזרי תעסוקה קלאסיים לתוכונים וציפורי אהבה.', s: [], img: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&q=80' },
      { n: 'צעצוע עץ צבעוני ללעיסה', b: 'מגוון', c: 'צעצועים', d: 'תלוי מראש הכלוב, מעסיק ומפתח את התוכי.', s: [], img: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&q=80' }
    ]
  },
  rodents: {
    f: { 
      b: ['Medioni', 'מגוון'], 
      c: ['מזון', 'אביזרים', 'מצעים', 'צעצועים'] 
    },
    p: [
      { n: 'מדיוניקס מכרסמים', b: 'Medioni', c: 'מזון', d: 'תערובת כופתיות וזרעים לארנבים, אוגרים ושרקנים.', s: ['1 ק"ג', '4 ק"ג'], img: 'https://medioni.co.il/wp-content/uploads/2017/02/%D7%9E%D7%9B%D7%A8%D7%A1%D7%9E%D7%99%D7%9D-1-%D7%A7%D7%92-%D7%97%D7%93%D7%A9-300x300.jpg' },
      { n: 'חציר אספסת (אלפלפא)', b: 'Medioni', c: 'מזון', d: 'חציר טרי החיוני לשחיקת שיניים ועיכול תקין.', s: ['1 ק"ג'], img: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&q=80' },
      { n: 'כופתיות פרימיום לארנבות', b: 'Medioni', c: 'מזון', d: 'כופתיות ירוקות מועשרות בויטמין C ללא זרעים.', s: ['3 ק"ג'], img: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&q=80' },
      { n: 'מצע שבבי עץ דחוסים', b: 'מגוון', c: 'מצעים', d: 'מצע טבעי למכרסמים, סופח ריחות מעולה.', s: ['15 ליטר', '60 ליטר'], img: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&q=80' },
      { n: 'מצע נייר אקולוגי', b: 'מגוון', c: 'מצעים', d: 'מצע רך במיוחד, ללא אבק, מעולה לאוגרים וארנבות ננסיות.', s: ['10 ליטר'], img: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&q=80' },
      { n: 'כלוב לאוגרים 3 קומות', b: 'מגוון', c: 'אביזרים', d: 'כלוב מרווח הכולל גלגל ריצה, קערת אוכל ומנהרות.', s: [], img: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&q=80' },
      { n: 'כלוב לארנב/שרקן 80 ס"מ', b: 'מגוון', c: 'אביזרים', d: 'כלוב מרווח ונוח לניקוי.', s: [], img: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&q=80' },
      { n: 'גלגל ריצה שקט', b: 'מגוון', c: 'צעצועים', d: 'גלגל בטיחותי לאוגרים, לא חורק בלילה.', s: [], img: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&q=80' },
      { n: 'מקלות עץ תפוח לכרסום', b: 'מגוון', c: 'צעצועים', d: 'ענפים טבעיים למניעת גדילת יתר של השיניים.', s: [], img: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&q=80' }
    ]
  },
  reptiles: {
    f: { 
      b: ['מגוון', 'Tetra'], 
      c: ['מזון', 'אביזרים', 'היגיינה וטיפוח'] 
    },
    p: [
      { n: 'Tetra ReptoMin', b: 'Tetra', c: 'מזון', d: 'מקלות צפים עשירים בסידן ווויטמינים לצבי מים.', s: ['250 מ"ל', '1000 מ"ל'], img: 'https://www.tetra.net/medias/tetra-reptomin-100ml-T372-front.png' },
      { n: 'תולעי קמח מיובשות', b: 'מגוון', c: 'מזון', d: 'חטיף חלבון איכותי לזוחלים וקיפודים.', s: ['100 גרם'], img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80' },
      { n: 'טרריום זכוכית מאובזר', b: 'מגוון', c: 'אביזרים', d: 'טרריום לזוחלים כולל אוורור והכנה למנורות חימום.', s: ['45x45x60 ס"מ', '60x45x45 ס"מ'], img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80' },
      { n: 'נורת חימום UVB', b: 'מגוון', c: 'אביזרים', d: 'נורה חיונית לספיגת סידן ובריאות זוחלי מדבר ויער.', s: ['100W', '150W'], img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80' },
      { n: 'שטיח חימום לטרריום', b: 'מגוון', c: 'אביזרים', d: 'חימום רצפתי בטוח לזוחלים האוהבים חום בטן (כמו נחשים).', s: ['14W', '20W'], img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80' },
      { n: 'מצע קוקוס לזוחלים', b: 'מגוון', c: 'אביזרים', d: 'מצע טבעי השומר על אחוזי לחות גבוהים בטרריום.', s: ['10 ליטר'], img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80' },
      { n: 'מערת מסתור דמוית סלע', b: 'מגוון', c: 'אביזרים', d: 'מקום מסתור הכרחי להורדת סטרס אצל זוחלים.', s: ['M', 'L'], img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80' }
    ]
  }
};
export const AQ_PRODUCTS: { f: { b: string[]; c: string[] }; p: Product[] } = {
  f: {
    b: ['Tetra', 'Sera', 'JBL', 'Tropical', 'מגוון'],
    c: ['מזון דגי נוי', 'מזון דגים טורפים', 'טיפול במים', 'ציוד ואקווריומים', 'אביזרים ועיצוב']
  },
  p: [
    { n: 'Tetra Min פתיתים', b: 'Tetra', c: 'מזון דגי נוי', d: 'מזון בסיסי בפתיתים לכל דגי הנוי הטרופיים בגידול קהילתי.', s: ['250 מ"ל', '1000 מ"ל'], img: 'https://www.tetra.net/medias/tetra-min-100ml-T269-front.png' },
    { n: 'Tetra Color XL', b: 'Tetra', c: 'מזון דגי נוי', d: 'מזון לשיפור צבע לדגים גדולים ובינוניים.', s: ['500 מ"ל'], img: 'https://www.tetra.net/medias/tetra-min-100ml-T269-front.png' },
    { n: 'Sera Vipan Nature', b: 'Sera', c: 'מזון דגי נוי', d: 'מזון פרימיום, ללא צבעי מאכל מלאכותיים.', s: ['250 מ"ל'], img: 'https://www.sera.de/media/image/product/sera-vipan-nature-250ml.jpg' },
    { n: 'Tropical Guppy', b: 'Tropical', c: 'מזון דגי נוי', d: 'מזון ייעודי עשיר בספירולינה לדגי גופי.', s: ['250 מ"ל'], img: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=400&q=80' },
    { n: 'Tetra Cichlid Sticks', b: 'Tetra', c: 'מזון דגים טורפים', d: 'מקלות צפים מלאים בחלבון לציקלידים ואוסקרים.', s: ['500 מ"ל', '1000 מ"ל'], img: 'https://www.tetra.net/medias/tetra-cichlid-sticks-250ml-T198-front.png' },
    { n: 'JBL NovoStick M', b: 'JBL', c: 'מזון דגים טורפים', d: 'מזון מקלות מבוסס דגים לציקלידים טורפים.', s: ['1000 מ"ל'], img: 'https://www.jbl.de/images/product/jbl-novostick-m.jpg' },
    { n: 'Tetra AquaSafe', b: 'Tetra', c: 'טיפול במים', d: 'חובה בכל החלפת מים - מנטרל כלור ומתכות כבדות.', s: ['250 מ"ל', '500 מ"ל'], img: 'https://www.tetra.net/medias/tetra-aquasafe-250ml-T762-front.png' },
    { n: 'Sera Bio Nitrivec', b: 'Sera', c: 'טיפול במים', d: 'מיליוני חיידקים חיים להתנעת אקווריום ולמים צלולים.', s: ['250 מ"ל'], img: 'https://www.sera.de/media/image/product/sera-bio-nitrivec-250ml.jpg' },
    { n: 'אקווריום פנורמי זכוכית עבה', b: 'מגוון', c: 'ציוד ואקווריומים', d: 'אקווריום מעוצב כולל תאורת LED חסכונית ופילטר פנימי.', s: ['60 ליטר', '100 ליטר'], img: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=400&q=80' },
    { n: 'פילטר חיצוני מפל', b: 'מגוון', c: 'ציוד ואקווריומים', d: 'פילטר שקט במיוחד עם ספוגים ביולוגיים ופחם פעיל.', s: ['עד 80 ליטר'], img: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=400&q=80' },
    { n: 'JBL ProTemp S', b: 'JBL', c: 'ציוד ואקווריומים', d: 'גוף חימום טרמוסטטי מדויק, עמיד בזעזועים.', s: ['100W', '200W'], img: 'https://www.jbl.de/images/product/jbl-protemp-s-100.jpg' },
    { n: 'סלעי דרקון', b: 'מגוון', c: 'אביזרים ועיצוב', d: 'סלעים טבעיים מחוררים לעיצוב אקווריומי צמחיה.', s: ['לפי משקל'], img: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=400&q=80' }
  ],
};

export const BRANDS = [
  { t: 'בעלי חיים', b: ['Royal Canin', 'Purina Pro Plan', 'Friskies', 'Monge', 'Josera', "Hill's", 'Ambrosia', 'Ever Clean', 'Medioni', 'AlphaDog'] },
  { t: 'אקווטיקה', b: ['Tetra', 'Sera', 'JBL', 'Tropical'] },
  { t: 'משתלה', b: ['ירוק לבן', 'Dorgan', 'דשנית'] },
];

export const NURSERY_FILTERS = {
  growth: ['מטפס', 'משתרע', 'נשפך', 'שיחי'],
  season: ['אביב', 'קיץ', 'סתיו', 'חורף', 'כל השנה'],
  water:  ['מעטה', 'רגילה', 'מרובה'],
  light:  ['מקום מואר', 'ללא קרינה ישירה', 'עוצמות אור נמוכות', 'שמש ישירה'],
};

export const NC: NurseryCategory[] = [
  { id: 'garden-winter', name: 'צמחי גן חורף', d: 'רקפת, אמנון ותמר, נרקיסים ועוד', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/01/%D7%A8%D7%A7%D7%A4%D7%AA-%D7%A4%D7%A8%D7%97-%D7%A2%D7%A0%D7%A7-8-1024x768.jpg', tag: 'חורף' },
  { id: 'garden-summer', name: 'צמחי גן קיץ', d: 'וינקה, פטוניה, לוע ארי ועוד', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/03/%D7%9C%D7%95%D7%A2-%D7%94%D7%90%D7%A8%D7%99-%D7%A0%D7%9E%D7%95%D7%9A-2-1-520x520.jpg', tag: 'קיץ' },
  { id: 'garden-yearly', name: 'צמחי גן כל השנה', d: 'גרניום, אגפנתוס, לבנדר ועוד', img: 'https://yarok-lavan.co.il/wp-content/uploads/2026/01/%D7%92%D7%A8%D7%A0%D7%99%D7%95%D7%9D-%D7%96%D7%A7%D7%95%D7%A3-%D7%9C%D7%99%D7%A6%D7%99-1024x768.jpg', tag: 'כל השנה' },
  { id: 'indoor-green', name: 'צמחי פנים וצל', d: 'פוטוס, מונסטרה, סנסווריה ועוד', img: 'https://yarok-lavan.co.il/wp-content/uploads/2026/01/%D7%A4%D7%95%D7%98%D7%95%D7%A1-2-1024x768.jpg', tag: 'בית' },
  { id: 'indoor-flowering', name: 'צמחי פנים פורחים', d: 'סחלב, אנטוריום, גוזמניה ועוד', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/03/%D7%91%D7%92%D7%95%D7%A0%D7%99%D7%94-%D7%A8%D7%A7%D7%A1-520x520.jpg', tag: 'בית' },
  { id: 'shrubs', name: 'שיחים ומטפסים', d: 'בוגונביליה, יסמין, היביסקוס ועוד', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/03/%D7%91%D7%95%D7%92%D7%95%D7%A0%D7%91%D7%99%D7%9C%D7%99%D7%94-2-520x520.jpg', tag: 'שיחים' },
  { id: 'herbs', name: 'תבלינים וירקות', d: 'בזיליקום, רוזמרין, נענע, חסה ועוד', img: 'https://yarok-lavan.co.il/wp-content/uploads/2026/01/%D7%97%D7%A1%D7%94-%D7%A1%D7%9C%D7%A0%D7%95%D7%91%D7%94-1-1024x768.jpg', tag: 'תבלינים' },
  { id: 'equipment', name: 'דשנים וציוד', d: 'תערובות שתילה, הומוס, עציצים ועוד', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', tag: 'ציוד' },
];

export const NP: Record<string, NurseryProduct[]> = {
  'garden-winter': [
    { n: 'אירוס כרתי', b: 'ירוק לבן', d: 'פרח חורף עדין בצבעי סגול וכחול.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20231317495690-400x300.jpg' },
    { n: 'אירוס ננסי', b: 'ירוק לבן', d: 'פקעת חורף נהדרת לגינה ולעציצים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2026/02/אירוס-ננסי-400x300.jpg' },
    { n: 'איריסימום', b: 'ירוק לבן', d: 'צמח פורח ומרשים לעונה הקרה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2026/02/איריסימום-2-400x300.jpg' },
    { n: 'אמנון ותמר- פרח חלק', b: 'ירוק לבן', d: 'פרח קלאסי לחורף, עמיד וקל לגידול.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20186131456429-400x300.jpg' },
    { n: 'אמנון ותמר- פרח מיוחד', b: 'ירוק לבן', d: 'פריחה בשלל צבעים עזים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20186131522434-400x300.jpg' },
    { n: 'אמנון ותמר- פרח ננסי', b: 'ירוק לבן', d: 'גרסה ננסית, מושלמת לאדניות ותיבות חלון.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20211223840573-400x300.jpg' },
    { n: 'אמנון ותמר- פרח ענק', b: 'ירוק לבן', d: 'פרחי ענק המקשטים כל גינה בעונה הקרה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/אמנון-ותמר-ענק-400x300.jpg' },
    { n: 'אסטר סיני', b: 'ירוק לבן', d: 'פרח חורפי פופולרי לערוגות בגינה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אסטר_בלגי3-400x300.jpg' },
    { n: 'אקווילגיה', b: 'ירוק לבן', d: 'פרח ייחודי בצורת פעמון לגינות חצי-צל.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/אקווילגיה-2-400x300.jpg' },
    { n: 'גודטיה', b: 'ירוק לבן', d: 'צמח גן עונתי ופורח.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/202412512371072-1-400x300.jpg' },
    { n: 'דיגיטליס', b: 'ירוק לבן', d: 'פרח זקוף וגבוה בגוונים עמוקים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/דיגיטליס_12-400x300.jpg' },
    { n: 'דלפיניום', b: 'ירוק לבן', d: 'צמח מלכותי לגינה עם פריחה תמירה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20198191062716-400x300.jpg' },
  ],
  'garden-summer': [
    { n: 'אבולבולוס', b: 'ירוק לבן', d: 'צמח משתרע פופולרי, מעולה לכיסוי שטח בקיץ.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אבולבולוס_37-400x300.jpg' },
    { n: 'אגרטום', b: 'ירוק לבן', d: 'צמח קיצי ננסי בצבעי סגול-כחול.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אגרטום-_סגול_32-400x300.jpg' },
    { n: 'איפומיאה (לפופית הבטטה)', b: 'ירוק לבן', d: 'צמח זוחל ומהמם ביופיו לעציצים ולאדניות.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20211223842771-400x300.jpg' },
    { n: 'אנגלוניה', b: 'ירוק לבן', d: 'פרח קיצי זקוף וחסון, פריחה ארוכה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/202412512132996-400x300.jpg' },
    { n: 'אפטניה', b: 'ירוק לבן', d: 'סוקולנט פורח, מצוין כצמח כיסוי לשמש.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אפטניה_32-400x300.jpg' },
    { n: 'אקמלה פיקאבו', b: 'ירוק לבן', d: 'פרח בצורת כפתור צהוב-כתום, ייחודי מאוד.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/2019411283942-400x300.jpg' },
    { n: 'בידנס (דושן)', b: 'ירוק לבן', d: 'פרח צהוב זוהר, פריחה שופעת במיוחד בקיץ.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/202412512324436-400x300.jpg' },
    { n: 'בקופה', b: 'ירוק לבן', d: 'צמח נשפך עדין ויפה, אידאלי לסלסלות תלויות.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בקופה_פרח_גדול-_לבן5-400x300.jpg' },
    { n: 'בשמת גינה', b: 'ירוק לבן', d: 'פרח צל מעולה, פריחה רציפה וחזקה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20198198541159-400x300.jpg' },
    { n: 'בשמת מוסיקה', b: 'ירוק לבן', d: 'זן מיוחד של בשמת, פריחה מהממת.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בשמת_מוסיקה3-400x300.jpg' },
    { n: 'בשמת ניו גינאה', b: 'ירוק לבן', d: 'בשמת בעלת עלים כהים ופרחים גדולים, סובלת חום טוב יותר.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בשמת_ניו_גניאה10-400x300.jpg' },
    { n: 'גומפרנה', b: 'ירוק לבן', d: 'פרח כדורי שומר על צבעו גם כשהוא מתייבש.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גומפרנה-_סגול_22-400x300.jpg' },
    { n: 'גזניה זוחלת', b: 'ירוק לבן', d: 'פרח שמש מובהק, עמיד במיוחד ליובש.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גזניה_זוחלת-_כסופה4-400x300.jpg' },
    { n: 'גזניה זקופה', b: 'ירוק לבן', d: 'פרח שמש צבעוני וזקוף, אידיאלי למסלעות.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/202112231003426-400x300.jpg' },
    { n: 'גיפסנית', b: 'ירוק לבן', d: 'פריחת ענן לבנה/ורודה, נהדרת כרקע בגינה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גיפסנית-_ורוד7-400x300.jpg' },
    { n: 'וינקה זוחלת', b: 'ירוק לבן', d: 'כיסוי קרקע פורח, סופר עמיד לחום הקיץ הישראלי.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/וינקה-זקופה-9-400x300.jpg' },
    { n: 'וינקה זקופה', b: 'ירוק לבן', d: 'פריחה שופעת ועמידה לשמש ישירה כל הקיץ.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201922112575682-400x300.jpg' },
    { n: 'וינקה מז`ור', b: 'ירוק לבן', d: 'זן חזק וגדול יותר של וינקה, בעל צימוח נמרץ.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/וינקה-מזור-מגוונת-2-400x300.jpg' },
    { n: 'ורבנה עונתית', b: 'ירוק לבן', d: 'פריחה יפהפייה באשכולות ססגוניים כל העונה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/ורבנה_עונתית4-400x300.jpg' },
  ],
  'garden-yearly': [
    { n: 'אגבה רכה', b: 'ירוק לבן', d: 'צמח בשרני חסכוני במים, מעולה למסלעות.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אגבה_רכה9-400x300.jpg' },
    { n: 'אגמון נטוי', b: 'ירוק לבן', d: 'צמח גדות מרשים וקלאסי לגינות נוי.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אגמון_נטוי4-400x300.jpg' },
    { n: 'אגפנתוס', b: 'ירוק לבן', d: 'רב-שנתי בעל פריחה כדורית בולטת על גבעול גבוה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אגפנתוס_35-400x300.jpg' },
    { n: 'אדמום עב גביע', b: 'ירוק לבן', d: 'צמח גן עמיד ומרשים במיוחד.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20232712113766-400x300.jpg' },
    { n: 'אדננטוס', b: 'ירוק לבן', d: 'צמח כיסוי שטיחי בעל גוון ירוק-אפרפר ייחודי.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אדננטוס4-400x300.jpg' },
    { n: 'אוזן ארי אפריקאי', b: 'ירוק לבן', d: 'שיח/צמח גן עם פריחה כתומה ייחודית בולטת.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201981818344887-400x300.jpg' },
    { n: 'אוזן דב', b: 'ירוק לבן', d: 'צמח בעל עלים כסופים רכים למגע.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אוזן_הדב_32-400x300.jpg' },
    { n: 'אוטומריה', b: 'ירוק לבן', d: 'פריחה ורודה בולטת ועדינה בגינה חצי-מוצלת.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אוטומריה-_ורוד6-400x300.jpg' },
    { n: 'אוכמניות', b: 'ירוק לבן', d: 'שתיל אוכמניות לגידול ביתי, מניב פרי טעים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2026/02/אוכמניות-400x300.jpg' },
    { n: 'איוגה (חד שפה)', b: 'ירוק לבן', d: 'צמח משתרע נהדר לכיסוי שטחים לחים ומוצלים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20231315311328-400x300.jpg' },
    { n: 'אירסין', b: 'ירוק לבן', d: 'צמח בעל עלווה אדומה מרשימה ובולטת.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/202112238463836-400x300.jpg' },
    { n: 'אכמנה סמיטי', b: 'ירוק לבן', d: 'צמח גינה יפהפה למגוון שימושים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אכמנה_סמיטי_22-400x300.jpg' },
    { n: 'אלוי פיירבירד', b: 'ירוק לבן', d: 'סוקולנט חסון מאוד, עמיד ליובש ומעולה לעציצים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2026/02/אלוי-פיירבירד-400x300.jpg' },
    { n: 'אלסטרומריה', b: 'ירוק לבן', d: 'פרח חתך מדהים בצבעיו שצומח נהדר גם בגינה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אלסטרומריה_22-400x300.jpg' },
    { n: 'אלפיניה', b: 'ירוק לבן', d: 'צמח טרופי חזק ומרשים שדורש השקיה רגילה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/202312320574149-400x300.jpg' },
    { n: 'אריופס (עינן מסרקני)', b: 'ירוק לבן', d: 'פרח צהוב דמוי חמנייה, פורח כמעט כל השנה ועמיד במיוחד.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20192211359174-400x300.jpg' },
    { n: 'ארכובית מקורקפת', b: 'ירוק לבן', d: 'צמח כיסוי עם פרחים כתומים-ורדרדים, מהיר צימוח.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/ארכובית_מקורקפת4-400x300.jpg' },
    { n: 'אשולציה קליפורנית', b: 'ירוק לבן', d: 'פרח בר צהוב-כתום מרהיב לחלקות שמש.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אשולציה_26-400x300.jpg' },
    { n: 'בולבין', b: 'ירוק לבן', d: 'סוקולנט בעל פריחה כתומה-צהובה עדינה וחסכוני במים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בולבין4-400x300.jpg' },
    { n: 'ביצן אדום (רחב עלים)', b: 'ירוק לבן', d: 'צמח בעל עלוות ארגמן בולטת, נהדר לשילוב גוונים בגינה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/ביצן_אדום4-400x300.jpg' },
    { n: 'ביצן אוסטרלי', b: 'ירוק לבן', d: 'צמח גן עמיד וצבעוני.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/ביצן_אוסטרלי9-400x300.jpg' },
    { n: 'ביצן מגוון', b: 'ירוק לבן', d: 'עלווה צבעונית בגוונים בהירים, מעולה לאדניות.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/2023261321238-400x300.jpg' },
    { n: 'ביצן רובי', b: 'ירוק לבן', d: 'צמח גינה בעל גוון אדום-רובי עמוק.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/ביצן_רובי_22-400x300.jpg' },
    { n: 'ביצן רובי ננסי', b: 'ירוק לבן', d: 'גרסה ננסית וקומפקטית לביצן רובי הקלאסי.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201931810474528-400x300.jpg' },
    { n: 'במבוק', b: 'ירוק לבן', d: 'צמח מהיר צימוח, מעולה ליצירת הסתרה וגדר חיה טבעית.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/במבוק15-400x300.jpg' },
    { n: 'בן אפר מכחיל', b: 'ירוק לבן', d: 'דגני כסוף-כחלחל שמוסיף מרקם ייחודי לגינה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בן_אפר_מכחיל4-400x300.jpg' },
    { n: 'ברגניה', b: 'ירוק לבן', d: 'צמח רב-שנתי עם עלים רחבים ופריחה ורודה מוקדמת.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/ברגניה_24-400x300.jpg' },
    { n: 'ברכיאנטה (פרח קש)', b: 'ירוק לבן', d: 'פרח מעניין ונוקשה ששומר על צורתו גם לאחר ייבוש.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/ברכיאנטה7-400x300.jpg' },
    { n: 'ברכיקומה', b: 'ירוק לבן', d: 'פרחים דמויי מרגנית קטנים בצבע סגול, צמח חזק.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/ברכיקומה_סגולה-_עלה_גדול4-400x300.jpg' },
    { n: 'בת חן', b: 'ירוק לבן', d: 'צמח גן פורח ומרשים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בת_חן4-400x300.jpg' },
    { n: 'גאורה', b: 'ירוק לבן', d: 'פרחים עדינים המרחפים על גבעולים ארוכים כמו פרפרים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גאורה-_ורוד_כהה_22-400x300.jpg' },
    { n: 'גיילרדיה', b: 'ירוק לבן', d: 'פרח שמש מרהיב בגווני צהוב, כתום ואדום.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20198198572375-400x300.jpg' },
    { n: 'געדה', b: 'ירוק לבן', d: 'צמח ים-תיכוני אפור-כסוף, עמיד ביותר ליובש.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/202071213125889-400x300.jpg' },
    { n: 'גרמית זקופה', b: 'ירוק לבן', d: 'פריחה ממושכת כל השנה בגוונים חמים, צמח עמיד וחזק.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/גרמית-3-400x300.jpg' },
    { n: 'גרניום בר (לוונדר לס)', b: 'ירוק לבן', d: 'זן ייחודי וחזק מאוד של גרניום לגינה טבעית.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/גרניום-בר-לוונדר-לס-2-400x300.jpg' },
    { n: 'גרניום ברמודה', b: 'ירוק לבן', d: 'גרניום פורח בעל צבעים בוהקים, מצוין לאדניות.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גרניום_ברמודה-_ורוד10-400x300.jpg' },
    { n: 'גרניום זוחל- וילה', b: 'ירוק לבן', d: 'זן זוחל מצוין לעציצים תלויים או כיסוי שטח.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גרניום_וילה_54-400x300.jpg' },
    { n: 'גרניום זוחל- פרח מלא', b: 'ירוק לבן', d: 'גרניום זוחל עם תפרחת כפולה ועשירה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גרניום_זוחל_22-400x300.jpg' },
    { n: 'גרניום זקוף', b: 'ירוק לבן', d: 'המלך של הגינה הישראלית. חסכוני במים ופורח רוב השנה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/גרניום-זקוף-4-400x300.jpg' },
    { n: 'גרניום זקוף- עלה חום צהוב (ונקובר)', b: 'ירוק לבן', d: 'זן בעל עלווה דקורטיבית בצבעי שלכת גם בקיץ.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גרניום_עלה_חום_צהוב9-400x300.jpg' },
    { n: 'גרניום זקוף- עלה מגוון', b: 'ירוק לבן', d: 'גרניום בעל עלים מגוונים המוסיפים חן ללא קשר לפריחה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/2019819991018-400x300.jpg' },
    { n: 'גרניום מיני צרפתי (אנג`ל אייז)', b: 'ירוק לבן', d: 'גרניום עדין וקטן פרחים, מרהיב ביופיו ויעיל במים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גרניום_מיני_צרפתי-_כתום8-400x300.jpg' },
    { n: 'גרניום צרפתי', b: 'ירוק לבן', d: 'פרחים גדולים ומרשימים במיוחד. פורח באביב ובקיץ.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גרניום_צרפתי-_זנים_עדכניים_34-400x300.jpg' },
    { n: 'דיאטס', b: 'ירוק לבן', d: 'צמח דמוי דגני עם פריחה לבנה-צהובה אלגנטית. קשוח ועמיד.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/2018102116385531-400x300.jpg' },
    { n: 'דיאנלה', b: 'ירוק לבן', d: 'צמח עלווה ירוק-לבן שמתאים גם כגבול לערוגות.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/דיאנלה-מגוונת-400x300.jpg' },
    { n: 'דיאסקיה', b: 'ירוק לבן', d: 'צמח נוי עדין ופורח.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/2023261344318-400x300.jpg' },
    { n: 'דיכונדרה ירוקה', b: 'ירוק לבן', d: 'תחליף דשא מצוין, משתרע בעל עלים עגולים קטנים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/דיכונדרה6-400x300.jpg' },
    { n: 'דיכונדרה כסופה', b: 'ירוק לבן', d: 'צמח נשפך מרהיב בעל עלים כסופים-אפורים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/דיכונדרה_כסופה7-400x300.jpg' },
    { n: 'דלוספרמה', b: 'ירוק לבן', d: 'סוקולנט משתרע, פורח בשלל צבעים זוהרים באור שמש.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/202112231019469-400x300.jpg' },
    { n: 'דליה הרלקווין', b: 'ירוק לבן', d: 'זן מיוחד של דליה, פריחה צבעונית ומרשימה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20193181053048-400x300.jpg' },
    { n: 'דליה רב שנתית', b: 'ירוק לבן', d: 'דליה קלאסית רב-שנתית, פריחה גדולה ועשירה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/דלינה-3-1-400x300.jpg' },
    { n: 'דלינה רב שנתית', b: 'ירוק לבן', d: 'צמח פורח יציב וחזק לגינה רב-שנתית.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20232613404026-400x300.jpg' },
    { n: 'הויכרה', b: 'ירוק לבן', d: 'מוכר בזכות עליו הצבעוניים בגווני ארגמן, סגול וירוק.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/tn_הויכרה10-400x300.jpg' },
    { n: 'הליוגין', b: 'ירוק לבן', d: 'צמח גינה עמיד ויפהפה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/2019122612585622-400x300.jpg' },
    { n: 'הליכריזיום אפור (דם המכבים)', b: 'ירוק לבן', d: 'צמח ארצישראלי קלאסי, עמיד במיוחד ליובש.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/הליכריזיום_אפור_24-400x300.jpg' },
    { n: 'המיגרפיס', b: 'ירוק לבן', d: 'עלווה כסופה-סגולה דקורטיבית. אוהב צל חלקי.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/המיגרפיס_24-400x300.jpg' },
    { n: 'המרוקליס', b: 'ירוק לבן', d: 'פרח יום מרהיב, כל פרח נפתח ליום אחד אך הפריחה רציפה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/2019911248815-400x300.jpg' },
    { n: 'וידליה', b: 'ירוק לבן', d: 'צמח משתרע בעל פרחים צהובים קטנים, נהדר ככיסוי קרקע.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20199112541469-400x300.jpg' },
    { n: 'ויטידיניה אוסטרלית', b: 'ירוק לבן', d: 'צמח כיסוי חזק ומהיר צימוח.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/202112231047193-400x300.jpg' },
    { n: 'ורבנה רב שנתית', b: 'ירוק לבן', d: 'צמח כיסוי קרקע אמין, פורח כל השנה בצבעים עזים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/ורבנה-רב-שנתית-400x300.jpg' },
    { n: 'זיף נוצה ארגמני', b: 'ירוק לבן', d: 'עשב נוי ארגמני מרשים שמוסיף תנועה לגינה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/2021122310574272-400x300.jpg' },
    { n: 'זיף נוצה זיפני', b: 'ירוק לבן', d: 'דגני יפהפה עם "זנבות" פריחה רכים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/זיף_נוצה4-400x300.jpg' },
    { n: 'זיף נוצה רחב עלים', b: 'ירוק לבן', d: 'זן דקורטיבי ורחב של זיף נוצה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/זיף_נוצה_רחב_עלים_ארגמני4-400x300.jpg' },
  ],
  'indoor-green': [
    { n: 'אגלונמה', b: 'ירוק לבן', d: 'צמח פנים קלאסי עם עלים מעוטרים, קל מאוד לגידול.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/אגלונמה-אדומה-2-400x300.jpg' },
    { n: 'אופרקוליקריה בונסאי', b: 'ירוק לבן', d: 'עץ בונסאי ייחודי עם גזע עבה, נהדר לעיצוב הבית.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אופרקוליקריה_בונסאי4-400x300.jpg' },
    { n: 'אלוקציה', b: 'ירוק לבן', d: 'צמח בעל עלי ענק מרשימים במיוחד, לגידול בתוך הבית או בצל.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/אלוקציה-עבת-שורש-2-400x300.jpg' },
    { n: 'בגוניה מנוקדת', b: 'ירוק לבן', d: 'בגוניה אקזוטית עם עלים ירוקים מנוקדים בלבן. כוכבת רשת.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בגוניה_עלים4-400x300.jpg' },
    { n: 'במבוק המזל', b: 'ירוק לבן', d: 'צמח שמביא מזל ואנרגיות טובות, קל ביותר לגידול בכלי מים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/במבוק-המזל-3-400x300.jpg' },
    { n: 'ברכיכיטון בונסאי', b: 'ירוק לבן', d: 'בונסאי עמיד עם גזע בקבוק דקורטיבי.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/ברכיטון-עץ-האהבה-400x300.jpg' },
    { n: 'ג`מייקה אינדיקה', b: 'ירוק לבן', d: 'צמח פנים עמיד וחזק עם עלווה מבריקה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/גמייקה-ירוקה-400x300.jpg' },
    { n: 'גינורה', b: 'ירוק לבן', d: 'צמח קטיפתי עם עלים סגולים, זקוק להרבה אור (לא ישיר).', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גינורה_22-400x300.jpg' },
    { n: 'דיפנבכיה', b: 'ירוק לבן', d: 'צמח פנים פופולרי עם עלים גדולים ומעוטרים בלבן/צהוב.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/דיפנבכיה-קמילה-400x300.jpg' },
    { n: 'דקל ארכיטופיניקס (טבעות)', b: 'ירוק לבן', d: 'דקל פנים מרשים ואלגנטי למראה טרופי בבית.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/דקל-ארכיטופיניקס-2-400x300.jpg' },
    { n: 'דקל ארקה', b: 'ירוק לבן', d: 'הדקל הנפוץ ביותר לגידול בתוך הבית, מטהר אוויר מצוין.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/דקל-ארקה-2-400x300.jpg' },
    { n: 'דקל חמדוריאה אלגנס', b: 'ירוק לבן', d: 'דקל פנים עדין ויפה שמתאים גם לפינות חשוכות יחסית.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/דקל-חמדוריאה-אלגנס-2-400x300.jpg' },
    { n: 'דקל חמדוריאה סייפריצי', b: 'ירוק לבן', d: 'דקל אידאלי לחללי משרד, עמיד וקל לתחזוקה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/דקל-חמדוריאה-סייפריצי-2-400x300.jpg' },
    { n: 'דקל קנציה', b: 'ירוק לבן', d: 'דקל הפרימיום של צמחי הבית, יוקרתי, חזק וירוק עד.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/דקל-קנציה-2-400x300.jpg' },
    { n: 'דקל רבניאה', b: 'ירוק לבן', d: 'דקל בעל עלים רכים ומראה אוורירי טרופי.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/דקל-רבניאה-2-400x300.jpg' },
    { n: 'היפואסטס', b: 'ירוק לבן', d: 'צמח קומפקטי עם עלים מנוקדים בוורוד, לבן או אדום.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/היפואסטס10-400x300.jpg' },
    { n: 'זית בונסאי', b: 'ירוק לבן', d: 'עץ זית ננסי מעוצב כבונסאי, מושלם לשולחן עבודה או מרפסת מוארת.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/זית-בונסאי-400x300.jpg' },
    { n: 'זמיקוקולוס', b: 'ירוק לבן', d: 'צמח ה"ברזל" של הבית, כמעט בלתי אפשרי להרוג אותו.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/זמיקוקולוס-3-400x300.jpg' },
    { n: 'זקן נחש', b: 'ירוק לבן', d: 'עשבוני ירוק עד, מתאים גם כצמח בית עמיד.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/זקן_נחש4-400x300.jpg' },
  ],
  'indoor-flowering': [
    { n: 'אזליאה', b: 'ירוק לבן', d: 'שיח פנים פורח בפרחים שופעים, דורש אזור מואר וקריר.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2026/02/אזליאה-400x300.jpg' },
    { n: 'אכמיאה', b: 'ירוק לבן', d: 'צמח טרופי ממשפחת הברומליים עם פרח ורוד מרשים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אכמיאה4-400x300.jpg' },
    { n: 'אמריליס', b: 'ירוק לבן', d: 'פקעת פורחת עם פרחים ענקיים ומרשימים במיוחד. מעולה כמתנה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/אמריליס-2-400x300.jpg' },
    { n: 'אנטוריום', b: 'ירוק לבן', d: 'מסמל שפע ואהבה. בעל פרחים אדומים מבריקים ופריחה ארוכה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/אנטוריום-3-400x300.jpg' },
    { n: 'אשיננטוס מונה ליזה', b: 'ירוק לבן', d: 'צמח תלוי נשפך בעל פרחים אדומים דמויי שפתון.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/202112239445529-400x300.jpg' },
    { n: 'בגוניה דראגון', b: 'ירוק לבן', d: 'בגוניה גדולה עם פריחה שופעת במיוחד, מצוינת לתוך הבית.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בגוניה_דרגון_22-400x300.jpg' },
    { n: 'בגוניה ורד', b: 'ירוק לבן', d: 'בגוניה בעלת פרחים כפולים יפהפיים המזכירים ורדים קטנים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/בגוניה-ורד-3-400x300.jpg' },
    { n: 'בגוניה ניטידיה', b: 'ירוק לבן', d: 'צמח פנים פורח המאיר כל פינה אפלולית בבית.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בגוניה_ניטידיה4-400x300.jpg' },
    { n: 'בגוניה ספרקלר', b: 'ירוק לבן', d: 'בגוניה עמידה וחסונה עם פריחה מתמדת.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בגוניה_ספרקלר-_ורוד2-400x300.jpg' },
    { n: 'בגוניה פורחת עד', b: 'ירוק לבן', d: 'ממשיכה לפרוח לאורך כל השנה, קלה לטיפול.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/בגוניה-פורחת-עד-400x300.jpg' },
    { n: 'בגוניה פורחת עד- פרח כפול', b: 'ירוק לבן', d: 'זן בעל פרחים מלאים ועשירים, תוספת צבע מושלמת לבית.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בגוניה_פורחת_עד-_פרח_כפול-_אדום_32-400x300.jpg' },
    { n: 'בת קלה', b: 'ירוק לבן', d: 'צמח אלגנטי בעל פרחים בצורת משפך (קאלה), קלאסי למתנות.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/קאלה_24-400x300.jpg' },
    { n: 'בת קלה צבעונית', b: 'ירוק לבן', d: 'גרסה צבעונית ומיוחדת לבת-קלה המסורתית.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20191071515830-400x300.jpg' },
    { n: 'בת שבע', b: 'ירוק לבן', d: 'צמח נשפך בעל פרחי שעווה ורודים בצורת כוכב, ריחני בלילה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/בת-שבע-400x300.jpg' },
    { n: 'גוזמניה', b: 'ירוק לבן', d: 'ברומליה בעלת פריחה כתומה/אדומה בוהקת שורדת חודשים ארוכים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/202412513261591-400x300.jpg' },
    { n: 'גרברה', b: 'ירוק לבן', d: 'פרח דמוי חרצית ענקית בצבעים משמחים, מצוין לתוך הבית המואר.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/2023261228185-400x300.jpg' },
    { n: 'הורטנזיה', b: 'ירוק לבן', d: 'שיח פנים בעל כדורי פריחה ענקיים בכחול, ורוד או לבן.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/הורטנזיה-2-400x300.jpg' },
    { n: 'וריסיאה חרב', b: 'ירוק לבן', d: 'ברומליה יפהפייה עם עמוד פריחה בצורת חרב פחוסה בצבעים חמים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/וריסיאה_חרב4-400x300.jpg' },
    { n: 'זיגוקקטוס', b: 'ירוק לבן', d: 'קקטוס יערות ללא קוצים שפורח בשיא החורף בורוד מרהיב.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/זיגו-קקטוס-3-400x300.jpg' },
  ],
  shrubs: [
    { n: 'אבוטילון', b: 'ירוק לבן', d: 'שיח גינה יפהפה עם פרחים המזכירים פעמונים סיניים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אבוטילון6-400x300.jpg' },
    { n: 'אבליה גדולת פרחים', b: 'ירוק לבן', d: 'שיח ירוק-עד חזק מאד עם פריחה לבנה-ורדרדה עדינה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201981818312072-400x300.jpg' },
    { n: 'אדניום (שושנת המדבר)', b: 'ירוק לבן', d: 'צמח אקזוטי עם גזע מעובה, זקוק להרבה שמש ומעט מים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201933113262697-400x300.jpg' },
    { n: 'אוג גלאוקה (מכחיל)', b: 'ירוק לבן', d: 'שיח צפוף המעולה ליצירת גדר חיה אטומה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20193311329244-400x300.jpg' },
    { n: 'אוג חרוק', b: 'ירוק לבן', d: 'שיח ירוק עד, חסון ועמיד במיוחד כגדר חיה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אוג_חרוק5-400x300.jpg' },
    { n: 'אוג חרוק מסולסל', b: 'ירוק לבן', d: 'וריאציה דקורטיבית עם עלים מעט מסולסלים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201933113312477-400x300.jpg' },
    { n: 'איקסורה', b: 'ירוק לבן', d: 'שיח בעל תפרחות כדוריות אדומות, זקוק לטמפרטורה חמימה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20231232115367-400x300.jpg' },
    { n: 'אלמון הודי', b: 'ירוק לבן', d: 'עץ נוי קטן/מטפס מדהים עם פריחה ורודה ואדמדמה משתנה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201962618204445-400x300.jpg' },
    { n: 'אלמנדה', b: 'ירוק לבן', d: 'מטפס/שיח טרופי עם פרחי פעמון צהובים וגדולים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201981818413825-400x300.jpg' },
    { n: 'אקליפה', b: 'ירוק לבן', d: 'שיח בעל עלים צבעוניים ויפים בגווני אדום ונחושת.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/202112238563154-400x300.jpg' },
    { n: 'אקליפה זנב חתול', b: 'ירוק לבן', d: 'שיח בעל תפרחות ארוכות דמויות זנב פלומתי ואדום.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2026/02/אקליפה-זנב-חתול-400x300.jpg' },
    { n: 'אקליפטוס כדורי', b: 'ירוק לבן', d: 'עץ בעל עלווה ריחנית אפרפרה, אהוב מאד לשזירת פרחים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20231415123639-400x300.jpg' },
    { n: 'ארליה זוגיים', b: 'ירוק לבן', d: 'שיח פנים וחוץ בעל עלים דקורטיביים גדולים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2026/02/ארלייה-זוגיים-שיח-2-400x300.jpg' },
    { n: 'בוגונביליה', b: 'ירוק לבן', d: 'שיח מטפס בעל פריחה מרהיבה ועזה, חסכוני מאוד במים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בוגונביליה_210-400x300.jpg' },
    { n: 'בוגונביליה גלברה', b: 'ירוק לבן', d: 'זן בוגונביליה חלק ללא קוצים גדולים, פריחה סגולה חזקה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בוגונביליה_גלברה_39-400x300.jpg' },
    { n: 'בוגונביליה תאילנדית', b: 'ירוק לבן', d: 'זן מיוחד מתאילנד עם פריחה כפולה וצפופה במיוחד.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20198198485732-400x300.jpg' },
    { n: 'בודליה דוד', b: 'ירוק לבן', d: 'ידוע כ"שיח הפרפרים", מושך המון פרפרים לגינה בקיץ.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20231415261086-400x300.jpg' },
    { n: 'ביגנוניה', b: 'ירוק לבן', d: 'מטפס חזק ועמיד בעל פרחים כתומים-אדומים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/ביגנוניה6-400x300.jpg' },
    { n: 'בן עוזרר הודי', b: 'ירוק לבן', d: 'שיח עמיד ביותר לחום הישראלי, פריחה ורדרדה אביבית.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201942215273817-400x300.jpg' },
    { n: 'בן עוזרר סוככני', b: 'ירוק לבן', d: 'שיח/עץ קטן נוח לעיצוב כסוכך.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201942215335854-400x300.jpg' },
    { n: 'ברהניה מושלגת', b: 'ירוק לבן', d: 'שיח המאופיין בעלווה בעלת גוון לבנבן דמוי שלג.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/ברהניה_מושלגת4-400x300.jpg' },
    { n: 'ברהניה ננסית', b: 'ירוק לבן', d: 'גרסה קטנה יותר של הברהניה, מתאימה גם לעציצים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/ברהניה_לבנה_ננסית2-400x300.jpg' },
    { n: 'ברונפלסיה', b: 'ירוק לבן', d: 'שיח משנה צבעים - הפרח נפתח סגול והופך ללבן. ריחני.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201942215392969-400x300.jpg' },
    { n: 'גפן', b: 'ירוק לבן', d: 'מטפס קלאסי המניב ענבים בקיץ ומעניק צל נהדר.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20198198591162-400x300.jpg' },
    { n: 'גפנית', b: 'ירוק לבן', d: 'מטפס נצמד קלאסי לחיפוי קירות, צבעי שלכת מרהיבים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/גפנית-שיח-2-400x300.jpg' },
    { n: 'גרדניה', b: 'ירוק לבן', d: 'שיח שדורש מעט פינוק אך מתגמל בפרחים לבנים בריח גן עדן.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גרדניה_24-400x300.jpg' },
    { n: 'גרדניה שיחית', b: 'ירוק לבן', d: 'גרסה שיחית גדולה יותר של הגרדניה היוקרתית.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גרדניה-_שיח4-400x300.jpg' },
    { n: 'גרוויליאה ברכיסטכיאה', b: 'ירוק לבן', d: 'שיח אוסטרלי חזק ועמיד ליובש עם פריחה אדמדמה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גרוויליאה_ברכיסטכיאה_22-400x300.jpg' },
    { n: 'גרוויליאה רובין גורדון', b: 'ירוק לבן', d: 'זן ספציפי של גרוויליאה בעל פרחים אדומים בולטים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גרוויליאה_רובין_גורדון4-400x300.jpg' },
    { n: 'דודונאה', b: 'ירוק לבן', d: 'שיח מהיר צימוח, מעולה כהסתרה או כגדר חיה קשוחה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20231914493465-400x300.jpg' },
    { n: 'דודונאה דנה', b: 'ירוק לבן', d: 'זן דודונאה בעל עלים מאדימים יפים בחורף.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20231914354442-400x300.jpg' },
    { n: 'דורנטה גולד אדג\'', b: 'ירוק לבן', d: 'דורנטה עם עלים המעוטרים בשוליים זהובים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/2023191504436-400x300.jpg' },
    { n: 'דורנטה גיישה גירל', b: 'ירוק לבן', d: 'שיח שפורח באשכולות סגולים כחולים רוב ימות השנה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/דורנטה_גיישה_גירל9-400x300.jpg' },
    { n: 'דורנטה מצויה', b: 'ירוק לבן', d: 'שיח גינה קלאסי שמתאים גם לגיזום כגדר חיה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/2019819933430-400x300.jpg' },
    { n: 'דורנטה תאילנדית', b: 'ירוק לבן', d: 'זן תאילנדי חזק ומהיר צימוח לגינה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/202112231015565-400x300.jpg' },
    { n: 'דיפלדניה סנדבילה', b: 'ירוק לבן', d: 'מטפס מדהים עם פריחה ורודה/אדומה גדולה בצורת פעמון.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/דיפלדניה-סנדבילה-3-400x300.jpg' },
    { n: 'דלקמפיה (פרפר סגול)', b: 'ירוק לבן', d: 'שיח מטפס קל, בעל חפים סגולים שמזכירים כנפי פרפר.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/פרפר_סגול_4-400x300.jpg' },
    { n: 'דק פרי- אורנג\'', b: 'ירוק לבן', d: 'שיח גדול/עץ קטן עם אשכולות פריחה כתומים עזים בקיץ.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20193311348407-400x300.jpg' },
    { n: 'דק פרי- זקוף', b: 'ירוק לבן', d: 'פרח צהוב זוהר, צמח קשוח במיוחד לתנאי שמש מלאה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/דק_פרי_זקוף7-400x300.jpg' },
    { n: 'דק פרי- טקומה גרוצ`ה', b: 'ירוק לבן', d: 'זן מעולה ועמיד של טקומה (דק פרי).', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/דק-פרי-טקומה-גרוצה-2-400x300.jpg' },
    { n: 'דרדר מאפיר', b: 'ירוק לבן', d: 'שיח ים-תיכוני אפרפר, עמיד בצורת ופורח בסגול.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/דרדר_מאפיר4-400x300.jpg' },
    { n: 'הדס טרנטיני', b: 'ירוק לבן', d: 'זן קומפקטי וצפוף של הדס. ריחני ומצוין לגיזום כדורי.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201933113524243-400x300.jpg' },
    { n: 'הדס טרנטיני מעוצב', b: 'ירוק לבן', d: 'הדס הגזום מראש לעיצוב נקי וגיאומטרי.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20191813563810-400x300.jpg' },
    { n: 'הדס מגוון', b: 'ירוק לבן', d: 'הדס קלאסי שעלליו מגוונים בשמנת וירוק.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/20193311354598-400x300.jpg' },
    { n: 'הדס מצוי', b: 'ירוק לבן', d: 'הצמח המסורתי והריחני, חזק מאד ומתאים לגינות בארץ.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/הדס_מצוי_24-400x300.jpg' },
    { n: 'הדרים ננסיים', b: 'ירוק לבן', d: 'עצי פרי הדר ננסיים, אידאליים לגידול במרפסת או בעציץ.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/הדרים_שונים_34-400x300.jpg' },
    { n: 'הורטנזיה שיחית', b: 'ירוק לבן', d: 'גרסת הגינה של ההורטנזיה, אוהבת צל חלקי ומים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201981910155740-400x300.jpg' },
    { n: 'היביסקוס סורי', b: 'ירוק לבן', d: 'שיח נשיר בחורף, פורח בקיץ בפריחה מרשימה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/היביסקוס_סורי_24-400x300.jpg' },
    { n: 'היביסקוס סיני', b: 'ירוק לבן', d: 'ההיביסקוס הטרופי הקלאסי בעל הפרחים הענקיים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/היביסקוס_סיני6-400x300.jpg' },
    { n: 'היביסקוס סיני מגוון (קופרי)', b: 'ירוק לבן', d: 'היביסקוס שבו אפילו העלים עצמם מגוונים וקישוטיים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/היביסקוס_סיני_מגוון_4-400x300.jpg' },
    { n: 'המליה', b: 'ירוק לבן', d: 'שיח עמיד מאד לחום עם פריחה כתומה-אדומה צינורית.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/המליה7-400x300.jpg' },
    { n: 'הרדוף הנחלים', b: 'ירוק לבן', d: 'שיח בר חסון בצורה קיצונית, רעיל למאכל אך פריחתו מרהיבה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/2021122310401555-400x300.jpg' },
    { n: 'הרדנברגיה', b: 'ירוק לבן', d: 'מטפס אוסטרלי עם אשכולות פריחה בצבע סגול עז בחורף.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/07/הרדנברגיה-סגול-2-400x300.jpg' },
    { n: 'ויסטריה סינית', b: 'ירוק לבן', d: 'מטפס מהסרטים, פורח באביב באשכולות סגולים נשפכים.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/ויסטריה_סינית_24-400x300.jpg' },
    { n: 'ורד', b: 'ירוק לבן', d: 'מלכת הגינה. שיחי ורדים במגוון צבעים לשתילה בשמש מלאה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/2021122310521072-400x300.jpg' },
    { n: 'ורד ענבר (ורד ננסי)', b: 'ירוק לבן', d: 'ורדים קומפקטיים המתאימים גם לעציצים ולמרפסות.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/202412513543246-400x300.jpg' },
  ],
  herbs: [
    { n: 'אורגנו', b: 'ירוק לבן', d: 'תבלין ים-תיכוני קלאסי לפיצות ורטבים. עמיד ביותר לשמש.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/אורגנו9-400x300.jpg' },
    { n: 'אורגנו נוי (קיריגמי)', b: 'ירוק לבן', d: 'אורגנו המגודל בזכות יופיו ופריחתו הייחודית.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/201981818381635-400x300.jpg' },
    { n: 'בזיל (ריחן)', b: 'ירוק לבן', d: 'מלך התבלינים האיטלקי, זקוק להשקיה טובה והרבה שמש.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בזיל_ירוק_28-400x300.jpg' },
    { n: 'בזיל מג`יק מאונטיין', b: 'ירוק לבן', d: 'בזיליקום סגול ומרשים שמוסיף צבע וטעם לכל סלט.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/בזיל_מגיק_מאונטיין-_סגול_25-400x300.jpg' },
    { n: 'גרגר הנחלים', b: 'ירוק לבן', d: 'עשב תיבול חריף-עדין, מצוין לסלטים. זקוק לאדמה לחה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/2019411015156-400x300.jpg' },
    { n: 'גרניום לימוני', b: 'ירוק לבן', d: 'מעולה לחליטות תה ולהרחקת יתושים טבעית.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/גרניום_לימוני_28-400x300.jpg' },
    { n: 'זוטא לבנה', b: 'ירוק לבן', d: 'צמח תה ישראלי מסורתי, עמיד ליובש ובעל ארומה מדהימה.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/זוטא_לבנה4-400x300.jpg' },
    { n: 'זעתר', b: 'ירוק לבן', d: 'הצמח שנותן את הטעם הארץ-ישראלי. חזק מאד.', img: 'https://yarok-lavan.co.il/wp-content/uploads/2025/06/זעתר_24-400x300.jpg' },
  ],
  equipment: [
    { n: 'דשן נוזלי לפריחה', b: 'Dorgan', d: 'מעודד פריחה עשירה וצבעונית. מוסיפים למי ההשקיה.', s: ['500 מ"ל', '1 ליטר'], img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80' },
    { n: 'דשן אוניברסלי', b: 'Dorgan', d: 'דשן כללי מאוזן לכל סוגי צמחי הבית והמרפסת.', s: ['500 מ"ל', '1 ליטר'], img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80' },
    { n: 'אדמה לעציצים מקצועית', b: 'מגוון', d: 'תערובת אדמה איכותית המכילה כבול ופרלייט לאוורור השורשים.', s: ['10 ליטר', '50 ליטר'], img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80' },
    { n: 'הומוס תולעים אדומות', b: 'דשנית', d: 'דשן אורגני איכותי במיוחד שמשפר את מרקם הקרקע.', s: ['5 ליטר', '20 ליטר'], img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80' },
    { n: 'טוף לחיפוי', b: 'מגוון', d: 'אבני טוף וולקני לחיפוי אדניות (שומר על לחות ומונע עשבים).', s: ['20 ליטר'], img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80' },
    { n: 'מערכת השקיה למרפסת', b: 'מגוון', d: 'ערכת טפטפות קומפלט כולל צינורות ומחברים.', s: [], img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80' },
    { n: 'כלי גינון', b: 'מגוון', d: 'ערכת כלי גינון קטנים (את, מגרפה קטנה, מזמרה).', s: [], img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80' },
  ]
};
