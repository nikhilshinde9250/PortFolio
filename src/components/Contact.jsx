// Contact.jsx - Updated with better content and layout
import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane, FaCheck, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const formRef = useRef(null);

  // Handle mouse move for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (formRef.current) {
        const rect = formRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle input change with animation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Remove error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      
      // Shake animation on error
      if (formRef.current) {
        formRef.current.classList.add('animate-shake');
        setTimeout(() => {
          formRef.current.classList.remove('animate-shake');
        }, 500);
      }
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call (replace with actual form submission)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      
      // Auto hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Contact" name="Contact" className="min-h-screen relative overflow-hidden bg-bg-primary py-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl bg-gradient-to-r from-accent-primary to-transparent animate-float" style={{ top: '10%', left: '10%' }} />
        <div className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl bg-gradient-to-r from-accent-secondary to-transparent animate-float" style={{ bottom: '10%', right: '10%', animationDelay: '2s' }} />
      </div>

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold glitch-text" data-text="Contact">
            Get In <span className="text-accent-primary">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-4 rounded-full"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Let's connect and build something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-effect p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 hover-glow">
              <div className="text-4xl text-accent-primary mb-4 flex justify-center">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">Visit Me</h3>
              <p className="text-text-secondary">
                Pune, Maharashtra<br />India - 411001
              </p>
            </div>

            <div className="glass-effect p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 hover-glow">
              <div className="text-4xl text-accent-primary mb-4 flex justify-center">
                <FaPhone />
              </div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">Call Me</h3>
              <p className="text-text-secondary">
                +91 9022629250<br />Available 24/7
              </p>
            </div>

            <div className="glass-effect p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 hover-glow">
              <div className="text-4xl text-accent-primary mb-4 flex justify-center">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">Email Me</h3>
              <p className="text-text-secondary">
                nikhilshinde9250@gmail.com<br />Response within 24h
              </p>
            </div>

            <div className="glass-effect p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 hover-glow">
              <div className="text-4xl text-accent-primary mb-4 flex justify-center">
                <FaClock />
              </div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">Working Hours</h3>
              <p className="text-text-secondary">
                Mon - Fri: 9AM - 6PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div
              ref={formRef}
              className="glass-effect p-8 rounded-2xl hover-glow"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
                transition: 'transform 0.1s ease'
              }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-text-primary mb-2">Send Me a Message</h2>
                <p className="text-text-secondary">I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:border-accent-primary transition-all duration-300 text-text-primary placeholder-text-secondary ${formErrors.name ? 'border-red-500' : ''}`}
                      placeholder="Your Name *"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-xs mt-1 animate-fadeIn">{formErrors.name}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:border-accent-primary transition-all duration-300 text-text-primary placeholder-text-secondary ${formErrors.email ? 'border-red-500' : ''}`}
                      placeholder="Email Address *"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-xs mt-1 animate-fadeIn">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone & Subject Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:border-accent-primary transition-all duration-300 text-text-primary placeholder-text-secondary ${formErrors.phone ? 'border-red-500' : ''}`}
                      placeholder="Phone Number *"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-xs mt-1 animate-fadeIn">{formErrors.phone}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:border-accent-primary transition-all duration-300 text-text-primary placeholder-text-secondary ${formErrors.subject ? 'border-red-500' : ''}`}
                      placeholder="Subject *"
                    />
                    {formErrors.subject && (
                      <p className="text-red-500 text-xs mt-1 animate-fadeIn">{formErrors.subject}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:border-accent-primary transition-all duration-300 text-text-primary placeholder-text-secondary resize-none ${formErrors.message ? 'border-red-500' : ''}`}
                    placeholder="Your Message *"
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-xs mt-1 animate-fadeIn">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 hover-glow relative overflow-hidden group"
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="glass-effect p-8 rounded-2xl text-center max-w-md mx-4 animate-slideUp">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <FaCheck className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-text-primary">Message Sent!</h3>
            <p className="text-text-secondary mb-6">
              Thank you for reaching out. I'll get back to you within 24 hours!
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 bg-accent-primary text-white rounded-lg hover:bg-accent-secondary transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;