import { useState } from "react";
import {
  Dog, Cat, Bird, Fish, Waves,
  ShoppingCart, BookOpen, MessageCircle, Filter, Sprout, Cog, Wrench, Anchor,
} from "lucide-react";

import {
  U, ASUBS, AP, NC, NP, AQ_FISH, AQ_EQUIP, AQ_PRODUCTS,
  NURSERY_ARTICLES, NURSERY_FILTERS, ANIMAL_ARTICLES, AQUA_ARTICLES,
  FISHING_CATS, FISHING_ARTICLES, FISHING_BRANDS, FP, ANIMAL_SUB_ARTICLES,
  type Product, type NurseryProduct, type NurseryArticle,
} from "@/data/storeData";
import { Separator } from "@/components/ui/separator";
import ProductModal from "./ProductModal";

type View = "main" | "animals" | "animal-sub-choice" | "animal-sub" | "animal-sub-guides" | "nursery" | "nursery-sub" | "aquatics" | "aqua-products" | "aqua-fish-sub" | "fishing" | "fishing-sub";

const FILTER_LABELS: Record<string, string> = {
  growth: 'אופי צימוח',
  season: 'עונת פריחה',
  water: 'דרישות השקייה',
  light: 'תנאי תאורה',
};

type LucideIcon = typeof Dog;

const ANIMAL_ICON_MAP: Record<string, LucideIcon | undefined> = {
  dogs: Dog,
  cats: Cat,
  birds: Bird,
  // rodents & reptiles: no suitable Lucide icon → keep image-only
};

const FISHING_ICON_MAP: Record<string, LucideIcon | undefined> = {
  rods: Waves,
  reels: Cog,
  lines: Waves,
  'hooks-lures': Anchor,
  accessories: Wrench,
};

