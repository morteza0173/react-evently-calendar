import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

// تنظیمات متا دیتا برای استوری
const meta: Meta<typeof Button> = {
  title: "Components/Button", // مسیر نمایش در منوی استوری‌بوک
  component: Button,
  tags: ["autodocs"], // برای تولید داکیومنت خودکار
};

export default meta;

type Story = StoryObj<typeof Button>;

// استوری پیش‌فرض
export const Primary: Story = {
  args: {
    label: "Click Me",
  },
};

// استوری دوم با props متفاوت
export const Secondary: Story = {
  args: {
    label: "Cancel",
  },
};
