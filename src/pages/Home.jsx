import HeroSection from '../components/HeroSection';
import BusinessCards from '../components/BusinessCards';
import { motion } from 'framer-motion';

const Home = ({ lang }) => {
  const content = {
    zh: {
      aboutTitle: "关于 MAAS",
      aboutDesc: "我们坚持以“智能科技+资本并购”双引擎驱动，放眼全球，前瞻性地整合优质企业，不断优化与拓宽自身AI 体系的边界与深度。从能源的灵活调度，到智能化商业网络的深度运营，我们通过持续的产业整合，构建起一个从算力底座、智能硬件到全场景服务的闭环进化生态。",
    },
    en: {
      aboutTitle: "About MAAS",
      aboutDesc: "Fueled by an 'intelligent tech + strategic M&A' strategy, we integrate leading enterprises to expand our AI ecosystem. From energy dispatch to commercial network operation, we have built an ecosystem via industrial integration, covering computing infrastructure, hardware, and full-scenario services.",
    }
  };

  return (
    <div className="pt-20">
      <HeroSection lang={lang} />
      
      <section id="business" className="py-20 bg-white">
        <BusinessCards lang={lang} />
      </section>

      {/* 首页的“关于我们”简述段落 */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-8"
          >
            {content[lang].aboutTitle}
          </motion.h2>
          <p className="text-lg text-gray-600 leading-relaxed italic">
            "{content[lang].aboutDesc}"
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
