const Navbar = ({ lang, setLang }) => {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        <div className="font-black text-2xl text-blue-900">MAAS</div>
        
        <div className="flex items-center space-x-6">
          {/* 语言切换按钮 */}
          <button 
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="px-3 py-1 border border-blue-600 text-blue-600 rounded-full text-xs font-bold hover:bg-blue-600 hover:text-white transition"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
