import { useState } from "react";
import data from "./data/products.json";

function ShoppingCart() {
  const [products, setProducts] = useState(
    data.map(p => ( {...p, quantity: 0}))
  );

  function handleQuantity(id, change) {
    const updatedProducts = products.map((product) => {
      if(product.id === id) {
        const newQuantity = Math.max(0, product.quantity + change)
        return {...product, quantity: newQuantity}
      }
      return product
    })
    setProducts(updatedProducts)
  }
  
  
  
  return (
    <div className="shopping">
      <h2>Supermarked Ghbruzual</h2>
      <section className="searchProduct">
        <p>Search: </p>
        <input type="text" />
      </section>
      <section className="products">
        <h2>List of Products</h2>
        <ul className="listOfProducts">
  {products.map((product) => {
    const isActive = product.quantity > 0;
    return (
      <li 
        key={product.id} 
        className={`containerProduct ${isActive ? "activeCard" : ""}`}
      >
        <p>{product.category}</p>
        <div className="infoProduct">
          <img src={product.image_url} alt={product.name} />
          <p>{product.name}</p>
          <p>$ {product.price}</p>
        </div>
        <div className="productAmount">
          <button 
            className="substract" 
            onClick={() => handleQuantity(product.id, -1)}
          >
            -
          </button>
          
          <span className={isActive ? "activeText" : ""}>
            {product.quantity}
          </span>

          <button 
            className="sum" 
            onClick={() => handleQuantity(product.id, 1)}
          >
            +
          </button>
        </div>
      </li>
    );
  })}
</ul>
      </section>
      <section className="shoppingCart">
        <h2>Shopping Cart</h2>
        <ul className="purchase">
          {
            products
            .filter(p => p.quantity > 0).length === 0 ? 
            (
              <p className="emptyMessage">No products</p>
            ) : (
              products.filter(p => p.quantity > 0)
              .map(p => (
                <li key={p.id} className="productTotal">
                  <span>{p.name} ($ {p.price} x {p.quantity})</span>
                  <span>{`${(p.price * p.quantity).toFixed(2)}`}</span>
                </li>
                )
              )
            )
          }
        </ul>
        <div className="totalPurchase">
          <p>Total</p>
          <p>
            $ {products.reduce((acc, p) => acc + (p.price * p.quantity), 0).toFixed(2)}
          </p>
        </div>
        <button type="submit">Submit your order</button>
      </section>
    </div>
  );
}

export default ShoppingCart;
