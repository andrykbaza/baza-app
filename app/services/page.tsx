const services = [
  {
    name: "Signature styling",
    details: "Hair, makeup, and wardrobe styling tailored for events and shoots."
  },
  {
    name: "Wellness reset",
    details: "A 60-minute ritual that blends aromatherapy and restorative bodywork."
  },
  {
    name: "Express glow",
    details: "Quick refresh treatments designed for lunch breaks or pre-event prep."
  }
];

export default function ServicesPage() {
  return (
    <section className="space-y-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">Services</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Designed for every rhythm.</h1>
        <p className="mt-3 text-slate-600">
          Choose from curated services or build a custom plan with our studio team.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.name} className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{service.name}</h2>
            <p className="mt-2 text-sm text-slate-600">{service.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
