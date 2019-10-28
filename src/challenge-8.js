/*

    Challenge:
        Write a function that calculates the third side of a right triangle
        using the Pythagorean theorem (a^2 + b^2 = c^2)

    Examples:
        pythagoreanTheorem(3,4) = 5 because 3^2 + 4^2 = 5^2

*/

export function pythagoreanTheorem(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}