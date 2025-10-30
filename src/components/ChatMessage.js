// ChatMessage.js - Chat bubble with optional tail and feedback
import React, { useState, useId } from 'react';
import { theme } from '../theme';

function ChatMessage({ message, isUser = false, showFeedback = false, avatar, avatarPulse = false }) {
  const [feedback, setFeedback] = useState(null);
  const gradientId = useId();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isUser ? 'flex-end' : 'flex-start',
        gap: theme.spacing[4],
        width: '100%',
      }}
    >
      {/* Avatar for AI messages */}
      {!isUser && (
        <div style={{ width: '24px', height: '24px', animation: avatarPulse ? 'pulse 1.2s ease-in-out infinite' : 'none' }}>
          {avatar ? (
            avatar
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <defs>
                <radialGradient id={gradientId} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 11.9662) rotate(90) scale(22.0831 28.1813)">
                  <stop offset="0.11" stopColor="#FFCF26" />
                  <stop offset="0.609577" stopColor="#F0A378" />
                  <stop offset="1" stopColor="#2D150D" />
                </radialGradient>
              </defs>
              <circle cx="12" cy="12" r="12" fill={`url(#${gradientId})`} />
            </svg>
          )}
        </div>
      )}

      {/* Message Bubble */}
      {isUser ? (
        // User message - no tail
        <div
          style={{
            backgroundColor: theme.colors.neutral[200],
            padding: theme.spacing[4],
            borderRadius: theme.radius.lg,
            maxWidth: '500px',
            position: 'relative',
          }}
        >
          <p
            style={{
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.sizes.lg,
              lineHeight: theme.typography.lineHeights.relaxed,
              color: theme.colors.text.primary,
              margin: 0,
            }}
          >
            {message}
          </p>
        </div>
      ) : (
        // AI message - plain text block
        <div style={{ maxWidth: '700px' }}>
          <p
            style={{
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.sizes.lg,
              lineHeight: theme.typography.lineHeights.relaxed,
              color: theme.colors.text.primary,
              margin: 0,
            }}
          >
            {message}
          </p>
        </div>
      )}

      {/* Feedback Buttons (for AI messages) */}
      {showFeedback && !isUser && (
        <div style={{ display: 'flex', gap: theme.spacing[4], marginTop: theme.spacing[2] }}>
          <button
            onClick={() => setFeedback('up')}
            style={{
              backgroundColor: feedback === 'up' ? theme.colors.surface.raised : 'transparent',
              border: '1px solid ' + (feedback === 'up' ? theme.colors.border.default : 'transparent'),
              cursor: 'pointer',
              padding: theme.spacing[2],
              borderRadius: theme.radius.sm,
              fontSize: '16px',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => {
              if (feedback !== 'up') {
                e.currentTarget.style.backgroundColor = theme.colors.surface.raised;
              }
            }}
            onMouseLeave={(e) => {
              if (feedback !== 'up') {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            👍
          </button>
          <button
            onClick={() => setFeedback('down')}
            style={{
              backgroundColor: feedback === 'down' ? theme.colors.surface.raised : 'transparent',
              border: '1px solid ' + (feedback === 'down') ? theme.colors.border.default : 'transparent',
              cursor: 'pointer',
              padding: theme.spacing[2],
              borderRadius: theme.radius.sm,
              fontSize: '16px',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => {
              if (feedback !== 'down') {
                e.currentTarget.style.backgroundColor = theme.colors.surface.raised;
              }
            }}
            onMouseLeave={(e) => {
              if (feedback !== 'down') {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            👎
          </button>
        </div>
      )}
    </div>
  );
}

export default ChatMessage;