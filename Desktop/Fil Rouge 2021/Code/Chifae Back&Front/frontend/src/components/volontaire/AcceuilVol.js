import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import logo from '../images/logo.png'
import axios from 'axios';

import NavBar from '../parts/NavBar'
import Footer from '../parts/Footer';

const AcceuilVol=()=> {

  const history = useHistory();
  const [event, setEvent] = useState();
  const nameVol=localStorage.getItem('Idvol');
// get all Doctor and show it in table

useEffect(()=>{

  axios.get(`http://localhost:3030/assSec/getAllevent`)
    .then(function (response) {
        
      setEvent(response.data)
    
    }).catch(function (err) {
      console.log(err);
  });
  
  })
  const getIdEvent= (id)=>{
    localStorage.setItem('idEvent',id);
    history.push('/detailsEvent');
  
  }
    

    return (

<section className="text-gray-600 body-font">    
      <NavBar/>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
        { event && event.map(item =>(
           <div className="sm:w-1/5 mb-10 px-4">
               <div className="rounded-lg  overflow-hidden ">
                  <img alt="content" className="object-cover object-center " src={item.productImg} style={{width:160,height:160}} />
               </div>
                  <h2 className="title-font text-1xl font-medium text-gray-900 mt-6 mb-3">{item.titel}</h2>
                  <p className="leading-relaxed text-base text-red">{item.price}DH</p>
                  <Link onClick={()=>getIdEvent(item._id)} className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-green-700 lg:mt-0">More...</Link>
            </div>
        ))}
        </div>
    </div>
    <Footer/>
</section>
  )
}
export default AcceuilVol