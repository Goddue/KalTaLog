import './App.css';

const books = [
  {
    id: 1,
    название: "Война и мир",
    автор: "Лев Толстой",
    цена: 550
  },
  {
    id: 2,
    название: "Преступление и наказание",
    автор: "Фёдор Достоевский",
    цена: 470
  },
  {
    id: 3,
    название: "Мастер и Маргарита",
    автор: "Михаил Булгаков",
    цена: 620
  }
];

function Catalog({ addToCart }) {
  return (
    <div className="Catalog">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

function BookCard({ book, addToCart }) {
  return (
    <div className='BookCard'>
      <p>Название {book.название}</p>
      <p>Автор {book.автор}</p>
      <p>Цена {book.цена}</p>
      <button onClick={() => addToCart(book)}>В корзину</button>
    </div>
  );
}

export { Catalog, BookCard, books };
