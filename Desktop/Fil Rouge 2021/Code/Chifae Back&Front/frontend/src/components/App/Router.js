import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PrivateRoute from '../auth/PrivateRoute';

import PrivateRouteCustomer from '../auth/PrivateRouteClient';

// import Components SuperAdmin
import LoginSuperAdmin from '../SuperAdmin/login'
import DashboardSuperAdmin from '../SuperAdmin/Dashbord'
import ConfirmassSec from '../SuperAdmin/ConfirmassSec'
import Adddoctor from '../SuperAdmin/AddDoctor'
import doctor from '../SuperAdmin/doctor'
import assSec from '../SuperAdmin/assSec'
import Editdoctor from '../SuperAdmin/Editdoctor'
// import Components Admin
import Logindoctor from '../doctor/Logindoctor'
import DashboardDoctor from '../doctor/DashboardDoctor'
import Listintiative from '../doctor/intiativeList';
import delegation from '../doctor/delegation';
import Adddelegation from '../doctor/Adddelegation';
import EditDelegation from '../doctor/Editdelegation';

// import Components Seller
import DashbordassSec from '../assSec/DashboardassSec';
import Addevent from '../assSec/Addevent';
import Listevent from '../assSec/Listevent';
import LoginassSec from '../assSec/LoginassSec';
import SignIn from '../assSec/Sign_in';
import pubAccount from '../assSec/pubAccount';
// import Components Home & Products
import Home from '../Home/Home'
import Compte from '../Home/Compte'
import ChoiceLogin from '../Home/ChoiceLogin'
import Detailsevent from '../Home/Detailsevent'
import Editevent from '../assSec/Editevent';
// import Components Customer
import SignInVol from '../volontaire/SignInVol'
import LoginVol from '../volontaire/LoginVol'
import ValidateAccount from '../volontaire/ValidateAccount'
import AcceuilVol from '../volontaire/AcceuilVol'
import SearcheventByCategory from '../Home/SearcheventByCategory';







function Routes () { 
    return (
        <BrowserRouter>
        <Switch>

     {/* Routes SuperAdmin  */}

            <Route path="/login" exact component={LoginSuperAdmin} />
            <PrivateRoute  path="/superAdmin" exact component={DashboardSuperAdmin} />
            <PrivateRoute  path="/confirmassSec" exact component={ConfirmassSec} />
            <PrivateRoute  path="/doctor" exact component={doctor} />
            <PrivateRoute  path="/adddoctor" exact component={Adddoctor} />
            <PrivateRoute  path="/editdoctor" exact component={Editdoctor} />
            <PrivateRoute  path="/assSec" exact component={assSec} />

     {/* Routes Doctor  */}

            <Route path="/logindoctor" exact component={Logindoctor} />
            <PrivateRoute  path="/doctorDashboard" exact component={DashboardDoctor} />
            <PrivateRoute  path="/listintiative" exact component={Listintiative} />
            <PrivateRoute  path="/delegation" exact component={delegation} />
            <PrivateRoute  path="/adddelegation" exact component={Adddelegation} />
            <PrivateRoute  path="/editDelegation" exact component={EditDelegation} />


     {/* Routes AssSec  */}

            <Route path="/signIn" exact component={SignIn} />
            <Route path="/loginassSec" exact component={LoginassSec} />            
            <PrivateRoute  path="/DashbordassSec" exact component={DashbordassSec} />
            <PrivateRoute  path="/addevent" exact component={Addevent} />
            <PrivateRoute  path="/listevent" exact component={Listevent} />
            <PrivateRoute  path="/Editevent" exact component={Editevent}/>
            <PrivateRoute  path="/pubAccount" exact component={pubAccount}/>

    {/* Routes Home & Events  */} 

            <Route path="/" exact component={Home} />
            <Route path="/eventByCategory/:category" exact component={SearcheventByCategory} />
            <Route path="/compte" exact component={Compte} />
            <Route path="/choiceLogin" exact component={ChoiceLogin} />           
            <PrivateRouteCustomer  path="/detailsProduct" exact component={Detailsevent} />

    {/* Routes Volontaire  */}

            <Route path="/SignInVol" exact component={SignInVol} />
            <Route path="/LoginVol" exact component={LoginVol} />            
            <Route path="/Customer/activateCompte/:token" exact component={ValidateAccount} /> 
            <PrivateRouteCustomer path="/acceuil" exact component={AcceuilVol} />   

        </Switch>
        </BrowserRouter>
    );
 }

 export default Routes;