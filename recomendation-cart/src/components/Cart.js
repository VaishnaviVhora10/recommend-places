  import React from 'react';
import styled from "styled-components";

function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.cost, 0) ;
  const taxPrice = itemsPrice * 0.14;
  console.log(taxPrice);
  
  const totalPrice = itemsPrice ;
  return (
    <Section id="maincartcontainer">
      <div className='cartcontainer'>
   <div className='cart'>
    <h1>Cart Items</h1>
    <div>{cartItems.length === 0 && <div> <h4>Your Cart is Empty</h4></div>}</div>
   <div >
    {cartItems.map((item) => (
        <div key={item.id}>
            <div>{item.title}</div>
            {/* <div className='btn'>
                <button onClick={()=>onAdd(item)}> + </button>
                <button onClick={()=>onRemove(item)}> - </button>
            </div> */}
           <div> {item.qty} x ${item.cost}</div>      
              </div>
    ))}

{cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div >
           <div> Package</div> 
              <div >${itemsPrice}</div>
            </div>
               <div >
              <div >
                <strong>Total Cost</strong>
              </div>
              <div >
              <strong>${totalPrice}</strong>
              </div>
            </div>
            <hr />
            <div >
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
    </div>
    </div>
    </div>
    </Section>
  )
}

const Section = styled.section`
.cartcontainer{
    display: grid;
    
    gap: 3rem;
    padding: 0 3rem;
    
    .cart {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        background-color: #8338ec14;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        width: 50%;
        margin-left: 19rem;
        font-weight:bold;
        &:hover {
          transform: translateX(0.4rem) translateY(-1rem);
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
.btn{
    width:500px;
    display:flex;
    flex-direction: row;
    padding-left:330px;
    border-radius:10px;

    button{
        border-radius:5px;
        margin-bottom:10px; 
    }
}

    }

`;

export default Cart;