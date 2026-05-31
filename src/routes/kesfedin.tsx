import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader, CTABand } from "@/components/site/PageParts";
import yusufPortrait from "@/assets/yusuf-durmus.jpg";


export const Route = createFileRoute("/kesfedin")({
  head: () => ({
    meta: [
      { title: "Bizi Keşfedin — Hacettepe Bilim Kampları" },
      {
        name: "description",
        content:
          "Yusuf Durmuş, konferanslar, hedefler, kazanımlar ve kapsam. Hacettepe Bilim Kampları'nın vizyonunu tanıyın.",
      },
      { property: "og:title", content: "Bizi Keşfedin — Hacettepe Bilim Kampları" },
      {
        property: "og:description",
        content: "Vizyonumuz, akademik kadromuz ve programlarımızın kapsamı.",
      },
      { property: "og:image", content: yusufPortrait },
    ],
  }),
  component: Discover,
});

function Discover() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Bizi Keşfedin" title="Vizyonumuz" subtitle="Bilimi yaşatan, akademik birikimi paylaşan ve geleceği inşa eden bir topluluk." />

      {/* Yusuf Durmuş */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={yusufPortrait}
                alt="Yusuf Durmuş"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <span className="eyebrow text-gold mb-6 block">Proje Yürütücüsü</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-navy mb-8">
              Yusuf Durmuş
            </h2>
            <p className="text-lg text-mute leading-relaxed mb-6">
              Öğretim Görevlisi Yusuf Durmuş, on yılı aşkın akademik birikimi ve Türkiye'nin dört
              bir yanında verdiği bilim seminerleriyle, gençlerin bilimsel bakış açısı
              kazanmasında önemli bir köprü.
            </p>
            <p className="text-lg text-mute leading-relaxed mb-10">
              Kurucusu olduğu Hacettepe Bilim Kampları, bilimi yalnızca bir ders olarak değil; bir
              yaşam biçimi olarak öğrencilere aktarmayı amaçlıyor. Akademisyenler, öğretmenler ve
              öğrenciler aynı masada — aynı keşif yolculuğunda.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <Fact label="Akademik Konferans" value="120+" />
              <Fact label="Kampa Katılan Öğrenci" value="1.500+" />
              <Fact label="Üniversite İş Birliği" value="15" />
              <Fact label="Yıl Tecrübe" value="10+" />
            </div>
          </div>
        </div>
      </section>

      {/* Hedefler — Kazanımlar — Kapsam */}
      <section className="px-6 lg:px-8 py-24 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <PillarCard
              number="01"
              title="Hedefler"
              points={[
                "Geleceğin bilim insanlarını yetiştirmek",
                "Bilimsel bakış açısı kazandırmak",
                "Sorgulayan, araştıran nesiller yetiştirmek",
                "Akademisyen-öğrenci köprüsü kurmak",
              ]}
            />
            <PillarCard
              number="02"
              title="Kazanımlar"
              points={[
                "İleri düzey akademik bilgi (lise + lisans)",
                "Laboratuvar ve arazi tecrübesi",
                "Olimpiyat sınavlarına hazırlık",
                "Bilimsel araştırma yetisi",
              ]}
            />
            <PillarCard
              number="03"
              title="Kapsam"
              points={[
                "Biyoloji, Fizik, Kimya, Matematik",
                "Ekoloji, Jeoloji, Çevre Bilimleri",
                "Konferanslar, söyleşiler",
                "Bilim müzeleri ve sergiler",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Konferanslar */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow text-gold mb-6 block">Yusuf Durmuş'un Konferansları</span>
          <h2 className="font-serif text-5xl text-navy leading-tight mb-12">
            Türkiye'nin dört bir yanında <span className="italic text-mute">bilim sohbetleri.</span>
          </h2>
          <ul className="divide-y divide-border border-y border-border">
            {[
              ["Bilim İnsanı Olmanın Yolları", "Hacettepe Üniversitesi", "2025"],
              ["Genç Bilim İnsanlarına Tavsiyeler", "ODTÜ Bilim Şenliği", "2024"],
              ["Doğa ve Bilim — Ekolojik Düşünme", "İstanbul Üniversitesi", "2024"],
              ["TÜBİTAK Olimpiyatları'na Hazırlık", "Ankara Fen Lisesi", "2023"],
              ["Sorgulayan Genç Beyinler", "İzmir Bilim Festivali", "2023"],
            ].map(([t, p, y]) => (
              <li key={t} className="py-6 grid grid-cols-12 gap-4 items-baseline">
                <span className="col-span-1 font-serif text-gold">{y}</span>
                <span className="col-span-7 font-serif text-xl text-navy">{t}</span>
                <span className="col-span-4 text-sm text-mute text-right">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand />
    </SiteLayout>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-gold pl-4">
      <div className="font-serif text-3xl text-navy">{value}</div>
      <div className="eyebrow mt-1">{label}</div>
    </div>
  );
}

function PillarCard({ number, title, points }: { number: string; title: string; points: string[] }) {
  return (
    <div className="bg-card p-10 rounded-2xl border border-border shadow-card h-full">
      <div className="font-serif italic text-gold text-sm mb-4">— {number}</div>
      <h3 className="font-serif text-3xl text-navy mb-6">{title}</h3>
      <ul className="space-y-3">
        {points.map((p) => (
          <li key={p} className="text-mute flex items-start gap-3">
            <span className="text-gold mt-1.5 text-xs">◆</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
