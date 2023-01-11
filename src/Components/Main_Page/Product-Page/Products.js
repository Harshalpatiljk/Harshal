
import ProductItems from './ProductItems.js';
import { Data } from "../../../SmartphoneData";



function Products() {
 
  return (
    <div>
      
      <h3>Top Smartphones</h3>
      {Data.map((item)=>{
        return(
          <ProductItems image={item.image}
          name={item.name}
          price={item.price}
          description={item.description} />
          )
      })}
      {/* <ProductItems image={Data[0].image}
        name={Data[0].name}
        price={Data[0].price}
        description={Data[0].description} />

      <ProductItems image={Data[1].image}
        name={Data[1].name}
        price={Data[1].price}
        description={Data[1].description} />

      <ProductItems image={Data[2].image}
        name={Data[2].name}
        price={Data[2].price}
        description={Data[2].description} />

      <ProductItems image={Data[3].image}
        name={Data[3].name}
        price={Data[3].price}
        description={Data[3].description} />

      <ProductItems image={Data[4].image}
        name={Data[4].name}
        price={Data[4].price}
        description={Data[4].description} /> */}

    </div>
  )
}

export default Products