import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "./kesfedin";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/basvuru")({
  head: () => ({
    meta: [
      { title: "Başvuru Formu — Hacettepe Bilim Kampları 2026" },
      { name: "description", content: "2026 yaz dönemi için ön başvuru formu. Kontenjanlar sınırlıdır." },
      { property: "og:title", content: "Başvuru Formu — Hacettepe Bilim Kampları 2026" },
      { property: "og:description", content: "Ön başvurunuzu hemen tamamlayın." },
    ],
  }),
  component: Apply,
});

const schema = z.object({
  studentName: z.string().trim().min(2, "Ad Soyad zorunludur").max(100),
  grade: z.string().min(1, "Sınıf seçiniz").max(20),
  parentName: z.string().trim().min(2, "Veli adı zorunludur").max(100),
  phone: z.string().trim().min(10, "Geçerli telefon giriniz").max(20),
  email: z.string().trim().email("Geçerli e-posta giriniz").max(255),
  program: z.enum(["bilim-kamplari", "ekoloji"]),
  note: z.string().trim().max(1000).optional(),
});

function Apply() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("success");
    e.currentTarget.reset();
  }

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Başvuru Formu"
        title="Yerinizi ayırtın."
        subtitle="Kontenjanlar sınırlıdır ve başvurular öncelik sırasına göre değerlendirilecektir."
      />

      <section className="px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-12">
          <form
            onSubmit={onSubmit}
            className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-card space-y-6"
          >
            {status === "success" && (
              <div className="p-4 rounded-xl bg-emerald/10 border border-emerald/30 text-emerald text-sm">
                Başvurunuz alındı. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
              </div>
            )}

            <Field label="Öğrencinin Adı Soyadı" name="studentName" error={errors.studentName} />
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Sınıf" name="grade" placeholder="Örn: 10. Sınıf" error={errors.grade} />
              <SelectField
                label="Program"
                name="program"
                error={errors.program}
                options={[
                  ["bilim-kamplari", "Bilim Kampları (7–12. Sınıf)"],
                  ["ekoloji", "Ekoloji Doğa Eğitimi (4–7. Sınıf)"],
                ]}
              />
            </div>
            <Field label="Veli Adı Soyadı" name="parentName" error={errors.parentName} />
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Telefon" name="phone" type="tel" placeholder="0532..." error={errors.phone} />
              <Field label="E-posta" name="email" type="email" error={errors.email} />
            </div>
            <div>
              <label className="eyebrow text-navy mb-3 block">Notunuz</label>
              <textarea
                name="note"
                rows={4}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/40 transition-all"
                placeholder="Eklemek istedikleriniz..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-navy text-paper py-4 rounded-full font-medium hover:bg-navy-soft transition-colors shadow-elevated"
            >
              Başvuruyu Gönder →
            </button>
          </form>

          <aside className="space-y-8">
            <div className="bg-navy text-paper p-8 rounded-3xl">
              <div className="eyebrow text-gold-soft mb-4">Direkt İletişim</div>
              <p className="font-serif text-2xl mb-2">Yusuf Durmuş</p>
              <p className="text-paper/60 text-sm mb-6">Proje Yürütücüsü · Öğretim Görevlisi</p>
              <a
                href="tel:+905325112502"
                className="block text-3xl font-serif text-gold-soft hover:opacity-80 transition-opacity"
              >
                0532 511 25 02
              </a>
            </div>

            <div className="bg-secondary p-8 rounded-3xl">
              <div className="eyebrow mb-4 text-navy">Önemli Bilgiler</div>
              <ul className="space-y-3 text-sm text-mute">
                <li className="flex gap-3"><span className="text-gold">◆</span>Kontenjanlar sınırlıdır</li>
                <li className="flex gap-3"><span className="text-gold">◆</span>Öncelik sırasına göre değerlendirme</li>
                <li className="flex gap-3"><span className="text-gold">◆</span>5★ otel + tam pansiyon dahil</li>
                <li className="flex gap-3"><span className="text-gold">◆</span>Ücretsiz Ankara Otogar transferi</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="eyebrow text-navy mb-3 block">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full bg-background border rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all ${
          error ? "border-destructive" : "border-border focus:border-gold/40"
        }`}
      />
      {error && <p className="text-xs text-destructive mt-2">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  error,
}: {
  label: string;
  name: string;
  options: [string, string][];
  error?: string;
}) {
  return (
    <div>
      <label className="eyebrow text-navy mb-3 block">{label}</label>
      <select
        name={name}
        defaultValue=""
        className={`w-full bg-background border rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all ${
          error ? "border-destructive" : "border-border focus:border-gold/40"
        }`}
      >
        <option value="" disabled>Seçiniz</option>
        {options.map(([v, l]) => (
          <option key={v} value={v}>{l}</option>
        ))}
      </select>
      {error && <p className="text-xs text-destructive mt-2">{error}</p>}
    </div>
  );
}
