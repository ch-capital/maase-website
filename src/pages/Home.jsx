import HeroSection from '../components/HeroSection';
import BusinessCards from '../components/BusinessCards';

const Home = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <section id="业务布局" className="py-20">
        <BusinessCards />
      </section>
      {/* 可以在此继续添加核心技术等 Section */}
    </div>
  );
};

export default Home;
