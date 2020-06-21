import React from 'react';

// react testing utils
import { render, fireEvent } from '@testing-library/react';

// Component we're testing
import { Button } from './challenge-14';

describe('Button Component', () => {
    it('should call onClick prop when button is clicked', () => {
        // arrange
        const onClick = jest.fn();

        // act
        const { queryByText } = render(<Button onClick={onClick} />);
        fireEvent.click(queryByText('Click Me'));

        // assert
        expect(onClick).toHaveBeenCalled();
    });
});