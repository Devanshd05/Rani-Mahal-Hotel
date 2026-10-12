import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { hotelData } from '../../data/hotel';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomPreference: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export const ContactSection: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialRoom = searchParams.get('room') || '';
  const initialVenue = searchParams.get('venue') || '';
  const initialType = searchParams.get('type') || (initialVenue ? 'events' : initialRoom ? 'room' : 'room');

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    enquiryType: initialType,
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    roomPreference: initialRoom || initialVenue || '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please provide a valid telephone number';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  return (
    <section id="enquiry" className="py-14 sm:py-20 md:py-28 bg-[#F8F6F1]">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Direct Concierge"
          title="Reserve Your Regal Experience"
          subtitle="Submit your itinerary or celebration requirements. Our reservation concierge will respond promptly within 2 business hours."
        />

        <div className="bg-white border border-[#EBE3D7] shadow-xl p-5 sm:p-8 md:p-12 relative overflow-hidden rounded-xs">
          {/* Subtle gold top border accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#252824] via-[#C89A5B] to-[#252824]" />

          {isSubmitted ? (
            <div className="py-8 sm:py-12 text-center space-y-4 sm:space-y-5 animate-in fade-in duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F8F6F1] border border-[#C89A5B] mx-auto flex items-center justify-center text-[#C89A5B]">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#222222]">
                Reservation Request Received
              </h3>

              <p className="text-xs sm:text-sm text-[#77736D] max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-[#222222]">{formData.name}</strong>. Your enquiry for{' '}
                <span className="text-[#C89A5B] font-medium">{formData.enquiryType.toUpperCase()}</span> has been dispatched to the front office concierge team. We will contact you at{' '}
                <span className="font-medium text-[#222222]">{formData.email}</span>.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
                <Button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      enquiryType: 'room',
                      checkIn: '',
                      checkOut: '',
                      guests: '2 Guests',
                      roomPreference: '',
                      message: '',
                    });
                  }}
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto min-h-[46px]"
                >
                  Submit Another Enquiry
                </Button>

                {hotelData.whatsappNumber && (
                  <a
                    href={`https://wa.me/${hotelData.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Rani Mahal Hotel! I just submitted an enquiry for ${formData.name} (${formData.phone}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#20ba59] transition-colors min-h-[46px] w-full sm:w-auto"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Concierge Direct</span>
                  </a>
                )}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-6">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#222222] mb-1.5"
                  >
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Vikramaditya Sharma"
                    className={`w-full px-3.5 py-3 bg-[#F8F6F1]/50 border text-base sm:text-sm text-[#222222] focus:outline-none focus:ring-1 focus:ring-[#C89A5B] transition-colors min-h-[46px] rounded-xs ${
                      errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#EBE3D7]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#222222] mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@domain.com"
                    className={`w-full px-3.5 py-3 bg-[#F8F6F1]/50 border text-base sm:text-sm text-[#222222] focus:outline-none focus:ring-1 focus:ring-[#C89A5B] transition-colors min-h-[46px] rounded-xs ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#EBE3D7]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone & Enquiry Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#222222] mb-1.5"
                  >
                    Telephone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3.5 py-3 bg-[#F8F6F1]/50 border text-base sm:text-sm text-[#222222] focus:outline-none focus:ring-1 focus:ring-[#C89A5B] transition-colors min-h-[46px] rounded-xs ${
                      errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#EBE3D7]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="enquiryType"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#222222] mb-1.5"
                  >
                    Nature of Enquiry
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 bg-[#F8F6F1]/50 border border-[#EBE3D7] text-base sm:text-sm text-[#222222] focus:outline-none focus:ring-1 focus:ring-[#C89A5B] cursor-pointer min-h-[46px] rounded-xs"
                  >
                    <option value="room">Room & Suite Stay</option>
                    <option value="dining">Table Reservation (Shahi Dastarkhwan)</option>
                    <option value="events">Banquet / Wedding / Gala</option>
                    <option value="corporate">Executive Boardroom Summit</option>
                    <option value="general">General Royal Enquiry</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="checkIn"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#222222] mb-1.5"
                  >
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 bg-[#F8F6F1]/50 border border-[#EBE3D7] text-base sm:text-sm text-[#222222] focus:outline-none focus:ring-1 focus:ring-[#C89A5B] min-h-[46px] rounded-xs"
                  />
                </div>

                <div>
                  <label
                    htmlFor="checkOut"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#222222] mb-1.5"
                  >
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 bg-[#F8F6F1]/50 border border-[#EBE3D7] text-base sm:text-sm text-[#222222] focus:outline-none focus:ring-1 focus:ring-[#C89A5B] min-h-[46px] rounded-xs"
                  />
                </div>

                <div>
                  <label
                    htmlFor="guests"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#222222] mb-1.5"
                  >
                    Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 bg-[#F8F6F1]/50 border border-[#EBE3D7] text-base sm:text-sm text-[#222222] focus:outline-none focus:ring-1 focus:ring-[#C89A5B] cursor-pointer min-h-[46px] rounded-xs"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4+ Guests">4+ Guests / Family</option>
                    <option value="Group / Wedding Party">Group / Wedding Party (20+)</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Room Preference / Special Request */}
              <div>
                <label
                  htmlFor="roomPreference"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#222222] mb-1.5"
                >
                  Chamber / Suite / Venue Preference (Optional)
                </label>
                <input
                  type="text"
                  id="roomPreference"
                  name="roomPreference"
                  value={formData.roomPreference}
                  onChange={handleChange}
                  placeholder="e.g. Maharani Royal Suite, High Floor, Early Check-in..."
                  className="w-full px-3.5 py-3 bg-[#F8F6F1]/50 border border-[#EBE3D7] text-base sm:text-sm text-[#222222] focus:outline-none focus:ring-1 focus:ring-[#C89A5B] min-h-[46px] rounded-xs"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#222222] mb-1.5"
                >
                  Additional Inquiries or Special Arrangements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about arrival time, dietary requirements, or special arrangements..."
                  className="w-full px-3.5 py-3 bg-[#F8F6F1]/50 border border-[#EBE3D7] text-base sm:text-sm text-[#222222] focus:outline-none focus:ring-1 focus:ring-[#C89A5B] rounded-xs"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting Request...' : 'Transmit Enquiry'}</span>
                </Button>

                <p className="text-[11px] text-[#77736D] text-center sm:text-right">
                  🔒 Your details remain strictly private. No credit card required.
                </p>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
};
