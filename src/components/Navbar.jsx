import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 font-bold text-2xl text-blue-900">MAAS 麦思智能</div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['首页', '业务布局', '核心技术', '项目案例', '关于我们'].map((item) => (
                <a key={item} href={`#${item}`} className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}><Menu /></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
