function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.цена * item.quantity, 0);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="Cart">
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Название</th>
              <th>Автор</th>
              <th>Цена</th>
              <th>Количество</th>
              <th>Сумма</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td>{item.название}</td>
                <td>{item.автор}</td>
                <td>{item.цена} ₽</td>
                <td>{item.quantity}</td>
                <td>{item.цена * item.quantity} ₽</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Итого:</td>
              <td>{count}</td>
              <td>{total} ₽</td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}

export { Cart };