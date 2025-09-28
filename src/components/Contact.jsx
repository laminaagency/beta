// src/components/Contact.jsx

import React, { useState, useEffect } from 'react';
import ContactButton from './ContactButton';
import './Contact.css';

export default function Contact({ isOpen, onClose }) {
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('Sending...');

    try {
      const res = await fetch('https://formspree.io/f/xeolbnbn', {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        setStatus('Message sent ✅');
        form.reset();
      } else {
        setStatus('Failed to send ❌');
      }
    } catch (err) {
      console.error(err);
      setStatus('Error sending message ❌');
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="contact-overlay">
      <section className="contact-section">
        <div className="contact-form-wrapper">
          <div className="contact-form">
            <h1>Preguntas?</h1>
            <h2>Contactanos!</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Nombre" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="message" placeholder="Mensaje" rows="5" required />
              <ContactButton type="submit" navState="default">
                Enviar
              </ContactButton>
            </form>
            <p className="status">{status}</p>
          </div>
        </div>
        <div className="contact-image">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
      </section>
    </div>
  );
}