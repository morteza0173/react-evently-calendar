import type { Meta, StoryObj } from "@storybook/react";
import Calendar from "./Calendar";
import React from "react";
import dayjs from "../../lib/day";
import { monthsFa } from "./translate";

const events = [
  {
    id: 1,
    title: "جلسه تیم",
    date: dayjs().add(1, "day").toDate(),
  },
  {
    id: 2,
    title: "ملاقات مشتری",
    date: dayjs().add(5, "day").toDate(),
  },
];

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {};

export const CustomRenderDay = () => (
  <Calendar
    CalendarType="jalali"
    firstDayOfWeek={6}
    dir="rtl"
    onChange={(date) => console.log(date)}
    renderDay={(day, date, isCurrentMonth, showMonth, isToday, CustomOnSelect) => {
      const dayEvents = events.filter((event) =>
        dayjs(event.date).isSame(dayjs(date), "day")
      );

      return (
        <div
          style={{
            textAlign: "start",
            padding: "0.5rem",
            aspectRatio: "3/2",
            margin: 2,
            backgroundColor: isToday
              ? "#8f8f8fff"
              : isCurrentMonth
              ? "#c9c9c9ff"
              : "#ebebebff",
            color: isCurrentMonth ? "white" : "black",
            fontWeight: isCurrentMonth ? "bold" : "normal",
            borderRadius: "0.5rem",
            cursor: "pointer",
            fontSize: "0.8rem",
            overflow: "hidden",
          }}
          onClick={() => CustomOnSelect()}
        >
          <span>
            {day}
            {showMonth
              ? monthsFa[dayjs(date).calendar("jalali").month()]
              : null}
          </span>
          {dayEvents.map((event) => (
            <div
              key={event.id}
              style={{
                marginTop: "20px",
                padding: "10px",
                fontSize: "0.7rem",
                backgroundColor: "#ecececff",
                borderRadius: "0.4rem",
                color: "black",
              }}
            >
              {event.title}
            </div>
          ))}
        </div>
      );
    }}
  />
);
