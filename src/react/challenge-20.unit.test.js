import axios from "axios";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { PostComponent } from "./challenge-20";

jest.mock("axios");

describe("PostComponent", () => {
  it("should not show loading spinner when first loaded", () => {
    // arrange
    // act
    const { queryByText, queryByTestId } = render(<PostComponent />);

    // assert
    expect(queryByText("Click Me")).toBeInTheDocument();
    expect(queryByTestId("loading-spinner")).not.toBeInTheDocument();
  });

  it("should show loading spinner when button has been pressed", async () => {
    // arrange
    axios.get.mockResolvedValue({});

    // act
    const { getByText, getByTestId } = render(<PostComponent />);
    fireEvent.click(getByText("Click Me"));

    // assert
    await waitForElement(() => getByTestId("loading-spinner"));
  });

  it("should not show loading spinner when button has been pressed and request has completed", async () => {
    // arrange
    axios.get.mockResolvedValue({});

    // act
    const { getByText, getByTestId } = render(<PostComponent />);
    fireEvent.click(getByText("Click Me"));
    await waitForElement(() => getByTestId("loading-spinner"));

    // assert
    await waitForElement(() => getByText("Click Me"));
  });
});
