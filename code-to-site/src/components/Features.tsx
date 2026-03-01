import { Clock, Truck, Home, Heart } from "lucide-react";

const features = [
  { icon: Clock, title: "35+ שנות ניסיון", desc: "עסק משפחתי ותיק עם ידע מקצועי וייעוץ אישי" },
  { icon: Truck, title: "משלוח חינם", desc: "משלוח חינם בדימונה בהזמנה מעל ₪100" },
  { icon: Home, title: "הכל במקום אחד", desc: "בעלי חיים, אקווטיקה ומשתלה תחת קורת גג אחת" },
  { icon: Heart, title: "מותגים מובילים", desc: "Royal Canin, Purina, Dorgan ועשרות מותגים" },
];

const Features = () => {
  return (
    <section className="py-16 px-6 bg-bg-warm">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-center text-primary font-semibold text-sm tracking-wider mb-1.5">למה דווקא אנחנו</p>
        <h2 className="text-center text-3xl font-bold text-primary-dark mb-2 font-rubik">הסיבות לבחור בחי והצומח</h2>
        <div className="w-14 h-[3px] bg-gradient-to-l from-primary to-secondary rounded-full mx-auto mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1000px] mx-auto">
          {features.map((f) => (
            <div key={f.title} className="bg-card rounded-lg p-7 text-center border border-border/30 hover:-translate-y-1 hover:shadow-soft transition-all">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3.5 bg-primary/10">
                <f.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-rubik text-primary-dark mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
