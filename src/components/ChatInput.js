// ChatInput.js - Improved styling
import React, { useState } from 'react';
import { theme } from '../theme';

function ChatInput({ onSend, selectedMode = 'Practical tools', onModeChange }) {
  const [message, setMessage] = useState('');
  const [showModeDropdown, setShowModeDropdown] = useState(false);

  const modes = [
    { id: 'listening', label: 'Active listening', icon: '💕', description: 'Explore your thoughts with gentle support' },
    { id: 'coaching', label: 'Coaching', icon: '🎯', description: 'Structured guidance to help you make progress' },
    { id: 'practical', label: 'Practical tools', icon: '🔧', description: 'Find quick solutions and actionable strategies' },
  ];

  const handleSend = () => {
    if (message.trim()) {
      onSend && onSend(message, selectedMode);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const currentMode = modes.find((m) => m.label === selectedMode) || modes[2];

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Mode Dropdown (appears above input) */}
      {showModeDropdown && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setShowModeDropdown(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
            }}
          />
          
          {/* Dropdown */}
          <div
            style={{
              position: 'absolute',
              bottom: '130px',
              left: '0',
              backgroundColor: theme.colors.surface.default,
              borderRadius: theme.radius.lg,
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
              padding: theme.spacing[2],
              width: '356px',
              zIndex: 1000,
            }}
          >
            {modes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => {
                  onModeChange && onModeChange(mode.label);
                  setShowModeDropdown(false);
                }}
                style={{
                  width: '100%',
                  padding: theme.spacing[3],
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: theme.radius.md,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: theme.spacing[2],
                  marginBottom: theme.spacing[2],
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.surface.raised;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span style={{ fontSize: '16px' }}>{mode.icon}</span>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: theme.typography.fontFamily,
                      fontSize: theme.typography.sizes.sm,
                      fontWeight: theme.typography.weights.semibold,
                      color: theme.colors.text.primary,
                      marginBottom: theme.spacing[1],
                    }}
                  >
                    {mode.label}
                  </div>
                  <div
                    style={{
                      fontFamily: theme.typography.fontFamily,
                      fontSize: theme.typography.sizes.xs,
                      color: theme.colors.text.secondary,
                      lineHeight: theme.typography.lineHeights.normal,
                    }}
                  >
                    {mode.description}
                  </div>
                </div>
                {selectedMode === mode.label && (
                  <span style={{ fontSize: '16px', color: theme.colors.primary }}>✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Input Container */}
      <div
        style={{
          backgroundColor: theme.colors.surface.default,
          borderRadius: theme.radius.lg,
          padding: theme.spacing[4],
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing[4],
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        }}
      >
        {/* Text Input */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Chat to Nova"
          style={{
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.sizes.sm,
            color: message ? theme.colors.text.primary : theme.colors.text.disabled,
            padding: 0,
          }}
        />

        {/* Bottom Row - Mode Selector and Send Button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Mode Selector Tag */}
          <button
            onClick={() => setShowModeDropdown(!showModeDropdown)}
            style={{
              backgroundColor: 'rgba(13, 3, 0, 0.05)',
              border: `1px solid ${theme.colors.border.default}`,
              borderRadius: theme.radius.sm,
              padding: `${theme.spacing[2]} ${theme.spacing[3]}`,
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing[2],
              cursor: 'pointer',
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.sizes.sm,
              fontWeight: theme.typography.weights.semibold,
              color: theme.colors.text.primary,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(13, 3, 0, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(13, 3, 0, 0.05)';
            }}
          >
            <span>{currentMode.icon}</span>
            <span>{currentMode.label}</span>
            <span style={{ fontSize: '10px' }}>▼</span>
          </button>

          {/* Send Button */}
          <button
            onClick={handleSend}
            disabled={!message.trim()}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: message.trim() ? theme.colors.primary : theme.colors.neutral[200],
              border: 'none',
              cursor: message.trim() ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              transition: 'all 0.2s',
              color: message.trim() ? theme.colors.text.inverse : theme.colors.text.disabled,
            }}
            onMouseEnter={(e) => {
              if (message.trim()) {
                e.currentTarget.style.backgroundColor = theme.colors.primaryHover;
              }
            }}
            onMouseLeave={(e) => {
              if (message.trim()) {
                e.currentTarget.style.backgroundColor = theme.colors.primary;
              }
            }}
          >
            <span style={{ transform: 'rotate(-90deg)', display: 'inline-block' }}>➤</span>
          </button>
        </div>
      </div>

      {/* Privacy Notice */}
      <p
        style={{
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.sizes.xs,
          color: theme.colors.text.secondary,
          textAlign: 'center',
          marginTop: theme.spacing[3],
          lineHeight: theme.typography.lineHeights.normal,
        }}
      >
        All conversations are completely confidential and will not be shared with your employer.
      </p>
    </div>
  );
}

export default ChatInput;