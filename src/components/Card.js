export default function Card({ title, author, cover, published }) {
  return (
    <div>
      <div>
        <img src={`https://covers.openlibrary.org/b/olid/${cover}-M.jpg`} alt={`${title} cover`} />
      </div>
      <div>{title}</div>
      <div><span>by </span>{author}</div>
      <div>First published in {published}</div>
    </div>
  )
}
