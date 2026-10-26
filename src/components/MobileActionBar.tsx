import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { InstagramIcon } from './InstagramIcon';
import { MessageCircle, Phone } from 'lucide-react';

export const MobileActionBar: React.FC = () => {
  return (
    <div
      className="mobile-quick-actions"
      style={{
        position: 'fixed',
        bottom: 'calc(0.85rem + env(safe-area-inset-bottom, 0px))',
        left: 0,
        right: 0,
        margin: '0 auto',
        width: 'calc(100% - 1.75rem)',
        maxWidth: '460px',
        zIndex: 45,
        backgroundColor: 'rgba(250, 247, 242, 0.9)',
        backdropFilter: 'blur(30px) saturate(210%)',
        WebkitBackdropFilter: 'blur(30px) saturate(210%)',
        borderRadius: 'var(--radius-full)',
        border: '1px solid rgba(255, 255, 255, 0.85)',
        boxShadow: 'inset 0 1px 0.5px rgba(255, 255, 255, 0.95), 0 16px 36px -4px rgba(18, 19, 21, 0.16)',
        padding: '0.45rem 0.65rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.5rem',
        animation: 'fadeInUp 300ms var(--spring-snappy) forwards',
      }}
    >
      {/* WhatsApp Button */}
      <a
        href={PORTFOLIO_DATA.personal.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="ios-pressable"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.45rem',
          padding: '0.72rem 0.85rem',
          background: 'linear-gradient(135deg, var(--color-terracotta-light) 0%, var(--color-terracotta) 100%)',
          color: '#FFFFFF',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.8125rem',
          fontWeight: 600,
          textDecoration: 'none',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 3px 10px rgba(184, 93, 67, 0.35)',
          lineHeight: 1,
          border: '1px solid rgba(255, 255, 255, 0.15)',
        }}
      >
        <MessageCircle size={15} />
        <span>WhatsApp</span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:+91${PORTFOLIO_DATA.personal.phone}`}
        className="ios-pressable"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.35rem',
          padding: '0.72rem 0.95rem',
          backgroundColor: 'rgba(253, 252, 249, 0.95)',
          color: 'var(--color-charcoal-900)',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.8125rem',
          fontWeight: 600,
          textDecoration: 'none',
          border: '1px solid var(--color-border-medium)',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 2px 6px rgba(18, 19, 21, 0.04)',
          lineHeight: 1,
        }}
      >
        <Phone size={14} color="var(--color-terracotta)" />
        <span>Call</span>
      </a>

      {/* Instagram Button */}
      <a
        href={PORTFOLIO_DATA.personal.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Profile"
        className="ios-pressable"
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-charcoal-900)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          flexShrink: 0,
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 3px 8px rgba(18, 19, 21, 0.2)',
        }}
      >
        <InstagramIcon size={16} />
      </a>

      <style>{`
        @media (min-width: 769px) {
          .mobile-quick-actions {
            display: none !important;
          }
        }
        @media (max-width: 375px) {
          .mobile-quick-actions {
            padding: 0.35rem 0.45rem !important;
            gap: 0.35rem !important;
            width: calc(100% - 1.25rem) !important;
          }
          .mobile-quick-actions a {
            font-size: 0.75rem !important;
            padding-left: 0.55rem !important;
            padding-right: 0.55rem !important;
          }
        }
      `}</style>
    </div>
  );
};
