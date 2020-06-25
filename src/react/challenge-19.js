/*************************
    *** Coding Challenge 19

        Using the component below, augment the component created in challenge 18 to utilize this component for each todo item

        all tests in challenge 18 must continue to pass as well
*/

import React from 'react';
import PropTypes from 'prop-types';

export function TodoItem({ id, text }) {
    return (
        <li>
            <input id={id} type="checkbox" />
            <label htmlFor={id}>
                {text}
            </label>
        </li>
    );
}

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};