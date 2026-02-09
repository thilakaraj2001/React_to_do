import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import AddItem from "./AddItem";
import { useState , useEffect} from 'react';
import SearchItems from "./SearchItems";


function App() {
  const API_URL = 'http://localhost:3500/items';
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setIsLoading(false);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    }
    setTimeout(() => {
     fetchItems() 
    }, 2000);
    
   
  }, []);



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
      const item = newItems.find(item => item.id === id);
      const updateOptions = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ checked: item.checked })
      };
      const updateItem = async () => {
        try {
          const response = await fetch(`${API_URL}/${id}`, updateOptions);
          if (!response.ok) throw Error('Did not receive expected data');
          setFetchError(null);
        } catch (err) {
          setFetchError(err.message);
        } 
      }
      updateItem();   
     
    }
  
  const handleDelete = (id) => {
      const newItems = items.filter(item => item.id !== id);
      setItems(newItems);
      console.log('Items after delete:', newItems);
        const deleteOptions = { method: 'DELETE' };
        const deleteItem = async () => {
          try {
            const response = await fetch(`${API_URL}/${id}`, deleteOptions);
            if (!response.ok) throw Error('Did not receive expected data');
            setFetchError(null);
          } catch (err) {
            setFetchError(err.message);
          } 
        }
        deleteItem(); 
    }
  const handleAddItem = (e) => {
    e.preventDefault();
    if(!newItem) return;
    const id=items.length ? items.length : 1;
    const listItem = { id: id, name: newItem, checked: false };
    setItems([...items, listItem]);
   const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(listItem)
    };
    const postItem = async () => {
      try {
        const response = await fetch(API_URL, postOptions);
        if (!response.ok) throw Error('Did not receive expected data');
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } 
    }
    postItem();
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="To Do List"  />
      <AddItem handleAddItem={handleAddItem} newItem={newItem} setNewItem={setNewItem} /> 
      <SearchItems search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!isLoading && <Content items={items.filter(item => item.name && item.name.toLowerCase().includes(search.toLowerCase()))} handleChange={handleChange} handleDelete={handleDelete} />}
      </main>
      
      <Footer  length={items.filter(item => item.name && item.name.toLowerCase().includes(search.toLowerCase())).length}/>
    </div>
  );
}

export default App;
