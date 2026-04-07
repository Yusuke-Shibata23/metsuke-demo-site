import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import ErrorDemo from './pages/ErrorDemo'
import MenuLunch from './pages/MenuLunch'
import MenuDinner from './pages/MenuDinner'
import MenuDrinks from './pages/MenuDrinks'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/error-demo" element={<ErrorDemo />} />
            <Route path="/menu/lunch" element={<MenuLunch />} />
            <Route path="/menu/dinner" element={<MenuDinner />} />
            <Route path="/menu/drinks" element={<MenuDrinks />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
