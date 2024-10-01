import { useContext } from "react";
import { DataContext } from "../contexts/data-context";
import axios from "axios";

export const ModalUpdateUser = ({ setIsOpenModal, userSelected }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = {
      id: userSelected._id,
      name: formData.get("name"),
      cpf: formData.get("CPF"),
      email: formData.get("email"),
      password: formData.get("password"),
      isAdmin: formData.get("type") === "true",
      createdAt: new Date().toLocaleDateString(),
    };

    const atualizarDado = async () => {
      try {
        const response = await axios.patch(
          `http://localhost:8080/user/${data.id}`,
          data
        );
        console.log("Dado atualizado:", response.data);
      } catch (error) {
        console.error("Erro ao atualizar dado:", error);
      }
    };

    atualizarDado();

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
              defaultValue={userSelected.name}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
          <div className="flex gap-2">
            <label className="flex flex-col space-y-2 w-full">
              <span className="text-gray-700">CPF</span>
              <input
                type="text"
                required
                name="CPF"
                placeholder="CPF"
                defaultValue={userSelected.cpf}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>
            <label className="flex flex-col space-y-2 w-full">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                defaultValue={userSelected.email}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>
          </div>
          <label className="flex flex-col space-y-2 w-full">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              required
              name="password"
              placeholder="password"
              defaultValue={userSelected.password}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
          <div className="flex gap-2">
            <label className="flex flex-col space-y-2 w-full">
              <span className="text-gray-700">Password</span>
              <select
                type="text"
                required
                name="type"
                placeholder="Type"
                defaultValue={userSelected.password}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value={true}>Admin</option>
                <option value={false}>Client</option>
              </select>
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Atualizar
          </button>
        </form>
      </div>
    </div>
  );
};
