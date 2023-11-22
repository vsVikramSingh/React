---- Here some instalation instruction


- create react project
    npx create-react-app "appName"


- install react using vite 
    npm create vite@latest
        project name
        library react
        javascript


- install tailwind
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    add this decorator inside src/index.css file
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    add this content property inside tailwind.config.js file
        content: [
        "./index.html",
        "./src/**/*.{html,js,jsx,tsx,ts}"
        ]

