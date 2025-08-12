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
        <Product 
        name="Laptop Pro"
        img="/laptop.png"
        price="1200"
        description="High-performance laptop for professionals."
        soldOut = {false}
        />
        <Product 
        name="Smartphone X"
        img="/smartphone.png"
        price="800"
        description="Latest model with stunning display."
        soldOut = {true}
        />
        <Product 
        name="Wireless Headphones"
        img="/headphones.png"
        price="200"
        description="Noise-cancelling headphones with great sound quality."
        soldOut = {false}
        />
        <Product 
        name="Smartwatch Z"
        img="/smartwatch.png"
        price="150"
        description="Stylish smartwatch with fitness tracking features."
        soldOut = {false}
        />
        <Product 
        name="Gaming Console"
        img="/console.png"
        price="400"
        description="Powerful gaming console for endless fun."
        soldOut = {true}
        />
        <Product 
        name="4K TV"
        img="/tv.png"
        price= {1000 + 250}
        description="Ultra HD television with vibrant colors."
        soldOut = {true}
        />
      </ul>
    </main>
  );
}

function Product(props){
  return <li className="product">
    <img src={props.img} alt={props.name}/>
    <div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <strong>{props.price}$</strong>
      {props.soldOut && <p style={{ color: 'red' }}>Sold Out</p>}
    </div>
  </li>;
}

function Footer(){
  return <footer className="footer">
    <p>All right is saved</p>
  </footer>
}

export default App;