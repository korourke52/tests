// Sidebar.js - Updated to use CSS variables properly
import React from 'react';
import { theme } from '../theme';
import NavItem from './NavItem';

function Sidebar({ activeTab = 'chat', onTabChange, userName = 'Sarah' }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'chat', label: 'Chat', icon: '💬' },
    { id: 'book', label: 'Book', icon: '📅' },
    { id: 'discover', label: 'Discover', icon: '📚' },
    { id: 'track', label: 'Track', icon: '📊' },
    { id: 'call', label: 'Call', icon: '📞' },
  ];

  return (
    <div
      style={{
        width: '255px',
        height: '100vh',
        backgroundColor: theme.colors.surface.default,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: `${theme.spacing[6]} ${theme.spacing[4]}`,
        borderRight: `1px solid ${theme.colors.border.subtle}`,
        position: 'sticky',
        top: 0,
      }}
    >
      {/* Top Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing[6] }}>
        {/* Logo */}
        <div
          style={{
            paddingLeft: theme.spacing[3],
            marginBottom: theme.spacing[2],
          }}
        >
          <h1
            style={{
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.sizes.lg,
              fontWeight: theme.typography.weights.semibold,
              color: theme.colors.text.primary,
              margin: 0,
            }}
          >
            Unmind
          </h1>
        </div>

        {/* Navigation Items */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing[2] }}>
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeTab === item.id}
              onClick={() => onTabChange && onTabChange(item.id)}
            />
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing[4] }}>
        {/* Get Help Button */}
        <button
          style={{
            backgroundColor: 'rgba(255, 217, 217, 0.4)',
            color: theme.colors.text.primary,
            padding: `${theme.spacing[3]} ${theme.spacing[4]}`,
            borderRadius: theme.radius.full,
            border: 'none',
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.sizes.sm,
            fontWeight: theme.typography.weights.semibold,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: theme.spacing[2],
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 217, 217, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 217, 217, 0.4)';
          }}
        >
          <span>📞</span>
          Get help now
        </button>

        {/* User Account */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: theme.spacing[2],
            borderRadius: theme.radius.md,
            cursor: 'pointer',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing[2] }}>
            {/* Avatar */}
            <div
              style={{
                width: '28px',
                height: '28px',
                backgroundColor: theme.colors.primary,
                borderRadius: theme.radius.sm,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.colors.text.inverse,
                fontFamily: theme.typography.fontFamily,
                fontSize: theme.typography.sizes.md,
                fontWeight: theme.typography.weights.semibold,
              }}
            >
              {userName.charAt(0).toUpperCase()}
            </div>
            {/* Name */}
            <span
              style={{
                fontFamily: theme.typography.fontFamily,
                fontSize: theme.typography.sizes.sm,
                fontWeight: theme.typography.weights.medium,
                color: theme.colors.text.primary,
              }}
            >
              {userName}
            </span>
          </div>
          {/* Menu Icon */}
          <span style={{ fontSize: '18px', color: theme.colors.text.secondary }}>⋯</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;