import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-14">
      <div className="studio-hero rounded-3xl px-8 py-12 md:px-12 md:py-16">
        <div className="relative z-10 max-w-2xl">
          <p className="brand-font text-xs uppercase tracking-[0.4em] text-purple-300">
            baza.prod
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Студія звукозапису у Львові
          </h1>
          <p className="mt-4 text-lg text-slate-200">
            Сучасний простір для артистів і команд, які хочуть впевнений звук. Запис, зведення та
            мастеринг з фокусом на результат.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-400"
            >
              Записатись
            </Link>
            <Link
              href="/prices"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Ціни
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Запис",
            description: "Вокал, інструменти та продакшн-сесії з чистою акустикою."
          },
          {
            title: "Зведення",
            description: "Зведення, що підкреслює характер треку та тримає баланс."
          },
          {
            title: "Мастеринг",
            description: "Фінальний полірувальний етап для стрімінгів і релізу."
          }
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800/60 bg-slate-900/70 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>

      <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
            Чому ми
          </p>
          <h2 className="text-2xl font-semibold text-white">
            Чіткий процес та уважний звук.
          </h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>• Професійна акустика та контрольована кімната.</li>
            <li>• Інженер, який говорить мовою артистів.</li>
            <li>• Актуальне обладнання та чистий сигнал.</li>
            <li>• Комфортний простір для довгих сесій.</li>
            <li>• Швидкий результат без втрати якості.</li>
          </ul>
        </div>
        <div className="space-y-4 rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
            Процес
          </p>
          <h2 className="text-2xl font-semibold text-white">Від заявки до релізу</h2>
          <div className="space-y-4 text-sm text-slate-300">
            <div>
              <p className="text-base font-semibold text-white">01 · Бронь</p>
              <p>Погоджуємо дату, формат та задачі.</p>
            </div>
            <div>
              <p className="text-base font-semibold text-white">02 · Сесія</p>
              <p>Записуємо, шукаємо найкращі тейки, працюємо над звучанням.</p>
            </div>
            <div>
              <p className="text-base font-semibold text-white">03 · Готовий трек</p>
              <p>Зведення/мастеринг та передача фінальних файлів.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/60 bg-slate-900/50 p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
              Обладнання
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Стабільний саунд без зайвого шуму
            </h2>
          </div>
          <p className="text-sm text-slate-300">
            Конфігурація підібрана під сучасний поп/хіп-хоп/інді звучок.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            "Мікрофони для вокалу та інструментів",
            "Преампи та чистий сигнал",
            "Монітори з точним контролем",
            "Акустика та шумоізоляція"
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800/60 bg-slate-950/50 p-4 text-sm text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            name: "Артем, артист",
            quote: "Звук чистий, атмосфера комфортна. Встигли записати два треки за вечір."
          },
          {
            name: "Іра, продюсерка",
            quote: "Швидкий фідбек, грамотне зведення, без зайвого технічного шуму."
          },
          {
            name: "Макс, гурт",
            quote: "Команда чує що потрібно і пропонує адекватні рішення."
          }
        ].map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-slate-800/60 bg-slate-900/60 p-6"
          >
            <p className="text-sm text-slate-300">“{item.quote}”</p>
            <p className="mt-4 text-sm font-semibold text-white">{item.name}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">FAQ</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Питання, які чуємо часто</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "Чи потрібна передоплата?",
              a: "Так, для броні беремо 30% вартості сесії."
            },
            {
              q: "Скільки триває сесія?",
              a: "Мінімум 2 години, далі — як домовимося."
            },
            {
              q: "Що взяти з собою?",
              a: "Тексти, інструменти/біт, референси та гарний настрій."
            },
            {
              q: "Коли буде готовий трек?",
              a: "Зазвичай 2–5 днів після сесії, залежить від задачі."
            },
            {
              q: "Чи можна працювати онлайн?",
              a: "Так, зведення та мастеринг можемо зробити дистанційно."
            }
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-slate-800/60 bg-slate-900/60 p-6"
            >
              <p className="text-sm font-semibold text-white">{item.q}</p>
              <p className="mt-2 text-sm text-slate-300">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
