import { Helmet } from "react-helmet"
import "../styles/products.css"

function Products() {
  return (
    <>
      <Helmet>
        <title>Our Products | Tomsphere Globaltech</title>
        <meta name="description" content="Explore products from Tomsphere Globaltech, including Academora. Visit the Academora website to learn more." />
        <link rel="canonical" href="https://www.tomspheretech.com/products" />
      </Helmet>

      <main className="products-page">
        <header className="products-intro">
          <p className="products-eyebrow">Built by Tomsphere Globaltech</p>
          <h1>Our Products</h1>
          <p>Explore the digital products we are building at Tomsphere.</p>
        </header>

        <section className="products-list" aria-label="Tomsphere products">
          <article className="product-card">
            <div className="product-art" aria-hidden="true">
              <span className="product-monogram">A</span>
              <span className="product-wordmark">Academora</span>
            </div>
            <div className="product-details">
              <p className="products-eyebrow">A Tomsphere product</p>
              <h2>Academora</h2>
              <p>Discover Academora, part of the Tomsphere Globaltech product family. Visit its dedicated website to explore the product and learn more.</p>
              <a className="product-visit" href="https://academora.tomspheretech.com">
                Visit Academora <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default Products
