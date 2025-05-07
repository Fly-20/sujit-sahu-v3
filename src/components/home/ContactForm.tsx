'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecaptcha } from '@/hooks/useRecaptcha';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  recaptcha: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset
  } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  useRecaptcha();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('message', data.message);

      const response = await fetch('https://formspree.io/f/mrbqqrvg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        reset();
        // Reset reCAPTCHA
        if (typeof window !== 'undefined' && window.grecaptcha) {
          window.grecaptcha.reset();
        }
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setError('root', {
        type: 'manual',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          {...register('message', { required: 'Message is required' })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div className="flex justify-center">
        <div
          className="g-recaptcha"
          data-sitekey="6LdnkKEqAAAAAPvyqoRAmjXxvE6evlb5z-5Ol90Y"
          {...register('recaptcha', { required: 'Please complete the reCAPTCHA' })}
        />
        {errors.recaptcha && (
          <p className="mt-1 text-sm text-red-600">{errors.recaptcha.message}</p>
        )}
      </div>

      {errors.root && (
        <p className="text-sm text-red-600">{errors.root.message}</p>
      )}

      <button
        type="submit"
        className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
