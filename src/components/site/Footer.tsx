import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24 mb-20">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] mb-12 text-navy">
              Geleceğinizi uzmanlarla
              <br />
              <span className="italic text-mute">şekillendirin.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <div className="eyebrow mb-4">İletişim</div>
                <div className="text-lg font-medium text-navy">Yusuf Durmuş</div>
                <div className="text-mute mb-2 text-sm">Proje Yürütücüsü · Öğretim Görevlisi</div>
                <a
                  href="tel:+905325112502"
                  className="text-gold font-medium hover:opacity-70 transition-opacity"
                >
                  0532 511 25 02
                </a>
              </div>
              <div>
                <div className="eyebrow mb-4">Lokasyon</div>
                <div className="text-lg text-navy">Kızılcahamam / Ankara</div>
                <div className="text-mute text-sm">Ankara Otogar — Otel ücretsiz transfer</div>
              </div>
            </div>
          </div>

          <div className="bg-secondary p-10 rounded-3xl border border-border">
            <div className="eyebrow mb-6 text-navy">Hızlı Başvuru</div>
            <p className="text-sm text-mute mb-6">
              Kontenjanlar sınırlıdır. Formu doldurun, ekibimiz sizinle iletişime geçsin.
            </p>
            <Link
              to="/basvuru"
              className="block w-full text-center bg-navy text-paper py-4 rounded-full font-medium hover:bg-navy-soft transition-colors"
            >
              Başvuru Formuna Git →
            </Link>
            <div className="grid grid-cols-3 gap-2 mt-8 pt-6 border-t border-border text-[10px] uppercase tracking-widest text-mute text-center">
              <div>Hacettepe<br/><span className="text-navy">İş Birliği</span></div>
              <div>5★<br/><span className="text-navy">Konaklama</span></div>
              <div>Akademik<br/><span className="text-navy">Kadro</span></div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-mute">
          <div>© 2026 Hacettepe Bilim Kampları. Tüm Hakları Saklıdır.</div>
          <div className="flex gap-8">
            <Link to="/kesfedin" className="hover:text-navy transition-colors">Kurumsal</Link>
            <a href="#" className="hover:text-navy transition-colors">Kişisel Verilerin Korunması</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
