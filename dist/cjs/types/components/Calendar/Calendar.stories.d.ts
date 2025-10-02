import type { Meta, StoryObj } from "@storybook/react";
import Calendar from "./Calendar";
declare const meta: Meta<typeof Calendar>;
export default meta;
type Story = StoryObj<typeof Calendar>;
export declare const Default: Story;
export declare const CustomRenderDay: () => import("react/jsx-runtime").JSX.Element;
