import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader, CTABand } from "@/components/site/PageParts";
import g1Asset from "@/assets/gallery-1.jpg.asset.json";
import g2Asset from "@/assets/gallery-2.jpg.asset.json";
import g3Asset from "@/assets/gallery-3.jpg.asset.json";
import g4Asset from "@/assets/gallery-4.jpg.asset.json";
import heroLabAsset from "@/assets/hero-lab.jpg.asset.json";
import scienceAsset from "@/assets/program-science.jpg.asset.json";
import ecologyAsset from "@/assets/program-ecology.jpg.asset.json";

const g1 = g1Asset.url;
const g2 = g2Asset.url;
const g3 = g3Asset.url;
const g4 = g4Asset.url;
const heroLab = heroLabAsset.url;
const science = scienceAsset.url;
const ecology = ecologyAsset.url;

export const Route = createFileRoute("/galeri")({
  head: () => ({
    meta: [
      { title: "Galeri & Video — Hacettepe Bilim Kampları" },
      { name: "description", content: "Kamp anılarımızdan fotoğraflar ve videolar." },
      { property: "og:title", content: "Galeri — Hacettepe Bilim Kampları" },
      { property: "og:description", content: "Kamp anılarımız." },
      { property: "og:image", content: g4 },
    ],
  }),
  component: Gallery,
});

const IMAGES = [g1, g2, g3, g4, heroLab, science, ecology];

function Gallery() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Galeri & Video"
        title="Kamp Anıları"
        subtitle="Eğitim sürecinden, doğa keşiflerinden ve laboratuvar çalışmalarından kareler."
      />

      <section className="px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {IMAGES.map((src, i) => (
              <div
                key={i}
                className="mb-4 break-inside-avoid overflow-hidden rounded-2xl group"
              >
                <img
                  src={src}
                  alt={`Kamp anısı ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
