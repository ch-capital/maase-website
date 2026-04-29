const businesses = [
  {
    title: "全栈AI基础设施",
    desc: "以高性能算力为基础，灵言妙语大模型为核心，构筑AI时代新基建。",
    tag: "算力底座"
  },
  {
    title: "智能移动充电",
    desc: "“小锂”机器人实现“电找车”主动补能，重构城市充电场景。",
    tag: "移动补能"
  },
  {
    title: "稀缺资源投资",
    desc: "布局高增长大健康赛道，持有野山参、青砖茶等稀缺核心资源。",
    tag: "稳健资产"
  }
];

const BusinessCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">业务布局</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {businesses.map((item, idx) => (
          <div key={idx} className="p-8 bg-white rounded-2xl shadow-sm border hover:shadow-xl transition-all duration-300 group">
            <div className="text-blue-600 font-bold mb-4">/ {item.tag}</div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessCards;
