"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

export default function BookingConfirmationPage() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId") ?? "";
  const priceParam = searchParams.get("price");
  const price = useMemo(() => Number(priceParam ?? 0), [priceParam]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (!bookingId || !Number.isFinite(price) || price <= 0) {
      setErrorMessage("Неможливо ініціювати оплату. Перевірте дані бронювання.");
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId, price })
      });

      const data = await response.json();

      if (!response.ok || !data?.url) {
        throw new Error("Checkout session failed.");
      }

      window.location.href = data.url as string;
    } catch (error) {
      setErrorMessage("Не вдалося створити платіжну сесію. Спробуйте ще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
          Підтвердження бронювання
        </p>
        <h1 className="text-3xl font-semibold text-white">Ваша заявка отримана.</h1>
        <p className="text-slate-300">
          Щоб закріпити час у розкладі, сплатіть депозит. Після оплати ми підтвердимо бронь та
          надішлемо деталі.
        </p>
      </header>

      <div className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8">
        <div className="space-y-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">ID бронювання</p>
            <p className="mt-1 text-lg font-semibold text-white">
              {bookingId || "Буде доступно після створення заявки"}
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Сума депозиту</p>
            <p className="mt-1 text-2xl font-semibold text-white">{price || 0} ₴</p>
          </div>
        </div>

        {errorMessage ? <p className="mt-4 text-sm text-rose-200">{errorMessage}</p> : null}

        <button
          className="mt-6 rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-400 disabled:cursor-not-allowed disabled:opacity-70"
          type="button"
          onClick={handleCheckout}
          disabled={isLoading}
        >
          {isLoading ? "Переходимо до оплати..." : "Оплатити депозит"}
        </button>
      </div>
    </section>
  );
}
