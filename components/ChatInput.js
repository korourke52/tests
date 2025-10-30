// ChatInput.js - Chat input with mode selector
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
      {/* Input Container */}
      <div
        style={{
          backgroundColor: theme.colors.surface.default,
          borderRadius: `${theme.radius.lg}px`,
          padding: `${theme.spacing[4]}px`,
          display: 'flex',
          flexDirection: 'column',
          gap: `${theme.spacing[4]}px`,
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
              borderRadius: `${theme.radius.sm}px`,
              padding: `${theme.spacing[2]}px ${theme.spacing[3]}px`,
              display: 'flex',
              alignItems: 'center',
              gap: `${theme.spacing[2]}px`,
              cursor: 'pointer',
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.sizes.sm,
              fontWeight: theme.typography.weights.semibold,
              color: theme.colors.text.primary,
            }}
          >
            <span>{currentMode.icon}</span>
            <span>{currentMode.label}</span>
            <span style={{ fontSize: '12px' }}>▼</span>
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
              fontSize: '16px',
              transition: 'all 0.2s',
            }}
          >
            <span style={{ transform: 'rotate(-90deg)' }}>➤</span>
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
          marginTop: `${theme.spacing[3]}px`,
        }}
      >
        All conversations are completely confidential and will not be shared with your employer.
      </p>

      {/* Mode Dropdown (appears above input) */}
      {showModeDropdown && (
        <div
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: `${theme.spacing[4]}px`,
            backgroundColor: theme.colors.surface.default,
            borderRadius: `${theme.radius.lg}px`,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            padding: `${theme.spacing[2]}px`,
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
                padding: `${theme.spacing[2]}px`,
                backgroundColor: selectedMode === mode.label ? theme.colors.surface.raised : 'transparent',
                border: 'none',
                borderRadius: `${theme.radius.md}px`,
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: `${theme.spacing[2]}px`,
                marginBottom: `${theme.spacing[2]}px`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.surface.raised;
              }}
              onMouseLeave={(e) => {
                if (selectedMode !== mode.label) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
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
                    marginBottom: `${theme.spacing[1]}px`,
                  }}
                >
                  {mode.label}
                </div>
                <div
                  style={{
                    fontFamily: theme.typography.fontFamily,
                    fontSize: theme.typography.sizes.xs,
                    color: theme.colors.text.secondary,
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
      )}
    </div>
  );
}

export default ChatInput;