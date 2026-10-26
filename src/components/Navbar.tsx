import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { InstagramIcon } from './InstagramIcon';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Real Estate', href: '#real-estate' },
    { label: 'Experience', href: '#experience' },
    { label: 'Content', href: '#content' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          justifyContent: 'center',
          padding: 'max(0.75rem, env(safe-area-inset-top, 0px)) 1rem 0',
          pointerEvents: 'none',
          transition: 'all 300ms var(--spring-snappy)',
        }}
      >
        <div
          className="ios-nav-island"
          style={{
            pointerEvents: 'auto',
            width: '100%',
            maxWidth: '1100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isScrolled ? '0.55rem 1.25rem' : '0.75rem 1.5rem',
            backgroundColor: isScrolled ? 'rgba(250, 247, 242, 0.88)' : 'rgba(250, 247, 242, 0.72)',
            backdropFilter: 'blur(30px) saturate(190%)',
            WebkitBackdropFilter: 'blur(30px) saturate(190%)',
            border: '1px solid rgba(255, 255, 255, 0.75)',
            boxShadow: isScrolled 
              ? 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 12px 32px -4px rgba(18, 19, 21, 0.08)' 
              : 'inset 0 1px 0 rgba(255, 255, 255, 0.85), 0 6px 18px -2px rgba(18, 19, 21, 0.04)',
            borderRadius: 'var(--radius-full)',
            transition: 'all 300ms var(--spring-snappy)',
          }}
        >
          {/* Brand Identity */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: 'var(--color-charcoal-950)',
            }}
          >
            {/* Monogram Avatar */}
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1.5px solid var(--color-terracotta)',
                boxShadow: '0 2px 6px rgba(184, 93, 67, 0.25)',
                flexShrink: 0,
              }}
            >
              <img
                src={PORTFOLIO_DATA.personal.avatarSmall}
                alt="Swati Gaikwad"
                width="34"
                height="34"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                className="nav-brand-name"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: 'var(--color-charcoal-950)',
                }}
              >
                Swati Gaikwad
              </span>
              <span
                className="nav-brand-status"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.625rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--color-terracotta)',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <span className="pulsing-dot" style={{ width: '5px', height: '5px' }}></span>
                <span>Mumbai · Pre-Sales & Creator</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.75rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: 'var(--color-charcoal-700)',
                  textDecoration: 'none',
                  transition: 'color 180ms ease, transform 180ms ease',
                  padding: '0.35rem 0.25rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-terracotta)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-charcoal-700)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.65rem',
            }}
            className="desktop-nav"
          >
            <a
              href={PORTFOLIO_DATA.personal.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Swati's Instagram profile"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid var(--color-border-medium)',
                backgroundColor: 'rgba(253, 252, 249, 0.75)',
                color: 'var(--color-charcoal-800)',
                textDecoration: 'none',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-terracotta)';
                e.currentTarget.style.color = 'var(--color-terracotta)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-medium)';
                e.currentTarget.style.color = 'var(--color-charcoal-800)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <InstagramIcon size={16} />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="btn btn-primary"
              style={{
                padding: '0.55rem 1.15rem',
                fontSize: '0.8rem',
              }}
            >
              <span>Connect</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(24, 25, 27, 0.05)',
              border: '1px solid var(--color-border-light)',
              color: 'var(--color-charcoal-900)',
              cursor: 'pointer',
              touchAction: 'manipulation',
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (iOS Sheet Overlay) */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 48,
            backgroundColor: 'rgba(250, 247, 242, 0.96)',
            backdropFilter: 'blur(36px) saturate(220%)',
            WebkitBackdropFilter: 'blur(36px) saturate(220%)',
            display: 'flex',
            flexDirection: 'column',
            padding: 'calc(5.25rem + env(safe-area-inset-top, 0px)) 1.5rem calc(2.25rem + env(safe-area-inset-bottom, 0px))',
            overflowY: 'auto',
            maxHeight: '100dvh',
            animation: 'fadeInUp 240ms var(--spring-snappy) forwards',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.85rem',
                  fontWeight: 500,
                  color: 'var(--color-charcoal-950)',
                  textDecoration: 'none',
                  padding: '0.65rem 0',
                  borderBottom: '1px solid rgba(24, 25, 27, 0.06)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  animation: `fadeInUp ${150 + idx * 40}ms ease forwards`,
                }}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={18} color="var(--color-terracotta)" />
              </a>
            ))}
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1.5rem' }}>
            <a
              href={PORTFOLIO_DATA.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-terracotta"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              <MessageCircle size={17} />
              <span>WhatsApp Message</span>
            </a>
            <a
              href={PORTFOLIO_DATA.personal.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              <InstagramIcon size={17} />
              <span>Follow @its_swatified</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .ios-nav-island {
            padding: 0.5rem 0.85rem !important;
          }
          .nav-brand-name {
            font-size: 1.1rem !important;
          }
          .nav-brand-status {
            font-size: 0.575rem !important;
            letter-spacing: 0.08em !important;
          }
        }
        @media (max-width: 375px) {
          .ios-nav-island {
            padding: 0.45rem 0.75rem !important;
          }
          .nav-brand-name {
            font-size: 1rem !important;
          }
          .nav-brand-status span:last-child {
            max-width: 135px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: inline-block;
          }
        }
      `}</style>
    </>
  );
};
