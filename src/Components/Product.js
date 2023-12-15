import "./ProductStyle.css"
import ProductData from "./ProductData"
import product1 from "./image/card2.png"
import product2 from "./image/card3.png"
import product3 from "./image/card4.png"




function Product() {
  return (
    <div className="product">
      <h1>USER FRIENDLEY PRODUCTS</h1>
      <p>Fugiat delectus quo optio nemo voluptatem ullam officiis neque exercitationem tenetur eum corporis quas in esse blanditiis, quasi animi nam eos!
      </p>
      <div className="productcard">
        <ProductData
        image={product1}
        heading ="New Sofa"
        text="Possimus consequatur obcaecati at illum in dolores earum vero ipsum. "
        
        />

<ProductData
        image={product2}
        heading ="Modern Sofa"
        text="Possimus consequatur obcaecati at illum in dolores earum vero ipsum. "
        
        />

<ProductData
        image={product3}
        heading ="Sofa"
        text="Possimus consequatur obcaecati at illum in dolores earum vero ipsum. "
        
        />
      </div>
    </div>
  )
}

export default Product
