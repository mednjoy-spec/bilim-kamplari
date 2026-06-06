import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroLabAsset from "@/assets/hero-lab.jpg.asset.json";
import programScienceAsset from "@/assets/program-science.jpg.asset.json";
import programEcologyAsset from "@/assets/program-ecology.jpg.asset.json";
import yusufPortraitAsset from "@/assets/yusuf-durmus.jpg.asset.json";
import gallery1Asset from "@/assets/gallery-1.jpg.asset.json";
import gallery2Asset from "@/assets/gallery-2.jpg.asset.json";
import gallery3Asset from "@/assets/gallery-3.jpg.asset.json";

const heroLab = heroLabAsset.url;
const programScience = programScienceAsset.url;
const programEcology = programEcologyAsset.url;
const yusufPortrait = yusufPortraitAsset.url;
const gallery1 = gallery1Asset.url;
const gallery2 = gallery2Asset.url;
const gallery3 = gallery3Asset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hacettepe Bilim Kampları — 2026 Yaz Programları" },
      {
        name: "description",
        content:
          "Öğretim Görevlisi Yusuf Durmuş yürütücülüğünde, üniversiteye ve TÜBİTAK olimpiyatlarına hazırlık ile ekoloji temelli doğa eğitimi programları.",
      },
      { property: "og:title", content: "Hacettepe Bilim Kampları — 2026 Yaz Programları" },
      {
        property: "og:description",
        content:
          "Akademik derinlik ve doğa keşfi ile dolu, lise öğrencilerine yönelik seçkin yaz kamplarımıza katılın.",
      },
      { property: "og:image", content: heroLab },
      { name: "twitter:image", content: heroLab },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative px-6 lg:px-8 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 gradient-paper pointer-events-none" />
        <div className="absolute inset-0 bg-grid-soft opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal">
              <span className="eyebrow mb-6 block">Hacettepe · 2026 Yaz Dönemi</span>
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.92] text-navy mb-8">
                Geleceğin Bilim
                <br />
                <span className="italic text-mute">İnsanları Yetişiyor.</span>
              </h1>
              <p className="text-xl text-mute italic max-w-lg leading-relaxed mb-10">
                Akademik derinlik ve doğa keşfi ile dolu bir serüvene davetlisiniz. Türkiye'nin
                seçkin akademisyenleri eşliğinde, Kızılcahamam'ın eşsiz doğasında.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#programlar"
                  className="px-8 py-4 bg-navy text-paper font-medium rounded-full hover:bg-navy-soft transition-all shadow-elevated hover:-translate-y-0.5 duration-300"
                >
                  Programları İncele
                </a>
                <Link
                  to="/basvuru"
                  className="px-8 py-4 border border-border bg-card font-medium rounded-full hover:border-navy/30 transition-all"
                >
                  İletişime Geç
                </Link>
              </div>
            </div>

            <div className="relative reveal reveal-delay-1">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated outline outline-1 -outline-offset-1 outline-black/5">
                <img
                  src={heroLab}
                  alt="Hacettepe Bilim Kampları öğrencileri laboratuvarda"
                  width={1280}
                  height={1600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-4 lg:-left-8 bg-card p-7 rounded-2xl shadow-elevated max-w-[260px] border border-border">
                <div className="font-serif text-3xl text-gold mb-1">2026 Yaz</div>
                <div className="eyebrow">Kayıt Dönemi Açıldı</div>
              </div>
              <div className="absolute -top-6 -right-4 lg:-right-8 bg-navy text-paper p-6 rounded-2xl max-w-[200px] shadow-elevated hidden md:block">
                <div className="font-serif text-2xl mb-1">90 Öğrenci</div>
                <div className="text-[10px] uppercase tracking-widest text-paper/60">
                  Sınırlı Kontenjan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <span className="eyebrow text-gold mb-8 block">Misyonumuz</span>
          <p className="font-serif text-3xl md:text-5xl leading-[1.15] text-navy">
            "Konusunda deneyimli akademisyenler ve seçkin öğretmenleri,{" "}
            <span className="italic text-mute">geleceğin bilim insanlarıyla</span>{" "}
            buluşturmak; sorgulayan, araştıran ve ufku açık bir nesil yetiştirmek."
          </p>
          <div className="mt-10 inline-flex items-center gap-3 text-sm text-mute">
            <span className="h-px w-12 bg-border" />
            Öğr. Gör. Yusuf Durmuş
            <span className="h-px w-12 bg-border" />
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programlar" className="bg-navy text-paper px-6 lg:px-8 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
            <div>
              <span className="eyebrow text-gold-soft mb-4 block">2026 Programları</span>
              <h2 className="font-serif text-5xl md:text-6xl">Eğitim Programları</h2>
            </div>
            <p className="text-paper/60 max-w-sm text-sm leading-relaxed">
              Kızılcahamam'ın eşsiz doğasında, Türkiye'nin seçkin akademisyenleri eşliğinde
              yoğunlaştırılmış iki ayrı program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            <ProgramCard
              number="01"
              image={programScience}
              title="Hacettepe Bilim Kampları"
              tags={["7–12. Sınıf", "Olimpiyat Hazırlık"]}
              description="Üniversiteye hazırlık (TYT-AYT) ve TÜBİTAK Bilim Olimpiyatları odaklı, günde 10 saat yoğun akademik eğitim."
              meta={[
                ["Tarih", "06 – 14 Temmuz 2026"],
                ["Süre", "8 Gün / 7 Gece · ~80 Saat"],
                ["Kontenjan", "90 Öğrenci"],
                ["Ücret", "36.000 TL"],
              ]}
            />
            <ProgramCard
              number="02"
              image={programEcology}
              title="Ekoloji Temelli Doğa Eğitimi"
              tags={["4–7. Sınıf", "Aile Katılımlı"]}
              description="Fosil incelemeleri, mikroskop uygulamaları, sucul ve karasal ekosistem gözlemleri ile yaşayarak öğrenme."
              meta={[
                ["Tarih", "01 – 06 Temmuz 2026"],
                ["Süre", "6 Gün / 5 Gece"],
                ["Kontenjan", "20 Öğrenci + 20 Aile"],
                ["Ücret", "26.000 TL — 39.000 TL"],
              ]}
            />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="px-6 lg:px-8 py-16 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            ["90", "Öğrenci Kontenjanı"],
            ["80+", "Eğitim Saati"],
            ["5★", "Otel Konaklaması"],
            ["2026", "Yaz Dönemi"],
          ].map(([n, l]) => (
            <div key={l} className="flex flex-col">
              <span className="font-serif text-5xl md:text-6xl text-navy">{n}</span>
              <span className="eyebrow mt-2">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="px-6 lg:px-8 py-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={yusufPortrait}
                alt="Yusuf Durmuş — Proje Yürütücüsü"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur p-6 rounded-2xl border border-border">
              <div className="font-serif text-2xl text-navy">Yusuf Durmuş</div>
              <div className="text-sm text-mute">Proje Yürütücüsü · Öğretim Görevlisi</div>
            </div>
          </div>
          <div>
            <span className="eyebrow text-gold mb-6 block">Liderlik & Vizyon</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-navy mb-8">
              Akademik birikim,
              <br />
              <span className="italic text-mute">doğanın laboratuvarı.</span>
            </h2>
            <p className="text-lg text-mute leading-relaxed mb-8">
              Programlarımız, Öğretim Görevlisi <strong className="text-navy">Yusuf Durmuş</strong>{" "}
              yürütücülüğünde, ülkemizin seçkin üniversitelerinden akademisyenler ve deneyimli
              öğretmenlerle hayata geçirilmektedir. Genç bilim insanlarımıza yalnızca bilgi değil,
              sorgulayan bir bakış açısı kazandırıyoruz.
            </p>
            <Link
              to="/kesfedin"
              className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all"
            >
              Vizyonumuzu Tanıyın <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="px-6 lg:px-8 py-32 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <span className="eyebrow mb-6 block">Öğrenci Deneyimleri</span>
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {[
              {
                quote:
                  "Hacettepe Bilim Kampı sayesinde sadece teorik bilgi edinmedim, bir bilim insanı gibi düşünmeyi öğrendim.",
                name: "Elif Y.",
                result: "TÜBİTAK Olimpiyatları",
              },
              {
                quote:
                  "Akademisyen hocalarımızla aynı masayı paylaşmak, bilime olan ilgimi tamamen değiştirdi.",
                name: "Mert K.",
                result: "Hacettepe Tıp Fakültesi",
              },
              {
                quote:
                  "Yoğun program beni korkutmuştu ama hocalarımızın samimiyeti her anımızı değerli kıldı.",
                name: "Selin A.",
                result: "Fen Bilimleri Olimpiyat Madalyası",
              },
            ].map((t) => (
              <figure key={t.name} className="bg-card p-8 rounded-2xl border border-border shadow-card">
                <svg className="w-8 h-8 text-gold mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="font-serif text-xl leading-relaxed text-navy mb-8">
                  {t.quote}
                </blockquote>
                <figcaption>
                  <div className="font-medium text-navy">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-gold mt-1">{t.result}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="px-6 lg:px-8 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="eyebrow mb-4 block">Kamp Yaşamı</span>
              <h2 className="font-serif text-5xl text-navy">Galeri</h2>
            </div>
            <Link to="/galeri" className="text-gold font-medium hover:opacity-70 transition-opacity">
              Tümünü Gör →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[gallery1, gallery2, gallery3].map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl ${i === 0 ? "row-span-2 col-span-2 md:col-span-1 md:row-span-2 aspect-square md:aspect-[3/4]" : "aspect-square"}`}
              >
                <img
                  src={src}
                  alt="Kamp yaşamından bir kare"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 lg:px-8 pb-32">
        <div className="max-w-7xl mx-auto bg-navy rounded-[2rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/10 to-transparent pointer-events-none" />
          <div className="relative max-w-2xl">
            <h2 className="font-serif text-5xl md:text-6xl text-paper leading-[1.05] mb-6">
              Kontenjanlar <span className="italic text-gold-soft">sınırlıdır.</span>
            </h2>
            <p className="text-paper/70 text-lg mb-10 leading-relaxed">
              Başvurular öncelik sırasına göre değerlendirilecektir. Çocuğunuzun geleceğine bilimsel
              bir yatırım yapın.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/basvuru"
                className="px-8 py-4 bg-gold text-paper font-medium rounded-full hover:bg-gold-soft hover:text-navy transition-all shadow-elevated hover:-translate-y-0.5 duration-300"
              >
                Başvuru Formu →
              </Link>
              <a
                href="tel:+905325112502"
                className="px-8 py-4 border border-paper/20 text-paper font-medium rounded-full hover:bg-paper/5 transition-colors"
              >
                0532 511 25 02
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ProgramCard({
  number,
  image,
  title,
  tags,
  description,
  meta,
}: {
  number: string;
  image: string;
  title: string;
  tags: string[];
  description: string;
  meta: [string, string][];
}) {
  return (
    <article className="group">
      <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-8 outline outline-1 -outline-offset-1 outline-white/5">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
      </div>
      <div className="flex items-start justify-between gap-6 mb-6">
        <div>
          <div className="font-serif italic text-gold-soft text-sm mb-3">— {number}</div>
          <h3 className="font-serif text-3xl md:text-4xl">{title}</h3>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap mb-6">
        {tags.map((t) => (
          <span
            key={t}
            className="px-3 py-1 border border-paper/20 rounded-full text-[10px] uppercase tracking-widest"
          >
            {t}
          </span>
        ))}
      </div>
      <p className="text-paper/60 leading-relaxed mb-8">{description}</p>
      <dl className="grid grid-cols-2 gap-y-4 pt-6 border-t border-paper/10">
        {meta.map(([k, v]) => (
          <div key={k}>
            <dt className="text-[10px] uppercase tracking-widest text-paper/40 mb-1">{k}</dt>
            <dd className="text-sm text-paper">{v}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
