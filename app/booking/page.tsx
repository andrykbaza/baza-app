const steps = [
  {
    title: "Pick a service",
    description: "Select the service type and preferred specialist."
  },
  {
    title: "Choose a time",
    description: "See real-time availability synced to our studio schedule."
  },
  {
    title: "Confirm details",
    description: "Submit your contact info and receive instant confirmation."
  }
];

export default function BookingPage() {
  return (
    <section className="space-y-10">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">Booking</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Reserve your visit.</h1>
        <p className="mt-3 text-slate-600">
          Fill out the form below or call us to book a private experience.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <article key={step.title} className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{step.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{step.description}</p>
          </article>
        ))}
      </div>

      <form className="rounded-3xl bg-white p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Full name
            <input
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none"
              placeholder="Alex Morgan"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Email address
            <input
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none"
              placeholder="alex@domain.com"
              type="email"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Service
            <input
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none"
              placeholder="Signature styling"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Preferred date
            <input
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none"
              type="date"
            />
          </label>
        </div>
        <button
          className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          type="button"
        >
          Request booking
        </button>
      </form>
    </section>
  );
}
