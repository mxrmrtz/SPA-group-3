import ProductList from "./components/Products/ProductList";
import productsData from "./products.json"
import NavBar from "./components/Nav-top/NavBar"
function App() {
  return (
    <div>
       <NavBar />
      <ProductList productsData={productsData} />
     
    </div>
  );

}

export default App;
