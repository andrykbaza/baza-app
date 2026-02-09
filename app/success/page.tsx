export default function SuccessPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
          Оплата успішна
        </p>
        <h1 className="text-3xl font-semibold text-white">Дякуємо за оплату депозиту.</h1>
        <p className="text-slate-300">
          Оплата отримана — ми вже підтверджуємо вашу бронь. Найближчим часом надішлемо деталі
          сесії на email та звʼяжемось для фінального узгодження.
        </p>
      </header>
      <div className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-6 text-sm text-emerald-100">
        Якщо маєте питання, напишіть нам — ми на звʼязку.
      </div>
    </section>
  );
}
