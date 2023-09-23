import { Navbar } from "./components"
import { Home } from "./pages"

function App() {
  return (
    <div className="mx-auto px-5 sl:px-20 max-w-[1440px]">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
