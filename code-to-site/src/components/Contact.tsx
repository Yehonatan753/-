import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    label: "טלפון",
    value: "08-655-6681",
    href: "tel:086556681",
  },
  {
    icon: MessageCircle,
    iconBg: "bg-whatsapp/15",
    iconColor: "text-whatsapp",
    label: "וואטסאפ",
    value: "שלחו הודעה עכשיו",
    href: "https://wa.me/97286556681",
    external: true,
  },
  {
    icon: MapPin,
    iconBg: "bg-blue/10",
    iconColor: "text-blue",
    label: "כתובת",
    value: "הרצל 1, דימונה",
    href: "https://maps.app.goo.gl/KPJtniKJBEsxfUAEA",
    external: true,
  },
  {
    icon: Mail,
    iconBg: "bg-destructive/10",
    iconColor: "text-destructive",
    label: "אימייל",
    value: "yorameitach@gmail.com",
    href: "mailto:yorameitach@gmail.com",
  },
  {
    icon: Clock,
    iconBg: "bg-secondary/30",
    iconColor: "text-secondary-foreground",
    label: "שעות פתיחה",
    value: "א׳-ה׳: 9:30-14:00, 16:30-20:00 | ו׳: 9:30-15:00",
  },
];

const Contact = () => {
  return (
    <section className="py-16 px-6 bg-bg-warm" id="contact">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-center text-primary font-semibold text-sm tracking-wider mb-1.5">בואו לבקר</p>
        <h2 className="text-center text-3xl font-bold text-primary-dark mb-2 font-rubik">צרו קשר</h2>
        <div className="w-14 h-[3px] bg-gradient-to-l from-primary to-secondary rounded-full mx-auto mb-10" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            {contactItems.map((item) => {
              const Wrapper = item.href ? "a" : "div";
              return (
                <Wrapper
                  key={item.label}
                  {...(item.href ? { href: item.href } : {})}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 bg-card p-4 rounded-lg border hover:shadow-soft hover:border-primary-light transition-all cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>
                    <item.icon size={22} className={item.iconColor} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/70">{item.label}</p>
                    <p className="font-semibold text-sm">{item.value}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
          <div className="rounded-xl overflow-hidden shadow-soft">
            <iframe
              src="https://maps.google.com/maps?q=%D7%94%D7%97%D7%99+%D7%95%D7%94%D7%A6%D7%95%D7%9E%D7%97+%D7%93%D7%99%D7%9E%D7%95%D7%A0%D7%94&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              title="מפה"
              className="w-full h-[380px] border-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
