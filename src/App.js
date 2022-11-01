import './App.css';
import Carrito from './views/Carrito';
import Home from './views/Home';
import { Pizza } from './views/Pizza';
import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MyContext from './MyContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar';

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [carro, setCarro] = useState([]);
  const endpoint = '/pizzas.json';

  const getYourPizza = async() => {
    const res = await fetch(endpoint);
    let data = await res.json();
    setPizzas(data); 
  };
  useEffect(() => {
    getYourPizza();
  }, [carro]);

  const agregar = (id) => {
    const filtrarPizza = pizzas.filter((item) => item.id === id);
    setCarro((chosenProducts) => {
      if (chosenProducts.find((item) => item.id === id) == null) {
        return [...chosenProducts, { id, quantity: 1 }];
      } else {
        return chosenProducts.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const totalPizzas = (carro) => {
    return carro.reduce((total, elecarrito) => {
      const ele = yourOrder(elecarrito.id)
      return total + ele.price * elecarrito.quantity
    }, 0)
  }

  const yourOrder = (id) => pizzas.find( product => product.id === id);

  return (
    <div className="App">
      <MyContext.Provider value={{pizzas, setPizzas, carro, setCarro, totalPizzas, yourOrder, agregar}}>
      <BrowserRouter>
      <Navigation/>
       <Routes>
        <Route path='/' element={<Home/>} index/>
        <Route path='/pizza/:id' element={<Pizza/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
       </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
