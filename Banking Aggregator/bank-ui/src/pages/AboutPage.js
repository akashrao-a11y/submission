import React from 'react';

const AboutPage = () => {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '2.5rem 1rem' }}>
      <div style={{ background: 'linear-gradient(120deg, #f7f9fc 60%, #e3e9f7 100%)', borderRadius: 18, boxShadow: '0 2px 16px rgba(26,35,126,0.10)', padding: '2.5rem 2rem', marginBottom: 32 }}>
        <h1 style={{ color: '#1976d2', fontWeight: 700, fontSize: '2.1rem', marginBottom: 12 }}>About Us</h1>
        <p style={{ fontSize: '1.15rem', color: '#333', marginBottom: 0 }}>
          Welcome to our <b>Banking Aggregator</b> platform. We help you manage all your bank accounts in one place with ease and security.<br />
          Our mission is to simplify your financial life with a modern, secure, and user-friendly experience.
        </p>
      </div>
      <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #0001', padding: '2.2rem 2rem', maxWidth: 520, margin: '0 auto' }}>
        <h2 style={{ color: '#1976d2', fontWeight: 600, fontSize: '1.3rem', marginBottom: 18, textAlign: 'center' }}>Contact Us</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label htmlFor="contact-name" style={{ fontWeight: 500, color: '#222' }}>Name</label>
            <input id="contact-name" type="text" name="name" value={form.name} onChange={handleChange} required style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1.5px solid #bfc7d1', fontSize: '1rem', background: '#f7f9fc' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label htmlFor="contact-email" style={{ fontWeight: 500, color: '#222' }}>Email</label>
            <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1.5px solid #bfc7d1', fontSize: '1rem', background: '#f7f9fc' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label htmlFor="contact-message" style={{ fontWeight: 500, color: '#222' }}>Message</label>
            <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} required rows={4} style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1.5px solid #bfc7d1', fontSize: '1rem', background: '#f7f9fc', resize: 'vertical' }} />
          </div>
          <button type="submit" style={{ background: 'linear-gradient(90deg, #1976d2 60%, #64b5f6 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 0', fontWeight: 700, fontSize: '1.08rem', marginTop: 8, boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)', letterSpacing: 0.5 }}>Send Message</button>
          {submitted && <div style={{ color: '#388e3c', background: '#e8f5e9', border: '1px solid #a5d6a7', borderRadius: 7, padding: '0.8rem 1.1rem', marginTop: 8, textAlign: 'center', fontWeight: 500 }}>Thank you for contacting us!</div>}
        </form>
      </div>
    </div>
  );
};

export default AboutPage;
