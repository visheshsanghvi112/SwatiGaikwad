import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, Building, Info } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section
      id="experience"
      className="timeline-section"
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
          <span className="section-tagline">Professional Career Journey</span>
          <h2 className="section-title">
            Real Estate Career Timeline
          </h2>
          <p
            style={{
              fontSize: '1.15rem',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              color: 'var(--color-charcoal-700)',
              lineHeight: 1.6,
              marginTop: '0.75rem',
              paddingLeft: '1.25rem',
              borderLeft: '3px solid var(--color-terracotta)',
            }}
          >
            “{PORTFOLIO_DATA.timeline.summary}”
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div
          style={{
            position: 'relative',
            marginTop: '3.5rem',
            paddingLeft: '1.5rem',
          }}
          className="timeline-container"
        >
          {/* Timeline Center Line */}
          <div
            style={{
              position: 'absolute',
              top: '1.5rem',
              bottom: '1.5rem',
              left: '28px',
              width: '2px',
              backgroundColor: 'var(--color-border-hairline)',
            }}
            className="timeline-vertical-line"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {PORTFOLIO_DATA.timeline.roles.map((role) => (
              <div
                key={role.id}
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '2rem',
                }}
                className="timeline-item-row"
              >
                {/* Timeline Node Icon */}
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: role.isCurrent ? 'var(--color-terracotta)' : 'var(--color-ivory-light)',
                    border: role.isCurrent ? '3px solid #FFFFFF' : '2px solid var(--color-border-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: role.isCurrent ? '#FFFFFF' : 'var(--color-charcoal-600)',
                    flexShrink: 0,
                    zIndex: 2,
                    boxShadow: role.isCurrent ? '0 0 0 4px rgba(184, 93, 67, 0.25)' : '0 2px 6px rgba(0,0,0,0.04)',
                    marginTop: '0.25rem',
                  }}
                  className="timeline-node"
                >
                  <Briefcase size={14} />
                </div>

                {/* Role Content Card (Apple Glass) */}
                <div
                  className="ios-glass-card timeline-card"
                  style={{
                    flex: 1,
                    border: role.isCurrent
                      ? '1px solid var(--color-terracotta-border)'
                      : '1px solid rgba(255, 255, 255, 0.75)',
                    position: 'relative',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2rem',
                  }}
                >
                  {/* Top Details Header */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '0.85rem',
                      marginBottom: '1rem',
                      paddingBottom: '1rem',
                      borderBottom: '1px solid var(--color-border-hairline)',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.45rem',
                            fontWeight: 600,
                            color: 'var(--color-charcoal-950)',
                            lineHeight: 1.2,
                            letterSpacing: '-0.015em',
                          }}
                        >
                          {role.title}
                        </span>
                        {role.isCurrent && (
                          <span
                            className="badge-editorial badge-terracotta"
                            style={{ padding: '0.2rem 0.6rem', fontSize: '0.6875rem' }}
                          >
                            Current Role
                          </span>
                        )}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-charcoal-700)', fontSize: '0.925rem', fontWeight: 600 }}>
                        <Building size={16} color="var(--color-terracotta)" />
                        <span>{role.company}</span>
                        <span style={{ color: 'var(--color-border-medium)' }}>•</span>
                        <span style={{ fontSize: '0.8125rem', color: 'var(--color-charcoal-500)', fontWeight: 500 }}>
                          {role.type}
                        </span>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        padding: '0.35rem 0.85rem',
                        backgroundColor: 'rgba(24, 25, 27, 0.04)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--color-charcoal-800)',
                        border: '1px solid var(--color-border-hairline)',
                      }}
                    >
                      <Calendar size={13} color="var(--color-terracotta)" />
                      <span>{role.period}</span>
                    </div>
                  </div>

                  {/* Responsibilities List */}
                  <div style={{ marginBottom: role.note ? '1.25rem' : '0' }}>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.72rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--color-charcoal-400)',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                      }}
                    >
                      Key Responsibilities & Impact
                    </span>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {role.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.65rem',
                            fontSize: '0.9rem',
                            color: 'var(--color-charcoal-700)',
                            lineHeight: 1.6,
                          }}
                        >
                          <div
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--color-terracotta)',
                              marginTop: '0.55rem',
                              flexShrink: 0,
                            }}
                          />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contextual Clarification Note */}
                  {role.note && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.55rem',
                        padding: '0.75rem 1rem',
                        backgroundColor: 'rgba(24, 25, 27, 0.03)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.8125rem',
                        color: 'var(--color-charcoal-600)',
                        border: '1px solid var(--color-border-hairline)',
                      }}
                    >
                      <Info size={14} color="var(--color-terracotta)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                      <span>{role.note}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-section {
            padding-top: 3.5rem !important;
            padding-bottom: 3.5rem !important;
          }
          .timeline-card {
            padding: 1.25rem 1.15rem !important;
            border-radius: var(--radius-lg) !important;
          }
        }
        @media (max-width: 640px) {
          .timeline-container {
            padding-left: 0 !important;
            margin-top: 2rem !important;
          }
          .timeline-vertical-line {
            display: none !important;
          }
          .timeline-node {
            display: none !important;
          }
          .timeline-item-row {
            gap: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};
