import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';

const EditDelegation=()=> {


  const history = useHistory();

  const [Ville, setVille] = useState("");
  const [delegName, setDelegName] = useState("");
  const [telephone, setTelephone] = useState("");

  const id_Delegation=localStorage.getItem('iddelegation');
  let iddelegation;


// ---------------------get Delegation to update-----------------------------
useEffect(()=>{

  axios.get(`http://localhost:3030/doctor/getdelegationById/${id_Delegation}`)
  .then(function (response) {
   
    setVille(response.data.Ville)
    setDelegName(response.data.delegName)
    setTelephone(response.data.telephone)



  
  }).catch(function (err) {
    console.log(err);
});

},[])
// -----------------------update delegation---------------------------
const handleSubmit = (e) => {
  e.preventDefault();
var id = iddelegation.value;

const data = {Ville:id,delegName,telephone};

axios.put(`http://localhost:3030/doctor/updatedelegation/${id_Delegation}`,data)
.then(res => {
  if(res.error){
    return false
  }else{
    console.log(res.data);
    history.push('/delegation')
  }
 
})

}

    return (
        <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gradient-to-r from-green-400 to-blue-500 ">
          <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
      <div className="card bg-green-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <label htmlFor className="block text-sm text-gray-700 text-center font-bold">
         Edit Delegation
              </label>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded"  onSubmit={handleSubmit}>

        <div className="mt-7">
            <input type="text" placeholder="Full name" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  required 
            value={delegName}
            onChange={e => setDelegName(e.target.value)}/>
          </div>
          <div className="mt-7">
            <input type="text" placeholder="Telephone" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  required 
            value={telephone}
            onChange={e => setTelephone(e.target.value)}/>
          </div>
        <div className="mb-7">
            <label className="block mb-7 text-sm font-bold text-gray-700"></label>
            <select className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            ref={(e) => iddelegation = e} >
              <option value="Standard" key="Standard">Standard</option>
              <option value="Expert"key="Expert">Expert</option>
            </select>
          
        </div>

        <div className="mb-6 text-center">
          <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit"> Edit DeliveryMan </button>
        </div>     
      </form>
      </div>
    </div>
  </div>
</div>
)
}
export default EditDelegation