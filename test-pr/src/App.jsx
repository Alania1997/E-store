import "./index.css"
import { productData } from "./productData";

function App(){
  return <>
    <Header/>
    <Catalog/>
    <Footer/>
  </>;

}

function Header() {

  const now =  new Date;
  const hours = now.getHours();

  const open = 8;
  const close = 20;  
  const isOpen = hours >= open && hours < close;
  return <header className ="header">
    <h1>Магазин Электорники</h1>
    <>
  {isOpen ? 'Магазин открыт' : 'Магазин закрыт'}
</>
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

function Product({ productObj }){
  return (
    <li className={`product ${productObj.soldOut ? 'sold-out' : ''}`}>
      <img src={productObj.photoName} alt={productObj.name}/>
      <div>
        <h3>{productObj.name}</h3>
        <p>{productObj.description}</p>
        <strong>{productObj.price}$</strong>
        {productObj.soldOut && <p className="sold-out-text">Sold Out</p>}
      </div>
    </li>
  );
}

function Footer(){
  return <footer className="footer">
    <p>All right is saved</p>
  </footer>
}

export default App;