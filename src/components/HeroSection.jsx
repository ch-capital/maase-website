import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[120px]"></div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center px-4"
      >
        <h2 className="text-blue-400 font-mono mb-4 tracking-widest">NASDAQ: MAAS</h2>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">起源于资本，进化于科技</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          我们不仅是人工智能的驱动者，更是全场景数字化系统的集成商与运营商。
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
