# EV Motors Landing Page

A beginner-friendly electric vehicle landing page built with React and Vite.

## View the app

Add your deployed website link here after publishing it:

**Live website:** `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

## Basic features

1. Responsive navigation and hero section.
2. Vehicle cards created from simple JavaScript data.
3. Technology and contact sections.
4. Working question form with beginner-friendly React state.
5. Mobile-friendly layout.

## Repository structure

```text
ev-motors-landing-page/
├── assets/                 # GitHub screenshots and demo files
├── public/                 # Static files such as the favicon
├── src/
│   ├── components/         # Separate React components
│   ├── data/               # Vehicle information
│   ├── App.jsx             # Combines all components
│   ├── index.css           # Website styling
│   └── main.jsx            # Starts React
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js          # Enables React JSX in Vite
└── README.md
```

## Run the project

Install Node.js first. Open a terminal inside this project folder and run:

```bash
npm install
npm run dev
```

Open the address shown in the terminal, usually `http://localhost:5173`.

## Build the project

```bash
npm run build
```

The production files will be created inside the `dist` folder.

## Push to GitHub

Create an empty repository on GitHub. Then run:

```bash
git init
git add .
git commit -m "Create EV Motors landing page"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the repository URL provided by GitHub.

## Beginner notes

- Every component has its own `.jsx` file.
- `App.jsx` imports and displays the page components.
- React uses `className` instead of the HTML `class` attribute.
- `vehicles.js` keeps repeated card information outside the components.
- `index.css` contains all page styling and responsive rules.
