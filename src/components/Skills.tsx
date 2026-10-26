import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ShieldCheck, Award, HeartHandshake, MessageSquare, Target, Users, Search, TrendingUp, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const getSkillIcon = (index: number) => {
    switch (index % 8) {
      case 0: return <Users size={18} color="var(--color-terracotta)" />;
      case 1: return <HeartHandshake size={18} color="var(--color-terracotta)" />;
      case 2: return <Award size={18} color="var(--color-terracotta)" />;
      case 3: return <Target size={18} color="var(--color-terracotta)" />;
      case 4: return <TrendingUp size={18} color="var(--color-terracotta)" />;
      case 5: return <ShieldCheck size={18} color="var(--color-terracotta)" />;
      case 6: return <Search size={18} color="var(--color-terracotta)" />;
      case 7: return <MessageSquare size={18} color="var(--color-terracotta)" />;
      default: return <CheckCircle2 size={18} color="var(--color-terracotta)" />;
    }
  };

  return (
    <section
      id="capabilities"
      className="skills-section"
      style={{
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        backgroundColor: 'var(--color-ivory-warm)',
        borderTop: '1px solid var(--color-border-hairline)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '820px' }}>
          <span className="section-tagline">Capabilities & Execution Strengths</span>
          <h2 className="section-title">
            Domain Competencies & Value Drivers
          </h2>
          <p className="section-subtitle">
            Core real estate disciplines built through direct customer engagement, developer launches, partner development, and cross-functional deal management in Mumbai.
          </p>
        </div>

        {/* Core Real Estate Capabilities Grid */}
        <div style={{ marginBottom: '4rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.75rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                fontWeight: 600,
                color: 'var(--color-charcoal-950)',
                letterSpacing: '-0.015em',
              }}
            >
              Core Real Estate Capabilities
            </span>
            <div
              style={{
                flex: 1,
                height: '1px',
                backgroundColor: 'var(--color-border-hairline)',
              }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {PORTFOLIO_DATA.skills.coreCapabilities.map((skill, idx) => (
              <div
                key={idx}
                className="ios-glass-card"
                style={{
                  padding: '1.65rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--color-terracotta-subtle)',
                    border: '1px solid var(--color-terracotta-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(184, 93, 67, 0.12)',
                  }}
                >
                  {getSkillIcon(idx)}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.02rem',
                    fontWeight: 600,
                    color: 'var(--color-charcoal-950)',
                    lineHeight: 1.3,
                  }}
                >
                  {skill.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-charcoal-600)',
                    lineHeight: 1.55,
                  }}
                >
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Strengths Strip */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.75rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                fontWeight: 600,
                color: 'var(--color-charcoal-950)',
                letterSpacing: '-0.015em',
              }}
            >
              Professional Strengths
            </span>
            <div
              style={{
                flex: 1,
                height: '1px',
                backgroundColor: 'var(--color-border-hairline)',
              }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {PORTFOLIO_DATA.skills.strengths.map((str, idx) => (
              <div
                key={idx}
                className="ios-glass-card"
                style={{
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="var(--color-sage)" />
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--color-charcoal-950)',
                    }}
                  >
                    {str.title}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--color-charcoal-600)',
                    lineHeight: 1.5,
                  }}
                >
                  {str.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-section {
            padding-top: 3.5rem !important;
            padding-bottom: 3.5rem !important;
          }
          .skills-section > div > div:nth-child(2) {
            margin-bottom: 2.75rem !important;
          }
          .skills-section .ios-glass-card {
            padding: 1.25rem !important;
            border-radius: var(--radius-lg) !important;
          }
        }
      `}</style>
    </section>
  );
};
