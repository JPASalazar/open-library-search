export default function Status({ previousSearch, loading }) {
  return (
    <p className="mb-5 text-xl text-gray-400">
      Your search: <span className="text-yellow-600 text-bold">{previousSearch}</span>
    </p>
  )
}
