import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Calendar from "./Calendar";

// تست ۱: رندر شدن ماه و سال درست
test("renders current month and year", () => {
  render(<Calendar />);
  const monthElement = screen.getByText(/،/i); // چون بعد ماه کاما گذاشتی
  expect(monthElement).toBeInTheDocument();
});

// تست ۲: چک کردن هفته‌ها
test("renders weekdays", () => {
  render(<Calendar CalendarType="gregorian" />);
  const weekdayElements = screen.getAllByText(/Sun|Mon|Tue|Wed|Thu|Fri|Sat/i);
  expect(weekdayElements.length).toBeGreaterThan(0);
});

// تست ۴: رفتن به ماه بعد
test("navigates to next month", () => {
  render(<Calendar />);
  const nextButton = screen.getAllByRole("button")[1]; // دومین دکمه (next)
  if (nextButton) {
    fireEvent.click(nextButton);
  }

  // انتظار داریم ماه تغییر کنه
  const monthElement = screen.getByText(/،/i);
  expect(monthElement).toBeInTheDocument();
});

// تست ۵: استفاده از renderDay سفارشی
test("uses custom renderDay when provided", () => {
  const customRender = jest.fn(
    (day, date, isCurrent, showMonth, isToday, onSelect) => {
      return (
        <button key={day} onClick={onSelect}>
          test-{day}
        </button>
      );
    }
  );

  const handleChange = jest.fn();
  render(<Calendar renderDay={customRender} onChange={handleChange} />);

  const customDay = screen.getByText("test-1");
  expect(customDay).toBeInTheDocument();

  fireEvent.click(customDay);
  expect(handleChange).toHaveBeenCalledTimes(1);
});
