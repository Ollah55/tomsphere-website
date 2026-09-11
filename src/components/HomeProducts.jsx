import { Link } from "react-router-dom"
import "../styles/homeProducts.css"

export default function HomeProducts() {
  return (
    <section className="home-products" aria-labelledby="home-products-title">
      <div className="home-products-intro">
        <p className="home-products-label">Products by Tomsphere</p>
        <h2 id="home-products-title">Meet Academora</h2>
        <p>Explore Academora, part of our growing family of digital products.</p>
      </div>
      <div className="home-products-actions">
        <a href="https://academora.tomspheretech.com">Visit Academora <span aria-hidden="true">↗</span></a>
        <Link to="/products">Explore our products →</Link>
      </div>
    </section>
  )
}
