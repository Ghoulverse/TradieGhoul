import TradieMascot from '@/components/TradieMascot';
import TradieParticles from '@/components/TradieParticles';
import Home from '@/pages/Home';
import CookieBanner from '@/components/CookieBanner';

export default function App() {
  return (
    <>
      <div className="grunge-overlay" />
      <TradieParticles />
      <TradieMascot />
      <Home />
      <CookieBanner />
</>
  );
}
