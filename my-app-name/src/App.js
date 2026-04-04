import { Routes, Route, NavLink } from 'react-router-dom';
import { Catalog } from './Catalog';
import { Cart } from './Cart';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart(prev => {
      const found = prev.find(item => item.id === book.id);
      if (found) {
        return prev.map(item =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...book, quantity: 1 }];
    });
  };

  return (
    <>
      <header>
        <NavLink className="navlink" to="/">Каталог</NavLink>
        <NavLink className="navlink" to="/cart">Корзина</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Catalog addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;