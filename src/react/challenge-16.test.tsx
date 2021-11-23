// react testing utils
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

// Component we're testing
import { CounterButton } from "./challenge-16";

describe("Counter Button Component", async () => {
  it("should increment the counter when the button is clicked", async () => {
    // arrange
    // act
    render(<CounterButton />);
    userEvent.click(screen.getByText("0"));

    // assert
    expect(await screen.findByText("1")).toBeInTheDocument();
  });
});
