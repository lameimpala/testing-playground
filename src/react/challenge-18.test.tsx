import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Todos } from "./challenge-18";

describe("Todos", () => {
  it("should show an input for a new todo", () => {
    // arrange
    // act
    render(<Todos />);

    // assert
    expect(screen.queryByLabelText("New Todo:")).toBeInTheDocument();
  });

  it("should show a button to add a todo", () => {
    // arrange
    // act
    render(<Todos />);

    // assert
    expect(screen.queryByText("Add Todo")).toBeInTheDocument();
  });

  it("should add a todo item", async () => {
    // arrange
    // act
    render(<Todos />);

    userEvent.type(screen.getByLabelText("New Todo:"), "My new todo");

    userEvent.click(screen.getByText("Add Todo"));

    // assert
    expect(await screen.findByText("My new todo")).toBeInTheDocument();
  });

  it("should clear out the input when a todo is added", async () => {
    // arrange
    // act
    render(<Todos />);

    userEvent.type(screen.getByLabelText("New Todo:"), "My new todo");

    userEvent.click(screen.getByText("Add Todo"));

    await screen.findByText("My new todo");

    expect(screen.queryByDisplayValue("My new todo")).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue("")).toBeInTheDocument();
  });

  it("should add multiple todo items", async () => {
    // arrange
    // act
    render(<Todos />);

    userEvent.type(screen.getByLabelText("New Todo:"), "My new todo");
    userEvent.click(screen.getByText("Add Todo"));
    await screen.findByText("My new todo");

    userEvent.type(screen.getByLabelText("New Todo:"), "My new todo2");
    userEvent.click(screen.getByText("Add Todo"));
    await screen.findByText("My new todo2");

    userEvent.type(screen.getByLabelText("New Todo:"), "My new todo3");
    userEvent.click(screen.getByText("Add Todo"));
    await screen.findByText("My new todo3");
  });
});
