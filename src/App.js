import React, { useState } from 'react';
import { theme } from './theme';
import Sidebar from './components/Sidebar';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import DesignSystem from './DesignSystem'; 

function App() {
  const [activeTab, setActiveTab] = useState('chat');
  const [selectedMode, setSelectedMode] = useState('Practical tools');
  const [view, setView] = useState('chat'); // ← NEW: Toggle between chat and design system
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "I've been feeling really overwhelmed with work lately, and I'm not sure how to handle it all",
      isUser: true,
    },
    {
      id: 2,
      text: "I see you're experiencing a sense of overwhelm with your work. Tell me more about what's been causing you to feel this way.",
      isUser: false,
      showFeedback: true,
    },
  ]);
  const [isThinking, setIsThinking] = useState(false);

  const handleSend = (message, mode) => {
    const newMessage = {
      id: messages.length + 1,
      text: message,
      isUser: true,
    };
    setMessages([...messages, newMessage]);

    // Show thinking indicator and delay AI response
    setIsThinking(true);

    setTimeout(() => {
      const aiResponse = {
        id: newMessage.id + 1,
        text: `Thank you for sharing. I'm here to listen and support you through this.`,
        isUser: false,
        showFeedback: true,
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsThinking(false);
    }, 1500);
  };

  // ← NEW: Toggle Button Component
  const ToggleButton = () => (
    <button
      onClick={() => setView(view === 'chat' ? 'design-system' : 'chat')}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 9999,
        backgroundColor: theme.colors.primary,
        color: theme.colors.text.inverse,
        border: 'none',
        padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
        borderRadius: theme.radius.md,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.sizes.sm,
        fontWeight: theme.typography.weights.semibold,
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = theme.colors.primaryHover;
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = theme.colors.primary;
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {view === 'chat' ? '📚 Design System' : '💬 Back to Chat'}
    </button>
  );

  return (
    <>
      {/* Toggle Button - Always visible */}
      <ToggleButton />

      {/* Show either Chat or Design System based on view state */}
      {view === 'chat' ? (
        // Chat Interface
        <div style={{ display: 'flex', height: '100vh', backgroundColor: theme.colors.surface.raised }}>
          {/* Sidebar */}
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} userName="Sarah" />

          {/* Main Chat Area */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              height: '100vh',
              overflow: 'hidden',
            }}
          >
            {/* Messages Container */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                padding: '48px 24px 0 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: `${theme.spacing[8]}px`,
                maxWidth: '800px',
                margin: '0 auto',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              {messages.map((msg) => (
                <ChatMessage
                  key={msg.id}
                  message={msg.text}
                  isUser={msg.isUser}
                  showFeedback={msg.showFeedback}
                />
              ))}
              {isThinking && (
                <ChatMessage
                  key="thinking"
                  message="..."
                  isUser={false}
                  showFeedback={false}
                  avatarPulse={true}
                />
              )}
            </div>

            {/* Input Area */}
            <div
              style={{
                padding: '16px 24px',
                maxWidth: '800px',
                margin: '0 auto',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <ChatInput
                onSend={handleSend}
                selectedMode={selectedMode}
                onModeChange={setSelectedMode}
              />
            </div>
          </div>
        </div>
      ) : (
        // Design System View
        <DesignSystem />
      )}
    </>
  );
}

export default App;