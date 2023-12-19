import React, { useState } from 'react';
import SuccessPage from './SuccessPage';

interface SignupFormData {
  name: string;
  email: string;
  walletAddress: string;
}

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    walletAddress: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to submit the form data (e.g., send to server, store in state, etc.)
    try {
      const response = await fetch('https://goghosterz-3ac2cc4dafa8.herokuapp.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          walletAddress: formData.walletAddress,
        }),
      })

      setIsSubmitted(true);

      if (!response.ok) {
        throw new Error('Failed to register user')
      }
        
      } catch (error: any) {
        console.error('Error registering user:', error.message);
      
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signup-form-container">
      { isSubmitted ? (
        <SuccessPage /> // Render SuccessPage when the form is successfully submitted
      ) : (
        <form onSubmit={handleSubmit} className="signup-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Wallet Address:
            <input
              type="text"
              name="walletAddress"
              value={formData.walletAddress}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
};

export default SignupForm;
