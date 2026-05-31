import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader, CTABand } from "./kesfedin";

export const Route = createFileRoute("/ogrencilerimiz")({
  head: () => ({
    meta: [
      { title: "Öğrencilerimiz — Hacettepe Bilim Kampları" },
      { name: "description", content: "Başarı listemiz, kampa katılan öğrencilerimiz ve öğrenci görüşleri." },
      { property: "og:title", content: "Öğrencilerimiz — Hacettepe Bilim Kampları" },
      { property: "og:description", content: "Bilim kamplarımıza katılan öğrencilerimizin başarıları ve deneyimleri." },
    ],
  }),
  component: Students,
});

const SUCCESS = [
  { name: "Elif Yılmaz", year: "2025", achievement: "TÜBİTAK Bilim Olimpiyatları — Altın Madalya" },
  { name: "Mert Kaya", year: "2024", achievement: "Hacettepe Üniversitesi Tıp Fakültesi" },
  { name: "Selin Aydın", year: "2024", achievement: "TÜBİTAK Biyoloji Olimpiyatı — Bronz" },
  { name: "Cem Demir", year: "2024", achievement: "Boğaziçi Moleküler Biyoloji" },
  { name: "Zeynep Polat", year: "2023", achievement: "İTÜ Kimya Mühendisliği" },
  { name: "Arda Şahin", year: "2023", achievement: "TÜBİTAK Fizik Olimpiyatı — Gümüş" },
  { name: "Defne Erdem", year: "2023", achievement: "ODTÜ Fizik Bölümü" },
  { name: "Kerem Yılmaz", year: "2022", achievement: "Hacettepe Üniversitesi Mühendislik" },
];

const TESTIMONIALS = [
  {
    quote:
      "Kampa katılmadan önce biyolojiyi sevdiğimi sanıyordum. Şimdi onsuz hayatımı düşünemiyorum. Akademisyen hocalarımızla yapılan laboratuvar çalışmaları beni tamamen değiştirdi.",
    name: "Elif Y.",
    grade: "12. Sınıf · 2025 Katılımcısı",
  },
  {
    quote:
      "Sekiz gün boyunca aynı odayı paylaştığım arkadaşlarımla hâlâ iletişim halindeyiz. Bir bilim ailesi kurduk diyebilirim.",
    name: "Mert K.",
    grade: "Hacettepe Tıp Fakültesi",
  },
  {
    quote:
      "Yusuf Hoca'nın bilime olan tutkusu öylesine bulaşıcı ki, kamptan dönüşte üniversite tercihimi tamamen değiştirdim. Şimdi araştırmacı olmak istiyorum.",
    name: "Selin A.",
    grade: "11. Sınıf · 2024 Katılımcısı",
  },
];

function Students() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Öğrencilerimiz"
        title="Bizim hikâyemiz, onların başarısı."
        subtitle="Hacettepe Bilim Kamplarına katılan öğrencilerimizin Türkiye'nin seçkin üniversitelerinde ve olimpiyatlarda elde ettiği sonuçlar."
      />

      {/* Success list */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-serif text-4xl text-navy">Başarı Listemiz</h2>
            <span className="eyebrow">2022 — 2025</span>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {SUCCESS.map((s) => (
              <li key={s.name} className="py-6 grid grid-cols-12 gap-4 items-baseline">
                <span className="col-span-2 md:col-span-1 font-serif text-gold">{s.year}</span>
                <span className="col-span-10 md:col-span-4 font-medium text-navy">{s.name}</span>
                <span className="col-span-12 md:col-span-7 text-mute md:text-right">
                  {s.achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Participation stats */}
      <section className="px-6 lg:px-8 py-24 bg-navy text-paper">
        <div className="max-w-7xl mx-auto">
          <span className="eyebrow text-gold-soft mb-6 block">Kampa Katılan Öğrencilerimiz</span>
          <h2 className="font-serif text-5xl md:text-6xl mb-16 leading-[1.05]">
            10 yılda <span className="italic text-gold-soft">1.500+ genç bilim insanı.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              ["1.500+", "Toplam Katılımcı"],
              ["67", "Şehirden Öğrenci"],
              ["45", "Akademisyen Eğitmen"],
              ["12", "Akademik Yıl"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-5xl text-gold-soft">{n}</div>
                <div className="eyebrow text-paper/50 mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <span className="eyebrow mb-6 block">Öğrencilerimizin Görüşleri</span>
          <h2 className="font-serif text-5xl text-navy mb-16">Onların sözleriyle.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="bg-card p-8 rounded-2xl border border-border shadow-card flex flex-col"
              >
                <svg className="w-8 h-8 text-gold mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="font-serif text-xl leading-relaxed text-navy mb-8 flex-1">
                  {t.quote}
                </blockquote>
                <figcaption>
                  <div className="font-medium text-navy">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-gold mt-1">{t.grade}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
