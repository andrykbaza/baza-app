export type BookingService = {
  label: string;
  totalPrice: number;
};

export const bookingServices: BookingService[] = [
  { label: "Запис вокалу / інструментів", totalPrice: 5000 },
  { label: "Зведення", totalPrice: 4000 },
  { label: "Мастеринг", totalPrice: 3000 },
  { label: "Пісня під ключ", totalPrice: 6500 }
];

export const DEFAULT_DEPOSIT_PERCENT = 0.3;

export const calculateDeposit = (totalPrice: number) =>
  Math.round(totalPrice * DEFAULT_DEPOSIT_PERCENT);

export const getServicePricing = (serviceLabel: string) =>
  bookingServices.find((service) => service.label === serviceLabel) ?? bookingServices[0];
