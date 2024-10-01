import { Layout } from "../components/Layout";
import { PencilIcon, Plus, PlusIcon, Trash2Icon } from "lucide-react";
import { ModalCreateProduct } from "../components/ModalCreateProduct";
import { ModalUpdateProduct } from "../components/ModalUpdateProduct";
import { useEffect, useState } from "react";
import axios from "axios";

export const ProductsAdmin = () => {
  const [isOpemModalCreate, setIsOpemModalCreate] = useState(false);
  const [isOpemModalUpdate, setIsOpemModalUpdate] = useState(false);
  const [productSelected, setProductSelected] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await axios.get("http://localhost:8080/product");
        console.log(response.data);

        setProducts(response.data);
      } catch (error) {
        console.log("Erro ao fazer a requisição:", error);
      }
    };

    fetchDados();
  }, []);

  const handleDeleteClick = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/product/${id}`
      );
      console.log("Dado excluído:", response.data);
    } catch (error) {
      console.error("Erro ao excluir dado:", error);
    }
  };

  return (
    <Layout>
      <div className="flex justify-end">
        <button
          className="bg-green-500 text-white font-semibold p-2 rounded-md hover:bg-green-600"
          onClick={() => setIsOpemModalCreate(true)}
        >
          <PlusIcon size={24} />
        </button>
      </div>

      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
            >
              Id
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 w-fit"
            >
              Image
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
            >
              Name
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
            >
              In Sale
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
            >
              Price
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 w-fit"
            >
              Percent
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 w-fit"
            >
              Type
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 w-fit"
            >
              Description
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 w-fit"
            >
              Expires in
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 w-fit"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.length === 0 && (
            <tr>
              <td
                colSpan="10"
                className="text-center py-4 pl-4 pr-3 text-sm font-medium text-gray-900"
              >
                No products found
              </td>
            </tr>
          )}
          {products.map((product) => (
            <tr key={product.id}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                {product.id}
              </td>
              <td className="whitespace-nowrap max-w-[160px] truncate py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                <img src={product.image} className="w-10 h-10" alt="" />
              </td>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                {product.name}
              </td>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                {product.inSale ? "Yes" : "No"}
              </td>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                R${product.price}
              </td>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                {product.percent}%
              </td>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                {product.type}
              </td>
              <td className="whitespace-nowrap max-w-[160px] truncate py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                {product.description}
              </td>
              <td className="whitespace-nowrap max-w-[160px] truncate py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                {product.expiresIn}
              </td>
              <td className="whitespace-nowrap max-w-[160px] truncate py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                <div className="flex items-center gap-2">
                  <button
                    className="text-indigo-600 hover:text-indigo-900 p-2 rounded-md hover:bg-zinc-200"
                    onClick={() => {
                      setProductSelected(product);
                      setIsOpemModalUpdate(true);
                    }}
                  >
                    <PencilIcon size={16} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900 p-2 rounded-md hover:bg-zinc-200"
                    onClick={() => {
                      handleDeleteClick(product._id);
                    }}
                  >
                    <Trash2Icon size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isOpemModalCreate && (
        <ModalCreateProduct setIsOpenModal={setIsOpemModalCreate} />
      )}
      {isOpemModalUpdate && productSelected && (
        <ModalUpdateProduct
          setIsOpenModal={setIsOpemModalUpdate}
          productSelected={productSelected}
        />
      )}
    </Layout>
  );
};
