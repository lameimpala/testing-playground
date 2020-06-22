import React from 'react';
import axios from 'axios';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ColorOfTheDay } from './challenge-17';

jest.mock('axios');

describe('ComponentThatFetchesData', () => {
    it('should show the color of the day', async () => {
        // arrange
        const colorOfTheDay = 'Burnt Sienna';
        axios.get.mockResolvedValue({ data: { colorOfTheDay } });

        // act
        const { queryByText, getByText } = render(<ColorOfTheDay />);
        await waitForElement(() => getByText(colorOfTheDay));

        // assert
        expect(queryByText(colorOfTheDay)).toBeInTheDocument();
    });
});