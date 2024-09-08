import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Sablon } from './ekranlar/Sablon';
import { Anasayfa } from './ekranlar/Anasayfa';
import { Blog } from './ekranlar/Blog';
import { Iletisim } from './ekranlar/Iletisim';
import { SayfaYok } from './ekranlar/SayfaYok';

function App() {
  

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sablon />}>
            <Route index element={<Anasayfa />} />
            <Route path="blog" element={<Blog />} />
            <Route path="iletisim" element={<Iletisim />} />
            <Route path="*" element={<SayfaYok />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default App;
