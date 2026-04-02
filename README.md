# Next.js + shadcn UI Tutorial

This tutorial is a record of my journey learning and exploring Next.js and shadcn/ui. Instead of following a traditional documentation-style approach, it takes a hands-on, project-based path to introduce the fundamentals of Next.js.

You’ll learn by building a Snippets app: a simple tool to save, view, edit, and delete code snippets, while also working with the popular shadcn/ui component library to help you get up to speed with Next.js more quickly and practically.

## What We're Building

A CRUD application for managing code snippets. Through this real-world project, we'll cover Next.js file-based routing, Server Components, Server Actions, caching, and shadcn UI components.

## Features

| Feature   | Description                                         |
| --------- | --------------------------------------------------- |
| List view | Show all snippets with Edit / Delete / View buttons |
| View      | Syntax-highlighted code display via Monaco Editor   |
| Create    | Add a new snippet with title and code editor        |
| Edit      | Pre-filled form to update an existing snippet       |
| Delete    | One-click delete with automatic page refresh        |
| 404 page  | Custom not-found page for missing snippets          |

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **shadcn UI** (Tailwind CSS + Radix UI)
- **SQLite** (`sqlite` + `sqlite3` packages)
- **Monaco Editor** (`@monaco-editor/react`)

## Four Steps

### Step 01 — Setup & Basics [`→ Tutorial`](./doc/step01.md)

- Scaffold a project with `create-next-app`
- Install and initialize shadcn UI
- Explore shadcn components: Card, Button, Input, Label
- Next.js **file-based routing**: new pages, nested routes
- **Layout**: global Header navigation

### Step 02 — SQLite Database [`→ Tutorial`](./doc/step02.md)

- Install `sqlite` + `sqlite3`, write a Singleton database client
- CRUD functions for the snippets table
- Write and run tests with Node.js built-in `node:test`

### Step 03 — View & Delete [`→ Tutorial`](./doc/step03.md)

- Home page: fetch all snippets from DB and render a list
- **Dynamic route** `/snippets/[id]`: view a single snippet
- Monaco Editor for read-only syntax-highlighted code display
- **Server Action** for delete
- Server Component vs Client Component boundary design
- `revalidatePath` to bust Next.js cache after mutations
- Custom `not-found.tsx` 404 page

### Step 04 — Create & Edit [`→ Tutorial`](./doc/step04.md)

- `/snippets` create page with Server Action form submission
- Monaco Editor as a controlled input via a `hidden` field
- `/snippets/[id]/edit` edit page: pre-fill data, save changes
- `redirect()` after form submission

## Source Code

Each step's final state is saved in its own directory:

```
codes/
├── step01/    # After setup & basics
├── step02/    # After database integration
├── step03/    # After View + Delete
└── step04/    # After Create + Edit (final version)
```

## Quick Start (final version)

```bash
cd codes/step04
npm install
npm run dev
```

Open http://localhost:3000

![Snippets App screenshoot1](./doc/assets/step03-1.png)

![Snippets App screenshoot2](./doc/assets/step04-1.png)

![Snippets App screenshoot2](./doc/assets/step03-3.png)
