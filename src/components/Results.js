import Card from './Card'

export default function Results({ data, loading }) {

  if (!data) {
    return <p>Search results will be displayed here.</p>
  }

  return (
    <>
      {data.map((book, index) => (
        <Card key={index} status={loading}
          title={book.title}
          author={book.author_name}
          cover={book.lending_edition_s}
          published={book.first_publish_year}
        />
      ))}
    </>

  )
}
