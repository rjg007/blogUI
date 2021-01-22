import React from 'react'
import {Link, Route} from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Posts from './Posts'
import UserInfo from './UserInfo'
import ShowPost from './ShowPost'

const App = (props) => {
  return (
    <div>
      <p> <Link to='/' > Home </Link> | <Link to='/users' > Users </Link> | <Link to='/posts' > Posts </Link> </p>

      <Route path='/' component={Home} exact={true}/>
      <Route path='/users' component={Users} exact={true}/>
      <Route path='/posts' component={Posts} exact={true}/>  
      <Route path='/users/:id' component={UserInfo}/>
      <Route path='/posts/:id' component={ShowPost} />
    </div>
  )
}



export default App;
