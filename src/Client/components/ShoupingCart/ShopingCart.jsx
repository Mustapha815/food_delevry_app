import  {  useState } from "react";
import "./ShopingCart.css"; 
import { useDispatch, useSelector } from "react-redux";
import { addorder, addTo_Cart, DicreaseQuantity, shoping_cart } from "../../actions/action";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { v4 as uuidv4 } from "uuid"; 

const ShopingCart = () => {
  const [checkoutClicked,setcheckoutClicked]=useState(false)
  const [name,setname]=useState('')
  const [phonenumber,setphonenumber]=useState('')
  const [street,setstreet]=useState('')
  const [housenumber,sethousenumber]=useState('')
  const [error,seterror]=useState({})
  const navigation=useNavigate()



  const dispatch=useDispatch()
  const cartItems=useSelector(state=>state.client.cartItems)
  const cartAmount=useSelector(state=>state.client.cartAmount)

  const IncreaseProdectQauntity=(prodect)=>{
        dispatch(addTo_Cart(prodect))}

  const productTotalPricePerItem= cartItems.map(item => item.price * item.Quantity);  
  const totalDebut=productTotalPricePerItem.reduce((total,item)=>total+item ,0)
  const  DicreaseProdectQauntity=(id,item)=>{
          dispatch(DicreaseQuantity(id,item))

  }
  //  const ClearLocalStorge=()=>{
  //   dispatch(shoping_cart())
    
  //  }
   const handelCheckoutclick=()=>{
          setcheckoutClicked(true)
   }
   const handelbackclick=()=>{
    setcheckoutClicked(false)
} 
     const HandelSubmit=(event)=>{
        event.preventDefault()

        let errors={};
        if(!name.trim()) errors.name="الاسم مطلوب!";
        if(!phonenumber.trim()) errors.phonenumber="رقم الهاتف مطلوب!";
        if(!street.trim()) errors.street= "اسم الشارع مطلوب!";
          
        seterror(errors)
        if (Object.keys(errors).length==0) {
          const Myorder={
                id:uuidv4(),
                name:name,
                phonenumber:phonenumber,
                street:street,
                housenumber:housenumber,
                items:cartItems
          }
          dispatch(addorder(Myorder))
          navigation('/orderSuccess')
          localStorage.removeItem('cartItems');
          localStorage.removeItem('cartAmount');
          dispatch(shoping_cart());          
          
        }

     }


  return (
    <div className="container">
    {
      cartItems.length==0 ?(
       <div className="EmptyCart">
        <img src={"https://static.vecteezy.com/system/resources/previews/005/006/007/non_2x/no-item-in-the-shopping-cart-click-to-go-shopping-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"}
         alt="" srcSet="" />
        <h5>الحقيبة فارغة</h5>
        <Link to='/menu'><button >go back shopping</button></Link>

       </div>
      ):(
        <div className="shopping-cart">
      <div className="cart-items">
        <div className="cart-header">
          <h1>السلة</h1>
        </div>
        {cartItems.map((item,index)=>
             <div className="cart-item" key={index}>
            <div className="item-info">
           <img src={item.image} alt="img"/>
            <h6>{item.name}</h6>
          </div>
          <div className="itemprix">
          <p><bdi>درهم</bdi> {productTotalPricePerItem[index]} </p>
          </div>
          <div className="quantity-control">           
            <button onClick={()=>DicreaseProdectQauntity(item._id,item)} >-</button>
            <strong>{item.Quantity}</strong>
            <button onClick={()=>IncreaseProdectQauntity(item)}>+</button>
          </div>
          </div>
  
          )
        }
          </div>
        
  
      <div className="summary">
        { checkoutClicked?
        
        <span style={{direction:'ltr'}} onClick={()=>handelbackclick()} > <MdArrowBackIos size={'30px'}  /><u style={{fontSize:'20px',cursor:'pointer'}}>عودة</u></span>
        : null
        }
          {
            checkoutClicked 
            ?
            (<form onSubmit={HandelSubmit} >
            < div style={{display:'flex',flexDirection:'column',gap:'3px'}}>
            <div className="clientinfomation">
            <span ><h4 style={{display:'flex',width:'100%',fontSize:'20px'}}>الاسم والهاتف للتوصيل  
            <i style={{color:'red'}}>*</i></h4><u><Link to={'/login'}>تسجيل الدخول</Link></u></span>

          <input type="text" name="name" id="" placeholder="أكتب إسمك الكامل" onChange={(e)=>setname(e.target.value)} />
          {error.name && <p style={{ color: "red" }}>{error.name}</p>}
          <input type="text" name="phonenumber" id="" placeholder="أكتب رقم هاتفك" onChange={(e)=>setphonenumber(e.target.value)}  />
          {error.phonenumber && <p style={{ color: "red" }}>{error.phonenumber}</p>}

          </div>
          <div className="clientlocation">
          <span style={{display:'flex',fontSize:'20px'}} ><h4>عنوان التسليم<span style={{color:'red'}}>*</span></h4></span>
          <input type="text" name="street" id="" placeholder="الشارع" onChange={(e)=>setstreet(e.target.value)}  />
          {error.street && <p style={{ color: "red" }}>{error.street}</p>}
          <input type="text" name="housenumber" id="" placeholder="رقم المنزل (اختياري)" onChange={(e)=>sethousenumber(e.target.value)}  /> 
          </div>

            </div>
                     <button type="submit" className="orderplaced" >شراء</button>

            </form>
           
          )
            :
          ( <>
          <div className="summaryInfo">
          <div className="summaryHeader" >
          <h3>تفاصيل السلة</h3>
             <p> {cartAmount}  عناصر </p>
   
          </div>
           <div className='promo-code'>
             <label htmlFor="codepromo"> كود خصم</label>
            <div className='input-promo-code'>
            <input  name="codepromo" type="text" placeholder="هل لديك كود خصم ؟"/>
            <button className="applybutton">تفعيل</button>
            </div>
           </div>
           <div className="priceDetail">
             <div> 
           <p >المجموع الفرعي</p>
           <p >{totalDebut} <bdi>درهم</bdi></p>
           
           </div>
           <hr />
             <div>
           <p>الخصم</p>
           <p>0.00 <bdi>درهم</bdi></p>
           </div>
           <hr />
             <div>
             <p className="total-price">الإجمالي</p>
             <p className="total-price">{totalDebut+9} <bdi>درهم</bdi> </p></div>
           </div>
          </div>
                  <button onClick={()=>handelCheckoutclick()} >التالي</button>

          </>
          
          
        )

          }
      </div>
    </div>
      )
    }
  </div>
  )
};


