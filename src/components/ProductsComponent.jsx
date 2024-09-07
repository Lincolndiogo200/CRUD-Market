import { useContext } from "react";
import Card from "./Card";
import { DataContext } from "../contexts/data-context";

const ProductsComponent = () => {

  const { products } = useContext(DataContext)

  return (
    <div>
      <div className="grid grid-cols-5 gap-3">
        {products.map((product, index) => (
          <Card key={index} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;
