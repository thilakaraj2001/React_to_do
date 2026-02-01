import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import AddItem from "./AddItem";
import { useState } from 'react';
import SearchItems from "./SearchItems";


function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todolist')) || []);

  localStorage.setItem('todolist', JSON.stringify(items));

  const [newItem, setNewItem] = useState('');

  const[search, setSearch] = useState('');

  const handleChange = (id) => {
      const newItems = items.map(item => {
        if (item.id === id) {
          return { ...item, checked: !item.checked }
        }
        else {
          return item;
        } 
      })
      setItems(newItems);
      console.log(newItems);
      localStorage.setItem('todolist', JSON.stringify(newItems));
    }
  
  const handleDelete = (id) => {
      const newItems = items.filter(item => item.id !== id);
      setItems(newItems);
      console.log('Items after delete:', newItems);
      localStorage.setItem('todolist', JSON.stringify(newItems));
    }
  const handleAddItem = (e) => {
    e.preventDefault();
    if(!newItem) return;
    const id=items.length ? items[items.length - 1].id + 1 : 1;
    const listItem = { id: id, name: newItem, checked: false };
    setItems([...items, listItem]);
    localStorage.setItem('todolist', JSON.stringify([...items, listItem]));
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="To Do List"  />
      <AddItem handleAddItem={handleAddItem} newItem={newItem} setNewItem={setNewItem} /> 
      <SearchItems search={search} setSearch={setSearch} />
      <Content items={items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))} handleChange={handleChange} handleDelete={handleDelete} />
      <Footer  length={items.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).length}/>
    </div>
  );
}

export default App;