export default ShopingCart
{/* <div className="container">
  <div className="shopping-cart">
    <div className="cart-items">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <h6>3 items</h6>
      </div>
     
      {cart_data.map((item,index)=>
  
  <div className="cart-item" key={index}>
          <img src={item.image} alt="Cotton T-shirt"/>
          <div className="item-info">
          <h6>{item.name}</h6>
          <p>{item.category}</p>
        </div>
        <div className="quantity-control">
          <button >-</button>
          <input id="qty1" type="number" value="1" min="0"/>
          <button >+</button>
        </div>
        <p>{item.price}</p>
        </div>

        )
      }
        </div>
      

    <div className="summary">
      <h3>Summary</h3>
      <div>
        <p>Items (3)</p>
        <p>€ 132.00</p>
      </div>
      <div>
        <p>Shipping</p>
        <select>
          <option value="1">Standard-Delivery - €5.00</option>
          <option value="2">Express-Delivery - €10.00</option>
          <option value="3">Free-Delivery</option>
        </select>
      </div>
      <div>
        <p>Promo Code</p>
        <input type="text" placeholder="Enter your code"/>
      </div>
      <div>
        <p>Total Price</p>
        <p>€ 137.00</p>
      </div>
      <button>Proceed to Checkout</button>
    </div>
  </div>
</div> */}