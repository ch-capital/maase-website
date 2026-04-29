import { motion } from 'framer-motion';

const BusinessCards = ({ lang }) => {
  const data = {
    zh: {
      sectionTitle: "业务布局",
      cards: [
        {
          title: "算法算力",
          tag: "ALGORITHMS",
          desc: "华智未来的“智慧大脑”与数字底座，为物理世界安装“超级大脑”与“隐形护盾”。凭借自研90亿参数MoE架构“灵言妙语”大模型，实现高商业性价比。",
          features: ["高性能计算", "量子级安全", "全场景赋能"]
        },
        {
          title: "智能移动充电",
          tag: "MOBILE CHARGING",
          desc: "“小锂”机器人实现“电找车”模式。首创-90°C低温微量润滑核心技术，融合5G+边缘计算，打造绿色智造解决方案。",
          features: ["主动服务", "储充一体", "灵活部署"]
        },
        {
          title: "珍稀自然资源",
          tag: "NATURAL RESOURCES",
          desc: "布局中参野山参、Glyken燕窝肽及Oriental Grove青砖茶。锁定全球茶文化与奢侈消费升级趋势，构建资产壁垒。",
          features: ["长期价值", "资源稀缺", "抗通胀属性"]
        }
      ]
    },
    en: {
      sectionTitle: "BUSINESS LANDSCAPE",
      cards: [
        {
          title: "Algorithms & Computing",
          tag: "ALGORITHMS",
          desc: "The 'Smart Brain' of Huazhi Future. Powered by 9B MoE 'Lingyan Miaoyu' model, delivering high-concurrency and low inference costs.",
          features: ["HPC", "Quantum Security", "Full-Scenario"]
        },
        {
          title: "Intelligent Charging",
          tag: "MOBILE CHARGING",
          desc: "Xiaoli robots implement 'Power-to-Vehicle' model. Integrating -90°C CW-MQL technology with 5G+Edge computing.",
          features: ["Proactive Service", "Integrated Storage", "Flexible"]
        },
        {
          title: "Natural Resources",
          tag: "NATURAL RESOURCES",
          desc: "Strategic assets including Zhongshen Ginseng, Glyken Peptides, and Oriental Grove Tea, targeting global luxury consumption.",
          features: ["Long-term Value", "Scarcity", "Asset Barrier"]
        }
      ]
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{data[lang].sectionTitle}</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {data[lang].cards.map((card, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="p-8 bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl"
          >
            <div className="text-xs font-bold text-blue-600 tracking-widest mb-4">{card.tag}</div>
            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">{card.desc}</p>
            <div className="flex flex-wrap gap-2">
              {card.features.map(f => (
                <span key={f} className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-500 uppercase font-bold">
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BusinessCards;
