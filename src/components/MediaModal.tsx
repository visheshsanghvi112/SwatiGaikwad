import React, { useEffect } from 'react';
import type { InstagramMediaItem } from '../data/mediaData';
import { InstagramIcon } from './InstagramIcon';
import { X, Play, ArrowUpRight, Share2, Tag, Heart, Calendar, Building2, CheckCircle2 } from 'lucide-react';

interface MediaModalProps {
  item: InstagramMediaItem | null;
  onClose: () => void;
}

export const MediaModal: React.FC<MediaModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.caption,
        url: item.instagramUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(item.instagramUrl);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div
      className="media-modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(14, 15, 17, 0.82)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'max(1rem, env(safe-area-inset-top, 0px)) max(1rem, env(safe-area-inset-right, 0px)) max(1rem, env(safe-area-inset-bottom, 0px)) max(1rem, env(safe-area-inset-left, 0px))',
        animation: 'fadeInUp 220ms var(--spring-snappy) forwards',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--color-ivory-light)',
          borderRadius: 'var(--radius-2xl)',
          maxWidth: '860px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr',
          boxShadow: 'var(--shadow-apple-float)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          position: 'relative',
        }}
        className="modal-content-grid"
        onClick={(e) => e.stopPropagation()}
      >
        {/* iOS Drag Handle Indicator for Mobile */}
        <div className="ios-sheet-handle" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(253, 252, 249, 0.9)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(24, 25, 27, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            color: 'var(--color-charcoal-800)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          }}
        >
          <X size={17} />
        </button>

        {/* Media Visual Column */}
        <div
          style={{
            backgroundColor: '#111215',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: '260px',
            maxHeight: '500px',
            overflow: 'hidden',
          }}
        >
          <img
            src={item.thumbnailUrl}
            alt={item.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: item.aspectRatio === '9:16' ? 'contain' : 'cover',
              maxHeight: '500px',
            }}
          />

          {item.type === 'reel' ? (
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                padding: '0.35rem 0.75rem',
                backgroundColor: 'rgba(18, 19, 21, 0.75)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#FFFFFF',
                fontSize: '0.72rem',
                fontWeight: 600,
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Play size={12} fill="#FFFFFF" />
              <span>Verified Reel</span>
            </div>
          ) : (
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                padding: '0.35rem 0.75rem',
                backgroundColor: 'rgba(18, 19, 21, 0.75)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#FFFFFF',
                fontSize: '0.72rem',
                fontWeight: 600,
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Building2 size={12} color="var(--color-terracotta-light)" />
              <span>Real Estate Sourcing</span>
            </div>
          )}
        </div>

        {/* Media Details Column */}
        <div
          style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            maxHeight: '500px',
          }}
        >
          <div>
            {/* Header Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <span className="badge-editorial badge-terracotta">
                <Tag size={11} />
                <span>{item.categoryLabel}</span>
              </span>
              {item.likes && (
                <span className="badge-editorial">
                  <Heart size={11} color="var(--color-terracotta)" />
                  <span>{item.likes}</span>
                </span>
              )}
              {item.date && (
                <span className="badge-editorial">
                  <Calendar size={11} color="var(--color-charcoal-400)" />
                  <span>{item.date}</span>
                </span>
              )}
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--color-charcoal-950)',
                marginBottom: '0.85rem',
                lineHeight: 1.25,
                letterSpacing: '-0.015em',
              }}
            >
              {item.title}
            </h3>

            {/* Caption */}
            <div
              style={{
                fontSize: '0.9rem',
                lineHeight: 1.65,
                color: 'var(--color-charcoal-600)',
                marginBottom: '1.25rem',
                maxHeight: '180px',
                overflowY: 'auto',
                whiteSpace: 'pre-line',
              }}
            >
              {item.caption}
            </div>

            {/* Creator Attribution */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                backgroundColor: 'rgba(24, 25, 27, 0.04)',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.25rem',
                border: '1px solid var(--color-border-hairline)',
              }}
            >
              <img
                src="/assets/swati_avatar_300.jpg"
                alt="Swati Gaikwad"
                style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--color-terracotta)' }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-charcoal-950)' }}>
                    {item.author}
                  </span>
                  <CheckCircle2 size={13} color="var(--color-terracotta)" />
                </div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-terracotta)', fontWeight: 600 }}>
                  {item.authorHandle}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border-hairline)' }}>
            <a
              href={item.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-terracotta ios-pressable"
              style={{ flex: 1, padding: '0.75rem 1rem' }}
            >
              {item.type === 'reel' ? <InstagramIcon size={16} /> : <Building2 size={16} />}
              <span>{item.type === 'reel' ? 'Watch on Instagram' : 'View Profile & Inquiry'}</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={handleShare}
              className="btn btn-outline ios-pressable"
              style={{ padding: '0.75rem 1rem' }}
              title="Share Link"
            >
              <Share2 size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .ios-sheet-handle {
          display: none;
        }
        @media (max-width: 767px) {
          .media-modal-backdrop {
            padding: 0 !important;
            align-items: flex-end !important;
          }
          .modal-content-grid {
            border-radius: var(--radius-2xl) var(--radius-2xl) 0 0 !important;
            max-height: min(88dvh, 88vh) !important;
            margin-top: auto !important;
            width: 100% !important;
            border-bottom: none !important;
            overflow-y: auto !important;
            padding-bottom: calc(0.85rem + env(safe-area-inset-bottom, 0px)) !important;
          }
          .ios-sheet-handle {
            display: block;
            width: 40px;
            height: 5px;
            border-radius: 9999px;
            background: rgba(24, 25, 27, 0.25);
            margin: 0.75rem auto 0.25rem auto;
          }
        }
        @media (min-width: 768px) {
          .modal-content-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
