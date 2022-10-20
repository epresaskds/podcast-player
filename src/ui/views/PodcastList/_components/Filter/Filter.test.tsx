import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Filter from "./Filter";

const onFilter = jest.fn();
const copies = {
  placeholder: "insert input",
  value: "test value",
};
const renderFilter = () => {
  return render(
    <Filter
      placeholder={copies.placeholder}
      value={copies.value}
      onFilter={onFilter}
    />
  );
};

describe("Filter input", () => {
  test("should render", async () => {
    renderFilter();
    const input = screen.getAllByPlaceholderText(copies.placeholder);
    expect(input).toBeTruthy();
  });
});
