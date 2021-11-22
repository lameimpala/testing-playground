// react testing utils
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Component we're testing
import { Button } from "./challenge-14";

describe("Button Component", () => {
  it("should call onClick prop when button is clicked", () => {
    // arrange
    const onClick = jest.fn();

    // act
    const { queryByText } = render(<Button onClick={onClick} />);
    userEvent.click(queryByText("Click Me"));

    // assert
    expect(onClick).toHaveBeenCalled();
  });
});
