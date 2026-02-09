
import ItemList from "./ItemList";

const Content = ({items, handleChange, handleDelete}) => {
 

  return (
    <>
      {(items.length) ? (
        <ItemList items={items} 
        handleChange={handleChange}
        handleDelete={handleDelete} 
       />) : (<p> No items </p>)}
      
    </>
  )
}

export default Content