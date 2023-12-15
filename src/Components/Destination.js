import C1 from "./image/c1.png"
import C2 from "./image/c2.png"
import C3 from "./image/c3.png"
import C4 from "./image/sf.png"
import "./DestinatioStyles.css"
import DestinationData from "./DestinationData"


const Destination = () => {
  return (
    <div className="destination">
        <h1>SERVICES WE OFFER</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, saepe possimus quo, quasi animi natus nulla beatae neque soluta pariatur id ducimus eum, sed quis enim minima. 
             </p>
      <DestinationData
      className="first-des"
      heading="CUSTOM MENUS"
      text=" Ipsam vitae adipisci corrupti totam vel consequuntur fugiat. Perferendis fuga doloremque tempora, in eos, voluptates iure, optio qui modi ex ea saepe. Eum perspiciatis, voluptates fugiat nesciunt corrupti minima aliquam repellat, ea quasi natus, recusandae aut nobis modi. Commodi, alias reiciendis reprehenderit hic soluta consectetur corporis accusantium placeat, totam minima nostrum magnam dolorum aut dolore, sapiente ea. Magni est quo ipsam nisi iste. "
      img1={C1}
      img2={C2}

      />

<DestinationData
className="first-des-reverse"
      heading="TREANDLY PRODUCTS"
      text=" Ipsam vitae adipisci corrupti totam vel consequuntur fugiat. Perferendis fuga doloremque tempora, in eos, voluptates iure, optio qui modi ex ea saepe.  "
      img1={C3}
      img2={C4}

      />

    
        
      
    </div>
  )
}

export default Destination
