import React, { useState } from "react";
import "./App.css";

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const products = [
  { name: "Black Formal Shoe", category: "formal", price: "₹1999" },
  { name: "Brown Leather Formal", category: "formal", price: "₹2499" },

  { name: "White Sneakers", category: "sneakers", price: "₹1799" },
  { name: "Street Style Sneakers", category: "sneakers", price: "₹1899" },

  { name: "Running Shoes", category: "sports", price: "₹1599" },
  { name: "Training Shoes", category: "sports", price: "₹1699" }
];
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Shoe Mart</h2>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Step Into Style</h1>
        <p>Premium men's shoes — Formal, Sneakers & Everyday Comfort.</p>
        <button
  onClick={() => {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  }}
>
  Shop Now
</button>
      </section>

      {/* ABOUT */}
      <section>
        <h2>About Shoe Mart</h2>
        <p>
          Shoe Mart is your trusted destination for premium men's footwear.
          Visit our physical store or shop online for the latest sneakers,
          formal shoes, and comfortable everyday styles.
        </p>
      </section>

      {/* PRODUCTS */}
      <section id="products">
  <h2>Our Collection</h2>

       <div className="category-wrapper">

<button className="category-btn" onClick={() => setSelectedCategory("formal")}>
👞 Formal Shoes
</button>

<button className="category-btn" onClick={() => setSelectedCategory("sneakers")}>
👟 Sneakers
</button>

<button className="category-btn" onClick={() => setSelectedCategory("sports")}>
🏃 Sports Shoes
</button>
</div>

{selectedCategory && (
  <div className="product-grid">
    <h3>{selectedCategory.toUpperCase()} COLLECTION</h3>

    {products
      .filter((product) => product.category === selectedCategory)
      .map((product, index) => (
        <div key={index} className="card">

  <img 
    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    alt="shoe"
    className="product-image"
  />

  <h3>{product.name}</h3>
  <p>{product.price}</p>

  <a
    href={`https://wa.me/919625950115?text=Hi I want to order ${product.name} from Shoe Mart`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <button>Order on WhatsApp</button>
  </a>

</div>
      ))}
  </div>
)}
      </section>

      {/* CONTACT */}
      <section>
  <h2>Visit Us</h2>

  <p>Available both in-store and online.</p>

  <h3>Store Address</h3>

<p>
  Dharam Shala Road, Near New Titan Show Room, Sasaram <br/>
  District: Rohtas <br/>
  State: Bihar <br/>
  Pin: 821115 <br/>
  Contact: 9625950115
</p>

  <h3>Instagram</h3>
  <a 
    href="https://instagram.com/YOUR_INSTAGRAM_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
  >
    @sportsshoe_shoemart_sasaram_1
  </a>

</section>

    </div>
  );
}

export default App;