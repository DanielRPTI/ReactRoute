import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App(){
  let component
  switch(window.location.pathname){
    case '/':
      component = <Home />
      break
      case'/about':
      component = <About />
      break
      case'/profile':
      component = <Profile />
      break
  }
  return 
  <>
    <Navbar />
    {component}
  </>
}

export default App;
