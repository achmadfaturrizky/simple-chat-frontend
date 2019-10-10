import React,{Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../../auth/screens/Login';
import Register from '../../auth/screens/Register';
import Home from '../../home/screens/Home';

class Router extends Component {
  
  render() {
    const { isLogin } = this.props.auth

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={isLogin?(Home):(Login)} />
          <Route exact path='/register' render={()=>(isLogin?(<Redirect to='/'/>):(<Register/>))} />
        </Switch>
      </BrowserRouter> 
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Router);