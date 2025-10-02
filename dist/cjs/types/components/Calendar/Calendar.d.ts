import React from "react";
import "./Calendar.css";
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
    renderDay?: (day: number, date: Date, isCurrentMonth: boolean, showMonth: boolean, isToday: boolean, onSelect: () => void) => React.ReactNode;
    classNames?: CalendarClassNames;
    components?: CalendarComponents;
}
declare const Calendar: React.FC<CalendarProps>;
export default Calendar;
