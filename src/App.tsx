import TradieMascot from '@/components/TradieMascot';
import TradieParticles from '@/components/TradieParticles';
import Home from '@/pages/Home';

export default function App() {
  return (
    <>
      <div className="grunge-overlay" />
      <TradieParticles />
      <TradieMascot />
      <Home />
    </>
  );
}
