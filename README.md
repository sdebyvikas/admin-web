# 📁 Project Folder Structure

This project follows a scalable and feature-based architecture to keep the codebase clean, maintainable, and easy to understand.

## Folder Structure

| Folder               | Responsibility                                                                                                   |
| -------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `app`                | Contains application routing, layouts, and page-level configuration only.                                        |
| `assets`             | Stores static assets such as images, SVGs, icons, logos, and fonts.                                              |
| `components/ui`      | Reusable UI components generated from Shadcn UI.                                                                 |
| `components/shared`  | Shared reusable application components like `AppButton`, `AppInput`, `Loader`, etc.                              |
| `components/layouts` | Common layout components such as `Header`, `Sidebar`, `Footer`, and page wrappers.                               |
| `config`             | Application configuration including API endpoints, routes, environment configuration, and global settings.       |
| `constants`          | Application-wide constants like regex patterns, validation messages, permissions, enums, and static values.      |
| `features`           | Feature-based modules containing business logic, pages, components, hooks, services, and state for each feature. |
| `hooks`              | Global custom React hooks used across the application.                                                           |
| `lib`                | Third-party library configurations such as Axios, React Query, authentication setup, etc.                        |
| `providers`          | Global providers including Theme Provider, Query Provider, Auth Provider, and other context providers.           |
| `services`           | Shared services for API communication or reusable business logic not tied to a specific feature.                 |
| `stores`             | Global Zustand stores used for application-wide state management.                                                |
| `types`              | Shared TypeScript interfaces, types, and utility types.                                                          |
| `utils`              | Common helper functions, formatters, validators, and utility methods.                                            |

---

# Architecture Principles

- Keep the `app` directory focused on routing and layouts only.
- Place feature-specific code inside the corresponding `features` module.
- Reusable UI belongs in `components`.
- Shared business logic should live in `services` or `utils`.
- Global state should be managed through `stores`.
- Avoid duplicate code by extracting reusable components and utilities.

---

# Recommended Feature Structure

Each feature should follow a consistent structure.

```text
features/
└── auth/
    ├── api/
    ├── components/
    ├── hooks/
    ├── schemas/
    ├── services/
    ├── store/
    ├── types/
    ├── utils/
    └── index.ts
```

---

# Naming Conventions

## Components

- PascalCase
- Example:

```text
UserCard.tsx
LoginForm.tsx
AppButton.tsx
```

## Hooks

Prefix with `use`.

```text
useAuth.ts
useDebounce.ts
```

## Stores

```text
auth.store.ts
theme.store.ts
```

## Services

```text
auth.service.ts
user.service.ts
```

## Utilities

```text
formatDate.ts
generateSlug.ts
```

## Types

```text
auth.types.ts
user.types.ts
```

---

# Best Practices

- Keep components small and reusable.
- Avoid business logic inside UI components.
- Store API calls inside services.
- Use custom hooks for reusable logic.
- Centralize constants instead of hardcoding values.
- Prefer feature-based organization over type-based organization.
- Keep shared components generic and reusable.
- Write strongly typed code using TypeScript.
- Follow consistent naming conventions across the project.

---

# Tech Stack

- Next.js (App Router)
- TypeScript
- React
- Tailwind CSS
- Shadcn UI
- Zustand
- Axios
- TanStack React Query

---

# Goal

The primary goal of this architecture is to provide:

- Scalability
- Maintainability
- Reusability
- Clean Separation of Concerns
- Better Developer Experience (DX)
