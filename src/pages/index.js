import SearchPage from '../components/SearchPage'
/**
 * HomePage component serves as the main landing page for the My Music App.
 * It displays a welcome message and embeds the SearchPage component,
 * allowing users to search for songs directly from the home page.
 *
 * @returns {JSX.Element} The HomePage component, including a welcome message and the SearchPage.
 */
export default function HomePage() {
  return (
    <div className="p-6 text-center bg-blue-100">
      <h1 className="text-4xl font-bold">Bienvenido a My Music App 🎵</h1>
      <p className="mt-4 text-lg">
        Busca tus canciones favoritas a continuación
      </p>
      <SearchPage />
    </div>
  )
}