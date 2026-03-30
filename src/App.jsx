import Counter from "./Counter";
import Filter from "./Filter";
import ShoppingCart from "./ShoppingCart";

function App() {
  return (
    <div className="container">
      <div className="tittle">
        <img src="/src/assets/ghbruzualSinFondo.jpg" alt="logo-ghbruzual" />
        <div>
          <h1>Components React</h1>
          <p>by Ghbruzual - fullstack developer</p>
        </div>
      </div>
      <hr />
      < ShoppingCart />
      <hr />
      <Counter />
      <hr />
      <Filter/>
      <hr />
    </div>
  );
}

export default App;
