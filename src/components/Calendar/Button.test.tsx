import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "./Button"; // مسیر فایل Button خودت

describe("Button component", () => {
  it("renders the label correctly", () => {
    render(<Button label="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
