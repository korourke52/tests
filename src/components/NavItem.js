// NavItem.js - Updated to match Figma design
import React from 'react';
import { theme } from '../theme';

function NavItem({ icon, label, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing[3],
        padding: `${theme.spacing[2]} ${theme.spacing[3]}`,
        backgroundColor: active ? theme.colors.surface.raised : 'transparent',
        borderRadius: theme.radius.md,
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'left',
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.sizes.sm,
        fontWeight: theme.typography.weights.medium,
        color: theme.colors.text.primary,
        transition: 'all 0.2s ease',
        letterSpacing: theme.typography.letterSpacing,
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.backgroundColor = 'rgba(13, 3, 0, 0.03)';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      <span 
        style={{ 
          fontSize: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '18px',
          height: '18px',
        }}
      >
        {icon}
      </span>
      <span style={{ lineHeight: 1.4 }}>{label}</span>
    </button>
  );
}

export default NavItem;