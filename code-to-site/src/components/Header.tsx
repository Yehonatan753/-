import logo from "@/assets/logo.png";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#departments", label: "מחלקות" },
  { href: "#brands", label: "מותגים" },
  { href: "#about", label: "אודות" },
  { href: "#contact", label: "צור קשר" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-primary-dark text-primary-foreground text-center py-2 px-4 text-sm">
        משלוח חינם בדימונה בהזמנה מעל <strong className="text-secondary-light">₪100</strong> &nbsp;|&nbsp; 08-655-6681
      </div>

      <header
        className={`sticky top-0 z-50 bg-card/97 backdrop-blur-xl border-b transition-all duration-300 ${
          scrolled ? "shadow-soft" : "border-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-2.5">
          <div className="flex items-center gap-2.5 font-rubik text-xl font-bold text-primary-dark">
            <img src={logo} alt="החי והצומח" className="h-12 w-12 rounded-full object-cover border-2 border-primary-light" />
            <span>החי והצומח</span>
          </div>

          <nav className="hidden md:flex gap-1.5 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-sm font-medium text-sm transition-all hover:bg-primary hover:text-primary-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/97286556681"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-sm bg-primary text-primary-foreground font-semibold text-sm"
            >
              וואטסאפ
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-card border-t px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/97286556681"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-sm bg-primary text-primary-foreground font-semibold text-center"
              onClick={() => setMenuOpen(false)}
            >
              וואטסאפ
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
