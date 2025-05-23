import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.css';
import '../components/AdsterraBanner/adsterra-banner.css';
import '../components/AdsterraContainer/adsterra-container.css';
import '../components/AdsterraSideBanner/adsterra-side-banner.css';
import '../components/AdsterraTopBanner/adsterra-top-banner.css';
import '../components/Header/header.css';
import '../components/SearchBar/search-bar.css'
import '../components/ThemeToggle/theme-toggle.css';
import '../components/AdSense/adsense.css';
import '../components/Skeleton/skeleton.css';
import '../components/AdSense/adsense.css';
import '../pages/Home/home.css';
import '../pages/Filme/filme.css';
import '../components/SimilarMovies/similar-movies.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer autoClose={2500} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
