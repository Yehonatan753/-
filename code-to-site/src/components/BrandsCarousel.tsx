import { BRANDS } from "@/data/storeData";

const GROUP_STYLES: Record<string, { title: string; card: string }> = {
  'אקווטיקה': {
    title: 'text-blue',
    card: 'bg-blue/5 border-blue/10 hover:border-blue/30',
  },
  'משתלה': {
    title: 'text-primary',
    card: 'bg-primary/5 border-primary/10 hover:border-primary/30',
  },
  'ציוד דייג': {
    title: 'text-sky-600',
    card: 'bg-sky-50 border-sky-200 hover:border-sky-400',
  },
};

const DEFAULT_STYLE = {
  title: 'text-foreground',
  card: 'bg-bg-warm border-border hover:border-foreground/20',
};

const BrandsCarousel = () => {
  return (
    <section className="py-16 border-t border-b border-border bg-card" id="brands">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm tracking-wider mb-1.5">המותגים המובילים שלנו</p>
          <h2 className="text-3xl font-bold text-primary-dark mb-2 font-rubik">עובדים עם היצרנים הטובים בעולם</h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            כדי להבטיח איכות מקסימלית בכל מוצר שאנחנו מציעים
          </p>
          <div className="w-14 h-[3px] bg-gradient-to-l from-primary to-secondary rounded-full mx-auto mt-4" />
        </div>

        {/* Groups */}
        <div className="flex flex-col gap-10">
          {BRANDS.map((group) => {
            const style = GROUP_STYLES[group.t] ?? DEFAULT_STYLE;
            // ×4 duplication ensures seamless infinite scroll
            const repeated = [...group.b, ...group.b, ...group.b, ...group.b];

            return (
              <div key={group.t}>
                {/* Group label */}
                <p className={`text-center text-xs font-bold tracking-widest uppercase mb-4 ${style.title}`}>
                  {group.t}
                </p>

                {/* Marquee track */}
                <div className="relative overflow-hidden">
                  {/* Fade edges */}
                  <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-card to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-card to-transparent pointer-events-none" />

                  <div className="flex animate-carousel gap-3 w-max">
                    {repeated.map((brand, i) => (
                      <div
                        key={i}
                        className={`flex-shrink-0 border rounded-xl px-6 py-3 transition-all duration-200 ${style.card}`}
                      >
                        <span className="font-rubik font-bold text-sm text-primary-dark whitespace-nowrap">
                          {brand}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
