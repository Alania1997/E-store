import "./index.css"
import { productData } from "./productData";

function App(){
  return <div>
    <Header/>
    <Catalog/>
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
      <li>Contact<a href="#contact"></a></li>
      </ul>
    </nav>
    <p className="timeOfWork">Время работы: {open}:00 - {close}:00</p>
    </header>
}

function Catalog(){
  return (
    <main className="catalog">
      <ul className="products">
        {productData.map((product) => (
          <Product productObj={product}/>
        ))}
      </ul>
    </main>
  );
}

function Product(props){
  console.log(props);
  return <li className="product">
    <img src={props.productObj.photoName} alt={props.productObj.name}/>
    <div>
      <h3>{props.productObj.name}</h3>
      <p>{props.productObj.description}</p>
      <strong>{props.productObj.price}$</strong>
      {props.productObj.soldOut && <p style={{ color: 'red' }}>Sold Out</p>}
    </div>
  </li>;
}

function Footer(){
  return <footer className="footer">
    <p>All right is saved</p>
  </footer>
}

export default App;