const Departments = () => {
  const [view, setView] = useState<View>("main");
  const [subId, setSubId] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [catFilter, setCatFilter] = useState("");
  const [modal, setModal] = useState<{ product: Product | NurseryProduct; type: "a" | "n" } | null>(null);
  const [articleModal, setArticleModal] = useState<NurseryArticle | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const isNurseryView = view === "nursery" || view === "nursery-sub";
  const isFishingView = view === "fishing" || view === "fishing-sub";

  const goMain = () => { setView("main"); setBrandFilter(""); setCatFilter(""); };

  const filteredProducts = () => {
    if (view === "animal-sub") {
      const data = AP[subId];
      if (!data) return [];
      return data.p.filter(
        (p) => (!brandFilter || p.b === brandFilter) && (!catFilter || p.c === catFilter)
      );
    }
    if (view === "aqua-products") {
      return AQ_PRODUCTS.p.filter(
        (p) => (!brandFilter || p.b === brandFilter) && (!catFilter || p.c === catFilter)
      );
    }
    if (view === "fishing-sub") {
      const data = FP[subId];
      if (!data) return [];
      return data.filter(
        (p) => (!brandFilter || p.b === brandFilter) && (!catFilter || p.c === catFilter)
      );
    }
    return [];
  };

  return (
    <section className="py-16 px-6 bg-bg-warm" id="departments">
      <div className="max-w-[1200px] mx-auto">

        {/* Section header — hidden inside nursery views */}
        {!isNurseryView && !isFishingView && (
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm tracking-wider mb-1.5">המחלקות שלנו</p>
            <h2 className="text-3xl font-bold text-primary-dark mb-2 font-rubik">ארבעה עולמות תחת קורת גג אחת</h2>
            <div className="w-14 h-[3px] bg-gradient-to-l from-primary to-secondary rounded-full mx-auto" />
          </div>
        )}

        {/* ── MAIN ───────────────────────────────────────────────── */}
        {view === "main" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { img: U.animals, title: "בעלי חיים", sub: "כלבים, חתולים, ציפורים, מכרסמים וזוחלים", onClick: () => setView("animals") },
              { img: U.aqua, title: "אקווטיקה", sub: "דגי נוי וטורפים, ציוד אקווריום", onClick: () => setView("aquatics") },
              { img: U.nursery, title: "משתלה", sub: "צמחים, דשנים, ציוד גינון — מעל 500 זנים", onClick: () => setView("nursery") },
              { img: U.fishing, title: "ציוד דייג", sub: "חכות, גלילים, חוטים, פתיונות ואביזרים", onClick: () => setView("fishing") },
            ].map((dept) => (
              <div
                key={dept.title}
                className="relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3] group hover:-translate-y-1.5 hover:shadow-elevated transition-all duration-300"
                onClick={dept.onClick}
              >
                <img src={dept.img} alt={dept.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-rubik text-2xl font-extrabold text-primary-foreground">{dept.title}</h3>
                  <p className="text-primary-foreground/80 text-sm mt-1">{dept.sub}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── ANIMALS ─────────────────────────────────────────────── */}
        {view === "animals" && (
          <div>
            <BackButton onClick={goMain} label="חזרה למחלקות" />
            <h3 className="text-2xl font-bold text-primary-dark text-center mb-2 font-rubik">בעלי חיים — בחרו מחלקה</h3>
            <div className="w-10 h-[3px] bg-primary rounded-full mx-auto mb-6" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {ASUBS.map((s) => {
                const AnimalIcon = ANIMAL_ICON_MAP[s.id];
                return (
                  <div
                    key={s.id}
                    className="relative rounded-lg overflow-hidden cursor-pointer aspect-square group hover:-translate-y-1 hover:shadow-elevated transition-all duration-300"
                    onClick={() => { setSubId(s.id); setView("animal-sub-choice"); setBrandFilter(""); setCatFilter(""); }}
                  >
                    <img src={s.img} alt={s.name} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110" />
                    <div className="absolute inset-0 opacity-55" style={{ background: s.color }} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                      {AnimalIcon && <AnimalIcon size={28} className="text-white drop-shadow-lg mx-auto mb-1" />}
                      <span className="font-rubik text-xl font-bold text-primary-foreground drop-shadow-lg">{s.name}</span>
                      <span className="text-sm text-primary-foreground/90 mt-1">{AP[s.id].p.length} מוצרים</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Professional articles section for animals */}
            <Separator className="my-10" />
            <div className="mb-6 text-center">
              <p className="text-primary font-semibold text-sm tracking-wider mb-1">מידע שימושי</p>
              <h4 className="text-2xl font-bold font-rubik text-primary-dark mb-2">דפי מידע לגידול נכון</h4>
              <div className="w-10 h-[3px] bg-primary rounded-full mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {ANIMAL_ARTICLES.map((article) => (
                <div
                  key={article.title}
                  onClick={() => setArticleModal(article)}
                  className="bg-card rounded-xl overflow-hidden border border-primary/15 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-soft transition-all duration-300 group flex flex-col cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 scale-[1.12] group-hover:scale-[1.18]"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h5 className="font-rubik font-bold text-primary-dark mb-1.5 leading-snug">{article.title}</h5>
                    <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{article.desc}</p>
                    <span className="mt-3 text-sm font-semibold text-primary inline-flex items-center gap-1 relative after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">
                      קרא עוד ←
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── ANIMAL SUB CHOICE (מוצרים / מדריכים) ─────────────────── */}
        {view === "animal-sub-choice" && (
          <div>
            <BackButton onClick={() => setView("animals")} label="חזרה לבעלי חיים" />
            <h3 className="text-2xl font-bold text-primary-dark text-center mb-2 font-rubik">
              {ASUBS.find((s) => s.id === subId)?.name}
            </h3>
            <div className="w-10 h-[3px] bg-primary rounded-full mx-auto mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg mx-auto">
              <div
                className="bg-card rounded-xl border-2 border-primary/20 hover:border-primary cursor-pointer p-8 text-center hover:-translate-y-1 hover:shadow-elevated transition-all duration-300 group"
                onClick={() => setView("animal-sub")}
              >
                <ShoppingCart size={40} className="text-primary mx-auto mb-4" />
                <h4 className="font-rubik font-bold text-primary-dark text-xl mb-2">מוצרים</h4>
                <p className="text-sm text-muted-foreground">מזון, ציוד טיפוח, צעצועים ועוד</p>
                <span className="mt-3 text-xs font-semibold text-primary inline-block">{AP[subId]?.p.length || 0} מוצרים ←</span>
              </div>
              <div
                className="bg-card rounded-xl border-2 border-primary/20 hover:border-primary cursor-pointer p-8 text-center hover:-translate-y-1 hover:shadow-elevated transition-all duration-300 group"
                onClick={() => setView("animal-sub-guides")}
              >
                <BookOpen size={40} className="text-primary mx-auto mb-4" />
                <h4 className="font-rubik font-bold text-primary-dark text-xl mb-2">מדריכים</h4>
                <p className="text-sm text-muted-foreground">דפי מידע, טיפים וטיפול נכון</p>
                <span className="mt-3 text-xs font-semibold text-primary inline-block">{(ANIMAL_SUB_ARTICLES[subId] || []).length} מדריכים ←</span>
              </div>
            </div>
          </div>
        )}

        {/* ── ANIMAL SUB — PRODUCTS ─────────────────────────────────── */}
        {view === "animal-sub" && (
          <div>
            <BackButton onClick={() => setView("animal-sub-choice")} label={`חזרה ל${ASUBS.find((s) => s.id === subId)?.name || ''}`} />
            <h3 className="text-2xl font-bold text-primary-dark text-center mb-2 font-rubik">
              {ASUBS.find((s) => s.id === subId)?.name} — מוצרים
            </h3>
            <div className="w-10 h-[3px] bg-primary rounded-full mx-auto mb-6" />
            <FilterBar
              brands={AP[subId]?.f.b || []}
              categories={AP[subId]?.f.c || []}
              brandFilter={brandFilter}
              catFilter={catFilter}
              setBrandFilter={setBrandFilter}
              setCatFilter={setCatFilter}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts().map((p, i) => (
                <ProductCard key={i} product={p} onClick={() => setModal({ product: p, type: "a" })} />
              ))}
            </div>
          </div>
        )}

        {/* ── ANIMAL SUB — GUIDES ──────────────────────────────────── */}
        {view === "animal-sub-guides" && (
          <div>
            <BackButton onClick={() => setView("animal-sub-choice")} label={`חזרה ל${ASUBS.find((s) => s.id === subId)?.name || ''}`} />
            <h3 className="text-2xl font-bold text-primary-dark text-center mb-2 font-rubik">
              {ASUBS.find((s) => s.id === subId)?.name} — מדריכים
            </h3>
            <div className="w-10 h-[3px] bg-primary rounded-full mx-auto mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {(ANIMAL_SUB_ARTICLES[subId] || []).map((article) => (
                <div
                  key={article.title}
                  onClick={() => setArticleModal(article)}
                  className="bg-card rounded-xl overflow-hidden border border-primary/15 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-soft transition-all duration-300 group flex flex-col cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 scale-[1.12] group-hover:scale-[1.18]" loading="lazy" />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h5 className="font-rubik font-bold text-primary-dark mb-1.5 leading-snug">{article.title}</h5>
                    <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{article.desc}</p>
                    <span className="mt-3 text-sm font-semibold text-primary inline-flex items-center gap-1 relative after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">
                      קרא עוד ←
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── NURSERY MAIN (החיי והצומח style) ──────────────────────── */}
        {view === "nursery" && (
          <div className="bg-white rounded-2xl p-6 md:p-10 -mx-2">
            <BackButton onClick={goMain} label="חזרה למחלקות ראשיות" isNursery />

            {/* Minimal text hero */}
            <div className="text-center mb-10 pt-2">
              <p className="text-primary font-semibold text-sm tracking-wider mb-1.5">המשתלה שלנו</p>
              <h3 className="text-3xl font-extrabold font-rubik text-primary-dark mb-3">מעל 500 זני צמחים</h3>
              <p className="text-muted-foreground max-w-[560px] mx-auto text-base leading-relaxed">
                צמחי גן, צמחי פנים, שיחים, תבלינים וציוד גינון. האסתטיקה, הריח והאיכות שמכניסים חיים הביתה.
              </p>
              <div className="w-10 h-[3px] bg-primary rounded-full mx-auto mt-4" />
            </div>

            {/* Category grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {NC.map((cat) => (
                <div
                  key={cat.id}
                  className="rounded-xl overflow-hidden cursor-pointer group hover:-translate-y-1 hover:shadow-elevated transition-all duration-300 bg-card border border-primary/15 hover:border-primary"
                  onClick={() => { setSubId(cat.id); setView("nursery-sub"); }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-500 scale-[1.12] group-hover:scale-[1.18]"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = U.nursery }}
                    />
                    <span className="absolute top-3 right-3 text-xs font-semibold text-primary-foreground bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full">
                      {cat.tag}
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-rubik font-bold text-primary-dark">{cat.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{cat.d}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-primary font-semibold text-sm group-hover:gap-2 transition-all relative after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">
                      צפו בקטלוג ←
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Professional articles section */}
            <Separator className="mb-10" />
            <div className="mb-4">
              <p className="text-primary font-semibold text-sm tracking-wider mb-1">מידע מקצועי</p>
              <h4 className="text-2xl font-bold font-rubik text-primary-dark mb-2">מדריכי גינון מהשדה</h4>
              <div className="w-10 h-[3px] bg-primary rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {NURSERY_ARTICLES.map((article) => (
                <div
                  key={article.title}
                  onClick={() => setArticleModal(article)}
                  className="bg-card rounded-xl overflow-hidden border border-primary/15 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-soft transition-all duration-300 group flex flex-col cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 scale-[1.25] translate-y-3 -translate-x-3 group-hover:scale-[1.3]"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = U.nursery; }}
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h5 className="font-rubik font-bold text-primary-dark mb-1.5 leading-snug">{article.title}</h5>
                    <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{article.desc}</p>
                    <span className="mt-3 text-sm font-semibold text-primary inline-flex items-center gap-1 relative after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">
                      קרא עוד ←
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── NURSERY SUB (Sidebar + Grid) ────────────────────────── */}
        {view === "nursery-sub" && (
          <div className="bg-white rounded-2xl p-6 md:p-10 -mx-2">
            {/* Header row */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <BackButton onClick={() => setView("nursery")} label="חזרה לקטלוג המשתלה" isNursery />
              <h3 className="text-xl font-bold text-primary-dark font-rubik">
                {NC.find((c) => c.id === subId)?.name}
              </h3>
            </div>

            {/* Mobile filter toggle */}
            <button
              className="md:hidden mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary text-primary text-sm font-semibold"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={14} className="inline ml-1" /> {showFilters ? 'הסתר פילטרים' : 'הצג פילטרים'}
            </button>

            <div className="flex gap-6 items-start">
              {/* Sidebar */}
              <aside className={`w-56 flex-shrink-0 ${showFilters ? 'block' : 'hidden'} md:block`}>
                <div className="bg-card border border-primary/15 rounded-xl p-4 sticky top-4">
                  <p className="font-rubik font-bold text-primary-dark text-sm mb-4 pb-2 border-b border-primary/15">סינון מתקדם</p>
                  {Object.entries(NURSERY_FILTERS).map(([key, options]) => (
                    <div key={key} className="mb-5">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">{FILTER_LABELS[key]}</p>
                      <div className="space-y-1.5">
                        {options.map((opt) => (
                          <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                            <input
                              type="checkbox"
                              className="w-4 h-4 rounded border-primary/30 text-primary accent-[hsl(var(--primary))] cursor-pointer"
                            />
                            <span className="text-sm text-foreground group-hover:text-primary transition-colors">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </aside>

              {/* Product grid */}
              <div className="flex-1 min-w-0">
                {(NP[subId] || []).length === 0 ? (
                  <div className="text-center py-16 text-muted-foreground">
                    <Sprout size={40} className="mb-3 mx-auto text-muted-foreground" />
                    <p className="font-semibold">אין מוצרים בקטגוריה זו עדיין</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {(NP[subId] || []).map((p, i) => (
                      <ProductCard key={i} product={p} onClick={() => setModal({ product: p, type: "n" })} isNursery />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── AQUATICS ────────────────────────────────────────────── */}
        {view === "aquatics" && (
          <div>
            <BackButton onClick={goMain} label="חזרה למחלקות" />

            {/* Premium banner */}
            <div className="rounded-3xl bg-gradient-to-b from-blue/10 to-transparent p-8 mb-8 text-center">
              <p className="text-blue font-semibold text-sm tracking-wider mb-1.5">אקווטיקה</p>
              <h3 className="text-3xl font-extrabold font-rubik text-blue-dark mb-2">דגי מים מתוקים וציוד מקצועי</h3>
              <p className="text-muted-foreground max-w-[500px] mx-auto text-sm">
                נוי וטורפים, אקווריומים, ציוד ומזון. בקרו בחנות לצפייה בדגים החיים!
              </p>
              <div className="w-10 h-[3px] bg-blue rounded-full mx-auto mt-4" />
            </div>

            {/* Fish category cards — premium aquarium style */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {AQ_FISH.map((f) => (
                <div
                  key={f.n}
                  className="rounded-xl overflow-hidden border border-blue/10 hover:border-blue/40 hover:-translate-y-1 hover:shadow-soft transition-all cursor-pointer group bg-gradient-to-br from-blue/5 to-aqua/10"
                  onClick={() => { setSubId(f.n); setView("aqua-fish-sub"); }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={f.img} alt={f.n} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-rubik font-bold text-blue-dark">{f.n}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-8 border-blue/10" />

            {/* Equipment cards — subtle blue border */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {AQ_EQUIP.map((e) => (
                <div
                  key={e.n}
                  className="bg-card rounded-lg border border-blue/10 hover:border-blue/40 hover:-translate-y-1 hover:shadow-soft transition-all cursor-pointer p-5 text-center"
                  onClick={() => { setView("aqua-products"); if (e.cat) setCatFilter(e.cat); setBrandFilter(""); }}
                >
                  <h4 className="font-rubik font-bold text-blue-dark">{e.n}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{e.d}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-dark text-primary-foreground font-semibold text-lg shadow-lg hover:brightness-110 hover:-translate-y-0.5 transition-all"
                onClick={() => { setView("aqua-products"); setBrandFilter(""); setCatFilter(""); }}
              >
                צפו בכל מוצרי האקווטיקה
              </button>
              <a
                href={`https://wa.me/97286556681?text=${encodeURIComponent("שלום, אשמח לשאול לגבי דגים")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-whatsapp text-primary-foreground font-semibold text-lg shadow-lg shadow-whatsapp/35 hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                שאלו אותנו על דגים
              </a>
            </div>

            {/* Professional articles section for aquatics */}
            <Separator className="my-10 bg-blue/20" />
            <div className="mb-6 text-center">
              <p className="text-blue font-semibold text-sm tracking-wider mb-1">מידע שימושי</p>
              <h4 className="text-2xl font-bold font-rubik text-blue-dark mb-2">מדריכי אקווריומים למתחילים</h4>
              <div className="w-10 h-[3px] bg-blue rounded-full mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {AQUA_ARTICLES.map((article) => (
                <div
                  key={article.title}
                  onClick={() => setArticleModal(article)}
                  className="bg-card rounded-xl overflow-hidden border border-blue/15 hover:border-blue/40 hover:-translate-y-0.5 hover:shadow-soft transition-all duration-300 group flex flex-col cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 scale-[1.05] group-hover:scale-[1.1]"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h5 className="font-rubik font-bold text-blue-dark mb-1.5 leading-snug">{article.title}</h5>
                    <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{article.desc}</p>
                    <span className="mt-3 text-sm font-semibold text-blue inline-flex items-center gap-1 relative after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-blue after:transition-all after:duration-300 group-hover:after:w-full">
                      קרא עוד ←
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── AQUA FISH SUB ───────────────────────────────────────── */}
        {view === "aqua-fish-sub" && (
          <div className="bg-blue/5 rounded-2xl p-4 md:p-8 -mx-2">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <BackButton onClick={() => setView("aquatics")} label="חזרה לאקווטיקה" />
              <h3 className="text-3xl font-bold text-blue-dark font-rubik text-center flex-1">
                {subId}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {AQ_FISH.find((f) => f.n === subId)?.sub?.map((fish, i) => (
                <div key={i} className="bg-card rounded-xl overflow-hidden border border-blue/10 hover:border-blue-dark/30 hover:-translate-y-1.5 hover:shadow-elevated transition-all duration-300 group flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={fish.img}
                      alt={fish.n}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = U.aqua }}
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1 text-center">
                    <h4 className="font-rubik text-lg font-bold text-blue-dark mb-2">{fish.n}</h4>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{fish.d}</p>
                    <a
                      href={`https://wa.me/97286556681?text=${encodeURIComponent("שלום, האם קיים במלאי " + fish.n + "?")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto py-2 px-4 rounded-full bg-whatsapp/10 text-whatsapp font-semibold hover:bg-whatsapp hover:text-white transition-colors inline-block text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      בררו זמינות בוואטסאפ
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── AQUA PRODUCTS ───────────────────────────────────────── */}
        {view === "aqua-products" && (
          <div className="bg-blue/5 rounded-2xl p-4 -mx-2">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <BackButton onClick={() => setView("aquatics")} label="חזרה לאקווטיקה" />
              <h3 className="text-2xl font-bold text-blue-dark font-rubik">ציוד ואביזרי אקווטיקה</h3>
            </div>
            <FilterBar
              brands={AQ_PRODUCTS.f.b}
              categories={AQ_PRODUCTS.f.c}
              brandFilter={brandFilter}
              catFilter={catFilter}
              setBrandFilter={setBrandFilter}
              setCatFilter={setCatFilter}
              isAqua
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts().map((p, i) => (
                <ProductCard key={i} product={p} onClick={() => setModal({ product: p, type: "a" })} isAqua />
              ))}
            </div>
          </div>
        )}

        {/* ── FISHING MAIN ──────────────────────────────────────────── */}
        {view === "fishing" && (
          <div className="bg-gradient-to-b from-[#0c1929] to-[#1a2d47] rounded-2xl p-6 md:p-10 -mx-2">
            <BackButton onClick={goMain} label="חזרה למחלקות ראשיות" />

            {/* Hero */}
            <div className="text-center mb-10 pt-2">
              <p className="text-sky-400 font-semibold text-sm tracking-wider mb-1.5 inline-flex items-center gap-1.5"><Fish size={15} />מחלקת הדייג</p>
              <h3 className="text-3xl font-extrabold font-rubik text-white mb-3">ציוד דייג בסיסי ומקצועי</h3>
              <p className="text-slate-300 max-w-[560px] mx-auto text-base leading-relaxed">
                כל מה שצריך כדי לצאת לדוג — חכות, גלילים, חוטים, קרסים, פתיונות ואביזרים.
              </p>
              <div className="w-10 h-[3px] bg-sky-400 rounded-full mx-auto mt-4" />
            </div>

            {/* Category grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {FISHING_CATS.map((cat) => {
                const FishIcon = FISHING_ICON_MAP[cat.id];
                return (
                  <div
                    key={cat.id}
                    className="rounded-xl overflow-hidden cursor-pointer group hover:-translate-y-1 hover:shadow-elevated transition-all duration-300 bg-slate-800/60 border border-sky-500/20 hover:border-sky-400/60 backdrop-blur-sm"
                    onClick={() => { setSubId(cat.id); setView("fishing-sub"); setBrandFilter(""); setCatFilter(""); }}
                  >
                    <div className="p-6 text-center">
                      {FishIcon
                        ? <FishIcon size={36} className="text-sky-400 mx-auto mb-3" />
                        : <span className="text-4xl mb-3 block">{cat.icon}</span>
                      }
                      <h4 className="font-rubik font-bold text-white text-lg mb-1">{cat.name}</h4>
                      <p className="text-sm text-slate-300">{cat.d}</p>
                      <span className="mt-3 text-xs font-semibold text-sky-400 inline-block">{FP[cat.id]?.length || 0} מוצרים ←</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Fishing articles */}
            <Separator className="my-10 bg-slate-700" />
            <div className="mb-6 text-center">
              <p className="text-sky-400 font-semibold text-sm tracking-wider mb-1 inline-flex items-center gap-1.5"><BookOpen size={14} />מידע שימושי</p>
              <h4 className="text-2xl font-bold font-rubik text-white mb-2">מדריכי דייג</h4>
              <div className="w-10 h-[3px] bg-sky-400 rounded-full mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {FISHING_ARTICLES.map((article) => (
                <div
                  key={article.title}
                  onClick={() => setArticleModal(article)}
                  className="bg-slate-800/60 rounded-xl overflow-hidden border border-sky-500/15 hover:border-sky-400/50 hover:-translate-y-0.5 hover:shadow-soft transition-all duration-300 group flex flex-col cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h5 className="font-rubik font-bold text-white mb-1.5 leading-snug">{article.title}</h5>
                    <p className="text-sm text-slate-300 flex-1 leading-relaxed">{article.desc}</p>
                    <span className="mt-3 text-sm font-semibold text-sky-400 inline-flex items-center gap-1 relative after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all after:duration-300 group-hover:after:w-full">
                      קרא עוד ←
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── FISHING SUB (products by category) ─────────────────────── */}
        {view === "fishing-sub" && (
          <div className="bg-gradient-to-b from-[#0c1929] to-[#1a2d47] rounded-2xl p-6 md:p-10 -mx-2">
            <BackButton onClick={() => setView("fishing")} label="חזרה לציוד דייג" />
            <h3 className="text-2xl font-bold text-white text-center mb-6 font-rubik flex items-center justify-center gap-2">
              {(() => { const I = FISHING_ICON_MAP[subId]; return I ? <I size={22} className="text-sky-400" /> : FISHING_CATS.find((c) => c.id === subId)?.icon; })()}
              {FISHING_CATS.find((c) => c.id === subId)?.name}
            </h3>
            <FilterBar
              brands={FISHING_BRANDS}
              categories={[...new Set((FP[subId] || []).map(p => p.c))]}
              brandFilter={brandFilter}
              catFilter={catFilter}
              setBrandFilter={setBrandFilter}
              setCatFilter={setCatFilter}
              isAqua
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts().map((p, i) => (
                <ProductCard key={i} product={p} onClick={() => setModal({ product: p, type: "a" })} isAqua isFishing />
              ))}
            </div>
          </div>
        )}
      </div>

      {modal && (
        <ProductModal product={modal.product} onClose={() => setModal(null)} />
      )}
      {articleModal && (
        <ArticleModal article={articleModal} onClose={() => setArticleModal(null)} />
      )}
    </section>
  );
};

/* ── Helper components ─────────────────────────────────────────── */

const BackButton = ({
  onClick,
  label,
  isNursery,
}: {
  onClick: () => void;
  label: string;
  isNursery?: boolean;
}) => (
  <button
    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border-2 font-semibold cursor-pointer transition-all mb-6 text-sm group
      border-primary text-primary hover:bg-primary hover:text-primary-foreground`}
    onClick={onClick}
  >
    ←{" "}
    <span className="relative after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full group-hover:after:bg-primary-foreground">
      {label}
    </span>
  </button>
);

const FilterBar = ({
  brands,
  categories,
  brandFilter,
  catFilter,
  setBrandFilter,
  setCatFilter,
  isAqua,
}: {
  brands: string[];
  categories: string[];
  brandFilter: string;
  catFilter: string;
  setBrandFilter: (v: string) => void;
  setCatFilter: (v: string) => void;
  isAqua?: boolean;
}) => {
  const focusRing = isAqua
    ? "focus:border-blue-light focus:ring-2 focus:ring-blue-light/30"
    : "focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <div className="flex gap-2.5 flex-wrap mb-6 p-4 bg-card rounded-xl border">
      <select
        className={`px-4 py-2.5 rounded-xl border font-assistant text-sm bg-card cursor-pointer outline-none min-w-[140px] transition-colors ${focusRing}`}
        value={brandFilter}
        onChange={(e) => setBrandFilter(e.target.value)}
      >
        <option value="">כל המותגים</option>
        {brands.map((b) => <option key={b} value={b}>{b}</option>)}
      </select>
      <select
        className={`px-4 py-2.5 rounded-xl border font-assistant text-sm bg-card cursor-pointer outline-none min-w-[140px] transition-colors ${focusRing}`}
        value={catFilter}
        onChange={(e) => setCatFilter(e.target.value)}
      >
        <option value="">כל הקטגוריות</option>
        {categories.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
    </div>
  );
};

const ProductCard = ({
  product,
  onClick,
  isNursery,
  isAqua,
  isFishing,
}: {
  product: Product | NurseryProduct;
  onClick: () => void;
  isNursery?: boolean;
  isAqua?: boolean;
  isFishing?: boolean;
}) => {
  const fallbackImg = isNursery ? U.nursery : isFishing ? U.fishing : isAqua ? U.aqua : U.animals;
  return (
    <div
      className={`bg-card rounded-lg overflow-hidden border cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group flex flex-col
      ${isNursery ? 'border-primary/15 hover:border-primary/40' : isAqua ? 'border-blue/10 hover:border-blue/40' : 'hover:border-primary-light'}`}
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.img || fallbackImg}
          alt={product.n}
          className={`w-full h-full object-cover transition-transform duration-500 ${isNursery ? 'scale-[1.25] translate-y-3 -translate-x-3 group-hover:scale-[1.3]' : 'group-hover:scale-105'}`}
          loading="lazy"
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImg; }}
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        {product.b && (
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full inline-block mb-1.5 self-start
          ${isAqua ? 'text-blue bg-blue/10' : 'text-primary bg-primary/10'}`}>
            {product.b}
          </span>
        )}
        <h4 className={`font-rubik text-sm font-semibold mb-1 leading-snug ${isAqua ? 'text-blue-dark' : 'text-foreground'}`}>{product.n}</h4>
        <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{product.d}</p>
        {product.s && product.s.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {product.s.map((s) => (
              <span key={s} className={`text-[0.7rem] px-2 py-0.5 rounded-full font-medium
              ${isAqua ? 'bg-blue/10 text-blue-dark' : 'bg-bg-warm text-muted-foreground'}`}>
                {s}
              </span>
            ))}
          </div>
        )}
        <a
          href={`https://wa.me/97286556681?text=${encodeURIComponent("שלום, אשמח לשאול לגבי " + product.n)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-3 text-xs font-semibold text-whatsapp hover:underline inline-flex items-center gap-1"
          onClick={(e) => e.stopPropagation()}
        >
          <MessageCircle size={12} /> לפרטים בוואטסאפ
        </a>
      </div>
    </div>
  );
};  /* ── Article Modal ─────────────────────────────────────────────── */
function ArticleModal({ article, onClose }: { article: NurseryArticle; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col shadow-elevated animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video flex-shrink-0 overflow-hidden">
          <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <h2 className="absolute bottom-4 right-6 left-6 font-rubik text-2xl font-extrabold text-primary-foreground leading-snug">
            {article.title}
          </h2>
          <button
            onClick={onClose}
            className="absolute top-4 left-4 w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors text-lg font-bold"
          >
            ✕
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          <p className="text-sm font-semibold text-primary mb-4">{article.desc}</p>
          <p className="leading-relaxed text-foreground text-base">{article.content}</p>
          <div className="mt-6 pt-4 border-t border-border">
            <span className="text-xs text-muted-foreground">מדריך מקצועי מבית החיי והצומח</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Departments;
