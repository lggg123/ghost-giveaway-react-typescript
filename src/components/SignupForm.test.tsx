// SignupForm.test.tsx
import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignupForm from './signUpForm'

describe('SignupForm', () => {
    it('submits the form successfully', async () => {
        // Mock the fetch function
        jest.spyOn(global, 'fetch').mockResolvedValue({ ok: true } as Response);

        render(<SignupForm />);

        // Fill out the form
        // Trigger an event that updates the state
        await act(async () => {
            userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
            userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
            userEvent.type(screen.getByLabelText(/wallet address/i), 'wallet123');
        });    

        // Submit the form
        userEvent.click(screen.getByText(/sign up/i));

        // Wait for the success page to appear
        await waitFor(() => {
            expect(screen.getByText(/Success!/i)).toBeInTheDocument();
        });

        // Ensure fetch was called with the correct data
        expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'John Doe',
                email: 'john@example.com',
                walletAddress: 'wallet123',
            }),
        });
    });
});