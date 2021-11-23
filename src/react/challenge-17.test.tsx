import axios from "axios";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ColorOfTheDay } from "./challenge-17";

jest.mock("axios");

describe("ComponentThatFetchesData", () => {
  it("should show the color of the day", async () => {
    // arrange
    const colorOfTheDay = "Burnt Sienna";
    (axios.get as any).mockResolvedValue({ data: { colorOfTheDay } });

    // act
    render(<ColorOfTheDay />);

    // assert
    expect(await screen.findByText(colorOfTheDay)).toBeInTheDocument();
  });
});
