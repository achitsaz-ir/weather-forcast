# Weather Forecast

Welcome to the **Weather Forecast** application! This project is designed to provide accurate and up-to-date weather forecasts for any location. Built with Next.js, Tailwind CSS, Zustand, and shadcn/ui, this Progressive Web Application (PWA) offers a seamless and responsive user experience.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Configuration](#configuration)
    - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Real-time Weather Data**: Get the latest weather updates for your location.
- **Multiple Units**: Switch between Celsius, Fahrenheit, and Kelvin.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Skeleton Loading**: Smooth loading experience with skeleton screens.
- **Location Detection**: Automatically detects your location using Geolocation API.
- **Error Handling**: Robust error handling with user-friendly notifications.
- **Progressive Web Application**: Installable on your device for a native app-like experience.

## Getting Started

### Installation

First, clone the repository:

```bash
git clone https://github.com/achitsaz-ir/weather-forecast.git
cd weather-forecast
```

Install the dependencies:

```bash
pnpm install
```

### Configuration

Create a `.env` file in the root directory and add your API keys:

```env

you need to get api key from weatherbit.io and set it to:
NEXT_PUBLIC_WEATHERBIT_API_KEY=your_weatherbit_api_key

you need to get api key from ipgeolocation.io and set it to:
NEXT_PUBLIC_IP_GEOLOCATION_API_KEY=your_ipgeolocation_api_key
```

### Running the Application

To start the development server, run:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

Here is the project folder structure with explanations for each directory:

```
weather-forecast/
├── .husky/
├── app/
│ ├── (weatherForecast)/
│ │ ├── _accessories/
│ │ ├── forecast/
│ │    └── [weatherIndex]/
├── components/
│ └── ui/
├── lib/
├── public/
├── utils/
```

### Directory Explanations

- **`.husky/`**: Contains Husky configuration files for managing Git hooks.

- **`app/`**: Main application code, organized by feature. This follows the new App Directory structure introduced in Next.js 13.

    - **`(weatherForecast)/`**: A Route Group for the weather forecast feature. Route Groups allow you to organize routes without affecting the URL structure. This directory contains all the routes and components related to the weather forecast feature.
        - **`_accessories/`**: A private folder within the `weatherForecast` Route Group. Private folders (prefixed with an underscore) are used to store components, hooks, providers, stores, enums, and interfaces that are not directly accessible as routes. This helps in organizing the code and keeping the route structure clean.
        - **`forecast/[weatherIndex]/`**: Dynamic route for displaying weather forecast details based on the `weatherIndex`.

- **`components/`**: Reusable UI components that can be used across the application.

    - **`ui/`**: Components from the `shadcn/ui` library.

- **`lib/`**: Utility functions from library like `shadcn/ui`

- **`public/`**: Static assets like images and icons.

- **`utils/`**: Additional utility functions.

### Code Organization Guidelines

- **Global Code**: If a piece of code (e.g., components, hooks, utilities) is used globally across the application, it should be created in the project root in its own folder (e.g., `components`, `lib`, `utils`).

- **Feature-Specific Code**: If a piece of code is used only within a specific route and its sub-categories, it should be placed in the `_accessories` folder of that route group. For example, components, hooks, and utilities specific to the weather forecast feature are placed in `app/(weatherForecast)/_accessories/`.

- **Sub-Category Specific Code**: If a piece of code is used only within a sub-category of a route, it should be created in the `_accessories` folder of that sub-category.

#### `_accessories` Structure

The `_accessories` folder is used to organize feature-specific code that is not directly accessible as routes. Here is an example structure for the `weatherForecast` feature:

```
app/
├── (weatherForecast)/
│ ├── _accessories/
│ │ ├── components/
│ │ ├── hooks/
│ │ ├── providers/
│ │ ├── stores/
│ │ ├── enums.ts
│ │ └── interfaces.ts
│ ├── forecast/
│ │ └── [weatherIndex]/
│ │ └── _accessories/
│ │ └── page.tsx
│ ├── page.tsx
│ └── template.tsx
```

- **`components/`**: Reusable UI components specific to the weather forecast feature.
- **`hooks/`**: Custom hooks for managing state and side effects specific to the weather forecast feature.
- **`providers/`**: Context providers for managing global state specific to the weather forecast feature.
- **`stores/`**: Zustand stores for state management specific to the weather forecast feature.
- **`enums.ts`**: Enumerations used in the weather forecast feature.
- **`interfaces.ts`**: TypeScript interfaces for type definitions specific to the weather forecast feature.

## Usage

- **Home Page**: Displays the current weather, date, and temperature.
- **Forecast Page**: Shows the weather forecast for the next 7 days.
- **Change Units**: Use the buttons in the header to switch between Celsius, Fahrenheit, and Kelvin.
- **Refresh Data**: Click the "Refresh" button to update the weather data.

## Contributing

We welcome contributions! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch following the [branch naming conventions](#branch-naming-guidelines).
3. Make your changes.
4. Commit your changes following the [commit message guidelines](#commit-message-guidelines).
5. Push to the branch: `git push origin <your-branch-name>`.
6. Rebase your branch with the `main` branch and update your branch number according to the last merged branch onto `main`.
7. Fell free to open a pull request.

### Commit Message Guidelines

We use Husky to enforce commit message guidelines and run pre-commit hooks. Please follow these guidelines for commit messages:

- Use emojis to indicate the type of change:

    - 🐛 for bug fixes
    - ✨ for new features
    - 🚑 for critical hotfixes
    - 🎨 for code style changes
    - 🔒️ for security fixes
    - ⬆️ for dependency upgrades
    - 🚧 for work in progress
    - 🔥 for removing code or files
    - 📝 for documentation changes

- Include the branch number in square brackets.
- Start the commit message with a capital letter.

Examples:

- `🐛 [12345] Fix issue with weather data loading`
- `✨ [67890] Add new feature for unit conversion`

### Branch Naming Guidelines

Branch names should follow this pattern:

- `feature/T12345-camelCaseDescription`
- `bugFix/T12345-camelCaseDescription`
- `hotFix/T12345-camelCaseDescription`
- `issueFix/T12345-description`

**Do not name your branch `main` or `develop`.**

**Note:** The branch number should correspond to the next available number after the last merged branch onto `main`. Check the number of the last merged branch and increment it by one for your new branch. Always rebase your branch with `main` and update your branch number accordingly before submitting a pull request.

**Exception:** If the branch is created to fix a specific issue, the branch name should start with the `issueFix` and the branch number should be the same as the issue number, even if exists in another non-issue branch.

### Pre-commit Hooks

We use Husky to run pre-commit hooks for linting and type checking. Before committing your changes, Husky will:

1. Validate the branch name.
2. Validate the commit message.
3. Run ESLint to check for code style issues.
4. Run TypeScript type checking.

If any of these checks fail, the commit will be aborted. Please fix the issues and try committing again.

To prepare Husky to run, use the following command:

```bash
pnpm prepare
```

### Running Lint and Type Checking Manually

You can run the lint and type checking manually using the following commands:

```bash
pnpm lint
pnpm tsc
```

Ensure your code follows our linting and formatting rules:

```bash
pnpm lint
pnpm format
```

Thank you for contributing to the Weather Forecast application!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://github.com/shadcn/ui)
- [Zustand](https://github.com/pmndrs/zustand)
- [Weatherbit API](https://www.weatherbit.io/)
- [IP Geolocation API](https://ipgeolocation.io/)

---

Thank you for using the Weather Forecast application! We hope it helps you stay prepared for any weather conditions. If you have any questions or feedback, feel free to open an issue or contact us.
