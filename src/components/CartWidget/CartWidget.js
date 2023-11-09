import cartIcon from "./assets/cartIcon.svg"
import "./cart.css"
const CartWidget = ()=>{
    return(
        <div className="cart">
            <img src={cartIcon} alt="cart-widget"/>
            0

        </div>
    )
}

export default CartWidget