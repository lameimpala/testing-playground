// react testing utils
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Component we're testing
import { List } from "./challenge-15";

describe("List Component", () => {
  it("should render items in a list with 1 item", () => {
    // arrange
    const list = ["My Label"];

    // act
    render(<List list={list} />);

    // assert
    expect(screen.queryByText("My Label")).toBeInTheDocument();
  });

  it("should render items in a list with 2 items", () => {
    // arrange
    const list = ["My Label", "My Label 2"];

    // act
    render(<List list={list} />);

    // assert
    expect(screen.queryByText("My Label")).toBeInTheDocument();
    expect(screen.queryByText("My Label 2")).toBeInTheDocument();
  });

  it("should render items in a list with 3 items", () => {
    // arrange
    const list = ["My Label", "My Label 2", "My Label 3"];

    // act
    render(<List list={list} />);

    // assert
    expect(screen.queryByText("My Label")).toBeInTheDocument();
    expect(screen.queryByText("My Label 2")).toBeInTheDocument();
    expect(screen.queryByText("My Label 3")).toBeInTheDocument();
  });
});
