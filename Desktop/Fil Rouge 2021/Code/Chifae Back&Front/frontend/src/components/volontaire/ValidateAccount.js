import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";

const ValidateAccount = () => {

    const history = useHistory();

    const {token} = useParams();

    useEffect(()=>{

        axios.put(`http://localhost:3030/vol/activateComptevol/${token}`)
		.then(res => {

          history.push('/loginvol');
          toastr.info('Your Account Activated!')

        }).catch(function (err) {
          console.log(err);
      });

      },[history,token])

    return ( 
        <div>
        </div>
     );
}
 
export default ValidateAccount;