export default function Status({ previousSearch, loading }) {

  /** NOTE: Text for initial render when no search as been submitted */
  if (!previousSearch) {
    return <p className="mb-5 text-xl text-gray-400">Start by typing in the search box below</p>
  }
  /** NOTE: Text for last successeful search term with message for data loading transition */
  return (
    <p className="mb-5 text-xl text-gray-400">Your search: <span className="text-yellow-600 text-bold">{loading ? 'loading...' : previousSearch}</span></p>
  )
}
