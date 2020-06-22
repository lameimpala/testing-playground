/*************************
    *** Coding Challenge 15

        Write a react function component called "List" that accepts
            a "list" prop, which is an array of strings.
        The List component will render an HTML <ul> element that contains HTML
            <li> elements for each string in the list.

        Examples:
            //
            // #1 example list array
            //
                const list = ['My List Item 1'];

            // render the List component with list array

                <List list={list} /> 
            
            // output

                <ul>
                    <li>My Label</li>
                </ul>

            //
            // #2 example list array
            //
                const list = ['first label', 'second label'];

            // render the List component with list array

                <List list={list} /> 
            
            // output

                <ul>
                    <li>first label</li>
                    <li>second label</li>
                </ul>

            //
            // #3 example list array
            //
                const list = [];

            // render the List component with list array

                <List list={list} /> 
            
            // output

                <ul></ul>

        Notes:
            Although it won't cause a syntax error, make sure that each <li> element has a unique "key" prop.
            The "list" prop will always be an array.
            Nothing special needs to be done to handle an empty array
            You will need to add the appropriate arguments to the function declaration below
*/

import React from 'react';

export function List() {
    return null;
}