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
public/           # Static assets
```

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