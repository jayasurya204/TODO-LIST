import Header from './Header';
import { useState } from 'react';
import Content from './Content';
import Footer from './Footer';
import Additems from './Additems';

function App() {
  const [newItem, setNewItems] = useState('')
  const [items, setItems] = useState(
    [
      {
        Id: 1,
        checked: true,
        item: "somthing",

      },
      {
        Id: 2,
        checked: true,
        item: "nothing",

      },
      {
        Id: 3,
        checked: false,
        item: "Do nothing",

      }
    ]
  );


  const AddItem = (item) => {
    const id = items.length ? items[items.length - 1].Id + 1 : 1;

    // console.log(`this is summa ${id}`);

    const addNewItem = { Id: id, checked: false, item: item }
    const listItem = [...items, addNewItem]
    // console.log(` new items ${addNewItem}`);
    // console.log(` list items ${listItem}`);
    setItems([...items, addNewItem])
    // localStorage.setItem("todo", JSON.stringify
    //   (listItem))
    setNewItems("")

  }




  const handleCheck = (Id) => {
    const listItem = items.map((item) => item.Id === Id ? { ...item, checked: !item.checked } : item)
    localStorage.setItem("todo", JSON.stringify([]))
    setItems(listItem)
  }

  const handleDelete = (Id) => {
    const listItem = items.filter((item) => item.Id !== Id)
    localStorage.setItem("todo", JSON.stringify())
    setItems(listItem)
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    if (!newItem)
      return;
    console.log(newItem);
    AddItem(newItem)
    //adding items 
    // setItems("")


  }

  return (
    <div className='App'>
      <Header
        title={"TO DO  LIST"}
      />
      <Additems
        newItem={newItem}
        setNewItem={setNewItems}
        handlesubmit={handlesubmit}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
      // length={items.length}
      />
    </div>

  );
}

export default App;




