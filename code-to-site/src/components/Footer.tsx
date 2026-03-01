const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground py-10 px-6 text-center">
      <div className="max-w-[1000px] mx-auto flex flex-wrap items-center justify-between gap-4 mb-5">
        <span className="font-rubik text-lg font-semibold flex items-center gap-2">
          🌿 החי והצומח
        </span>
        <div className="flex gap-5">
          <a href="#departments" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">מחלקות</a>
          <a href="#brands" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">מותגים</a>
          <a href="#about" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">אודות</a>
          <a href="#contact" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">צור קשר</a>
        </div>
      </div>
      <div className="text-xs text-primary-foreground/50 border-t border-primary-foreground/10 pt-4">
        © 2026 החי והצומח — חנות חיות ומשתלה | הרצל 1, דימונה
      </div>
    </footer>
  );
};

export default Footer;
