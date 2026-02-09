import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="rounded-3xl bg-white p-10 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
          Welcome to Baza Studio
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
          A calm, elevated space for modern self-care.
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          We blend precision services with restorative rituals. Book your next appointment in
          seconds and track your visits in one place.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/booking"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Book now
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
          >
            Explore services
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Tailored treatments",
            description: "Every service begins with a consultation to align on your goals."
          },
          {
            title: "Transparent pricing",
            description: "No hidden fees. Packages and memberships update in real time."
          },
          {
            title: "Flexible booking",
            description: "Manage upcoming appointments, reminders, and reschedules effortlessly."
          }
        ].map((item) => (
          <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
