import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Quote, Building2, Users2, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="about-section"
      style={{
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        backgroundColor: 'var(--color-ivory-warm)',
        position: 'relative',
        borderTop: '1px solid var(--color-border-hairline)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '840px' }}>
          <span className="section-tagline">Professional Introduction</span>
          <h2 className="section-title">
            Navigating Real Estate with Precision, Empathy, and Integrity
          </h2>
          <p className="section-subtitle">
            {PORTFOLIO_DATA.about.lead}
          </p>
        </div>

        {/* Content Layout: 2 Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Narrative Column */}
          <div className="about-narrative-column">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--color-charcoal-700)', fontSize: '1.03rem', lineHeight: 1.78 }}>
              <p>
                {PORTFOLIO_DATA.about.paragraphs[0]}
              </p>
              <p>
                {PORTFOLIO_DATA.about.paragraphs[1]}
              </p>
              <p>
                {PORTFOLIO_DATA.about.paragraphs[2]}
              </p>
            </div>

            {/* Apple Frosted Pull Quote Box */}
            <div
              className="ios-glass-card about-pullquote"
              style={{
                marginTop: '2.5rem',
                padding: '2.25rem',
                borderLeft: '4px solid var(--color-terracotta)',
                position: 'relative',
              }}
            >
              <Quote
                size={34}
                color="var(--color-terracotta-light)"
                style={{ position: 'absolute', top: '1.75rem', right: '1.75rem', opacity: 0.25 }}
              />
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.35rem',
                  fontStyle: 'italic',
                  lineHeight: 1.45,
                  color: 'var(--color-charcoal-950)',
                  marginBottom: '1rem',
                  letterSpacing: '-0.01em',
                }}
              >
                “Real estate isn’t just square footage and price per foot; it is understanding family milestones, strategic business moves, and building trust that survives long after contracts are signed.”
              </p>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--color-terracotta)',
                }}
              >
                — Swati Gaikwad
              </span>
            </div>
          </div>

          {/* Right Column: Key Philosophies & Visual Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Visual Portrait Card featuring authentic Beach Portrait */}
            <div
              className="ios-glass-card about-profile-card"
              style={{
                overflow: 'hidden',
                borderRadius: 'var(--radius-2xl)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.75rem',
                  borderBottom: '1px solid var(--color-border-hairline)',
                }}
              >
                <img
                  src={PORTFOLIO_DATA.personal.avatarImage}
                  alt="Swati Gaikwad - Instagram Profile"
                  width="68"
                  height="68"
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--color-terracotta)',
                    boxShadow: '0 6px 16px rgba(184, 93, 67, 0.22)',
                  }}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.45rem',
                        fontWeight: 600,
                        color: 'var(--color-charcoal-950)',
                        lineHeight: 1.2,
                        letterSpacing: '-0.015em',
                      }}
                    >
                      Swati Gaikwad
                    </h3>
                    <CheckCircle2 size={15} color="var(--color-terracotta)" />
                  </div>
                  <span
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--color-terracotta)',
                      fontWeight: 600,
                    }}
                  >
                    @its_swatified
                  </span>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      color: 'var(--color-charcoal-500)',
                      marginTop: '0.15rem',
                    }}
                  >
                    Active Content Creator & Property Consultant
                  </span>
                </div>
              </div>

              {/* 3 Core Pillars */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '12px',
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
                    <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-charcoal-950)', marginBottom: '0.25rem' }}>
                      {PORTFOLIO_DATA.about.philosophies[0].title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-600)', lineHeight: 1.55 }}>
                      {PORTFOLIO_DATA.about.philosophies[0].desc}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--color-sage-subtle)',
                      border: '1px solid var(--color-sage-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-sage)',
                      flexShrink: 0,
                    }}
                  >
                    <Users2 size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-charcoal-950)', marginBottom: '0.25rem' }}>
                      {PORTFOLIO_DATA.about.philosophies[1].title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-600)', lineHeight: 1.55 }}>
                      {PORTFOLIO_DATA.about.philosophies[1].desc}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(194, 162, 122, 0.14)',
                      border: '1px solid rgba(194, 162, 122, 0.28)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9C7A4A',
                      flexShrink: 0,
                    }}
                  >
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-charcoal-950)', marginBottom: '0.25rem' }}>
                      {PORTFOLIO_DATA.about.philosophies[2].title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-600)', lineHeight: 1.55 }}>
                      {PORTFOLIO_DATA.about.philosophies[2].desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Ribbon */}
              <div
                style={{
                  padding: '1rem 1.75rem',
                  backgroundColor: 'rgba(24, 25, 27, 0.03)',
                  borderTop: '1px solid var(--color-border-hairline)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '0.78rem', color: 'var(--color-charcoal-500)', fontWeight: 500 }}>
                  Dual-focus professional identity
                </span>
                <a
                  href="#pathways"
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--color-terracotta)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}
                >
                  <span>Explore Pathways</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 768px) {
          .about-section {
            padding-top: 3.5rem !important;
            padding-bottom: 3.5rem !important;
          }
          .about-grid {
            gap: 2rem !important;
          }
          .about-pullquote {
            padding: 1.35rem 1.25rem !important;
            margin-top: 1.75rem !important;
          }
          .about-pullquote p {
            font-size: 1.15rem !important;
            line-height: 1.45 !important;
          }
          .about-profile-card {
            border-radius: var(--radius-xl) !important;
          }
          .about-profile-card > div:first-child {
            padding: 1.25rem !important;
          }
          .about-profile-card > div:nth-child(2) {
            padding: 1.25rem !important;
            gap: 1.15rem !important;
          }
          .about-profile-card > div:last-child {
            padding: 0.85rem 1.25rem !important;
          }
        }
        @media (max-width: 375px) {
          .about-profile-card > div:first-child {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.75rem !important;
          }
          .about-pullquote {
            padding: 1.15rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};
