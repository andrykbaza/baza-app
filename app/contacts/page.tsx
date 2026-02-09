const contacts = [
  { label: "Studio phone", value: "+1 (555) 010-0824" },
  { label: "Email", value: "hello@bazastudio.com" },
  { label: "Location", value: "129 Seaside Ave, Suite 12" }
];

export default function ContactsPage() {
  return (
    <section className="space-y-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">Contacts</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Let’s connect.</h1>
        <p className="mt-3 text-slate-600">
          Reach out anytime. We respond within one business day.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {contacts.map((item) => (
          <article key={item.label} className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              {item.label}
            </h2>
            <p className="mt-3 text-lg font-semibold text-slate-900">{item.value}</p>
          </article>
        ))}
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Studio hours</h2>
        <p className="mt-2 text-sm text-slate-600">Monday – Sunday · 9:00–20:00</p>
      </div>
    </section>
  );
}
