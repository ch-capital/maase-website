import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  const [lang, setLang] = useState('zh'); // 'zh' 为中文, 'en' 为英文

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* 将语言和切换函数传给导航栏 */}
        <Navbar lang={lang} setLang={setLang} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </Router>
  );
}

export default App;
