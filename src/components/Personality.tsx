import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Building2, TrendingUp, Users, Headphones, Trees, Heart, BookOpen, Compass, Languages as LanguagesIcon } from 'lucide-react';

export const Personality: React.FC = () => {
  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building': return <Building2 size={20} color="var(--color-terracotta)" />;
      case 'TrendingUp': return <TrendingUp size={20} color="var(--color-terracotta)" />;
      case 'Users': return <Users size={20} color="var(--color-sage)" />;
      case 'Headphones': return <Headphones size={20} color="var(--color-terracotta)" />;
      case 'Leaf': return <Trees size={20} color="var(--color-sage)" />;
      case 'Heart': return <Heart size={20} color="var(--color-terracotta)" />;
      case 'BookOpen': return <BookOpen size={20} color="var(--color-sage)" />;
      case 'Compass': return <Compass size={20} color="var(--color-terracotta)" />;
      default: return <Compass size={20} color="var(--color-terracotta)" />;
    }
  };

  return (
    <section
      id="personality"
      className="personality-section"
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
          <span className="section-tagline">Perspective & Lifestyle</span>
          <h2 className="section-title">
            Passions, Interests & Perspectives
          </h2>
          <p className="section-subtitle">
            A glimpse into the habits, pursuits, and curiosity that shape Swati’s holistic worldview both in the property market and everyday life.
          </p>
        </div>

        {/* Interests Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4.5rem',
          }}
        >
          {PORTFOLIO_DATA.interests.map((item) => (
            <div
              key={item.id}
              className="ios-glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(24, 25, 27, 0.04)',
                  border: '1px solid var(--color-border-hairline)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {getInterestIcon(item.icon)}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--color-charcoal-950)',
                  lineHeight: 1.25,
                  letterSpacing: '-0.01em',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: '0.865rem',
                  color: 'var(--color-charcoal-600)',
                  lineHeight: 1.55,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Multilingual Communication Block (Apple Frosted Glass) */}
        <div
          className="ios-glass-card"
          style={{
            borderRadius: 'var(--radius-2xl)',
            padding: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          <div style={{ maxWidth: '440px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <LanguagesIcon size={18} color="var(--color-terracotta)" />
              <span
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontWeight: 700,
                  color: 'var(--color-terracotta)',
                }}
              >
                Multilingual Communication
              </span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.85rem',
                fontWeight: 600,
                color: 'var(--color-charcoal-950)',
                lineHeight: 1.15,
                marginBottom: '0.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              Languages Spoken
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-600)', lineHeight: 1.6 }}>
              Fluent cross-cultural communication facilitates ease of negotiation with local channel partners, buyers, and diverse client demographics across Mumbai.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
            }}
          >
            {PORTFOLIO_DATA.languages.map((lang, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.35rem 1.75rem',
                  backgroundColor: 'rgba(253, 252, 249, 0.9)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 4px 12px rgba(18, 19, 21, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  minWidth: '150px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: 'var(--color-charcoal-950)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {lang.name}
                </span>
                <span
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--color-terracotta)',
                    fontWeight: 600,
                  }}
                >
                  {lang.script}
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-charcoal-500)',
                  }}
                >
                  {lang.native}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .personality-section {
            padding-top: 3.5rem !important;
            padding-bottom: 3.5rem !important;
          }
          .personality-section .ios-glass-card {
            padding: 1.25rem 1.15rem !important;
            border-radius: var(--radius-xl) !important;
          }
        }
      `}</style>
    </section>
  );
};
