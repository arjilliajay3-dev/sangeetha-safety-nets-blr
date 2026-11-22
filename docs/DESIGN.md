# Sangeetha Safety Nets & Invisible Grills — Design System & Style Guide

## 1. Brand Identity & Color Tokens

The visual identity of Sangeetha Safety Nets and Invisible Grills is defined by a sophisticated, process-led architectural palette: **Deep Burgundy & Industrial Silver**.

### Primary Brand Palette
| Token Name | Hex Code | Purpose | Accessibility / Usage |
| :--- | :--- | :--- | :--- |
| **Primary Burgundy** | `#6D1A36` | Dominant brand headers, primary action buttons, icon accents | White text (`#FFFFFF`) on Burgundy |
| **Burgundy Hover** | `#55142A` | Hover & active state for primary buttons | Darker shade for positive tactile feedback |
| **Deep Burgundy** | `#420D20` | Footer background, deep section headers, high-contrast containers | White or blush text |
| **Secondary Burgundy Accent** | `#8A2F4D` | Gradients, border highlights, active pills, badges | Gradient endpoint from `#6D1A36` |
| **Accent Silver** | `#B9BEC7` | Secondary badges, architectural borders, hardware highlights | **WCAG AA Rule: MUST use dark text (`#2F2F33`)** |
| **Subtle Silver** | `#E5E7EB` | Dividers, card borders, neutral panel outlines | Neutral separator |
| **Dark Silver Border** | `#9CA3AF` | Focused inputs, prominent container outlines | High contrast border |
| **Highlight Blush** | `#F6E9EE` | Light card backgrounds, trust pill fills, subtle tints | Contrast backdrop for burgundy text |
| **Body Text** | `#2F2F33` | Primary body typography, paragraph copy | Optimal readability (WCAG AAA) |
| **Muted Text** | `#5A5A62` | Secondary captions, timestamps, disclaimers | Subdued information |
| **WhatsApp Green** | `#25D366` | Instant WhatsApp quotation triggers (`hover: #20BD5A`) | Standard WhatsApp branding |
| **Clean Backgrounds** | `#FFFFFF` / `#FAFAFA` | Page surfaces and alternate content sections | Clean, modern breathing room |

---

## 2. Typography Hierarchy

- **Heading Font**: `Plus Jakarta Sans` (weights: 600, 700, 800, 900)
- **Body Font**: `Outfit` / `Inter` (weights: 400, 500, 600, 700)

| Level | Size (Desktop) | Size (Mobile) | Line Height | Weight | Letter Spacing | Font Family |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | 48px – 56px (`3rem – 3.5rem`) | 32px – 36px (`2rem – 2.25rem`) | 1.15 | 800 / 900 | `-0.025em` | Plus Jakarta Sans |
| **Section H2** | 36px – 40px (`2.25rem – 2.5rem`) | 24px – 28px (`1.5rem – 1.75rem`) | 1.2 | 800 | `-0.02em` | Plus Jakarta Sans |
| **Card / Sub H3** | 20px – 24px (`1.25rem – 1.5rem`) | 18px – 20px (`1.125rem – 1.25rem`) | 1.3 | 700 | `-0.015em` | Plus Jakarta Sans |
| **Feature H4** | 16px – 18px (`1rem – 1.125rem`) | 15px – 16px (`0.95rem – 1rem`) | 1.4 | 700 | `0` | Plus Jakarta Sans |
| **Lead Body** | 16px – 18px (`1rem – 1.125rem`) | 15px – 16px (`0.95rem – 1rem`) | 1.6 | 400 / 500 | `0` | Outfit |
| **Standard Body**| 14px – 15px (`0.875rem – 0.95rem`) | 13px – 14px (`0.8125rem – 0.875rem`) | 1.6 | 400 / 500 | `0` | Outfit |
| **Caption / Pill** | 11px – 12px (`0.7rem – 0.75rem`) | 10px – 11px (`0.65rem – 0.7rem`) | 1.4 | 700 / 800 | `+0.05em` | Outfit (Uppercase) |

---

## 3. Button States & Interactive Elements

### 1. Primary Action (Burgundy Gradient)
- **Normal**: `background: linear-gradient(135deg, #6D1A36 0%, #8A2F4D 100%)`, `color: #FFFFFF`, `box-shadow: 0 10px 25px rgba(109, 26, 54, 0.30)`, `border-radius: 9999px`
- **Hover**: `background: linear-gradient(135deg, #55142A 0%, #6D1A36 100%)`, `transform: translateY(-2px)`, `box-shadow: 0 15px 30px rgba(109, 26, 54, 0.45)`
- **Active**: `transform: scale(0.98)`

### 2. Secondary Action (Architectural Silver)
- **Normal**: `background: #B9BEC7`, `color: #2F2F33`, `font-weight: 800`, `border-radius: 9999px`, `box-shadow: 0 8px 20px rgba(185, 190, 199, 0.35)`
- **Hover**: `background: #A9AFBA`, `color: #1A1A1E`, `transform: translateY(-2px)`
- **Active**: `transform: scale(0.98)`

### 3. WhatsApp Direct CTA
- **Normal**: `background: #25D366`, `color: #FFFFFF`, `font-weight: 700`, `border-radius: 9999px`
- **Hover**: `background: #20BD5A`, `transform: scale(1.02)`
- **Active**: `transform: scale(0.98)`

### 4. Outline Secondary Action
- **Normal**: `background: transparent`, `border: 2px solid #8A2F4D`, `color: #6D1A36`, `border-radius: 9999px`
- **Hover**: `background: #6D1A36`, `color: #FFFFFF`, `transform: translateY(-2px)`

---

## 4. Spacing Scale & Layout Grid

- **Base Unit**: `4px`
- **Container Max-Width**: `80rem` (`1280px` max-w-7xl)
- **Horizontal Container Padding**: `px-4 sm:px-6 lg:px-8`
- **Section Vertical Padding**:
  - Compact: `py-12` (`48px`)
  - Standard: `py-20` (`80px`)
  - Hero / Deep sections: `py-24 sm:py-32` (`96px – 128px`)
- **Card Padding**:
  - Small cards: `p-4 sm:p-5` (`16px – 20px`)
  - Feature & pricing cards: `p-6 sm:p-8` (`24px – 32px`)
  - Hero banners: `p-8 sm:p-12` (`32px – 48px`)
- **Corner Radii**:
  - Interactive inputs & buttons: `rounded-xl` (`12px`) or `rounded-full` (`9999px`)
  - Content containers: `rounded-2xl` (`16px`) to `rounded-3xl` (`24px`)

---

## 5. Architectural Process Framework
All visible communication follows Sangeetha's 4-stage engineering methodology:
1. **Laser Measurement**: Calibrated beam evaluation & structural substrate inspection
2. **Itemized Quote**: Zero hidden fees with all hardware and warranty included
3. **Dustless Rigging**: Diamond core drilling with vacuum containment
4. **Load & Tension Check**: Calibrated tensiometer audit and 10-year warranty handover

