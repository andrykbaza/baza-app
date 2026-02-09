export default function CancelPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-300">
          Оплату скасовано
        </p>
        <h1 className="text-3xl font-semibold text-white">Депозит ще не сплачено.</h1>
        <p className="text-slate-300">
          Ви можете повернутися до бронювання та повторити оплату депозиту, коли будете готові.
        </p>
      </header>
      <div className="rounded-3xl border border-rose-400/20 bg-rose-500/10 p-6 text-sm text-rose-100">
        Якщо виникли труднощі з оплатою, повідомте нам — допоможемо завершити бронювання.
      </div>
    </section>
  );
}
