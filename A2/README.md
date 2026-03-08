# Insight Hire — COS30043 Assignment 2

A Vue.js 3 + Bootstrap web app with Job Explorer, Application Form, and To-Do List.

## Prerequisites

- [Node.js](https://nodejs.org/) v18+

## Setup

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for deployment

```bash
npm run build
```

Output goes to the `dist/` folder — upload its contents to your Mercury server directory.

## Tech Stack

| Package | Version | Loaded |
|---|---|---|
| Vue 3 | latest | local (bundled) |
| Vue Router 4 | latest | local (bundled) |
| Bootstrap 5 | latest | local (bundled) |
| Bootstrap Icons | latest | local (bundled) |

> All resources are bundled locally by Vite — no CDN links.

## Project Structure

```
src/
├── App.vue               # Root component
├── main.js               # Entry point
├── router/
│   └── index.js          # Vue Router config
├── data/
│   └── Jobs.js           # Job data array
├── pages/
│   ├── JobExplorer.vue   # Job Explorer page
│   ├── ApplicationForm.vue # Application Form page
│   └── ToDoList.vue      # To-Do List page
└── components/
    ├── jobs/
    │   ├── JobList.vue     # Sidebar job list
    │   ├── JobDetail.vue   # Job detail view
    │   └── JobOverview.vue # Overview description
    └── todos/
        ├── AddTodo.vue     # Add task input
        └── TodoItem.vue    # Single task row
```
