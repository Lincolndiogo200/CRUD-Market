import { useContext, useState } from "react";
import { DataContext } from "../contexts/data-context";

export const ModalCreateProduct = ({ setIsOpenModal }) => {
  const { setProducts, products } = useContext(DataContext);
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = {
      id: products.length + 1,
      name: formData.get("name"),
      price: formData.get("price"),
      percent: formData.get("percent"),
      type: formData.get("type"),
      description: formData.get("description"),
      expiresIn: formData.get("expiresIn"),
      image: formData.get("imageUrl"),
      inSale: checked,
    };

    setProducts((products) => [...products, data]);
    setIsOpenModal(false);
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/20"
        onClick={() => setIsOpenModal(false)}
      />

      <div className="bg-white z-10 w-[50%] p-5 rounded-md">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label className="flex flex-col space-y-2">
            <span className="text-gray-700">Name</span>
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
          <div className="flex gap-2">
            <label className="flex flex-col space-y-2 w-full">
              <span className="text-gray-700">Price</span>
              <input
                type="number"
                required
                name="price"
                placeholder="Price"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>
            <label className="flex flex-col space-y-2 w-full">
              <span className="text-gray-700">Percent</span>
              <input
                type="number"
                required
                name="percent"
                placeholder="Percent"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>
          </div>
          <div className="flex gap-2">
            <label className="flex flex-col space-y-2 w-full">
              <span className="text-gray-700">Type</span>
              <select
                type="number"
                required
                name="type"
                placeholder="Type"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Bebida alcoólica">Bebida alcoólica</option>
                <option value="Refrigerante">Refrigerante</option>
                <option value="Energético">Energético</option>
                <option value="Comida">Comida</option>
                <option value="Limpeza">Limpeza</option>
              </select>
            </label>
            <label className="flex flex-col space-y-2 w-full">
              <span className="text-gray-700">Description</span>
              <input
                type="text"
                required
                name="description"
                placeholder="Description"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>
          </div>
          <div className="flex gap-2">
            <label className="flex flex-col space-y-2 w-full">
              <span className="text-gray-700">Expires in</span>
              <input
                type="date"
                required
                name="expiresIn"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>
            <label className="flex flex-col space-y-2 w-full">
              <span className="text-gray-700">Image URL</span>
              <input
                type="text"
                required
                placeholder="Image URL"
                name="imageUrl"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>
          </div>
          <label className="flex items-center gap-2">
            <span className="text-gray-700 font-bold">In sale</span>
            <input
              type="checkbox"
              name="inSale"
              placeholder="Image URL"
              className="w-5 h-5"
              onClick={() => setChecked(!checked)}
            />
          </label>

          <button
            type="submit"
            className="w-full mt-2 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Criar
          </button>
        </form>
      </div>
    </div>
  );
};
