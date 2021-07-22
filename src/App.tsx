import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Createpin from './Views/CreatePin/Createpin';
// import 
import { IonApp, IonPage } from '@ionic/react';
import './App.css';

class App extends Component {

  
  render() {
    return (
      <Router>
      <IonApp>
        <IonPage >
          <Switch>
            <Route exact path="/" component={Createpin} />
            {/* <Route exact path={ROUTES.SIGN_IN} component={Signin} /> */}
          </Switch>
        </IonPage>
      </IonApp>
    </Router>
    );
  }
}

export default App;