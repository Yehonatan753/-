const Hero = () => {
  return (
    <section className="relative h-[85vh] min-h-[520px] max-h-[760px] overflow-hidden flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1600&q=80')",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to left, hsla(155,44%,17%,.88) 0%, hsla(155,44%,17%,.55) 50%, hsla(0,0%,0%,.15) 100%)",
        }}
      />
      <div className="relative z-10 max-w-[1200px] mx-auto px-10 w-full text-right">
        <h1 className="text-4xl md:text-6xl font-black text-primary-foreground leading-tight mb-4 drop-shadow-lg font-rubik">
          הכל לחיה שלך.
          <br />
          הכל לגינה שלך.
        </h1>
        <p className="text-lg text-primary-foreground/90 mb-6 max-w-[500px] leading-relaxed">
          חנות חיות ומשתלה בדימונה - מזון פרמיום, צמחים, דגי נוי וציוד מקצועי. מעל 35 שנות ניסיון ושירות אישי.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href="https://wa.me/97286556681"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-whatsapp text-primary-foreground font-semibold shadow-lg shadow-whatsapp/35 hover:brightness-110 hover:-translate-y-0.5 transition-all"
          >
            שלחו הודעה בוואטסאפ
          </a>
          <a
            href="#departments"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary-foreground/20 text-primary-foreground border-2 border-primary-foreground/50 backdrop-blur-lg font-semibold hover:bg-primary-foreground/30 transition-all"
          >
            לצפייה במחלקות
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
