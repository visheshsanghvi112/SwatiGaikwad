import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { InstagramIcon } from './InstagramIcon';
import { ArrowDown, ArrowUpRight, Building2, Sparkles, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: 'relative',
        paddingTop: 'calc(7.5rem + env(safe-area-inset-top, 0px))',
        paddingBottom: '5rem',
        minHeight: 'min(94dvh, 880px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Editorial Headline & Identity */}
          <div className="hero-left-column" style={{ maxWidth: '650px' }}>
            {/* Dual Identity Pills */}
            <div
              className="hero-identity-pills"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.65rem',
                marginBottom: '1.75rem',
              }}
            >
              <span className="badge-editorial badge-terracotta">
                <Building2 size={13} />
                <span>Real Estate Sourcing & Closings</span>
              </span>
              <span className="badge-editorial badge-sage">
                <Sparkles size={13} />
                <span>Personal Brand · @its_swatified</span>
              </span>
              <span
                className="badge-editorial"
                style={{
                  color: 'var(--color-charcoal-700)',
                }}
              >
                <span className="pulsing-dot"></span>
                <span>Active in Mumbai</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="hero-headline"
              style={{
                fontSize: 'clamp(2.6rem, 5vw, 4.3rem)',
                fontWeight: 500,
                lineHeight: 1.06,
                letterSpacing: '-0.03em',
                color: 'var(--color-charcoal-950)',
                marginBottom: '1.25rem',
              }}
            >
              Building Relationships.{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--color-terracotta)' }}>
                Closing Deals.
              </span>{' '}
              Creating Connections.
            </h1>

            {/* Supporting Headline */}
            <p
              className="hero-subheadline"
              style={{
                fontSize: 'clamp(1.05rem, 1.5vw, 1.3rem)',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 600,
                color: 'var(--color-charcoal-700)',
                marginBottom: '1.5rem',
                letterSpacing: '0.005em',
                lineHeight: 1.35,
              }}
            >
              {PORTFOLIO_DATA.hero.subheadline}
            </p>

            {/* Introduction Copy */}
            <p
              className="hero-intro"
              style={{
                fontSize: '1.025rem',
                lineHeight: 1.7,
                color: 'var(--color-charcoal-600)',
                marginBottom: '2.5rem',
                maxWidth: '560px',
              }}
            >
              {PORTFOLIO_DATA.hero.intro}
            </p>

            {/* Three Primary CTAs */}
            <div
              className="hero-cta-group"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.85rem',
                marginBottom: '2.5rem',
              }}
            >
              <button
                onClick={() => scrollTo('#real-estate')}
                className="btn btn-primary"
              >
                <span>Explore My Work</span>
                <ArrowDown size={15} />
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="btn btn-terracotta"
              >
                <span>Connect for Real Estate</span>
                <ArrowUpRight size={15} />
              </button>

              <a
                href={PORTFOLIO_DATA.personal.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <InstagramIcon size={16} color="var(--color-terracotta)" />
                <span>Follow on Instagram</span>
              </a>
            </div>

            {/* Trust Assurance Strip */}
            <div
              className="hero-trust-strip"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.5rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--color-border-hairline)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8125rem', color: 'var(--color-charcoal-600)' }}>
                <CheckCircle2 size={15} color="var(--color-sage)" />
                <span>7+ Years Mumbai Real Estate Track Record</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8125rem', color: 'var(--color-charcoal-600)' }}>
                <CheckCircle2 size={15} color="var(--color-sage)" />
                <span>Direct Client & Channel Partner Access</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Showcase */}
          <div
            className="hero-portrait-column"
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              maxWidth: '430px',
              margin: '0 auto',
            }}
          >
            {/* Ambient OLED Radial Backlight */}
            <div
              className="hero-ambient-glow"
              style={{
                position: 'absolute',
                inset: '-24px',
                background: 'radial-gradient(ellipse at 50% 45%, rgba(184, 93, 67, 0.28) 0%, rgba(194, 162, 122, 0.16) 45%, transparent 70%)',
                filter: 'blur(30px)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />

            {/* Background Aesthetic Layer */}
            <div
              className="hero-portrait-backdrop"
              style={{
                position: 'absolute',
                inset: '-8px',
                backgroundColor: 'var(--color-ivory-dark)',
                borderRadius: 'calc(var(--radius-2xl) + 6px)',
                transform: 'rotate(2deg)',
                border: '1px solid var(--color-border-light)',
                zIndex: 0,
                opacity: 0.75,
                pointerEvents: 'none',
              }}
            />

            {/* Main Portrait Frame with Apple Depth */}
            <div
              className="hero-portrait-frame"
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                borderRadius: 'var(--radius-2xl)',
                overflow: 'hidden',
                backgroundColor: 'var(--color-charcoal-900)',
                boxShadow: 'var(--shadow-apple-float)',
                border: '1px solid rgba(255, 255, 255, 0.65)',
              }}
            >
              {/* Image Container with Editorial Ratio */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4/5',
                  overflow: 'hidden',
                  backgroundColor: '#18191B',
                }}
              >
                <img
                  src={PORTFOLIO_DATA.personal.primaryPortrait}
                  alt="Swati Gaikwad - Real Estate Sourcing Manager & Content Creator"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 10%',
                    transition: 'transform 700ms var(--spring-fluid)',
                  }}
                />

                {/* Subtle gradient overlay at bottom for card text */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(14, 15, 17, 0.92) 0%, rgba(14, 15, 17, 0.25) 45%, transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Portrait Caption Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    left: '1.25rem',
                    right: '1.25rem',
                    color: '#FFFFFF',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.25rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.55rem',
                        fontWeight: 500,
                        letterSpacing: '-0.015em',
                      }}
                    >
                      Swati Gaikwad
                    </span>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        backgroundColor: 'rgba(255, 255, 255, 0.18)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                      }}
                    >
                      Mumbai
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.8125rem',
                      color: 'rgba(255, 255, 255, 0.88)',
                      lineHeight: 1.4,
                    }}
                  >
                    Sourcing & Closings Specialist · Digital Creator
                  </p>
                </div>
              </div>

              {/* Card Footer Ribbon */}
              <div
                style={{
                  padding: '1rem 1.25rem',
                  backgroundColor: 'rgba(18, 19, 21, 0.96)',
                  backdropFilter: 'blur(20px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <img
                    src={PORTFOLIO_DATA.personal.avatarSmall}
                    alt="Swati Gaikwad Profile"
                    width="34"
                    height="34"
                    decoding="async"
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      border: '1.5px solid var(--color-terracotta)',
                      objectFit: 'cover',
                    }}
                  />
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        lineHeight: 1.2,
                      }}
                    >
                      @its_swatified
                    </span>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.6875rem',
                        color: 'var(--color-charcoal-300)',
                      }}
                    >
                      Public Instagram Profile
                    </span>
                  </div>
                </div>

                <a
                  href={PORTFOLIO_DATA.personal.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--color-terracotta-light)',
                    fontSize: '0.78rem',
                    textDecoration: 'none',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}
                >
                  <span>View</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* Floating Experience Badge with Apple Blur */}
            <div
              className="ios-glass-card hero-experience-badge"
              style={{
                position: 'absolute',
                bottom: '-1.25rem',
                left: '-1rem',
                padding: '0.85rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                zIndex: 3,
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                maxWidth: '240px',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-terracotta-subtle)',
                  border: '1px solid var(--color-terracotta-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-terracotta)',
                  flexShrink: 0,
                }}
              >
                <Building2 size={18} />
              </div>
              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: 'var(--color-charcoal-950)',
                  }}
                >
                  7+ Years
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.6875rem',
                    color: 'var(--color-charcoal-600)',
                    lineHeight: 1.3,
                    fontWeight: 500,
                  }}
                >
                  Mumbai Pre-Sales & Sourcing
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Credential Metrics Strip */}
        <div
          className="hero-stats-grid"
          style={{
            marginTop: '4.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--color-border-hairline)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {PORTFOLIO_DATA.hero.stats.map((stat, i) => (
            <div
              key={i}
              className="ios-glass-card hero-stat-card"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <span
                className="hero-stat-label"
                style={{
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--color-charcoal-400)',
                  fontWeight: 700,
                }}
              >
                {stat.label}
              </span>
              <span
                className="hero-stat-value"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: 'var(--color-charcoal-950)',
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 959px) {
          .hero-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          .hero-left-column {
            display: contents !important;
          }
          .hero-identity-pills {
            order: 1 !important;
          }
          .hero-headline {
            order: 2 !important;
          }
          .hero-subheadline {
            order: 3 !important;
          }
          .hero-portrait-column {
            order: 4 !important;
            width: 100% !important;
            max-width: 380px !important;
            margin: 0.85rem auto 2.25rem auto !important;
          }
          .hero-intro {
            order: 5 !important;
          }
          .hero-cta-group {
            order: 6 !important;
          }
          .hero-trust-strip {
            order: 7 !important;
          }
        }
        @media (max-width: 768px) {
          .hero-section {
            padding-top: calc(5.25rem + env(safe-area-inset-top, 0px)) !important;
            padding-bottom: 2.5rem !important;
            min-height: auto !important;
          }
          .hero-identity-pills {
            gap: 0.45rem !important;
            margin-bottom: 1rem !important;
          }
          .hero-identity-pills .badge-editorial {
            font-size: 0.6875rem !important;
            padding: 0.28rem 0.65rem !important;
          }
          .hero-headline {
            font-size: clamp(2rem, 7.5vw, 2.75rem) !important;
            line-height: 1.12 !important;
            margin-bottom: 0.85rem !important;
          }
          .hero-subheadline {
            font-size: clamp(0.98rem, 3.8vw, 1.15rem) !important;
            margin-bottom: 1rem !important;
            line-height: 1.4 !important;
          }
          .hero-intro {
            font-size: 0.9375rem !important;
            line-height: 1.65 !important;
            margin-bottom: 1.75rem !important;
          }
          .hero-cta-group {
            flex-direction: column !important;
            width: 100% !important;
            gap: 0.65rem !important;
            margin-bottom: 1.75rem !important;
          }
          .hero-cta-group .btn {
            width: 100% !important;
            justify-content: center !important;
            padding: 0.85rem 1.25rem !important;
            font-size: 0.875rem !important;
          }
          .hero-trust-strip {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.65rem !important;
            padding-top: 1rem !important;
          }
          .hero-portrait-column {
            max-width: 350px !important;
          }
          .hero-portrait-backdrop {
            inset: -6px !important;
            border-radius: calc(var(--radius-xl) + 6px) !important;
            transform: rotate(1.5deg) !important;
          }
          .hero-portrait-frame {
            border-radius: var(--radius-xl) !important;
          }
          .hero-experience-badge {
            position: absolute !important;
            bottom: -1rem !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: max-content !important;
            max-width: calc(100% - 2rem) !important;
            padding: 0.75rem 1.15rem !important;
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.14) !important;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
            margin-top: 2.75rem !important;
            padding-top: 1.75rem !important;
          }
          .hero-stat-card {
            padding: 1rem !important;
            border-radius: var(--radius-md) !important;
          }
          .hero-stat-value {
            font-size: 1.5rem !important;
          }
          .hero-stat-label {
            font-size: 0.65rem !important;
          }
        }
        @media (max-width: 375px) {
          .hero-portrait-column {
            max-width: 295px !important;
          }
          .hero-headline {
            font-size: 1.85rem !important;
          }
          .hero-subheadline {
            font-size: 0.92rem !important;
          }
          .hero-experience-badge {
            padding: 0.6rem 0.85rem !important;
            bottom: -0.85rem !important;
          }
          .hero-stats-grid {
            gap: 0.5rem !important;
          }
          .hero-stat-card {
            padding: 0.75rem 0.65rem !important;
          }
          .hero-stat-value {
            font-size: 1.3rem !important;
          }
          .hero-stat-label {
            font-size: 0.6rem !important;
          }
        }
      `}</style>
    </section>
  );
};
