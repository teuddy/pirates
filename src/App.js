import Layout from '../src/components/layout/index'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index'
import axios from "axios";
import setAuthToken from "./security/index"

import AddPirate from './pages/AddPirate'
import DashPage from './pages/DashPage'
import PrivateRoute from '../src/components/PrivateRoute'
import PirateProfile from './pages/PirateProfile'

//darle el token a axios si existe
axios.defaults.baseURL = "http://34.230.80.55:3000/";

const token = localStorage.getItem("token");
if (token) {
  setAuthToken(token);
}

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Layout>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <PrivateRoute path="/dashboard" component={DashPage} />
                <PrivateRoute path="/add-pirate" component={AddPirate} />
                <PrivateRoute path="/pirate/:id" component={PirateProfile} />
              </Switch>
          </Layout>
      </Router>
     </Provider>
  );
}


export default App;
