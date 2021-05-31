
import './App.css';
import DefaultLayout from './components/Layout/DefaultLayout'
import Home from './components/Home'
import Markets from './components/Markets'
import Mylocation from './components/Mylocation'
import ProductServices from './components/ProductServices'
import Registration from './components/Registration'
import Login from './components/Login'
import ResetPassword from './components/Resetpassword'
import ConfirmEmailMessage from './components/ConfirmEmailMessage'
import AdminDefaultLayout from './components/AdminLayout/AdminDefaultLayout'
import Contracts from './components/AdminLayout/Components/Contracts'
import CreateContract from './components/AdminLayout/Components/CreateContract'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useState }from 'react'

function App() {
  const [admin, setadmin] = useState(true)
  return (
    <div className="app">
      <Router>
        <Switch>
          <DefaultLayout>
            { admin &&   <AdminDefaultLayout>
              <Route exact path="/Bunge/Contracts"><Contracts></Contracts></Route>
              <Route exact path="/Bunge/CreateContract"><CreateContract></CreateContract></Route>
            
              </AdminDefaultLayout>}

            {/* <Router basename={'/Bunge'}> */}
              <Route exact path="/Bunge"><Home></Home></Route>
            {/* </Router> */}
            <Route exact path="/Bunge/markets"><Markets></Markets></Route>
            <Route exact path="/Bunge/mylocation"><Mylocation></Mylocation></Route>
            <Route exact path="/Bunge/productservices"><ProductServices></ProductServices></Route>
            <Route exact path="/Bunge/registration"><Registration></Registration></Route>
            <Route exact path="/Bunge/login"><Login></Login></Route>
            <Route exact path="/Bunge/reset_password"><ResetPassword></ResetPassword></Route>
            <Route exact path="/Bunge/confirm_email_message"><ConfirmEmailMessage></ConfirmEmailMessage></Route>
          </DefaultLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
