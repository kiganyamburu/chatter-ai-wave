# Chatter AI Wave

Chatter AI Wave is a modern, interactive AI chat assistant web application built with React, Vite, TypeScript, and Tailwind CSS. It features a beautiful, responsive UI and simulates AI-powered conversations, making it ideal for demos, prototyping, or as a foundation for real AI chat integrations.

![Alt text](public/pic.png)

## Features

- **Modern UI**: Built with [shadcn/ui](https://ui.shadcn.com/) components and Tailwind CSS for a sleek, accessible design.
- **Simulated AI Chat**: Demo chat interface with animated typing indicators and simulated AI responses.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Component-Driven**: Modular React components for easy customization and extension.
- **Routing**: Client-side routing with React Router.
- **State Management**: Uses React hooks and TanStack Query for state and async logic.
- **Theming**: Supports dark mode and custom themes.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/kiganyamburu/chatter-ai-wave.git
   cd chatter-ai-wave
   ```

````
2. **Install dependencies:**
   ```sh
npm install
````

3. **Start the development server:**
   ```sh
   pnpm dev # or npm run dev or yarn dev
   ```

```
4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## Project Structure

```

├── public/ # Static assets
├── src/
│ ├── components/ # UI and chat components
│ ├── hooks/ # Custom React hooks
│ ├── lib/ # Utility functions
│ ├── pages/ # Page components (routes)
│ └── assets/ # Images and other assets
├── index.html # Main HTML file
├── tailwind.config.ts
├── vite.config.ts
└── package.json

```

## Tech Stack
- **React 18**
- **Vite** (blazing fast dev/build tool)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (Radix UI + custom components)
- **TanStack Query** (react-query)
- **React Router DOM**

## Customization
- Update the chat logic in `src/components/ChatInterface.tsx` to connect to a real AI backend (e.g., OpenAI, LangChain, etc.).
- Modify theme and styles in `tailwind.config.ts` and `src/App.css`.
- Add new pages or components as needed.

## Scripts
- `pnpm dev` — Start development server
- `pnpm build` — Build for production
- `pnpm preview` — Preview production build
- `pnpm lint` — Lint codebase

## License

This project is open source and available under the [MIT License](LICENSE).
```
