import React from 'react';

// react testing utils
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Component we're testing
import { Name } from './challenge-13';

describe('Name Component', () => {
    it('should render Reid', () => {
        // arrange
        const name = 'Reid';

        // act
        const { queryByText } = render(<Name name={name} />);

        // assert
        expect(queryByText(name)).toBeInTheDocument();
    });

    it('should render Tim', () => {
        // arrange
        const name = 'Tim';

        // act
        const { queryByText } = render(<Name name={name} />);

        // assert
        expect(queryByText(name)).toBeInTheDocument();
    });


    it('should render "No name specified" when there is no name', () => {
        // arrange
        // act
        const { queryByText } = render(<Name />);

        // assert
        expect(queryByText('No name specified')).toBeInTheDocument();
    });
});