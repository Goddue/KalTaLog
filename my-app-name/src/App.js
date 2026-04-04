import { Routes, Route, NavLink } from 'react-router-dom';
import { Catalog } from './Catalog'; // вынесите Catalog в отдельный файл или импортируйте из старого App
import { Cart } from './Cart';

function App() {
  return (
    <>
      <header>
        <NavLink className="navlink" to="/">Каталог</NavLink>
        <NavLink className="navlink" to="/cart">Корзина</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

