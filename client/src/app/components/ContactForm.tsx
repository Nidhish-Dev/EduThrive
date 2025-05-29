'use client';

import { FormEvent } from 'react';

export default function ContactForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Form submitted! We will get back to you soon.');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-800">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          required
        />
      </div>
      <div>
        <label htmlFor="college" className="block text-sm font-medium text-gray-800">
          College
        </label>
        <input
          type="text"
          id="college"
          placeholder="Your College"
          className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-800">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-800">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Your Phone Number"
          className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          required
        />
      </div>
      <div>
        <label htmlFor="school" className="block text-sm font-medium text-gray-800">
          Current School
        </label>
        <input
          type="text"
          id="school"
          placeholder="Your Current School"
          className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-all duration-300 transform hover:scale-105"
      >
        Submit
      </button>
    </form>
  );
}