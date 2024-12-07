'use client';

import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
    visible: boolean;
  }>({ type: null, message: '', visible: false });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (submitStatus.type === 'success' && submitStatus.visible) {
      timer = setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, visible: false }));
      }, 3000);

      const cleanupTimer = setTimeout(() => {
        setSubmitStatus({ type: null, message: '', visible: false });
      }, 3300); // Additional 300ms for fade out animation

      return () => {
        clearTimeout(timer);
        clearTimeout(cleanupTimer);
      };
    }
  }, [submitStatus.type, submitStatus.visible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '', visible: false });

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
          visible: true
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try again later.',
        visible: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-orange-500 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-orange-500 focus:outline-none transition-colors"
          />
        </div>
      </div>
      <div className="mb-6">
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-orange-500 focus:outline-none transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {submitStatus.type && submitStatus.visible && (
        <div 
          className={`mt-4 p-4 rounded-lg transition-opacity duration-300 ${
            submitStatus.visible ? 'opacity-100' : 'opacity-0'
          } ${
            submitStatus.type === 'success' 
              ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100' 
              : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100'
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </form>
  );
}
