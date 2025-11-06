import Header from './Header';
import { useState } from 'react';
import Content from './Content';
import Footer from './Footer';
import Additems from '../Additems';

function App() {
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
  const handleCheck = (Id) => {
    const listItem = items.map((item) => item.Id === Id ? { ...item, checked: !item.checked } : item)
    localStorage.setItem("todo", JSON.stringify)
    setItems(listItem)


  }

  const handleDelete = (Id) => {
    const listItem = items.filter((item) => item.Id !== Id)
    localStorage.setItem("todo", JSON.stringify)
    setItems(listItem)
  }



  return (
    <div className='App'>
      <Header 
      title = {"TO DO  LIST"}
       />
       <Additems/>
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
      length = {items.length} 
      />
    </div>
  );
}

export default App;




