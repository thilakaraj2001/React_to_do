
import ItemList from "./ItemList";

const Content = ({items, handleChange, handleDelete}) => {
 

  return (
    <main>
      {(items.length) ? (
        <ItemList items={items} 
        handleChange={handleChange}
        handleDelete={handleDelete} 
       />) : (<p> No items </p>)}
      
    </main>
  )
}

export default Content