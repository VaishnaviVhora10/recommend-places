import './App.css';
import Event from './components/Event';
import Activities from './components/Activities';
import Advanture from './components/Advanture';
import Gallery from './components/Gallery';
import {useState } from 'react';
import Cart from './components/Cart';
import eventsdata from './data/eventsdata';
import activitiesdata from './data/activitiesdata';
import advanturedata from './data/advanturedata';
import gallerydata from './data/gallerydata';

function App() {
  const {evdata} = eventsdata;
  const {actdata} = activitiesdata;
  const {advandata} = advanturedata;
  const {galldata} = gallerydata;
  
  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (destination)=>{
    const exist = cartItems.find(x => x.id === destination.id);
    if(exist){
      setCartItems(cartItems.map(x => x.id === destination.id ? {...exist, qty: exist.qty + 1 } : x ));
    } else{
      setCartItems([...cartItems, {...destination, qty: 1}]);
    }
  };

  const onRemove = (destination) => {
    const exist = cartItems.find((x) => x.id === destination.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== destination.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === destination.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
 return (
    <div className="App">
      <Event  evdata={evdata} onAdd={onAdd}/>
      <Activities actdata={actdata} onAdd={onAdd}/>
      <Advanture advandata={advandata} onAdd={onAdd}/>
      <Gallery galldata={galldata} onAdd={onAdd}/>
      <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
         </div>
  );
}
export default App;
