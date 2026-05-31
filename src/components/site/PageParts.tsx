import { Link } from "@tanstack/react-router";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="px-6 lg:px-8 pt-16 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 gradient-paper pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <span className="eyebrow text-gold mb-6 block">{eyebrow}</span>
        <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] text-navy">{title}</h1>
        {subtitle && <p className="mt-8 text-xl text-mute italic max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}

export function CTABand() {
  return (
    <section className="px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto bg-navy rounded-[2rem] p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <h3 className="font-serif text-3xl md:text-4xl text-paper">
          Bilim yolculuğuna <span className="italic text-gold-soft">ilk adımı</span> atın.
        </h3>
        <Link
          to="/basvuru"
          className="px-8 py-4 bg-gold text-paper font-medium rounded-full hover:bg-gold-soft hover:text-navy transition-all whitespace-nowrap"
        >
          Başvuru Formu →
        </Link>
      </div>
    </section>
  );
}
