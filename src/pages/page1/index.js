import React from 'react'
import {Link} from 'react-router-dom'
import {Subscribe} from 'unstated'
import Page1Container from './store'
import Component from '@reactions/component'


const Page1 = () => (<Subscribe to={[Page1Container]} children={store => {

  return (<Component didMount={store.fetch}>
    <Link to='/page2'>Page2</Link>
    <ul>
      {store.state.dataSource.map(({id, name, age}) => (<li key={id}>{name}</li>))}
    </ul>
  </Component>)
}} />)

export default Page1
