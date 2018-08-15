import React from 'react'
import {Link} from 'react-router-dom'
import {Subscribe} from 'unstated'
import Page2Container from './store'
import Component from '@reactions/component'


const Page2 = () => (<Subscribe to={[Page2Container]} children={store => {

  return (<Component didMount={store.fetch}>
    <Link to='/page1'>Page1</Link>
    <ul>
      {store.state.dataSource.map(({id, name, age}) => (<li key={id}>{name}</li>))}
    </ul>
  </Component>)
}} />)

export default Page2
