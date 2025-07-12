🎵 My Music App
Web application developed with Next.js that allows you to search for songs using the Deezer public API. Displays popular songs by default and allows interactive searches by artist or song title.

📦 Project Structure
my-music/
├── package.json
├── src/
│ ├── components/
│ │ ├── SongCard.js # Visual component to display a song
│ │ └── searchPage.js # Main component with tabs and search logic
│ ├── lib/
│ │ └── deezer.js # Function to consume the Deezer API from the client
│ ├── pages/
│ │ ├── api/
│ │ │ └── search.js # API route in Next.js to proxy searches to Deezer
│ │ ├── _app.js # Entry point that loads global styles
│ │ └── index.js # Parent page that imports SearchPage
│ └── styles/
│ └── globals.css # Global styles with Tailwind CSS

🧠 Architecture and Operation

1. 🧩 Frontend (React/Next.js)

SearchPage.js handles two tabs: Popular and Search.
Use useState and useEffect to load data based on the active tab.
The SongCard component shows cover art, title, artist and an audio preview.
Styles managed with Tailwind CSS.

2. 🛰️ API Interna (/api/search.js)

Implement a backend proxy to query the Deezer API, avoiding CORS.
If there is no query (q), returns popular songs (/chart).
If there is a search, see https://api.deezer.com/search?q=<query>.

3. 🌐 Client-Server

The client calls /api/search?q=... using fetch.
The logic to consume this route is encapsulated in lib/deezer.js.

🔧 Production Units

Package     Version     Description
next        15.3.5      React Framework for SSR and SSG
react       ^19.0.0     UI Library
react-dom   ^19.0.0     Rendering the DOM with React

🛠️ Development Units

Package             Version     Use
tailwindcss         ^3.4.1      CSS Framework utility-first
eslint              ^9          JavaScript code linter
prettier            ^3.6.2      Code formatter
autoprefixer        ^10.4.21    Add CSS prefixes automatically
postcss             ^8.5.6      Tool for processing CSS
eslint-config-next  15.3.5      ESLint configuration for Next.js
@eslint/eslintrc    ^3 Advanced ESLint Configuration

⚙️ Development Scripts

npm run dev     # Run the development server
npm run build   # Build the application for production
npm run start   # Start the app in production mode
npm run lint    # Run linter (ESLint)

🎯 Key Features

✅ Intuitive interface with tabs to explore and search.

✅ Song preview playback.

✅ Responsive and modern design with Tailwind.

✅ Error handling and friendly UX if there are no results.

✅ Secure consumption of Deezer API using proxy with Next.js.
