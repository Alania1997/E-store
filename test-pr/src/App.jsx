import "./index.css"
import { productData } from "./productData";

function App(){
  return <div>
    <Header/>
    <Product/>
    <Footer/>
  </div>;

}

function Header() {

  const now =  new Date;
  const hours = now.getHours();

  const open = 8;
  const close = 20;  
  const isOpen = hours >= open && hours < close;
  return <header className ="header">
    <h1>Магазин Электорники</h1>
    <div>
  {isOpen ? 'Магазин открыт' : 'Магазин закрыт'}
</div>
    <p className="currentTime">Текущее время: {now.toLocaleTimeString()}</p>
    <nav className="navigatoin">
      <ul>
      <li>Home<a href="#home"></a></li>
      <li>Catalog<a href="#catalog"></a></li>
      <li>About<a href="#about"></a></li>
      </ul>
    </nav>
    <p className="timeOfWork">Время работы: {open}:00 - {close}:00</p>
    </header>
}

function Product(){
const products = [...productData];  
  return <li className="product">
    <img src={products[0].photoName} alt={products[0].name}/>
    <div>
      <h3>{products[0].name}</h3>
      <p>{products[0].description}</p>
      <strong>{products[0].price}$</strong>
    </div>

  </li>;
}

function Footer(){
  return <footer className="footer">
    <p>All right is saved</p>
  </footer>
}

export default App;