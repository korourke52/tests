// theme.js - Design system that references CSS variables
export const theme = {
  colors: {
    // Primary
    primary: 'var(--color-primary)',
    primaryHover: 'var(--color-primary-hover)',
    primarySubtle: 'var(--color-primary-subtle)',
    
    // Accent
    accent: 'var(--color-accent)',
    accentHover: 'var(--color-accent-hover)',
    accentSubtle: 'var(--color-accent-subtle)',
    
    // Neutrals
    neutral: {
      50: 'var(--color-neutral-50)',
      100: 'var(--color-neutral-100)',
      200: 'var(--color-neutral-200)',
      300: 'var(--color-neutral-300)',
      400: 'var(--color-neutral-400)',
      500: 'var(--color-neutral-500)',
      600: 'var(--color-neutral-600)',
      700: 'var(--color-neutral-700)',
      800: 'var(--color-neutral-800)',
      900: 'var(--color-neutral-900)',
    },
    
    // Text colors
    text: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      inverse: 'var(--color-text-inverse)',
      disabled: 'var(--color-text-disabled)',
      link: 'var(--color-text-link)',
    },
    
    // Surface colors
    surface: {
      default: 'var(--color-surface-default)',
      raised: 'var(--color-surface-raised)',
      overlay: 'var(--color-surface-overlay)',
    },
    
    // Border colors
    border: {
      default: 'var(--color-border-default)',
      subtle: 'var(--color-border-subtle)',
      focus: 'var(--color-border-focus)',
    },
    
    // Feedback colors
    feedback: {
      success: 'var(--color-success)',
      successSubtle: 'var(--color-success-subtle)',
      warning: 'var(--color-warning)',
      warningSubtle: 'var(--color-warning-subtle)',
      error: 'var(--color-error)',
      errorSubtle: 'var(--color-error-subtle)',
      info: 'var(--color-info)',
      infoSubtle: 'var(--color-info-subtle)',
    },
  },
  
  spacing: {
    0: 'var(--spacing-0)',
    1: 'var(--spacing-1)',
    2: 'var(--spacing-2)',
    3: 'var(--spacing-3)',
    4: 'var(--spacing-4)',
    5: 'var(--spacing-5)',
    6: 'var(--spacing-6)',
    8: 'var(--spacing-8)',
    10: 'var(--spacing-10)',
    12: 'var(--spacing-12)',
    16: 'var(--spacing-16)',
    20: 'var(--spacing-20)',
    24: 'var(--spacing-24)',
  },
  
  radius: {
    none: 'var(--radius-none)',
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    full: 'var(--radius-full)',
  },
  
  typography: {
    fontFamily: 'var(--font-family)',
    letterSpacing: 'var(--letter-spacing)',
    
    weights: {
      regular: 'var(--font-weight-regular)',
      medium: 'var(--font-weight-medium)',
      semibold: 'var(--font-weight-semibold)',
      bold: 'var(--font-weight-bold)',
    },
    
    sizes: {
      xs: 'var(--font-size-xs)',
      sm: 'var(--font-size-sm)',
      md: 'var(--font-size-md)',
      lg: 'var(--font-size-lg)',
      xl: 'var(--font-size-xl)',
      '2xl': 'var(--font-size-2xl)',
      '3xl': 'var(--font-size-3xl)',
    },
    
    lineHeights: {
      tight: 'var(--line-height-tight)',
      snug: 'var(--line-height-snug)',
      normal: 'var(--line-height-normal)',
      relaxed: 'var(--line-height-relaxed)',
    },
  },
};