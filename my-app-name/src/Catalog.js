import './App.css';

const books = [
  {
    id: 1,
    название: "Евангелие от Марка",
    автор: "Марк",
    цена: 0
  },
  {
    id: 2,
    название: "Евангелие от Матфея",
    автор: "Матфей",
    цена: 470
  },
  {
    id: 3,
    название: "Евангелие от Иоанна",
    автор: "Иоанн",
    цена: 666
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
      <p>Название: {book.название}</p>
      <p>Автор: {book.автор}</p>
      <p>Цена: {book.цена}</p>
      <button onClick={() => addToCart(book)}>В корзину</button>
    </div>
  );
}

export { Catalog, BookCard, books };
