import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { InstagramIcon } from './InstagramIcon';
import { ArrowUp, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer-section"
      style={{
        backgroundColor: 'var(--color-charcoal-950)',
        color: '#FFFFFF',
        paddingTop: '5rem',
        paddingBottom: 'calc(6rem + env(safe-area-inset-bottom, 0px))',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Top Footer Tier */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Brand & Descriptor */}
          <div style={{ maxWidth: '420px' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                display: 'block',
                lineHeight: 1.1,
                marginBottom: '0.5rem',
              }}
            >
              Swati Gaikwad
            </span>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-charcoal-300)',
                lineHeight: 1.6,
                marginBottom: '1.25rem',
              }}
            >
              Mumbai-based Real Estate Sourcing & Closing Specialist and Digital Content Creator. Building relationships that move business forward while sharing authentic perspectives online.
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.75rem',
                color: 'var(--color-charcoal-400)',
              }}
            >
              <MapPin size={13} color="var(--color-terracotta-light)" />
              <span>Mumbai, Maharashtra, India</span>
            </div>
          </div>

          {/* Quick Section Links */}
          <div style={{ display: 'flex', gap: '3.5rem', flexWrap: 'wrap' }}>
            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  color: 'var(--color-terracotta-light)',
                  marginBottom: '1rem',
                }}
              >
                Navigation
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li>
                  <a href="#about" style={{ color: 'var(--color-charcoal-300)', textDecoration: 'none', fontSize: '0.875rem' }}>
                    About Swati
                  </a>
                </li>
                <li>
                  <a href="#real-estate" style={{ color: 'var(--color-charcoal-300)', textDecoration: 'none', fontSize: '0.875rem' }}>
                    Real Estate Practice
                  </a>
                </li>
                <li>
                  <a href="#experience" style={{ color: 'var(--color-charcoal-300)', textDecoration: 'none', fontSize: '0.875rem' }}>
                    Career Timeline
                  </a>
                </li>
                <li>
                  <a href="#content" style={{ color: 'var(--color-charcoal-300)', textDecoration: 'none', fontSize: '0.875rem' }}>
                    Content & Reels
                  </a>
                </li>
                <li>
                  <a href="#capabilities" style={{ color: 'var(--color-charcoal-300)', textDecoration: 'none', fontSize: '0.875rem' }}>
                    Domain Capabilities
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  color: 'var(--color-terracotta-light)',
                  marginBottom: '1rem',
                }}
              >
                Verified Channels
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li>
                  <a
                    href={PORTFOLIO_DATA.personal.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--color-charcoal-300)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                    }}
                  >
                    <InstagramIcon size={14} color="var(--color-terracotta-light)" />
                    <span>Instagram (@its_swatified)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    style={{
                      color: 'var(--color-charcoal-300)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                    }}
                  >
                    <Mail size={14} color="var(--color-terracotta-light)" />
                    <span>Email Swati</span>
                  </a>
                </li>
                <li>
                  <a
                    href={PORTFOLIO_DATA.personal.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--color-charcoal-300)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                    }}
                  >
                    <span>WhatsApp Direct</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Back to Top Action */}
          <div>
            <button
              onClick={scrollToTop}
              className="btn btn-outline"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderColor: 'rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                padding: '0.75rem 1.25rem',
                fontSize: '0.8125rem',
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Disclaimers */}
        <div
          style={{
            paddingTop: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.75rem',
            color: 'var(--color-charcoal-400)',
          }}
        >
          <div>
            © {currentYear} Swati Gaikwad. All rights reserved.
          </div>
          <div>
            Public Professional Portfolio · Privacy Protected (Mumbai, Maharashtra, India)
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-section {
            padding-top: 3.5rem !important;
          }
        }
        @media (max-width: 375px) {
          .footer-section > div > div:first-child {
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
};
