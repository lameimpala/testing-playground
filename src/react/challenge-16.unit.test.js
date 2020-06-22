import React from 'react';

// react testing utils
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Component we're testing
import { CounterButton } from './challenge-16';

describe('Counter Button Component', () => {
    it('should increment the counter when the button is clicked', async () => {
        // arrange
        // act
        const { getByText, queryByText } = render(<CounterButton />);
        fireEvent.click(getByText('0'));
        await waitForElement(() => getByText('1'));

        // assert
        expect(queryByText('1')).toBeInTheDocument();
    });
});