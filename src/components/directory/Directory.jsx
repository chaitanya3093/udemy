
import React, { Component } from 'react'
import MenuItem from '../menu-item/MenuItem'
import "./Directory.styles.scss"

export class Directory extends Component {
 constructor(props) {
  super(props)
 
  this.state = {
    sections: [
     {
      title: 'hats',
      imageUrl:'https:/i.ibb.co/cvpnL1/hats.png',
      id:1,
      linkUrl:'hats'
     },
     {
      title: 'jackets',
      imageUrl:'https:/i.ibb.co/px2tCc3/jackets.png',
      id:2,
      linkUrl:'jackets'
     },
     {
      title: 'sneakers',
      imageUrl:'https:/i.ibb.co/0jqHpnp/sneakers.png',
      id:3,
      linkUrl:'sneakers'
     },
     {
      title: 'womens',
      imageUrl:'https:/i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id:4,
      linkUrl:'womens'
     },
     {
      title: 'mens',
      imageUrl:'https:/i.ibb.co/R70vBrQ/mens.png',
      size: 'large',
      id:5,
      linkUrl:'mens'
     }
    ]
  }
 }
 
 render() {
  return (
   <div className="directory-menu">
    {
     this.state.sections.map(({id, ...allSectionProps}) => (
      <MenuItem key={id} {...allSectionProps}/>
     ))
    } 
   </div>  
  )
 }
}

export default Directory
