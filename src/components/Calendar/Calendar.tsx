import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "./icon";
import "./Calendar.css";
import baseDayjs from "dayjs";
import dayjs from "../../lib/day";
import { daysOfWeekEn, daysOfWeekFa, monthsEn, monthsFa } from "./translate";
import isToday from "dayjs/plugin/isToday";
dayjs.extend(isToday);

const getDate = (date: Date, calendar: "jalali" | "gregorian") => {
  if (calendar === "gregorian") {
    return baseDayjs(date).calendar("gregory");
  } else {
    return dayjs(date).calendar("jalali");
  }
};

interface CalendarClassNames {
  root?: string;
  header?: string;
  nav?: string;
  month?: string;
  year?: string;
  weekdays?: string;
  weekday?: string;
  days?: string;
  day?: string;
  currentDay?: string;
  lastMonth?: string;
  nextMonth?: string;
}

interface CalendarComponents {
  PrevButton?: (props: {
    onClick: () => void;
    dir: "ltr" | "rtl";
  }) => React.ReactNode;
  NextButton?: (props: {
    onClick: () => void;
    dir: "ltr" | "rtl";
  }) => React.ReactNode;
}

interface CalendarProps {
  dir?: "ltr" | "rtl";
  CalendarType?: "gregorian" | "jalali";
  firstDayOfWeek?: number;
  onChange?: (date: Date) => void;
  renderDay?: (
    day: number,
    date: Date,
    isCurrentMonth: boolean,
    showMonth: boolean,
    isToday: boolean,
    onSelect: () => void
  ) => React.ReactNode;
  classNames?: CalendarClassNames;
  components?: CalendarComponents;
}
const Calendar: React.FC<CalendarProps> = ({
  dir = "ltr",
  CalendarType = "gregorian",
  firstDayOfWeek = 6,
  onChange,
  renderDay,
  classNames,
  components,
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const current = getDate(currentDate, CalendarType);

  const daysInMonth = current.daysInMonth();
  const firstDayOfMonth = getDate(
    current.startOf("month").toDate(),
    CalendarType
  ).day();
  const offset = (firstDayOfMonth - (firstDayOfWeek ?? 0) + 7) % 7;

  const getDaysOfWeek = (
    calendar: "jalali" | "gregorian",
    firstDayOfWeek: number
  ) => {
    const days = calendar === "jalali" ? daysOfWeekFa : daysOfWeekEn;
    const index = (firstDayOfWeek + (1 % 7) + 7) % 7;
    return [...days.slice(index), ...days.slice(0, index)];
  };

  const prevMonth = () => {
    const newDate = current.subtract(1, "month").toDate();
    setCurrentDate(newDate);
  };
  const nextMonth = () => {
    const newDate = current.add(1, "month").toDate();
    setCurrentDate(newDate);
  };

  const prevMonthDate = current.subtract(1, "month");
  const daysInPrevMonth = prevMonthDate.daysInMonth();
  const prevMonthDays = [...Array(offset).keys()].map(
    (i) => daysInPrevMonth - offset + i + 1
  );

  const nextOffset = 6 - ((offset + daysInMonth - 1) % 7);
  const nextMonthDays = [...Array(nextOffset).keys()].map((i) => i + 1);

  const handleSelectDate = (date: Date) => {
    if (onChange) onChange(date);
  };

  return (
    <div className={`calendar-app ${classNames?.root ?? ""}`} dir={dir}>
      <div className={`calendar ${classNames?.header ?? ""}`}>
        <div className={`navigate-date ${classNames?.nav ?? ""}`}>
          <h2 className={`month ${classNames?.month ?? ""}`}>
            {CalendarType === "gregorian"
              ? monthsEn[current.month()]
              : monthsFa[current.month()]}{" "}
            ،
          </h2>
          <h2 className={`year ${classNames?.year ?? ""}`}>
            {CalendarType === "gregorian" ? current.year() : current.year()}
          </h2>
          <div className="buttons">
            {components?.PrevButton ? (
              components.PrevButton({ onClick: prevMonth, dir })
            ) : (
              <button onClick={prevMonth}>
                {dir === "ltr" ? <ChevronLeft /> : <ChevronRight />}
              </button>
            )}

            {components?.NextButton ? (
              components.NextButton({ onClick: nextMonth, dir })
            ) : (
              <button onClick={nextMonth}>
                {dir === "ltr" ? <ChevronRight /> : <ChevronLeft />}
              </button>
            )}
          </div>
        </div>
        <div className={`weekdays ${classNames?.weekdays ?? ""}`}>
          {getDaysOfWeek(CalendarType, firstDayOfWeek).map((day) => (
            <span key={day} className={classNames?.weekday ?? ""}>
              {day}
            </span>
          ))}
        </div>
        <div className={`days ${classNames?.days ?? ""}`}>
          {prevMonthDays.map((day, i) => {
            const showMonth = i === 0;
            const prevDayDate = prevMonthDate
              .date(daysInPrevMonth - offset + i + 1)
              .toDate();

            if (renderDay) {
              return renderDay(
                day + 1,
                prevDayDate,
                false,
                showMonth,
                false,
                () => handleSelectDate(prevDayDate)
              );
            }
            return (
              <span
                key={`prev-${day}`}
                className={`defaultDays ${classNames?.lastMonth ?? "disabled"}`}
                onClick={() => handleSelectDate(prevDayDate)}
              >
                {i === 0
                  ? `${day} ${
                      CalendarType === "jalali"
                        ? monthsFa[prevMonthDate.month()]
                        : monthsEn[prevMonthDate.month()]
                    }`
                  : day}
              </span>
            );
          })}
          {[...Array(daysInMonth).keys()].map((day, i) => {
            const showMonth = i === 0;
            const dayDate = current.date(day + 1).toDate();

            if (renderDay) {
              return renderDay(
                day + 1,
                dayDate,
                true,
                showMonth,
                dayjs(dayDate).isToday(),
                () => handleSelectDate(dayDate)
              );
            }

            return (
              <span
                key={day}
                className={
                  day + 1 === current.date()
                    ? `${classNames?.currentDay ?? "current-day"} defaultDays`
                    : `${classNames?.day ?? "defaultDays"}`
                }
                onClick={() => handleSelectDate(dayDate)}
              >
                {i === 0 ? (
                  <span>{`${day + 1} ${
                    CalendarType === "jalali"
                      ? monthsFa[current.month()]
                      : monthsEn[current.month()]
                  }`}</span>
                ) : (
                  day + 1
                )}
              </span>
            );
          })}
          {nextMonthDays.map((day, i) => {
            const showMonth = i === 0;
            const nextDayDate = current.add(1, "month").date(day).toDate();

            if (renderDay) {
              return renderDay(
                day + 1,
                nextDayDate,
                false,
                showMonth,
                false,
                () => handleSelectDate(nextDayDate)
              );
            }

            return (
              <span
                key={`next-${day}`}
                className={`defaultDays ${classNames?.nextMonth ?? "disabled"}`}
                onClick={() => handleSelectDate(nextDayDate)}
              >
                {i === 0
                  ? `${day} ${
                      CalendarType === "jalali"
                        ? monthsFa[current.add(1, "month").month()]
                        : monthsEn[current.add(1, "month").month()]
                    }`
                  : day}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Calendar;
