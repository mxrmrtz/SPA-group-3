import BrandFilter from './components/BrandFilter';
import Card from './components/Card';
import data from './Data/data.json';
import NavBar2 from './components/NavBar2';
import { useState } from 'react';


function App() {
  // const [filterBrand, setFilterBrand] = useState(null);
  const [items, setItems] = useState(data);
  // console.log(data);

  const handleSelect = (brandName) => {
    // console.log('handleSelect triggered', brandName);
    let newItems = data.filter(d => d.brand === brandName);
    setItems(newItems);
  }
  return (
    <div>
      <NavBar2
        data={data}
        selected={handleSelect}
      />
      {items && items.map((dataItems, index) =>
        <Card key={index} itemData={dataItems} />
      )}
    </div>
  );
}

export default App;
