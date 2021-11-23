import { getInCommon } from "./challenge-19";

describe("getInCommon", () => {
  it("should determine the common values if there are some", () => {
    // arrange
    const arrayA = [3, 5];
    const arrayB = [4, 5];

    // act
    const result = getInCommon(arrayA, arrayB);

    // assert
    expect(result).toEqual([5]);
  });

  it("should determine the common values if there are none", () => {
    // arrange
    const arrayA = [12, 52];
    const arrayB = [4, 5];

    // act
    const result = getInCommon(arrayA, arrayB);

    // assert
    expect(result).toEqual([]);
  });
});
