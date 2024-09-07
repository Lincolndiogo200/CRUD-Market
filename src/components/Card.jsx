import Card from "react-bootstrap/Card";

const ProductCard = ({ productData }) => {

  const verifySale = productData.inSale && productData.percent > 0 

  return (
    <Card style={{ width: "18rem" }} className="border border-solid p-2 rounded-md">
      <div className="flex items-center justify-center">
        <Card.Img src={productData.image} className="mb-2 h-[200px]" />
      </div>
      <Card.Body className="flex flex-col gap-0.5">
        <Card.Title>{productData.name}</Card.Title>
        <Card.Text className="truncate">{productData.description}</Card.Text>
        <Card.Text className={verifySale ? 'line-through text-red-600 text-xs font-semibold' : 'font-semibold'}>R$ {productData.price}</Card.Text>

        {
          verifySale && (
            <Card.Text className="font-bold">R$ {productData.price - ((productData.price * productData.percent) / 100)}</Card.Text>
          )
        }
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
