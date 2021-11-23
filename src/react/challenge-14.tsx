/*************************
    *** Coding Challenge 14

        Write a react function component called "Button" that accepts the prop "onClick"
            which is a function.
        In the component, render an HTML <button> with the text "Click Me",
            and assign its onClick event to the onClick prop.

        Examples:
            <Button onClick={() => console.log('Hello World')} /> -> logs to console when button is clicked
            <Button onClick={() => 1} /> -> returns 1 when the button is clicked
            <Button onClick={() => alert('Hey!')} /> -> alerts the user when the button is clicked

        Notes:
            The "onClick" prop will always be a function.
            Whatever the onClick prop does is irrelevant.
            We are only concerned with attaching the prop to the button.
        
*/

export function Button(props: { onClick: Function }) {
  return null;
}
