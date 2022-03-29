import { useState } from "react"
import Search from "./components/Search"
import Status from "./components/Status"
import Results from "./components/Results"
import Spinner from "./utils/Spinner"

function App() {
  /** 
   * NOTE:
   * Considering the straight relation between elements and directness of state handling, 
   * the data will be passed from and to components by lifting state and passing props. 
   * Alternately, for more complex logic either, Context hook or state management solutions would be ideal.
   */
  const [data, setData] = useState([])
  console.log(data)
  /** 
   * NOTE:
   * Like data, loading state will be passed from and to components, but the goal is to provide 
   * a state for the conditional rendering of visual reference elements like spinners or updated text.
   */
  const [loading, setLoading] = useState(false)

  return (
    <>
      <header className='sticky top-0 py-10 bg-white shadow-lg'>
        <div className='container flex flex-col items-center justify-center px-5 m-auto'>
          <Status previousSearch={data.q} loading={loading} />
          <Search setData={setData} setLoading={setLoading} />
        </div>
      </header>
      <main className='container m-auto'>
        <section className='px-5 py-10'>
          {loading ? <Spinner /> : <Results data={data.docs} loading={loading} />}
        </section>
      </main>
    </>
  );
}

export default App;
