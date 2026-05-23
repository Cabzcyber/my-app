import TopographyBackground from '../components/TopographyBackground';
import Timeline from '../components/Timeline';
import ProfileCard from '../components/ProfileCard';
import PortfolioShowcase from '../components/PortfolioShowcase';

export default function Home() {
  return (
    <main style={{ background: '#232323', minHeight: '100vh', position: 'relative' }}>
      
      {/* Fixed background layer */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none' }}>
        <TopographyBackground />
      </div>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 max-w-7xl mx-auto w-full pt-12 pb-0">
        
        {/* Left Column - Profile Details */}
        <div className="flex flex-col px-4 md:px-12 pb-4 md:pb-8">
          <ProfileCard />
        </div>

        {/* RIGHT — Timeline */}
        <div className="flex flex-col px-4 md:px-12 pb-4 md:pb-8">
          <Timeline />
        </div>

      </div>

      {/* Full Width Row Section */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-12 pb-24">
        <PortfolioShowcase />
      </div>

    </main>
  );
}
