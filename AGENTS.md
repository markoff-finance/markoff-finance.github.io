# Development Guide for Markoff Landing Page

This is the public facing landing page for the Markoff.finance website.

## Project Setup

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Package Manager**: pnpm
- **React Compiler**: Enabled

### Commands

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

### Project Structure

```
src/
  app/
    layout.tsx    # Root layout with fonts and metadata
    page.tsx      # Main landing page (client-side rendered)
    globals.css   # Global styles and Tailwind config
site.config.ts    # Site-wide configuration (colors, fonts, metadata, social links)
public/           # Static assets
```

## Theme Configuration

The site uses a JavaScript-based theme configuration system:

### Configuration Flow

1. **site.config.ts** - Define colors, fonts, metadata, and social links
2. **layout.tsx** - Injects CSS variables (`--theme-*`) via the `style` prop
3. **globals.css** - Maps `--theme-*` to `--color-*` in `@theme` block
4. **Components** - Use Tailwind utilities like `bg-background`, `text-foreground`

### Example Usage

**Modify colors:**
```typescript
// site.config.ts
colors: {
  background: '#f5f5f5',
  foreground: '#525252',
  primary: '#000000',
  accent: '#3b82f6',
}
```

**Use in components:**
```tsx
<div className="bg-background text-foreground">
  <button className="bg-primary text-background">
    Click me
  </button>
</div>
```

### Available Theme Colors

- `background` - Main background color
- `foreground` - Main text color
- `primary` - Primary brand color
- `accent` - Accent/highlight color
- `muted` - Muted/secondary text color
- `border` - Border color

## Agent Behaviour

1. Try to keep things minimal
2. Use skills if present to acquire additional context or complete task-specific instructions
3. When in doubt **always** use `AskUserQuestionTool` to present the user with possible options. If you are missing context to suggest options, clarify them with the user

## Deployment Behaviour

This app is deployed using GitHub Pages and linked to markoff.finance domain.

When all tasks is completed make sure the following:
1. All tests pass
2. No linting errors
3. You delegate the git commit process to the user and summarise the changes for the commit