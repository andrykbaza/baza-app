"use client";

import { useRouter } from "next/navigation";
import { type ChangeEvent, type FormEvent, useMemo, useState } from "react";

import {
  DEFAULT_DEPOSIT_PERCENT,
  bookingServices,
  calculateDeposit,
  getServicePricing
} from "@/lib/bookingPricing";

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

const defaultService = bookingServices[0];

export default function BookingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService.label,
    date: "",
    time: "",
    duration: 2,
    comment: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { totalPrice, depositAmount } = useMemo(() => {
    const service = getServicePricing(formData.service);
    const computedDeposit = calculateDeposit(service.totalPrice);

    return {
      totalPrice: service.totalPrice,
      depositAmount: computedDeposit
    };
  }, [formData.service]);

  const handleChange =
    (field: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = field === "duration" ? Number(event.target.value) : event.target.value;
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          date: formData.date,
          time: formData.time,
          duration: formData.duration,
          comment: formData.comment
        })
      });

      if (!response.ok) {
        throw new Error("Unable to create booking.");
      }

      const data = await response.json();
      const bookingId = data?.booking?.id as string | undefined;

      if (!bookingId) {
        throw new Error("Booking ID is missing.");
      }

      const createdDepositAmount = Number(data?.booking?.depositAmount ?? depositAmount);

      router.push(`/booking/confirmation?bookingId=${bookingId}&price=${createdDepositAmount}`);
    } catch (error) {
      setErrorMessage("Не вдалося створити бронювання. Спробуйте ще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <form
        className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Імʼя та прізвище
            <input
              className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-purple-400 focus:outline-none"
              placeholder="Артем Коваль"
              value={formData.name}
              onChange={handleChange("name")}
              type="text"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Email
            <input
              className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-purple-400 focus:outline-none"
              placeholder="artist@email.com"
              value={formData.email}
              onChange={handleChange("email")}
              type="email"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Телефон
            <input
              className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-purple-400 focus:outline-none"
              placeholder="+38 (0__) ___ __ __"
              value={formData.phone}
              onChange={handleChange("phone")}
              type="tel"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Послуга
            <select
              className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-purple-400 focus:outline-none"
              value={formData.service}
              onChange={handleChange("service")}
            >
              {bookingServices.map((service) => (
                <option key={service.label} value={service.label}>
                  {service.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Дата
            <input
              className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-purple-400 focus:outline-none"
              value={formData.date}
              onChange={handleChange("date")}
              type="date"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Час
            <input
              className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-purple-400 focus:outline-none"
              value={formData.time}
              onChange={handleChange("time")}
              type="time"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Тривалість (години)
            <input
              className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-purple-400 focus:outline-none"
              min="1"
              placeholder="2"
              value={formData.duration}
              onChange={handleChange("duration")}
              type="number"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200 md:col-span-2">
            Коментар
            <textarea
              className="min-h-[120px] rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-purple-400 focus:outline-none"
              placeholder="Опишіть задачу, референси, побажання."
              value={formData.comment}
              onChange={handleChange("comment")}
            />
          </label>
        </div>
        {errorMessage ? (
          <p className="mt-4 text-sm text-rose-200" role="alert">
            {errorMessage}
          </p>
        ) : (
          <div className="mt-4 space-y-1 text-sm text-slate-300">
            <p>
              Орієнтовна вартість послуги: {" "}
              <span className="font-semibold text-white">{totalPrice} ₴</span>
            </p>
            <p>
              Депозит {Math.round(DEFAULT_DEPOSIT_PERCENT * 100)}%:{" "}
              <span className="font-semibold text-white">{depositAmount} ₴</span>
            </p>
          </div>
        )}
        <button
          className="mt-6 rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-400 disabled:cursor-not-allowed disabled:opacity-70"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Надсилаємо..." : "Надіслати заявку"}
        </button>
      </form>
    </section>
  );
}
