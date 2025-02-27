import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdispaly'>
        <div className="productdispaly_left">
            <div className="productdispaly_img_list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay_img">
                <img className='productdispaly_main_img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdispaly_right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className='productdispaly-right-price-old'>${product.old_price}</div>
                <div className='productdispaly-right-price-new'>${product.new_price}</div>
            </div>
            <div className="productdispaly-right-description">
                A lightweight usally knitted, pullover shirt, close-fitting and a round neckine and short sleeves , worn as an undershirt 
            </div>
            <div className="productdispaly-right-size">
                <h1>Select Size</h1>
                <div className="productdispaly-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>

                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdispaly-right-category'><span>Category :</span>Women, T-shirt, Crop Top</p>
            <p className='productdispaly-right-category'><span>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay