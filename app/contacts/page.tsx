const contacts = [
  { label: "Телефон", value: "+38 (0__) ___ __ __" },
  { label: "Instagram", value: "@baza.prod" },
  { label: "Telegram", value: "@baza_prod" },
  { label: "Email", value: "hello@baza.prod" }
];

export default function ContactsPage() {
  return (
    <section className="space-y-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">Контакти</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">На звʼязку.</h1>
        <p className="mt-3 text-slate-300">
          Напишіть нам або залиште заявку — відповімо швидко.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {contacts.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-slate-800/60 bg-slate-900/60 p-6"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              {item.label}
            </h2>
            <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8">
          <h2 className="text-lg font-semibold text-white">Графік роботи</h2>
          <p className="mt-2 text-sm text-slate-300">Пн–Нд · 10:00–22:00</p>
        </div>
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8">
          <h2 className="text-lg font-semibold text-white">Як нас знайти</h2>
          <p className="mt-2 text-sm text-slate-300">
            Адреса: ваш район, центр міста (уточнимо після бронювання).
          </p>
          <p className="mt-3 text-sm text-slate-300">
            Якщо потрібно — надішлемо геолокацію в Telegram/Instagram.
          </p>
        </div>
      </div>
    </section>
  );
}
