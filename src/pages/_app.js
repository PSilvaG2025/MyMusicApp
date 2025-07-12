
import '../styles/globals.css'
/**
 * The main application component for Next.js.
 * This component wraps all page components and is responsible for
 * initializing pages. It's where you can add global styles,
 * provide data with a context API, or maintain state when
 * navigating between pages.
 *
 * @param {Object} props - The properties object.
 * @param {React.ComponentType} props.Component - The active page component to be rendered.
 * @param {Object} props.pageProps - An object with the initial props that were
 * fetched for your page by one of our data fetching methods (getServerSideProps, getStaticProps).
 * If there are no data fetching methods, pageProps will be an empty object.
 * @returns {JSX.Element} The rendered page component with its props.
 */
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
