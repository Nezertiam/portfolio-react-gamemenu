import { Route, Router, Switch } from "react-router"
import About from "./components/About"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
      </Switch>
    </>
  )
}

export default App
