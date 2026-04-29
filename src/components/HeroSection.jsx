import { motion } from 'framer-motion';

const HeroSection = ({ lang }) => {
  const content = {
    zh: {
      title: "起源于资本，进化于科技",
      subtitle: "我们不仅是人工智能的驱动者，更是全场景数字化系统的集成商与运营商。",
    },
    en: {
      title: "Built with Capital, Honed by Technology",
      subtitle: "An AI trailblazer, an end-to-end digital system integrator and operator.",
    }
  };

  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-blue-400 font-mono mb-4 tracking-[0.3em] text-sm md:text-base">NASDAQ: MAAS</h2>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight">
            {content[lang].title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-10">
            {content[lang].subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
