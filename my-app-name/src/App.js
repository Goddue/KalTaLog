import './App.css';

const books = [
  {
    "название": "Война и мир",
    "автор": "Лев Толстой",
    "цена": 550
  },
  {
    "название": "Преступление и наказание",
    "автор": "Фёдор Достоевский",
    "цена": 470
  },
  {
    "название": "Мастер и Маргарита",
    "автор": "Михаил Булгаков",
    "цена": 620
  }
]

function Catalog() {
  return(
    <div className="Catalog">
        {books.map((book, index) => (
          <BookCard
            key={index}
            name={book["название"]}
            author={book["автор"]}
            price={book["цена"]}
          />
        ))}
      </div>
  )
}

function BookCard(props) {
  return (
    <div className='BookCard'>
      <p>Название { props.name }</p>
      <p>Автор { props.author }</p>
      <p>Цена { props.price }</p>
    </div>
  )
}

export { Catalog, BookCard, books };
