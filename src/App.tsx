// styles
import './assets/styles/main.scss';
// pages
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import History from './pages/History.tsx';
import ContactUs from './pages/ContactUs.tsx';
import NotFound from './pages/NotFound.tsx';
// layouts
import Default from './layout/Default.tsx';
// libraries
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Routes>
            <Route path="/" element={<Default />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="history" element={<History />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </>
  )
}