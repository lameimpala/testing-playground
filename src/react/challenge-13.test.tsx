// react testing utils
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Component we're testing
import { Name } from "./challenge-13";

describe("The Name Component", () => {
  it("should show Reid", () => {
    // arrange
    const name = "Reid";

    // act
    render(<Name name={name} />);

    // assert
    expect(screen.queryByText(name)).toBeInTheDocument();
  });

  it("should show Tim", () => {
    // arrange
    const name = "Tim";

    // act
    render(<Name name={name} />);

    // assert
    expect(screen.queryByText(name)).toBeInTheDocument();
  });

  it('should show "No name specified" when there is no name', () => {
    // arrange
    // act
    render(<Name />);

    // assert
    expect(screen.queryByText("No name specified")).toBeInTheDocument();
  });
});
