// NavItem.js - Reusable navigation item
import React from 'react';
import { theme } from '../theme';

function NavItem({ icon, label, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: `${theme.spacing[3]}px`,
        padding: `${theme.spacing[2]}px ${theme.spacing[3]}px`,
        backgroundColor: active ? theme.colors.surface.raised : 'transparent',
        borderRadius: `${theme.radius.md}px`,
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'left',
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.sizes.sm,
        fontWeight: theme.typography.weights.medium,
        color: theme.colors.text.primary,
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.backgroundColor = theme.colors.surface.raised;
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      <span style={{ fontSize: '18px' }}>{icon}</span>
      <span>{label}</span>
    </button>
  );
}

export default NavItem;