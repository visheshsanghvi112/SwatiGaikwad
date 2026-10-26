import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { InstagramIcon } from './InstagramIcon';
import { Mail, Phone, MessageCircle, MapPin, ArrowUpRight, CheckCircle2, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [inquiryType, setInquiryType] = useState<string>('Property Sourcing');
  const [senderName, setSenderName] = useState<string>('');
  const [messageText, setMessageText] = useState<string>('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = encodeURIComponent(
      `Hi Swati, my name is ${senderName || 'a website visitor'}. I am reaching out regarding ${inquiryType}.\n\n${messageText || 'I would like to connect with you regarding real estate opportunities.'}`
    );
    window.open(`https://wa.me/917710880932?text=${formattedMsg}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        backgroundColor: 'var(--color-ivory)',
        position: 'relative',
        borderTop: '1px solid var(--color-border-light)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" style={{ maxWidth: '780px' }}>
          <span className="section-tagline">Direct Communication</span>
          <h2 className="section-title">
            Let's Connect
          </h2>
          <p className="section-subtitle">
            For property-related enquiries, professional connections, or relevant creative collaborations, feel free to get in touch.
          </p>
        </div>

        {/* Contact Layout: 2 Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            maxWidth: '1080px',
            margin: '0 auto',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Access Details */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {/* Quick Bio Card (Apple Dark Obsidian Glass) */}
            <div
              className="ios-dark-glass"
              style={{
                padding: '2.25rem',
                borderRadius: 'var(--radius-xl)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle Ambient Light Spill in Card */}
              <div
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(184, 93, 67, 0.25) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.15rem', marginBottom: '1.35rem' }}>
                <div style={{ position: 'relative' }}>
                  <img
                    src={PORTFOLIO_DATA.personal.avatarImage}
                    alt="Swati Gaikwad"
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid var(--color-terracotta)',
                      boxShadow: '0 4px 14px rgba(184, 93, 67, 0.35)',
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '2px',
                      right: '2px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: '#2EAA55',
                      border: '2px solid #121315',
                    }}
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.55rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      lineHeight: 1.15,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Swati Gaikwad
                  </h3>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-terracotta-light)', fontWeight: 600 }}>
                    Sourcing & Closings Specialist
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-charcoal-300)', fontSize: '0.75rem', marginTop: '0.2rem' }}>
                    <MapPin size={12} color="var(--color-terracotta-light)" />
                    <span>{PORTFOLIO_DATA.personal.location}</span>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-300)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Active in Mumbai property sourcing, developer channel partnerships, pre-sales management, and brand storytelling. Reach out directly via WhatsApp, email, or telephone.
              </p>

              {/* Direct Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href={PORTFOLIO_DATA.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-terracotta ios-pressable"
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  <MessageCircle size={17} />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="btn btn-outline ios-pressable"
                  style={{
                    width: '100%',
                    padding: '0.85rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(255, 255, 255, 0.16)',
                    color: '#FFFFFF',
                  }}
                >
                  <Mail size={17} />
                  <span>Email Swati</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline ios-pressable"
                  style={{
                    width: '100%',
                    padding: '0.85rem',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255, 255, 255, 0.14)',
                    color: '#FFFFFF',
                  }}
                >
                  <InstagramIcon size={17} />
                  <span>Follow on Instagram (@its_swatified)</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* iOS Inset Grouped Table View for Quick Contacts */}
            <div className="ios-list-group">
              {/* Email Item */}
              <div className="ios-list-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    className="ios-squircle-icon"
                    style={{
                      backgroundColor: 'var(--color-terracotta-subtle)',
                      border: '1px solid var(--color-terracotta-border)',
                      color: 'var(--color-terracotta)',
                    }}
                  >
                    <Mail size={16} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'var(--color-charcoal-400)' }}>
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-charcoal-900)', textDecoration: 'none' }}
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.email, 'email')}
                  title="Copy email"
                  className="ios-pressable"
                  style={{
                    background: 'rgba(24, 25, 27, 0.04)',
                    border: '1px solid var(--color-border-light)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.4rem 0.65rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: copiedType === 'email' ? 'green' : 'var(--color-charcoal-600)',
                  }}
                >
                  {copiedType === 'email' ? <Check size={13} color="green" /> : <Copy size={13} />}
                  <span>{copiedType === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Item */}
              <div className="ios-list-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    className="ios-squircle-icon"
                    style={{
                      backgroundColor: 'var(--color-sage-subtle)',
                      border: '1px solid var(--color-sage-border)',
                      color: 'var(--color-sage)',
                    }}
                  >
                    <Phone size={16} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'var(--color-charcoal-400)' }}>
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:+91${PORTFOLIO_DATA.personal.phone}`}
                      style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-charcoal-900)', textDecoration: 'none' }}
                    >
                      {PORTFOLIO_DATA.personal.phoneDisplay}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.phone, 'phone')}
                  title="Copy phone"
                  className="ios-pressable"
                  style={{
                    background: 'rgba(24, 25, 27, 0.04)',
                    border: '1px solid var(--color-border-light)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.4rem 0.65rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: copiedType === 'phone' ? 'green' : 'var(--color-charcoal-600)',
                  }}
                >
                  {copiedType === 'phone' ? <Check size={13} color="green" /> : <Copy size={13} />}
                  <span>{copiedType === 'phone' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Location Item */}
              <div className="ios-list-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    className="ios-squircle-icon"
                    style={{
                      backgroundColor: 'rgba(24, 25, 27, 0.04)',
                      border: '1px solid var(--color-border-hairline)',
                      color: 'var(--color-charcoal-700)',
                    }}
                  >
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'var(--color-charcoal-400)' }}>
                      Location & Region
                    </span>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-charcoal-900)' }}>
                      {PORTFOLIO_DATA.personal.location}
                    </span>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: 'var(--color-terracotta)',
                    backgroundColor: 'var(--color-terracotta-subtle)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  On-Ground
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Composer (Apple Glass Card) */}
          <div
            className="ios-glass-card"
            style={{
              padding: '2.25rem',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.65rem',
                fontWeight: 600,
                color: 'var(--color-charcoal-950)',
                marginBottom: '0.35rem',
                letterSpacing: '-0.02em',
              }}
            >
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.865rem', color: 'var(--color-charcoal-600)', marginBottom: '1.65rem' }}>
              Choose your inquiry topic to initiate a structured inquiry directly on WhatsApp or Email.
            </p>

            <form onSubmit={handleSendMessage} style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
              {/* Inquiry Category Selector (iOS Segmented Feel) */}
              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--color-charcoal-500)', marginBottom: '0.65rem' }}>
                  Inquiry Topic
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['Property Sourcing', 'Channel Partnership', 'Pre-Sales Coordination', 'Creative Collab', 'General'].map((type) => {
                    const isSelected = inquiryType === type;
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setInquiryType(type)}
                        className={`ios-pressable ${isSelected ? 'badge-terracotta' : ''}`}
                        style={{
                          padding: '0.45rem 0.95rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s var(--spring-snappy)',
                          border: '1px solid',
                          backgroundColor: isSelected ? 'var(--color-charcoal-900)' : 'rgba(24, 25, 27, 0.04)',
                          borderColor: isSelected ? 'var(--color-charcoal-900)' : 'rgba(24, 25, 27, 0.08)',
                          color: isSelected ? '#FFFFFF' : 'var(--color-charcoal-700)',
                          boxShadow: isSelected ? '0 2px 8px rgba(18, 19, 21, 0.15)' : 'none',
                        }}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name Field with iOS Input Class */}
              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--color-charcoal-500)', marginBottom: '0.45rem' }}>
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Rahul Sharma / Developer Lead / Channel Partner"
                  className="ios-input"
                />
              </div>

              {/* Message Field with iOS Textarea Class */}
              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--color-charcoal-500)', marginBottom: '0.45rem' }}>
                  Requirement or Message Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Share your property parameters (locality, configuration, budget) or collaboration scope..."
                  className="ios-textarea"
                  style={{ resize: 'vertical' }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.35rem', flexWrap: 'wrap' }}>
                <button
                  type="submit"
                  className="btn btn-terracotta ios-pressable"
                  style={{ flex: '1 1 200px', padding: '0.9rem' }}
                >
                  <MessageCircle size={17} />
                  <span>Send via WhatsApp</span>
                </button>

                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(`${inquiryType} - Inquiry from ${senderName || 'Portfolio Visitor'}`)}&body=${encodeURIComponent(messageText || 'Hello Swati, I would like to connect.')}`}
                  className="btn btn-primary ios-pressable"
                  style={{ flex: '1 1 200px', padding: '0.9rem' }}
                >
                  <Mail size={17} />
                  <span>Send via Email</span>
                </a>
              </div>

              {/* Privacy Reassurance Note */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.75rem',
                  color: 'var(--color-charcoal-500)',
                  marginTop: '0.45rem',
                }}
              >
                <CheckCircle2 size={14} color="var(--color-sage)" />
                <span>Professional inquiries are addressed confidentially and promptly.</span>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .contact-grid {
            grid-template-columns: 0.95fr 1.05fr !important;
          }
        }
        @media (max-width: 768px) {
          .contact-section {
            padding-top: 3.5rem !important;
            padding-bottom: 3.5rem !important;
          }
          .contact-grid {
            gap: 1.75rem !important;
          }
          .contact-section .ios-dark-glass,
          .contact-section .ios-glass-card {
            padding: 1.35rem 1.15rem !important;
            border-radius: var(--radius-xl) !important;
          }
          .contact-section input,
          .contact-section textarea,
          .contact-section select {
            font-size: 16px !important;
          }
          .contact-section button[type="submit"],
          .contact-section .btn-primary {
            width: 100% !important;
            flex: 1 1 100% !important;
          }
        }
        @media (max-width: 375px) {
          .contact-section .ios-dark-glass,
          .contact-section .ios-glass-card {
            padding: 1.15rem 0.85rem !important;
            border-radius: var(--radius-lg) !important;
          }
        }
      `}</style>
    </section>
  );
};
