import React from 'react';
import { render, screen } from '@testing-library/react';
import SuccessPage from './SuccessPage';

describe('SuccessPage component', () => {
    test('renders without errors', () => {
        const { getByText } = render(<SuccessPage />);

        /// Assert that the text content is rendered
        const successText = screen.getAllByText(/Success/i);
        expect(successText.length).toBeGreaterThanOrEqual(1);
    });
});
