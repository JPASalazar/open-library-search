import Search from "./components/Search"
import Status from "./components/Status"
import Results from "./components/Results"

function App() {
  return (
    <>
      <header>
        <Status />
        <Search />
      </header>
      <main>
        <section>
          <Results />
        </section>
      </main>
    </>
  );
}

export default App;
