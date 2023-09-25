import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { Navbar, Footer } from "./components"
import { Home } from "./pages"

function App() {
  return (
    <Router>
      <div className="mx-auto px-5 sl:px-20 max-w-[1440px]">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}

export default App
