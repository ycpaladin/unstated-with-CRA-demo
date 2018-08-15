import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import withAsync from '../components/withAsync'

const Page1 = withAsync(() => import('../pages/page1'))
const Page2 = withAsync(() => import('../pages/page2'))


// export default class Routes extends React.Component {
//   render () {
//     return 
//     ()
//     // return null
//   }
// }

const Routes = () => (
  <Switch>
    <Route exact path='/page1' component={Page1} />
    <Route exact path='/page2' component={Page2} />
    <Redirect to='/page1' />
  </Switch>
)

export default Routes

