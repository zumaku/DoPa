import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { Navbar, Footer } from "./components"
import { Home, About, FAQ } from "./pages"

function App() {
  return (
    <Router>
      <div className="mx-auto px-5 sl:px-20 max-w-[1440px]">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/faq" component={FAQ} />
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}

export default App
