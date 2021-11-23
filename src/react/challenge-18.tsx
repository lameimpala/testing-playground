/*************************
    *** Coding Challenge 18

        Create a component that keeps track of a list of "Todo" items,
        and allows the user to add todos

        The todos are not passed as a prop, rather they are a piece of state internal to the component

        Each todo item should be wrapped in a <li /> tag,
        and those individual tags should be wrapped in an <ul /> tag

        The input element and handler has been provided to you, but it is up to you to figure out how to "keep track" of the current value of the input

        Multiple pieces of state may be necessary to complete this challenge.  
*/

export function Todos() {
  // on the next line, I'm destruring the property I need out of the "event" object the function will be called with
  function onChangeHandlerForInput(event: any) {
    // this is the current value of what is in the input element
    console.log(event.target.value);
  }

  function onClickHandlerForButton() {
    // here we can take the value of what is in the input piece of state, and add it to our todos list
  }

  return (
    <div>
      <ul>
        {/* 
                        Todos go here
                    */}
      </ul>
      <p>
        <label htmlFor="new-todo-item">New Todo:</label>
        <input
          onChange={onChangeHandlerForInput}
          id="new-todo-item"
          type="text"
        />
      </p>
      <p>
        <button onClick={onClickHandlerForButton}>Add Todo</button>
      </p>
    </div>
  );
}
