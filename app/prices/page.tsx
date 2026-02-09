const tiers = [
  {
    name: "Essential",
    price: "$85",
    perks: ["45-minute session", "Personalized plan", "Product recommendations"]
  },
  {
    name: "Elevated",
    price: "$140",
    perks: ["90-minute session", "Add-on treatments", "Priority scheduling"]
  },
  {
    name: "Membership",
    price: "$240/mo",
    perks: ["2 services monthly", "Complimentary upgrades", "Concierge support"]
  }
];

export default function PricesPage() {
  return (
    <section className="space-y-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">Prices</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Simple, transparent pricing.</h1>
        <p className="mt-3 text-slate-600">
          Packages update weekly and are synced with our availability calendar.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <article key={tier.name} className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{tier.name}</h2>
            <p className="mt-2 text-3xl font-semibold text-slate-900">{tier.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {tier.perks.map((perk) => (
                <li key={perk}>• {perk}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
