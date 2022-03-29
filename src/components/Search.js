import { useState } from 'react'

export default function Search({ setData, setLoading }) {

  const [queryTerm, setQueryTerm] = useState('')

  const handleChange = (e) => {
    setQueryTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    fetch('http://openlibrary.org/search.json?limit=10&q=' + queryTerm)
      .then(response => response.json())
      .then(data => setData(data))
      .then(() => setLoading(false))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )
}
