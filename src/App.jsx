import { Navbar } from "./components"
import { Home } from "./pages"

function App() {
  return (
    <div className="mx-auto px-5 sl:px-20 max-w-[1440px]">
      <Navbar />

      <h1 className='text-5xl font-anltp font-bold'>Hello Wolrd</h1>
      <h1 className='text-5xl font-anltpB font-bold'>Hello Wolrd</h1>
      <Home />
    </div>
  )
}

export default App
