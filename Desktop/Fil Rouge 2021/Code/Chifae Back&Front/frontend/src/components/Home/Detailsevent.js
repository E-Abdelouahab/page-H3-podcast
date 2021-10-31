import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../parts/NavBar';
import Footer from '../parts/Footer';
import StripeCheckout from "react-stripe-checkout";
import toastr from 'toastr';
import "toastr/build/toastr.css";


const Detailsevent=()=> {

    const history = useHistory();
    const [event, setevent] = useState("");
    const idevent=localStorage.getItem('idevent');


  
  // get all admin and show it in table
  
  useEffect(()=>{  
    axios.get(`http://localhost:3030/assSec/geteventById/${idevent}`)
      .then(function (response) {        
        setevent(response.data)
        console.log(event);
      
      }).catch(function (err) {
        console.log(err);
    });    
},[idevent])


// -------------------Parite Exchange currency-------------------

    const [ToCurrency, setToCurrency] = useState('MAD');

    let currency = ToCurrency && ToCurrency;

    const [exchangeRate, setExchangeRate] = useState();

    useEffect(async()=>{
      fetch('http://data.fixer.io/api/latest?access_key=afe4bd8abcfd1a927150d247ad43ac84')
      .then(currencyRes => currencyRes.json())
      .then(data => {   
        setExchangeRate(data.rates[currency]);        
        console.log(data.rates[currency]);        
      });
    
      axios.get(`http://localhost:3030/assSec/geteventById/${idevent}`)
      .then(function (response) {        
        setevent(response.data)
        console.log(event);
      
      }).catch(function (err) {
        console.log(err);
    });   
  },[currency])
// ------------------- End Parite Exchange currency-------------------


    function handleToken(token) {
      axios.post(`http://localhost:3030/Checkout/checkout`,{token,event})
      .then(function (response) {
        const { status } = response.data;
        console.log("Response:", response.data);

        if (status === "success") {
          toastr.success('Success! Check email for details', {
            positionClass: "toast-top-left",
        })
        } else {   
          toastr.warning('Something went wrong', {
            positionClass: "toast-top-left",
        })
        }
      }).catch(function (err) {
        console.log(err);
    });
  }
  return (
      
        <section className="text-gray-600 body-font">
          <NavBar/>
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-1/6 md:w-4/6  mb-10 object-cover object-center rounded" alt="hero" src={event && event.productImg} />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{event && event.titel}</h1>
      <h3 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">{event && event.category}</h3>
 
      <p className="mb-8 leading-relaxed w-30">{event && event.description}</p>
      <div className="flex items-center pb-5 border-b-2 border-gray-100 mb-5">
      <div className="custom-number-input h-10 w-92">


          </div>
          <span className="ml-9 title-font  text-2xl text-red-900">Choose the currency </span>
          <select onChange={(e)=>setToCurrency(e.target.value)} className="pl-3 inline-block no-underline  hover:text-black" name="" id="">
                        <option  value='MAD'>MAD</option>
                        <option  value='EUR'>EUR</option>
                        <option  value='USD'>USD</option>
          </select>
          </div>
           
      <div className="flex justify-center">
         

      <span className="title-font font-medium text-2xl text-gray-900">{event && (event.price * exchangeRate).toFixed(0) } {currency}</span>
   
        <StripeCheckout className="flex ml-auto text-white  bg-blue-500 hover:bg-blue-700 border-0 py-2 px-6 focus:outline-none  rounded"
                        stripeKey="pk_test_51J0kMzKIrXdj2BmpeL7MHpLBntsM0tEBoiSsw6YV6a0q0knI9LiurwfVRIHdMHqmi9BcA5QEGb1BZ5sdbH7yOXZC00CwUz6cTs"
                        titel={event && event.titel}
                        token={handleToken}
                        billingAddress
                        intiativeAddress
                        amount={event && event.price * 100}
                    />
                    
      </div>
    </div>
  </div>
  <Footer/>
</section>

    
    )
}
export default  Detailsevent