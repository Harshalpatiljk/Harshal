
import { Link } from "react-router-dom";
import "./ProductItems.css";
import {useDispatch} from "react-redux";
import { addCart } from "../../../redux/cartSystem";



const ProductItems = (props) => {
    const dispatch=useDispatch()


    return (
        <>

            <div className='ProductItem'>
                <img className='ProductImage' src={props.image} />
                <h4 style={{ color: "orange" }}>{props.name}</h4>

                <span style={{ color: "white" }} ><h3> Price: {props.price}</h3></span>
                <Link to={"/cart"} ><button onClick={()=>dispatch(addCart(props))}>Add to Cart</button></Link>
                <h5>{props.description}</h5>

            </div>

        </>
    )
}

export default ProductItems