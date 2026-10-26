import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { InstagramIcon } from './InstagramIcon';
import { Building2, Sparkles, Check, ArrowUpRight, MessageSquare, HeartHandshake } from 'lucide-react';

export const Pathways: React.FC = () => {
  return (
    <section
      id="pathways"
      className="pathways-section"
      style={{
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        backgroundColor: 'var(--color-ivory)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" style={{ maxWidth: '780px' }}>
          <span className="section-tagline">Two Complementary Dimensions</span>
          <h2 className="section-title">
            Commercial Expertise Meets Creative Expression
          </h2>
          <p className="section-subtitle">
            A cohesive personal brand uniting structured real estate transaction execution with an authentic, relatable presence in Mumbai's digital creator sphere.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
          }}
          className="pathways-grid"
        >
          {/* Pathway A: Real Estate (Obsidian Glass) */}
          <div
            id="real-estate"
            className="ios-dark-glass pathway-card"
            style={{
              padding: '0',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              borderRadius: 'var(--radius-2xl)',
            }}
          >
            {/* Top Image Banner */}
            <div
              className="pathway-banner"
              style={{
                position: 'relative',
                height: '240px',
                width: '100%',
                overflow: 'hidden',
              }}
            >
              <img
                src={PORTFOLIO_DATA.pathways.realEstate.backgroundImage}
                alt="Modern Real Estate Architectural Interior"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.5,
                  filter: 'contrast(1.1) brightness(0.9)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(18, 19, 21, 0.95) 0%, rgba(18, 19, 21, 0.4) 60%, transparent 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  left: '1.25rem',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.4rem 0.85rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Building2 size={13} color="var(--color-terracotta-light)" />
                  <span>Real Estate Practice</span>
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div style={{ padding: '2.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--color-terracotta-light)',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                }}
              >
                {PORTFOLIO_DATA.pathways.realEstate.tagline}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.75rem, 2.4vw, 2.3rem)',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                }}
              >
                {PORTFOLIO_DATA.pathways.realEstate.headline}
              </h3>

              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--color-charcoal-300)',
                  lineHeight: 1.65,
                  marginBottom: '1.75rem',
                }}
              >
                {PORTFOLIO_DATA.pathways.realEstate.description}
              </p>

              {/* Capabilities List */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                  gap: '0.75rem 1.25rem',
                  marginBottom: '2.25rem',
                }}
              >
                {PORTFOLIO_DATA.pathways.realEstate.capabilities.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      fontSize: '0.85rem',
                      color: 'rgba(255, 255, 255, 0.88)',
                    }}
                  >
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(184, 93, 67, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '0.15rem',
                      }}
                    >
                      <Check size={11} color="var(--color-terracotta-light)" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-charcoal-300)' }}>
                  <HeartHandshake size={15} color="var(--color-terracotta-light)" />
                  <span>Sourcing, Negotiation & Pre-Sales</span>
                </div>

                <a
                  href="#contact"
                  className="btn btn-terracotta"
                  style={{
                    padding: '0.75rem 1.4rem',
                    fontSize: '0.85rem',
                  }}
                >
                  <MessageSquare size={15} />
                  <span>{PORTFOLIO_DATA.pathways.realEstate.ctaText}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Pathway B: Content & Personal Brand (Apple Ivory Glass) */}
          <div
            id="content"
            className="ios-glass-card pathway-card"
            style={{
              padding: '0',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              borderRadius: 'var(--radius-2xl)',
            }}
          >
            {/* Top Image Banner */}
            <div
              className="pathway-banner"
              style={{
                position: 'relative',
                height: '240px',
                width: '100%',
                overflow: 'hidden',
              }}
            >
              <img
                src={PORTFOLIO_DATA.pathways.contentBrand.backgroundImage}
                alt="Swati Gaikwad Content Reel Frame"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(253, 252, 249, 0.95) 0%, rgba(253, 252, 249, 0.3) 60%, transparent 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  left: '1.25rem',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.4rem 0.85rem',
                    backgroundColor: 'rgba(253, 252, 249, 0.92)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-charcoal-800)',
                    border: '1px solid rgba(255, 255, 255, 0.75)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                  }}
                >
                  <Sparkles size={13} color="var(--color-sage)" />
                  <span>Creator & Lifestyle Space</span>
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div style={{ padding: '2.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--color-sage)',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                }}
              >
                {PORTFOLIO_DATA.pathways.contentBrand.tagline}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.75rem, 2.4vw, 2.3rem)',
                  fontWeight: 500,
                  color: 'var(--color-charcoal-950)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                }}
              >
                {PORTFOLIO_DATA.pathways.contentBrand.headline}
              </h3>

              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--color-charcoal-600)',
                  lineHeight: 1.65,
                  marginBottom: '1.75rem',
                }}
              >
                {PORTFOLIO_DATA.pathways.contentBrand.description}
              </p>

              {/* Verified Themes List */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  marginBottom: '2.25rem',
                }}
              >
                {PORTFOLIO_DATA.pathways.contentBrand.themes.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '0.85rem',
                      color: 'var(--color-charcoal-700)',
                    }}
                  >
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-sage-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Check size={11} color="var(--color-sage)" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--color-border-hairline)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-charcoal-500)' }}>
                  <InstagramIcon size={15} color="var(--color-terracotta)" />
                  <span>@its_swatified on Instagram</span>
                </div>

                <a
                  href={PORTFOLIO_DATA.personal.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{
                    padding: '0.75rem 1.4rem',
                    fontSize: '0.85rem',
                  }}
                >
                  <InstagramIcon size={16} />
                  <span>{PORTFOLIO_DATA.pathways.contentBrand.ctaText}</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1040px) {
          .pathways-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .pathways-section {
            padding-top: 3.5rem !important;
            padding-bottom: 3.5rem !important;
          }
          .pathways-grid {
            gap: 1.75rem !important;
          }
          .pathway-card {
            border-radius: var(--radius-xl) !important;
          }
          .pathway-banner {
            height: 180px !important;
          }
          .pathway-card > div:last-child {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
