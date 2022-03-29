export default function Card({ title, author, cover, coverAlt, published }) {

  /**
   * NOTE:
   * After testing the results it's clear the data from API request is not always reliable,
   * therefore i've added some aditional checks to avoid errors and improve the cover matching 
   * when compared with Open Library.
   */
  let source
  if (cover) {
    source = `https://covers.openlibrary.org/b/olid/${cover}-M.jpg`
  } else if (coverAlt) {
    source = `https://covers.openlibrary.org/b/olid/${coverAlt}-M.jpg`
  } else {
    source = require('../resources/images/avatar_book-lg.png')
  }

  return (
    <div className="flex flex-col h-full px-6 pt-4 pb-6 text-center bg-white rounded shadow-lg">
      <div className="min-h-[15rem] flex items-center justify-center">
        <img className="max-w-full p-4 max-h-60" src={source} alt={`${title} cover`} />
      </div>
      <div className="text-base font-bold">{title}</div>
      <div className="mt-2 mb-auto text-sm text-gray-800">
        {/* NOTE: Check for author name/names values. When author doesn't exist populate with default */}
        <span className="text-xs italic">by </span>{author ? author.join(', ') : "Unknown author"}
      </div>
      {/* NOTE: Check for published year value. When published year doesn't exist don't render element */}
      <div className="mt-5 text-xs text-gray-500">{published ? `First published in ${published}` : null}</div>
    </div>
  )
}
