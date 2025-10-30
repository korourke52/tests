// Button.js - Your first component using the design system
import React from 'react';
import { theme } from '../theme';

function Button({ children, variant = 'primary', size = 'md', onClick }) {
  const styles = {
    // Base button styles
    base: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.weights.medium,
      letterSpacing: theme.typography.letterSpacing,
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    // Variants
    primary: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.text.inverse,
    },
    
    secondary: {
      backgroundColor: theme.colors.accent,
      color: theme.colors.text.inverse,
    },
    
    outline: {
      backgroundColor: 'transparent',
      color: theme.colors.primary,
      border: `2px solid ${theme.colors.border.default}`,
    },
    
    // Sizes
    sm: {
      padding: `${theme.spacing[2]}px ${theme.spacing[4]}px`,
      fontSize: theme.typography.sizes.sm,
      borderRadius: `${theme.radius.sm}px`,
    },
    
    md: {
      padding: `${theme.spacing[3]}px ${theme.spacing[6]}px`,
      fontSize: theme.typography.sizes.md,
      borderRadius: `${theme.radius.md}px`,
    },
    
    lg: {
      padding: `${theme.spacing[4]}px ${theme.spacing[8]}px`,
      fontSize: theme.typography.sizes.lg,
      borderRadius: `${theme.radius.lg}px`,
    },
  };
  
  const buttonStyle = {
    ...styles.base,
    ...styles[variant],
    ...styles[size],
  };
  
  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;