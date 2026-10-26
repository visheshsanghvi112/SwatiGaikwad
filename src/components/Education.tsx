import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Calendar, Info } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="education-section"
      style={{
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        backgroundColor: 'var(--color-ivory)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '820px' }}>
          <span className="section-tagline">Academic Qualifications</span>
          <h2 className="section-title">
            Education & Management Credentials
          </h2>
          <p className="section-subtitle">
            Formal foundations in business management and computer applications complementing practical sales and operational acumen.
          </p>
        </div>

        {/* Minimalist iOS Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {PORTFOLIO_DATA.education.map((item) => (
            <div
              key={item.id}
              className="ios-glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <div>
                {/* Year & Score Ribbon */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--color-charcoal-400)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      backgroundColor: 'rgba(24, 25, 27, 0.04)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    <Calendar size={13} color="var(--color-terracotta)" />
                    <span>{item.year}</span>
                  </span>

                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      color: 'var(--color-terracotta)',
                    }}
                  >
                    {item.score}
                  </span>
                </div>

                {/* Qualification Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: 'var(--color-charcoal-950)',
                    lineHeight: 1.25,
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.015em',
                  }}
                >
                  {item.degree}
                </h3>

                {/* Institution */}
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-charcoal-600)',
                    fontWeight: 500,
                    lineHeight: 1.45,
                    marginBottom: item.highlight ? '0.75rem' : '0',
                  }}
                >
                  {item.institution}
                </p>

                {item.highlight && (
                  <p
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--color-charcoal-500)',
                      lineHeight: 1.5,
                      marginTop: '0.5rem',
                    }}
                  >
                    {item.highlight}
                  </p>
                )}
              </div>

              {item.boardNote && (
                <div
                  style={{
                    marginTop: '1.25rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--color-border-hairline)',
                    fontSize: '0.75rem',
                    color: 'var(--color-charcoal-400)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.35rem',
                    fontStyle: 'italic',
                  }}
                >
                  <Info size={12} color="var(--color-terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item.boardNote}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Editorial Compliance Footnote */}
        <div
          className="ios-glass-card"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            fontSize: '0.8125rem',
            color: 'var(--color-charcoal-500)',
            padding: '1rem 1.5rem',
            borderRadius: 'var(--radius-lg)',
            maxWidth: '740px',
          }}
        >
          <Info size={16} color="var(--color-terracotta)" style={{ flexShrink: 0 }} />
          <span>
            Academic records are presented with qualifications, years, and verified percentages first. All records are configured in editable format.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .education-section {
            padding-top: 3.5rem !important;
            padding-bottom: 3.5rem !important;
          }
          .education-section .ios-glass-card {
            padding: 1.25rem 1.15rem !important;
            border-radius: var(--radius-xl) !important;
          }
        }
      `}</style>
    </section>
  );
};
