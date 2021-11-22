import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Todos } from "./challenge-18";

describe("Todos", () => {
  it("should show an input for a new todo", () => {
    // arrange
    // act
    const { queryByLabelText } = render(<Todos />);

    // assert
    expect(queryByLabelText("New Todo:")).toBeInTheDocument();
  });

  it("should show a button to add a todo", () => {
    // arrange
    // act
    const { queryByText } = render(<Todos />);

    // assert
    expect(queryByText("Add Todo")).toBeInTheDocument();
  });

  it("should add a todo item", async () => {
    // arrange
    // act
    const { getByLabelText, getByText } = render(<Todos />);
    fireEvent.change(getByLabelText("New Todo:"), {
      target: { value: "My new todo" },
    });
    fireEvent.click(getByText("Add Todo"));

    // assert
    await waitForElement(() => getByText("My new todo"));
  });

  it("should clear out the input when a todo is added", async () => {
    // arrange
    // act
    const { getByLabelText, getByText, queryByDisplayValue } = render(
      <Todos />
    );
    fireEvent.change(getByLabelText("New Todo:"), {
      target: { value: "My new todo" },
    });
    fireEvent.click(getByText("Add Todo"));
    await waitForElement(() => getByText("My new todo"));

    expect(queryByDisplayValue("My new todo")).not.toBeInTheDocument();
    expect(queryByDisplayValue("")).toBeInTheDocument();
  });

  it("should add multiple todo items", async () => {
    // arrange
    // act
    const { getByLabelText, getByText } = render(<Todos />);
    fireEvent.change(getByLabelText("New Todo:"), {
      target: { value: "My new todo" },
    });
    fireEvent.click(getByText("Add Todo"));
    await waitForElement(() => getByText("My new todo"));

    fireEvent.change(getByLabelText("New Todo:"), {
      target: { value: "My new todo2" },
    });
    fireEvent.click(getByText("Add Todo"));
    await waitForElement(() => getByText("My new todo2"));

    fireEvent.change(getByLabelText("New Todo:"), {
      target: { value: "My new todo3" },
    });
    fireEvent.click(getByText("Add Todo"));
    await waitForElement(() => getByText("My new todo3"));
  });
});
