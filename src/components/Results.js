import Card from './Card'
import TransitionEffect from '../utils/TransitionEffect'

export default function Results({ data, loading }) {

  if (!data) {
    return <p className="text-center text-gray-400">Search results will be displayed here.</p>
  }

  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-5 lg:grid-col-4 md:grid-cols-3 sm:grid-cols-2">
      {data.map((book, index) => (
        <TransitionEffect key={index} status={loading}>
          <Card
            title={book.title}
            author={book.author_name}
            cover={book.lending_edition_s}
            published={book.first_publish_year}
          />
        </TransitionEffect>
      ))}
    </div>
  )
}
