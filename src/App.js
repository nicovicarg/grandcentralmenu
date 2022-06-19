import './App.css';
import WebHeader from './componentes/WebHeader.js'
import SeccionLeft from './componentes/SeccionLeft.js'
import SeccionRight from './componentes/SeccionRight.js'
import SearchBar from './componentes/SerchBar.js'
import Footer from './componentes/Footer.js'

function App() {
  return (
    <div>
      <WebHeader/>
      <SearchBar/>
      <SeccionLeft
        name = "Comidas"
      />
      <SeccionRight
        name = "Bebidas"
      />
      <SeccionLeft
        name = "Test"
      />
      <Footer/>
    </div>  
  );
}

export default App;
