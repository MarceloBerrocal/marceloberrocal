import Header from "./layout/Header/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Inicio from "./pages/inicio/Inicio";
import Footer from "./layout/Footer/Fotter";

function App() {
  return (
    <div>   
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" component={Inicio}/>

        </Switch>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
