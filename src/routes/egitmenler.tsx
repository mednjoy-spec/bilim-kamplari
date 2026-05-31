import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader, CTABand } from "@/components/site/PageParts";

export const Route = createFileRoute("/egitmenler")({
  head: () => ({
    meta: [
      { title: "Eğitmenlerimiz — Hacettepe Bilim Kampları" },
      { name: "description", content: "Akademisyenler, doktorlar ve seçkin öğretmenlerden oluşan eğitim kadromuz." },
      { property: "og:title", content: "Eğitmenlerimiz — Hacettepe Bilim Kampları" },
      { property: "og:description", content: "Türkiye'nin seçkin üniversitelerinden akademisyenler." },
    ],
  }),
  component: Instructors,
});

const INSTRUCTORS = [
  { name: "Prof. Dr. Ayşe Demir", title: "Moleküler Biyoloji · Hacettepe Üniversitesi", field: "Biyoloji" },
  { name: "Doç. Dr. Mehmet Kaya", title: "Teorik Fizik · ODTÜ", field: "Fizik" },
  { name: "Dr. Selin Yıldız", title: "Organik Kimya · Boğaziçi Üniversitesi", field: "Kimya" },
  { name: "Doç. Dr. Burak Şahin", title: "Uygulamalı Matematik · İTÜ", field: "Matematik" },
  { name: "Dr. Pınar Aydın", title: "Ekoloji · Ankara Üniversitesi", field: "Ekoloji" },
  { name: "Öğr. Gör. Yusuf Durmuş", title: "Proje Yürütücüsü", field: "Bilim Felsefesi" },
];

function Instructors() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Eğitmenlerimiz"
        title="Akademik kadro."
        subtitle="Türkiye'nin seçkin üniversitelerinden akademisyenler, deneyimli öğretmenler ve alanında uzman araştırmacılar."
      />

      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSTRUCTORS.map((i) => (
              <article
                key={i.name}
                className="group bg-card p-8 rounded-2xl border border-border hover:border-gold/40 hover:shadow-card transition-all duration-500"
              >
                <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-secondary to-muted mb-6 flex items-center justify-center">
                  <span className="font-serif text-7xl text-mute/40">
                    {i.name.split(" ").slice(-1)[0]?.[0]}
                  </span>
                </div>
                <div className="eyebrow text-gold mb-3">{i.field}</div>
                <h3 className="font-serif text-2xl text-navy mb-2">{i.name}</h3>
                <p className="text-sm text-mute">{i.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
