// DesignSystem.js - Documentation-style design system
import React, { useState } from 'react';
import { theme } from './theme';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import NavItem from './components/NavItem';

function DesignSystem() {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedMode, setSelectedMode] = useState('Practical tools');

  // Sidebar navigation items
  const sections = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'colors', label: 'Colors', icon: '🎨' },
    { id: 'typography', label: 'Typography', icon: 'T' },
    { id: 'spacing', label: 'Spacing', icon: '📏' },
    { id: 'components', label: 'Components', icon: '🧩' },
  ];

  // Section component with outlined card style
  const Section = ({ title, children }) => (
    <div style={{
      backgroundColor: 'white',
      border: `1px solid ${theme.colors.border.subtle}`,
      borderRadius: theme.radius.lg,
      padding: theme.spacing[8],
      marginBottom: theme.spacing[6],
    }}>
      {title && (
        <h2 style={{
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.sizes['2xl'],
          fontWeight: theme.typography.weights.semibold,
          color: theme.colors.text.primary,
          marginBottom: theme.spacing[6],
          marginTop: 0,
        }}>
          {title}
        </h2>
      )}
      {children}
    </div>
  );

  // Stat card component
  const StatCard = ({ number, label }) => (
    <div style={{
      backgroundColor: theme.colors.surface.raised,
      padding: theme.spacing[8],
      borderRadius: theme.radius.lg,
      textAlign: 'center',
      flex: 1,
      minWidth: '200px',
    }}>
      <div style={{
        fontSize: '48px',
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.accent,
        marginBottom: theme.spacing[2],
      }}>
        {number}
      </div>
      <div style={{
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.text.secondary,
        fontWeight: theme.typography.weights.medium,
      }}>
        {label}
      </div>
    </div>
  );

  // Color swatch component
  const ColorSwatch = ({ name, value, large = false }) => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing[2],
      minWidth: large ? '150px' : '100px',
    }}>
      <div style={{
        width: '100%',
        height: large ? '120px' : '80px',
        backgroundColor: value,
        borderRadius: theme.radius.md,
        border: `1px solid ${theme.colors.border.subtle}`,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      }} />
      <div>
        <div style={{
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.sizes.sm,
          fontWeight: theme.typography.weights.semibold,
          color: theme.colors.text.primary,
          marginBottom: theme.spacing[1],
        }}>
          {name}
        </div>
        <code style={{
          fontFamily: 'Monaco, monospace',
          fontSize: theme.typography.sizes.xs,
          color: theme.colors.text.secondary,
        }}>
          {value}
        </code>
      </div>
    </div>
  );

  // Code block component
  const CodeBlock = ({ children }) => (
    <pre style={{
      backgroundColor: '#1e1e1e',
      color: '#d4d4d4',
      padding: theme.spacing[6],
      borderRadius: theme.radius.md,
      overflow: 'auto',
      fontSize: theme.typography.sizes.sm,
      fontFamily: 'Monaco, Menlo, monospace',
      margin: 0,
    }}>
      {children}
    </pre>
  );

  // Render different sections
  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <>
            <h1 style={{
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.sizes['3xl'],
              fontWeight: theme.typography.weights.bold,
              color: theme.colors.text.primary,
              marginTop: 0,
              marginBottom: theme.spacing[4],
            }}>
              Overview
            </h1>
            
            <Section>
              <h3 style={{ 
                marginTop: 0,
                marginBottom: theme.spacing[4],
                fontSize: theme.typography.sizes.xl,
              }}>
                Welcome to Nova Design System
              </h3>
              <p style={{
                fontSize: theme.typography.sizes.md,
                color: theme.colors.text.secondary,
                lineHeight: theme.typography.lineHeights.relaxed,
                margin: 0,
              }}>
                A comprehensive design system built with warm, sophisticated aesthetics using Inter Display typography and a carefully curated color palette.
              </p>
            </Section>

            <div style={{
              display: 'flex',
              gap: theme.spacing[4],
              flexWrap: 'wrap',
              marginBottom: theme.spacing[6],
            }}>
              <StatCard number="40+" label="Color Variables" />
              <StatCard number="12+" label="Spacing Tokens" />
              <StatCard number="5+" label="Components" />
              <StatCard number="4" label="Font Weights" />
            </div>

            <Section title="Getting Started">
              <p style={{
                fontSize: theme.typography.sizes.md,
                color: theme.colors.text.secondary,
                marginBottom: theme.spacing[4],
              }}>
                Import the design system in your project:
              </p>
              <CodeBlock>{`import { theme } from './theme';

// Use in your components
<Button
  variant="primary"
  style={{
    backgroundColor: theme.colors.primary
  }}
>
  Click me
</Button>`}</CodeBlock>
            </Section>
          </>
        );

      case 'colors':
        return (
          <>
            <h1 style={{
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.sizes['3xl'],
              fontWeight: theme.typography.weights.bold,
              color: theme.colors.text.primary,
              marginTop: 0,
              marginBottom: theme.spacing[6],
            }}>
              Colors
            </h1>

            <Section title="Neutrals">
              <div style={{ 
                display: 'flex', 
                gap: theme.spacing[4], 
                flexWrap: 'wrap' 
              }}>
                {Object.entries(theme.colors.neutral).map(([key, value]) => (
                  <ColorSwatch key={key} name={`Neutral ${key}`} value={value} />
                ))}
              </div>
            </Section>

            <Section title="Text Colors">
              <div style={{ 
                display: 'flex', 
                gap: theme.spacing[4], 
                flexWrap: 'wrap' 
              }}>
                {Object.entries(theme.colors.text).map(([key, value]) => (
                  <ColorSwatch key={key} name={`Text ${key}`} value={value} large />
                ))}
              </div>
            </Section>

            <Section title="Surface Colors">
              <div style={{ 
                display: 'flex', 
                gap: theme.spacing[4], 
                flexWrap: 'wrap' 
              }}>
                {Object.entries(theme.colors.surface).map(([key, value]) => (
                  <ColorSwatch key={key} name={`Surface ${key}`} value={value} large />
                ))}
              </div>
            </Section>
          </>
        );

      case 'typography':
        return (
          <>
            <h1 style={{
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.sizes['3xl'],
              fontWeight: theme.typography.weights.bold,
              color: theme.colors.text.primary,
              marginTop: 0,
              marginBottom: theme.spacing[6],
            }}>
              Typography
            </h1>

            <Section title="Font Family">
              <p style={{
                fontSize: theme.typography.sizes.lg,
                fontFamily: theme.typography.fontFamily,
                marginBottom: theme.spacing[4],
              }}>
                Inter Display - The quick brown fox jumps over the lazy dog
              </p>
              <CodeBlock>font-family: {theme.typography.fontFamily}</CodeBlock>
            </Section>

            <Section title="Headings">
              <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing[6] }}>
                <div>
                  <h1 style={{ margin: 0, marginBottom: theme.spacing[2] }}>Heading 1</h1>
                  <code style={{ fontSize: theme.typography.sizes.xs, color: theme.colors.text.secondary }}>
                    {theme.typography.sizes['3xl']} / {theme.typography.weights.semibold} / {theme.typography.lineHeights.tight}
                  </code>
                </div>
                <div>
                  <h2 style={{ margin: 0, marginBottom: theme.spacing[2] }}>Heading 2</h2>
                  <code style={{ fontSize: theme.typography.sizes.xs, color: theme.colors.text.secondary }}>
                    {theme.typography.sizes['2xl']} / {theme.typography.weights.semibold} / {theme.typography.lineHeights.snug}
                  </code>
                </div>
                <div>
                  <h3 style={{ margin: 0, marginBottom: theme.spacing[2] }}>Heading 3</h3>
                  <code style={{ fontSize: theme.typography.sizes.xs, color: theme.colors.text.secondary }}>
                    {theme.typography.sizes.xl} / {theme.typography.weights.semibold} / {theme.typography.lineHeights.normal}
                  </code>
                </div>
              </div>
            </Section>

            <Section title="Body Text">
              <p style={{ marginBottom: theme.spacing[3] }}>
                Regular body text - The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <code style={{ fontSize: theme.typography.sizes.xs, color: theme.colors.text.secondary }}>
                {theme.typography.sizes.md} / {theme.typography.weights.regular} / {theme.typography.lineHeights.normal}
              </code>
            </Section>
          </>
        );

      case 'spacing':
        return (
          <>
            <h1 style={{
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.sizes['3xl'],
              fontWeight: theme.typography.weights.bold,
              color: theme.colors.text.primary,
              marginTop: 0,
              marginBottom: theme.spacing[6],
            }}>
              Spacing
            </h1>

            <Section title="Spacing Scale">
              <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing[4] }}>
                {Object.entries(theme.spacing).map(([key, value]) => (
                  <div key={key} style={{ display: 'flex', alignItems: 'center', gap: theme.spacing[4] }}>
                    <div style={{
                      width: value,
                      height: '40px',
                      backgroundColor: theme.colors.accent,
                      borderRadius: theme.radius.sm,
                    }} />
                    <code style={{ fontSize: theme.typography.sizes.sm }}>
                      spacing[{key}] = {value}
                    </code>
                  </div>
                ))}
              </div>
            </Section>
          </>
        );

      case 'components':
        return (
          <>
            <h1 style={{
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.sizes['3xl'],
              fontWeight: theme.typography.weights.bold,
              color: theme.colors.text.primary,
              marginTop: 0,
              marginBottom: theme.spacing[6],
            }}>
              Components
            </h1>

            <Section title="Navigation Items">
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing[2],
                maxWidth: '250px',
              }}>
                <NavItem icon="🏠" label="Home" />
                <NavItem icon="💬" label="Chat" active={true} />
                <NavItem icon="📅" label="Book" />
              </div>
            </Section>

            <Section title="Chat Messages">
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing[6],
                maxWidth: '700px',
              }}>
                <ChatMessage
                  message="This is a user message example"
                  isUser={true}
                />
                <ChatMessage
                  message="This is an AI response with feedback buttons"
                  isUser={false}
                  showFeedback={true}
                />
              </div>
            </Section>

            <Section title="Chat Input">
              <div style={{ maxWidth: '700px' }}>
                <ChatInput
                  selectedMode={selectedMode}
                  onModeChange={setSelectedMode}
                  onSend={(msg) => console.log('Sent:', msg)}
                />
              </div>
            </Section>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'white' }}>
      {/* Sidebar */}
      <div style={{
        width: '260px',
        height: '100vh',
        backgroundColor: 'white',
        borderRight: `1px solid ${theme.colors.border.subtle}`,
        padding: theme.spacing[6],
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: 0,
      }}>
        {/* Header */}
        <div style={{ marginBottom: theme.spacing[8] }}>
          <h2 style={{
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.sizes.xl,
            fontWeight: theme.typography.weights.bold,
            color: theme.colors.text.primary,
            margin: 0,
            marginBottom: theme.spacing[1],
          }}>
            ✦ Design System
          </h2>
          <div style={{
            fontSize: theme.typography.sizes.xs,
            color: theme.colors.text.secondary,
            fontWeight: theme.typography.weights.medium,
          }}>
            v1.0.0
          </div>
        </div>

        {/* Documentation Label */}
        <div style={{
          fontSize: theme.typography.sizes.xs,
          fontWeight: theme.typography.weights.semibold,
          color: theme.colors.text.secondary,
          marginBottom: theme.spacing[3],
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          Documentation
        </div>

        {/* Navigation */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing[1] }}>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing[3],
                padding: `${theme.spacing[2]} ${theme.spacing[3]}`,
                backgroundColor: activeSection === section.id ? theme.colors.surface.raised : 'transparent',
                border: activeSection === section.id ? `1px solid ${theme.colors.border.subtle}` : '1px solid transparent',
                borderRadius: theme.radius.md,
                cursor: 'pointer',
                fontFamily: theme.typography.fontFamily,
                fontSize: theme.typography.sizes.sm,
                fontWeight: theme.typography.weights.medium,
                color: theme.colors.text.primary,
                textAlign: 'left',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                if (activeSection !== section.id) {
                  e.currentTarget.style.backgroundColor = theme.colors.surface.raised;
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== section.id) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span style={{ fontSize: '16px' }}>{section.icon}</span>
              <span>{section.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        height: '100vh',
        overflowY: 'auto',
        padding: `${theme.spacing[10]} ${theme.spacing[12]}`,
        backgroundColor: theme.colors.surface.raised,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default DesignSystem;