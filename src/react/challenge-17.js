/*************************
    *** Coding Challenge 17

        Create a component that uses the axios library to fetch data *asynchronously* from an imaginary API to display the "Color of the day"
        There has been some boilerplate laid out for you

        When a GET request is made to:

            http://fakehost.faketld/colorOfTheDay

        The following sample response is returned:

            {
                colorOfTheDay: 'Cerulean'
            }

        Notes:
            You only need to fetch data when the component first *mounts*
*/

import { useEffect } from "react";
import axios from "axios";

export function ColorOfTheDay() {
  useEffect(() => {
    // I get called once, when the component mounts
  }, []);

  return (
    <div>
      <p>Color of the Day:</p>
      <p>color of the day goes here</p>
    </div>
  );
}
