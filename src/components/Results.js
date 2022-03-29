import Card from './Card'
import TransitionEffect from '../utils/TransitionEffect'

export default function Results({ booksList, loading }) {

  /** NOTE: Message for initial render when no search as been submitted */
  if (!booksList) {
    return <p className="text-center text-gray-400">Search results will be displayed here.</p>
    /** NOTE: Message for searches that didn't find results  */
  } else if (Object.keys(booksList).length < 1) {
    return <p className="text-center text-gray-400">No matches found for this search.</p>
  }

  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-5 lg:grid-col-4 md:grid-cols-3 sm:grid-cols-2">
      {booksList.map((book, index) => (
        <TransitionEffect key={index} status={loading}>
          <Card
            title={book.title}
            author={book.author_name}
            cover={book.lending_edition_s}
            coverAlt={book.cover_edition_key}
            published={book.first_publish_year}
          />
        </TransitionEffect>
      ))}
    </div>
  )
}
