# Todo App - React Native

A simple and elegant Todo application built with React Native. This app allows users to create, manage, and filter their todos with a clean and intuitive interface.

## Features

- Create todos with title, description, and time
- View todo details
- Mark todos as done/open
- Delete todos
- Filter todos by status (open/done)
- Filter todos by time (past/future)
- Clean and modern UI

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- React Native development environment set up
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/MartinVelev11/todo-app-react-native.git
cd todo-app-react-native
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Run the app:
```bash
# For Android
npm run android
# or
yarn android

# For iOS
npm run ios
# or
yarn ios
```

## Project Structure

```
todo-app-react-native/
├── src/
│   ├── context/
│   │   └── TodoContext.js
│   └── screens/
│       ├── OverviewScreen.js
│       ├── FilterScreen.js
│       ├── CreateTodoScreen.js
│       └── TodoDetailScreen.js
├── App.js
├── package.json
└── README.md
```

## Usage

1. **Overview Screen**: View all your todos and access filtering options
2. **Create Todo**: Add a new todo with title, description, and time
3. **Filter Screen**: Filter todos by status and time
4. **Todo Detail**: View todo details, mark as done/open, or delete

## Note

This app uses local state management, so todos will be reset when the app is refreshed or closed.

## License

MIT 