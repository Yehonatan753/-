import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 35, label: "שנות פעילות" },
  { target: 3, label: "עולמות תוכן" },
  { target: 20, label: "מותגים מובילים" },
];

const CountUp = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          let c = 0;
          const step = Math.max(1, Math.floor(target / 30));
          const iv = setInterval(() => {
            c += step;
            if (c >= target) { c = target; clearInterval(iv); }
            setCount(c);
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-rubik text-5xl font-extrabold text-primary">
      {count}{target >= 10 ? "+" : ""}
    </div>
  );
};

const About = () => {
  return (
    <section className="py-16 px-6 bg-background" id="about">
      <div className="max-w-[800px] mx-auto text-center">
        <p className="text-primary font-semibold text-sm tracking-wider mb-1.5">קצת עלינו</p>
        <h2 className="text-3xl font-bold text-primary-dark mb-2 font-rubik">הסיפור שלנו</h2>
        <div className="w-14 h-[3px] bg-gradient-to-l from-primary to-secondary rounded-full mx-auto mb-10" />
        <p className="text-muted-foreground leading-loose mb-4">
          כבר למעלה מ-35 שנה, <strong className="text-foreground">החי והצומח</strong> משמש כיעד המרכזי בדימונה לכל מה שקשור לבעלי חיים, גינון ומשתלה. אנחנו עסק משפחתי שמאמין בשירות אישי, ייעוץ מקצועי ומגוון רחב של מוצרים באיכות הגבוהה ביותר.
        </p>
        <p className="text-muted-foreground leading-loose mb-8">
          מחנות קטנה ברחוב הרצל הפכנו למרכז שמשרת אלפי לקוחות מרוצים מדימונה והסביבה.
        </p>
        <div className="flex justify-center gap-12 md:gap-16">
          {stats.map((s) => (
            <div key={s.label}>
              <CountUp target={s.target} />
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
