const steps = [
  {
    title: "Обрати послугу",
    description: "Формат сесії, задачі та бажаний результат."
  },
  {
    title: "Погодити час",
    description: "Підберемо вікно у студійному графіку."
  },
  {
    title: "Підтвердити заявку",
    description: "Ми звʼяжемось і зафіксуємо бронь."
  }
];

export default function BookingPage() {
  return (
    <section className="space-y-10">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">Запис</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Забронювати студію.</h1>
        <p className="mt-3 text-slate-300">
          Заповніть форму, і ми звʼяжемось для підтвердження часу.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.title}
            className="rounded-2xl border border-slate-800/60 bg-slate-900/60 p-6"
          >
            <h2 className="text-lg font-semibold text-white">{step.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{step.description}</p>
          </article>
        ))}
      </div>

      <form className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Імʼя та прізвище
            <input
              className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-purple-400 focus:outline-none"
              placeholder="Артем Коваль"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Email
            <input
              className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-purple-400 focus:outline-none"
              placeholder="artist@email.com"
              type="email"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Телефон
            <input
              className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-purple-400 focus:outline-none"
              placeholder="+38 (0__) ___ __ __"
              type="tel"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Послуга
            <select className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-purple-400 focus:outline-none">
              <option>Запис вокалу / інструментів</option>
              <option>Зведення</option>
              <option>Мастеринг</option>
              <option>Пісня під ключ</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Дата
            <input
              className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-purple-400 focus:outline-none"
              type="date"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Час
            <input
              className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-purple-400 focus:outline-none"
              type="time"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Тривалість (години)
            <input
              className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-purple-400 focus:outline-none"
              min="1"
              placeholder="2"
              type="number"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200 md:col-span-2">
            Коментар
            <textarea
              className="min-h-[120px] rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-purple-400 focus:outline-none"
              placeholder="Опишіть задачу, референси, побажання."
            />
          </label>
        </div>
        <button
          className="mt-6 rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-400"
          type="button"
        >
          Надіслати заявку
        </button>
      </form>
    </section>
  );
}
