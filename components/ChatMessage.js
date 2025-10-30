// ChatMessage.js - Chat message bubbles for user and AI
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
        gap: `${theme.spacing[4]}px`,
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
          {avatar || '🟡'}
        </div>
      )}

      {/* Message Bubble */}
      <div
        style={{
          backgroundColor: isUser ? theme.colors.neutral[200] : 'transparent',
          padding: isUser ? `${theme.spacing[4]}px` : 0,
          borderRadius: isUser ? `${theme.radius.lg}px` : 0,
          maxWidth: '500px',
          position: 'relative',
        }}
      >
        {/* Speech bubble tail for user messages */}
        {isUser && (
          <div
            style={{
              position: 'absolute',
              bottom: '-4px',
              right: '-4px',
              width: 0,
              height: 0,
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderTop: `12px solid ${theme.colors.neutral[200]}`,
              transform: 'rotate(45deg)',
            }}
          />
        )}

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

      {/* Feedback Buttons (for AI messages) */}
      {showFeedback && !isUser && (
        <div style={{ display: 'flex', gap: `${theme.spacing[4]}px` }}>
          <button
            onClick={() => setFeedback('up')}
            style={{
              backgroundColor: feedback === 'up' ? theme.colors.surface.raised : 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: `${theme.spacing[2]}px`,
              borderRadius: `${theme.radius.sm}px`,
              fontSize: '16px',
              transition: 'all 0.2s',
            }}
          >
            👍
          </button>
          <button
            onClick={() => setFeedback('down')}
            style={{
              backgroundColor: feedback === 'down' ? theme.colors.surface.raised : 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: `${theme.spacing[2]}px`,
              borderRadius: `${theme.radius.sm}px`,
              fontSize: '16px',
              transition: 'all 0.2s',
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