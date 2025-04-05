import React, {useState} from "react";

function MyComponent(){
  
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(e){
        setName(e.target.value);
    }
    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }
    function handleCommentChange(e){
        setComment(e.target.value);
    }
    function handlePaymentChange(e){
        setPayment(e.target.value);
    }
    function handleShippingChange(e){
        setShipping(e.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleNameChange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter dilivery instructions"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="American Express">American Express</option>
            </select>
            <p>Payment Method: {payment}</p>

            <label >
                <input type="radio" value="Picku Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
                Picku Up
            </label>
            
            <label >
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}
export default MyComponent