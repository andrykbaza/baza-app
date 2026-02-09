const tiers = [
  {
    name: "Запис",
    price: "1000 грн / год",
    perks: ["Сесія з інженером", "Комфортна контрольна кімната", "Підготовка перед записом"]
  },
  {
    name: "Зведення",
    price: "2200 грн / трек",
    perks: ["Баланс, простір, динаміка", "1 раунд правок включено", "Формати для релізу"]
  },
  {
    name: "Мастеринг",
    price: "1200 грн / трек",
    perks: ["Фінальний глянець", "Під стрімінги", "LUFS контроль"]
  }
];

const packages = [
  {
    name: "4 години",
    price: "3600 грн",
    details: "Для коротких сесій та вокальних треків."
  },
  {
    name: "8 годин",
    price: "6800 грн",
    details: "Повний студійний день для гуртів та продакшну."
  },
  {
    name: "Пісня під ключ",
    price: "від 6500 грн",
    details: "Запис, зведення, мастеринг та супровід релізу."
  }
];

export default function PricesPage() {
  return (
    <section className="space-y-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">Ціни</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Прозорі тарифи без сюрпризів.</h1>
        <p className="mt-3 text-slate-300">
          Ціни можуть залежати від складності, напишіть нам.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className="rounded-2xl border border-slate-800/60 bg-slate-900/60 p-6"
          >
            <h2 className="text-lg font-semibold text-white">{tier.name}</h2>
            <p className="mt-2 text-3xl font-semibold text-white">{tier.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {tier.perks.map((perk) => (
                <li key={perk}>• {perk}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <section className="rounded-3xl border border-slate-800/60 bg-slate-900/50 p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2 className="text-2xl font-semibold text-white">Пакети</h2>
          <p className="text-sm text-slate-300">Обирайте формат під ваш графік та масштаб.</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {packages.map((pack) => (
            <div
              key={pack.name}
              className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-5"
            >
              <p className="text-sm font-semibold text-white">{pack.name}</p>
              <p className="mt-2 text-2xl font-semibold text-purple-300">{pack.price}</p>
              <p className="mt-2 text-sm text-slate-300">{pack.details}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
