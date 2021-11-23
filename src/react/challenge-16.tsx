/*************************
    *** Coding Challenge 16

            Write a component that uses state to increment a counter that starts at 0.  Some boilerplate has been laid out for you

        Notes:
            In the end, we'll have a button with a number on it that increases each time the button is clicked

*/

export function CounterButton() {
  function incrementCounter() {
    // do something here to increment the counter
  }

  return (
    <button onClick={incrementCounter}>
      {/* Replace me with the value of the counter */}
    </button>
  );
}
