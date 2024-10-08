import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { Navbar, Footer, Err404} from "./components"
import { Home, About, FAQ, Contact, Dashboard } from "./pages"

function App() {

  return (
    <Router>
      <div className="mx-auto px-5 sl:px-20 max-w-[1440px] overflow-hidden">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/faq" component={FAQ} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={Err404} />
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}

export default App
