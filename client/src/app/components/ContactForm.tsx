'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

// Define the shape of the form data
interface FormData {
  name: string;
  email: string;
  college: string;
  phone: string;
  school: string;
}

// Define the shape of the status message
interface Status {
  type: 'success' | 'error';
  message: string;
}

// Define the shape of validation errors
interface Errors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    college: '',
    phone: '',
    school: '',
  });
  const [status, setStatus] = useState<Status | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});

  // Handle input changes with proper typing
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' }); // Clear error for the field
  };

  // Client-side validation
  const validateForm = (): Errors => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required';
    if (!formData.college.trim()) newErrors.college = 'College is required';
    if (!formData.phone.match(/^\+?[\d\s-]{10,}$/)) newErrors.phone = 'Valid phone number is required';
    if (!formData.school.trim()) newErrors.school = 'School is required';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setIsLoading(true);

    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result: { message: string } = await response.json();
      if (response.ok) {
        setStatus({ type: 'success', message: 'Form submitted successfully! We will get back to you soon.' });
        setFormData({ name: '', email: '', college: '', phone: '', school: '', });
      } else {
        setStatus({ type: 'error', message: result.message || 'Failed to submit form.' });
      }
    } catch (error: unknown) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Network error: Unable to connect to the server.',
      });
      console.error('Submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto space-y-6 bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      {/* Status message */}
      {status && (
        <div
          className={`p-4 rounded-lg ${
            status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {status.message}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-800">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className={`w-full p-3 mt-1 border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200`}
          required
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* College */}
      <div>
        <label htmlFor="college" className="block text-sm font-medium text-gray-800">
          College
        </label>
        <input
          type="text"
          id="college"
          value={formData.college}
          onChange={handleChange}
          placeholder="Your College"
          className={`w-full p-3 mt-1 border ${
            errors.college ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200`}
          required
        />
        {errors.college && <p className="text-red-500 text-sm mt-1">{errors.college}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-800">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className={`w-full p-3 mt-1 border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200`}
          required
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-800">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone Number"
          className={`w-full p-3 mt-1 border ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200`}
          required
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* School */}
      <div>
        <label htmlFor="school" className="block text-sm font-medium text-gray-800">
          Current School
        </label>
        <input
          type="text"
          id="school"
          value={formData.school}
          onChange={handleChange}
          placeholder="Your Current School"
          className={`w-full p-3 mt-1 border ${
            errors.school ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200`}
          required
        />
        {errors.school && <p className="text-red-500 text-sm mt-1">{errors.school}</p>}
      </div>



      {/* Submit Button */}
      <button
        type="submit"
        className={`w-full bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={isLoading}
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}