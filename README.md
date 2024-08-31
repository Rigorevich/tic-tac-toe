# Tic-Tac-Toe Game

This project is a simple implementation of the classic Tic-Tac-Toe game using React and TypeScript. The game is designed to be interactive, with a focus on clear state management and code organization.

## Project Overview

This project implements a simple Tic-Tac-Toe game using React. The main goal was to create a functional, interactive, and easily understandable game that demonstrates a clear approach to state handling, UI updates, and code organization.

## Code Structure and Design Choices

### Code Structure

- **Custom Hook (`useTicTacToe`)**: The game logic is encapsulated within a custom hook, which manages the board state, score, moves history, and the current turn. This approach makes the component that uses this hook cleaner and focused purely on rendering the UI.
- **Component Separation**: The application is divided into small, focused components, each responsible for a single piece of functionality.

### Why I Chose This Structure

- **Custom Hook (`useTicTacToe`)**: Encapsulating the game logic inside a custom hook keeps the UI components simple and focused on rendering. This also allows easy reuse of the game logic if needed in different parts of the application or in other projects.
- **Component Separation**: Breaking down the application into small, focused components enhances maintainability and readability. Each component has a single responsibility, which simplifies debugging and testing. This modular approach also makes it easier to introduce new features or modify existing ones without affecting other parts of the application.

## Libraries and Tools Used

- **React**: React was used for building the UI due to its component-based architecture, which makes it easier to manage the state and update the UI efficiently.
- **TypeScript**: TypeScript was chosen for type safety, ensuring that the code is more robust and less prone to runtime errors. It helps catch errors during development and improves code clarity by explicitly defining the types of variables and functions.
- **Vite**: I chose Vite as the build tool for this project due to its lightning-fast development server and efficient build process. Vite offers faster hot module replacement (HMR) than traditional bundlers like Webpack, resulting in a smoother development experience. Additionally, Vite's modern architecture allows for quicker builds and optimized performance in production.
- **ESLint and Prettier**: These tools were used to maintain consistent code formatting and enforce coding standards across the project, making the code more readable and easier to maintain.
- **Pnpm**: I used `pnpm` as the package manager for this project. `Pnpm` is faster and more efficient than traditional package managers like `npm` or `yarn`.

## Design Decisions

- **Separation of Concerns**: By separating utility functions (e.g., `calculateWinner`, `checkTie`, `getNextTurn`) from the main game logic, the code is more maintainable and testable. Each function has a single responsibility, which simplifies debugging and future updates.

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/Rigorevich/tic-tac-toe.git
cd tic-tac-toe
npm install
```
