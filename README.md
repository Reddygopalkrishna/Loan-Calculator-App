# Loan Calculator App

A modern, user-friendly loan calculator application built with React and Material-UI. This application helps users calculate loan payments, interest rates, and amortization schedules with a clean and intuitive interface.

## Live Demo

You can try the application live at: [Loan Calculator App](https://loan-calculator-app-murex.vercel.app/)

## Features

- Loan amount calculation with principal, interest rate, and term inputs
- Amortization schedule generation
- Real-time payment calculations
- Responsive design for all device sizes
- Modern Material-UI interface
- Interactive charts and visualizations

## Tech Stack

- React 19
- Material-UI 7
- React Router DOM 7
- Vite 6
- Emotion for styling
- Axios for API calls

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/loan-calculator-app.git
cd loan-calculator-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
loan-calculator-app/
├── src/
│   ├── assets/         # Static assets (images, fonts)
│   ├── components/     # Reusable UI components
│   ├── context/        # React context providers
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── public/             # Public assets
├── index.html          # HTML template
└── package.json        # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

