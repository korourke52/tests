// ChatMessage.js - Chat bubble with optional tail and feedback
import React, { useState } from 'react';
import { theme } from '../theme';

function ChatMessage({ message, isUser = false, showFeedback = false, avatar }) {
  const [feedback, setFeedback] = useState(null);

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
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#FFC107',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
          }}
        >
          {avatar || '●'}
        </div>
      )}

      {/* Message Bubble */}
      {isUser ? (
        // User message - with background and tail
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
          {/* Speech bubble tail - flipped and tucked under edge */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            style={{
              position: 'absolute',
              bottom: '0',
              right: '-6px',
              transform: 'scale(-1, -1)',
              transformOrigin: 'center',
              transformBox: 'fill-box',
              pointerEvents: 'none',
              display: 'block',
            }}
          >
            <path d="M 0 0 L 20 0 L 0 20 Z" fill={theme.colors.neutral[200]} />
          </svg>
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
              border: '1px solid ' + (feedback === 'down' ? theme.colors.border.default : 'transparent'),
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