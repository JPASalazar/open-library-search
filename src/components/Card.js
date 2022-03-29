export default function Card({ title, author, cover, published }) {

  let source
  if (cover) {
    source = `https://covers.openlibrary.org/b/olid/${cover}-M.jpg`
  } else {
    source = require('../resources/images/avatar_book-lg.png')
  }

  return (
    <div className="flex flex-col h-full px-6 pt-4 pb-6 text-center bg-white rounded shadow-lg">
      <div className="min-h-[15rem] flex items-center justify-center">
        <img className="max-w-full p-4 max-h-60" src={source} alt={`${title} cover`} />
      </div>
      <div className="text-base font-bold">{title}</div>
      <div className="mt-2 mb-auto text-sm text-gray-800"><span className="text-xs italic">by </span>{author}</div>
      <div className="mt-5 text-xs text-gray-500">First published in {published}</div>
    </div>
  )
}
