import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Todos } from "./challenge-18";

describe("Todos with Checkboxes", () => {
  it("should not show a check by default", async () => {
    // arrange
    // act
    const { getByLabelText, getByText } = render(<Todos />);
    fireEvent.change(getByLabelText("New Todo:"), {
      target: { value: "My new todo" },
    });
    fireEvent.click(getByText("Add Todo"));
    await waitForElement(() => getByLabelText("My new todo"));

    // assert
    expect(getByLabelText("My new todo")).not.toBeChecked();
  });

  it("should show a check when selected", async () => {
    // arrange
    // act
    const { getByLabelText, getByText } = render(<Todos />);
    fireEvent.change(getByLabelText("New Todo:"), {
      target: { value: "My new todo" },
    });
    fireEvent.click(getByText("Add Todo"));
    await waitForElement(() => getByLabelText("My new todo"));
    fireEvent.change(getByLabelText("My new todo"), {
      target: { checked: true },
    });
    await waitForElement(() => getByLabelText("My new todo"));

    // assert
    expect(getByLabelText("My new todo")).toBeChecked();
  });

  it("should not show a check when unselected", async () => {
    // arrange
    // act
    const { getByLabelText, getByText } = render(<Todos />);
    fireEvent.change(getByLabelText("New Todo:"), {
      target: { value: "My new todo" },
    });
    fireEvent.click(getByText("Add Todo"));
    await waitForElement(() => getByLabelText("My new todo"));
    fireEvent.change(getByLabelText("My new todo"), {
      target: { checked: true },
    });
    await waitForElement(() => getByLabelText("My new todo"));
    fireEvent.change(getByLabelText("My new todo"), {
      target: { checked: false },
    });
    await waitForElement(() => getByLabelText("My new todo"));

    // assert
    expect(getByLabelText("My new todo")).not.toBeChecked();
  });
});
