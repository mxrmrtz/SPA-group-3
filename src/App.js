import ProductList from "./components/Products/ProductList";
import productsData from "./products.json"

function App() {
  return (
    <div>
      <ProductList productsData={productsData} />
    </div>
  );
}

export default App;
