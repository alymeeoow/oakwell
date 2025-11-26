import { useState, useEffect } from 'react';

import { X, Mail, Phone, User, Building, Package } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/styles/RequestQuoteForm.css';

const GetQuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    productInterest: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); 

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

 
  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.productInterest.trim()) {
      newErrors.productInterest = 'Please select a product interest';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (isSubmitted || isSubmitting) {
      return;
    }
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setIsSubmitted(true); 
    
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      toast.success(' Quote request submitted successfully.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          zIndex: 1001
        }
      });
      
      setTimeout(() => {
        onClose();
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          productInterest: '',
          message: ''
        });
      }, 3000);
      
    } catch (error) {
      toast.error(' Failed to submit quote request. Please try again or contact us directly.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          zIndex: 1001
        }
      });
      
     
      setIsSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      productInterest: '',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false); 
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{
          zIndex: 1001
        }}
        toastStyle={{
          zIndex: 1001
        }}
      />
      
      <div className="get-quote-modal-overlay">
        <div className="get-quote-modal">
          <div className="get-quote-modal-header">
            <div className="get-quote-title-section">
              <div className="get-quote-icon-wrapper">
                <Package size={24} />
              </div>
              <div>
                <h2>Request Your Custom Quote</h2>
                <p>Complete the form below and we'll get back to you within 24 hours</p>
              </div>
            </div>
            <button className="get-quote-close-btn" onClick={handleClose}>
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="get-quote-modal-form">
            <div className="get-quote-form-section">
              <div className="get-quote-section-header">
                <User className="get-quote-section-icon" />
                <h3>Contact Information</h3>
              </div>

              <div className="get-quote-form-grid">
                <div className="get-quote-form-group">
                  <label>First Name <span>*</span></label>
                  <input
                    type="text"
                    name="firstName"
                    className={errors.firstName ? 'error' : ''}
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                  />
                  {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                </div>

                <div className="get-quote-form-group">
                  <label>Last Name <span>*</span></label>
                  <input
                    type="text"
                    name="lastName"
                    className={errors.lastName ? 'error' : ''}
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                  />
                  {errors.lastName && <span className="error-text">{errors.lastName}</span>}
                </div>

                <div className="get-quote-form-group">
                  <label>Email Address <span>*</span></label>
                  <div className="get-quote-input-with-icon">
                    <Mail className="get-quote-input-icon" />
                    <input
                      type="email"
                      name="email"
                      className={errors.email ? 'error' : ''}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="get-quote-form-group">
                  <label>Phone Number <span>*</span></label>
                  <div className="get-quote-input-with-icon">
                    <Phone className="get-quote-input-icon" />
                    <input
                      type="tel"
                      name="phone"
                      className={errors.phone ? 'error' : ''}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                <div className="get-quote-form-group">
                  <label>Company Name</label>
                  <div className="get-quote-input-with-icon">
                    <Building className="get-quote-input-icon" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company LLC"
                    />
                  </div>
                </div>

                <div className="get-quote-form-group">
                  <label>Product/Service Interest <span>*</span></label>
                  <select
                    name="productInterest"
                    className={errors.productInterest ? 'error' : ''}
                    value={formData.productInterest}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="poultry-supplies">Poultry Supplies & Equipment</option>
                    <option value="lab-testing">Laboratory Testing & Diagnostics</option>
                    <option value="feed-inputs">Feed Inputs & Supplements</option>
                    <option value="biosecurity">Biosecurity Solutions</option>
                    <option value="consultation">Farm Consultation Services</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.productInterest && <span className="error-text">{errors.productInterest}</span>}
                </div>

                <div className="get-quote-form-group full-width">
                  <label>Project Details / Requirements</label>
                  <div className="get-quote-input-with-icon">
                    <div className="get-quote-input-icon" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your specific needs, timeline, and any other relevant details..."
                      className="get-quote-message-input"
                      rows="4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="get-quote-modal-actions">
              <button type="button" className="get-quote-cancel-btn" onClick={handleClose}>
                Cancel
              </button>
              <button 
                type="submit" 
                className="get-quote-submit-btn" 
                disabled={isSubmitting || isSubmitted} 
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Processing...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Mail size={18} />
                    Submitted ✅
                  </>
                ) : (
                  <>
                    <Mail size={18} />
                    Get My Quote
                  </>
                )}
              </button>
            </div>

            <div className="get-quote-form-section">
              <p className="privacy-note">
                Your information is secure and will only be used to provide your quote.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default GetQuoteModal;