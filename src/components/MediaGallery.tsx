import React, { useState } from 'react';
import { INSTAGRAM_MEDIA_ITEMS, INSTAGRAM_CATEGORIES, type InstagramMediaItem } from '../data/mediaData';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { InstagramIcon } from './InstagramIcon';
import { MediaModal } from './MediaModal';
import { Play, ArrowUpRight, CheckCircle2, Building2 } from 'lucide-react';

export const MediaGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<InstagramMediaItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? INSTAGRAM_MEDIA_ITEMS
    : INSTAGRAM_MEDIA_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="content"
      className="media-section"
      style={{
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        backgroundColor: 'var(--color-ivory-warm)',
        borderTop: '1px solid var(--color-border-hairline)',
        borderBottom: '1px solid var(--color-border-hairline)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '1.5rem',
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <span className="section-tagline">Visual Expression & Social Presence</span>
              <h2 className="section-title">
                Verified Instagram Reels & Highlights
              </h2>
              <p className="section-subtitle">
                Authentic public content authored by{' '}
                <strong style={{ color: 'var(--color-charcoal-950)' }}>@its_swatified</strong>, capturing golden hour drives, festive Ganpati traditions, curated wedding guest styling, and Mumbai property sourcing.
              </p>
            </div>

            {/* Direct Profile CTA */}
            <a
              href={PORTFOLIO_DATA.personal.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-terracotta"
              style={{
                alignSelf: 'flex-start',
                padding: '0.75rem 1.4rem',
              }}
            >
              <InstagramIcon size={17} />
              <span>Visit @its_swatified Profile</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Instagram Profile Spotlight Card (Apple Glass) */}
          <div
            className="ios-glass-card media-spotlight-card"
            style={{
              padding: '1.5rem 2rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src="/assets/swati_avatar_300.jpg"
                  alt="Swati Gaikwad Profile"
                  width="64"
                  height="64"
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--color-terracotta)',
                    boxShadow: '0 6px 16px rgba(184, 93, 67, 0.25)',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-terracotta)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  }}
                >
                  <InstagramIcon size={11} color="#FFFFFF" />
                </span>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.2rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.45rem',
                      fontWeight: 600,
                      color: 'var(--color-charcoal-950)',
                      lineHeight: 1.15,
                    }}
                  >
                    Swati Gaikwad
                  </h3>
                  <CheckCircle2 size={16} color="var(--color-terracotta)" />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-terracotta)' }}>
                    @its_swatified
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-300)' }}>•</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-500)', fontWeight: 500 }}>
                    Digital Content Creator · Mumbai
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-300)' }}>•</span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      backgroundColor: 'rgba(24, 25, 27, 0.05)',
                      padding: '0.15rem 0.55rem',
                      borderRadius: 'var(--radius-full)',
                      color: 'var(--color-charcoal-700)',
                    }}
                  >
                    470+ Public Posts
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a
                href={PORTFOLIO_DATA.personal.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '0.65rem 1.3rem', fontSize: '0.8125rem' }}
              >
                <span>Follow on Instagram</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* iOS Native Style Segmented Control Filter Tabs */}
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', paddingBottom: '0.25rem' }}>
            <div className="ios-segmented-control">
              {INSTAGRAM_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`ios-segment-btn ${isActive ? 'active' : ''}`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '1.75rem',
          }}
          className="gallery-grid"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item-card"
              onClick={() => setSelectedItem(item)}
              style={{
                backgroundColor: 'var(--color-ivory-light)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 280ms var(--spring-snappy)',
                boxShadow: 'var(--shadow-apple-card)',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-apple-hover)';
                e.currentTarget.style.borderColor = 'var(--color-terracotta-border)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-apple-card)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
              }}
            >
              {/* Media Image Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: item.aspectRatio === '9:16' ? '9/14' : '1/1',
                  backgroundColor: '#151618',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 600ms var(--spring-fluid)',
                  }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.style.background = 'linear-gradient(135deg, #2A2D32, #18191B)';
                    }
                  }}
                />

                {/* Subtle Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(14, 15, 17, 0.82) 0%, transparent 40%, rgba(14, 15, 17, 0.35) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Top Category Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.85rem',
                    left: '0.85rem',
                    right: '0.85rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      backgroundColor: 'rgba(253, 252, 249, 0.92)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      color: 'var(--color-charcoal-800)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(255, 255, 255, 0.6)',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                    }}
                  >
                    {item.categoryLabel}
                  </span>

                  <span
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(18, 19, 21, 0.65)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    {item.type === 'reel' ? <InstagramIcon size={14} /> : <Building2 size={14} />}
                  </span>
                </div>

                {/* Play Button Icon for Reels */}
                {item.type === 'reel' && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(18, 19, 21, 0.72)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: '1.5px solid rgba(255, 255, 255, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      boxShadow: '0 10px 28px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    <Play size={18} fill="#FFFFFF" style={{ marginLeft: '3px' }} />
                  </div>
                )}

                {/* Bottom Overlay Title */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    color: '#FFFFFF',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      lineHeight: 1.22,
                      textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  flex: 1,
                  justifyContent: 'space-between',
                }}
              >
                <p
                  style={{
                    fontSize: '0.84rem',
                    lineHeight: 1.5,
                    color: 'var(--color-charcoal-600)',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {item.caption}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--color-border-hairline)',
                    fontSize: '0.75rem',
                  }}
                >
                  <span style={{ color: 'var(--color-terracotta)', fontWeight: 600 }}>
                    {item.likes || item.authorHandle}
                  </span>
                  <span
                    style={{
                      color: 'var(--color-charcoal-800)',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.2rem',
                    }}
                  >
                    <span>View Card</span>
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Authentic Feed Transparency Card */}
        <div
          className="ios-glass-card"
          style={{
            marginTop: '3.5rem',
            padding: '1.75rem 2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.25rem' }}>
              <CheckCircle2 size={16} color="var(--color-sage)" />
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--color-charcoal-950)',
                }}
              >
                100% Authentic Content Verification
              </span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-charcoal-500)', maxWidth: '640px', lineHeight: 1.6 }}>
              All reels in this showcase are verified public works authored directly by <strong>Swati Gaikwad (@its_swatified)</strong>. Real estate sourcing highlights reflect active advisory and closure assignments with developers across Mumbai.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.75rem 1.4rem', fontSize: '0.8125rem' }}
          >
            <InstagramIcon size={16} />
            <span>Open Profile @its_swatified</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Accessible Interactive Detail Modal */}
      <MediaModal item={selectedItem} onClose={() => setSelectedItem(null)} />

      <style>{`
        @media (max-width: 768px) {
          .media-section {
            padding-top: 3.5rem !important;
            padding-bottom: 3.5rem !important;
          }
          .media-spotlight-card {
            padding: 1.25rem 1rem !important;
            border-radius: var(--radius-xl) !important;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 1.25rem !important;
          }
          .media-spotlight-card .btn {
            width: 100% !important;
            justify-content: center !important;
          }
          .gallery-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
        @media (max-width: 375px) {
          .media-spotlight-card {
            padding: 1rem 0.85rem !important;
          }
          .gallery-item-card {
            border-radius: var(--radius-lg) !important;
          }
        }
      `}</style>
    </section>
  );
};
