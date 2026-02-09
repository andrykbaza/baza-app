const services = [
  {
    name: "Запис вокалу / інструментів",
    details: "Погодинні сесії з інженером, контрольні кімнати та комфорт."
  },
  {
    name: "Зведення",
    details: "Баланс, простір, динаміка та підготовка до релізу."
  },
  {
    name: "Мастеринг",
    details: "Фінальна доводка гучності, тону та цілісності треку."
  },
  {
    name: "Пісня під ключ",
    details: "Повний цикл: запис → зведення → мастеринг з нашим контролем."
  }
];

export default function ServicesPage() {
  return (
    <section className="space-y-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
          Послуги
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Все, що потрібно для релізу.</h1>
        <p className="mt-3 text-slate-300">
          Працюємо з артистами, брендами й командами. Від коротких сесій до комплексних пакетів.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.name}
            className="rounded-2xl border border-slate-800/60 bg-slate-900/60 p-6"
          >
            <h2 className="text-lg font-semibold text-white">{service.name}</h2>
            <p className="mt-2 text-sm text-slate-300">{service.details}</p>
            <a
              href="/booking"
              className="mt-5 inline-flex rounded-full bg-purple-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-purple-400"
            >
              Записатись
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
