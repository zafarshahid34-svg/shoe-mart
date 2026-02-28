import React, { useState } from "react";
import "./App.css";

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const products = [
  {
    name: "Brown Formal Shoe",
    category: "formal",
    price: "₹1999",
    images: [
      "/Images/formal/formal1.jpg",
    ]
  },

    {
    name: "Brown Leather Formal Shoe",
    category: "formal",
    price: "₹1900",
    images: [
      "/Images/formal/formal2.jpg",
    ]
  },

  {
    name: "Brown Leather Formal",
    category: "formal",
    price: "₹2199",
    images: [
      "/Images/formal/formal3.jpg"
    ]
  },

  {
    name: "White Sneakers",
    category: "sneakers",
    price: "₹1499",
    images: [
      "/Images/casual/casual1.jpg",
      "/Images/casual/casual2.jpg",
      "/Images/casual/casual3.jpg"
    ]
  },

  {
    name: "Street Style Sneakers",
    category: "sneakers",
    price: "₹1699",
    images: [
      "/Images/casual/casual1.jpg",
      "/Images/casual/casual2.jpg",
      "/Images/casual/casual3.jpg"
    ]
  },

  {
    name: "Running Shoes",
    category: "sports",
    price: "₹1599",
    images: [
      "/Images/sports/sport1.jpg.jpeg",
      "/Images/sports/sport2.jpg.jpeg",
      "/Images/sports/sport3.jpg"
    ]
  },

  {
    name: "Training Shoes",
    category: "sports",
    price: "₹1799",
    images: [
      "/Images/sports/sport1.jpg.jpeg",
      "/Images/sports/sport2.jpg.jpeg",
      "/Images/sports/sport3.jpg"
    ]
  }
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
<div className="image-gallery">
  {product.images.map((img, i) => (
  <img
    key={i}
    src={img}
    alt={product.name}
    className="product-image"
  />
))}

</div>


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