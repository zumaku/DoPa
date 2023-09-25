import { Navbar, Footer } from "./components"
import { Home } from "./pages"

function App() {
  return (
    <>
      <div className="mx-auto px-5 sl:px-20 max-w-[1440px]">
        <Navbar />
        <Home />
      </div>
      <Footer />
    </>
  )
}

export default App
