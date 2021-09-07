import React,{useEffect} from 'react'
import './PreviewCollection.scss'
import Collection from '../collection-item/Collection'

const PreviewCollection = ({title, items}) => {

 useEffect(() => {
 console.log(title,items);
 
  
 }, [title,items])
 return (
  <div className="collection-preview" >
   <h1 className="title">{title && title.toUpperCase()}</h1>
   <div className='preview'>
      {items && items.filter((item, index) => index < 4).map(({id,...otherItemProps}) => (
       <Collection key={id} {...otherItemProps} />
      ))}
   </div>
  </div> 
 )
}

export default PreviewCollection
