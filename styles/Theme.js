import { css } from "styled-components";

const Theme = css`
  :root {
    // Theme colors
    --t-primary-branding-color: #780df2;
    --t-primary-branding-hover-color: #670bd1;
    --t-secondary-branding-color: #0d253a;
    --t-secondary-branding-hover-color: #081724;
    // Buttons
    --t-button-padding: 0.7rem 1.6rem;
    --t-button-border-radius: 8px;
    // Typography
    --t-heading-color: #242424;
    --t-body-color: #242424;
    --t-anchor-color: var(--t-primary-branding-color);
    --t-anchor-hover-color: var(--t-primary-branding-hover-color);
    --t-heading-line-height: 1.3;
    --t-body-line-height: 1.6;
    --t-font-family-heading: "Inter", sans-serif;
    --t-font-family-body: "Inter", sans-serif;
    --t-font-weight-heading: 700;
    --t-font-weight-button: 700;
    // Form
    --t-form-title-color: var(--t-primary-branding-color);
    --t-form-label-color: #25282a;
    --t-form-help-text-color: var(--t-body-color);
    --t-form-input-box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    --t-form-input-border-radius: 4px;
    --t-form-input-focus-border-color: var(--t-primary-branding-color);
    --t-form-input-border-color: #a8a9ab;
    --t-form-placeholder-color: #a8a9ab;
    // Box shadows
    --t-box-shadow-xs: 0px 1px 2px rgba(16, 24, 40, 0.05);
    --t-box-shadow-sm: 0px 1px 3px rgba(16, 24, 40, 0.1),
      0px 1px 2px rgba(16, 24, 40, 0.06);
    --t-box-shadow-md: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
      0px 2px 4px -2px rgba(16, 24, 40, 0.06);
    --t-box-shadow-lg: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
      0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    --t-box-shadow-xl: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
      0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    --t-box-shadow-2xl: 0px 24px 48px -12px rgba(16, 24, 40, 0.18);
    --t-box-shadow-3xl: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);
    // Misc
    --t-border-color: #eee;
    --t-light-background-color: #f7f9ff;
    --t-global-card-border-radius: 16px;
    --t-global-image-border-radius: 16px;
    // Blobs
    --t-blob-color-1: var(--t-primary-branding-color);
    --t-blob-color-2: #28ffea;
    --t-blob-color-3: #2897ff;
    --t-blob-color-4: #ff28b8;
    // Palette
    --t-cp-base-white: #fff;
  }
`;

export default Theme;
