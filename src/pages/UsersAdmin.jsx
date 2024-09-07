import { useContext, useState } from "react";
import { Layout } from "../components/Layout"
import { DataContext } from "../contexts/data-context"
import { PencilIcon, Plus, PlusIcon, Trash2Icon } from "lucide-react";
import { ModalCreateProduct } from "../components/ModalCreateProduct";
import { ModalUpdateProduct } from "../components/ModalUpdateProduct";
import { ModalUpdateUser } from "../components/ModalUpdateUser";
import { ModalCreateUser } from "../components/ModalCreateUser";

export const UsersAdmin = () => {
  const { users, setUsers } = useContext(DataContext);
  const [isOpemModalCreate, setIsOpemModalCreate] = useState(false);
  const [isOpemModalUpdate, setIsOpemModalUpdate] = useState(false);
  const [userSelected, setUserSelected] = useState(null);

  const handleDeleteClick = (id) => {
    setUsers((users) => users.filter((product) => product.id !== id))
  }

  return <Layout>
    <div className="flex justify-end">
      <button className="bg-green-500 text-white font-semibold p-2 rounded-md hover:bg-green-600" onClick={() => setIsOpemModalCreate(true)}>
        <PlusIcon size={24} />
      </button>
    </div>

    <table className="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
            Id
          </th>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 w-fit">
            Avatar
          </th>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
            Name
          </th>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
            CPF
          </th>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
            Email
          </th>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 w-fit">
            Password
          </th>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 w-fit">
            Is Admin
          </th>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 w-fit">
            Created At
          </th>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 w-fit">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {
          users.length === 0 && <tr>
            <td colSpan="10" className="text-center py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
              No users found
            </td>
          </tr>
        }
        {users.map((user) => (
          <tr key={user.id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
              {user.id}
            </td>
            <td className="whitespace-nowrap max-w-[160px] truncate py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
              <div className='h-12 w-12 rounded-full bg-red-300 flex items-center justify-center'>
                {user.name.slice(0, 2).toUpperCase()}
              </div>
            </td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
              {user.name}
            </td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
              {user.cpf}
            </td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
              {user.email}
            </td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
              {user.password}
            </td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
              {user.isAdmin ? 'Yes' : 'No'}
            </td>
            <td className="whitespace-nowrap max-w-[160px] truncate py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
              {user.createdAt.toString()}
            </td>
            <td className="whitespace-nowrap max-w-[160px] truncate py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
              <div className="flex items-center gap-2">
                <button className="text-indigo-600 hover:text-indigo-900 p-2 rounded-md hover:bg-zinc-200" onClick={() => {
                  setUserSelected(user)
                  setIsOpemModalUpdate(true)
                }}>
                  <PencilIcon size={16} />
                </button>
                <button className="text-red-600 hover:text-red-900 p-2 rounded-md hover:bg-zinc-200" onClick={() => {
                  handleDeleteClick(user.id)
                }}>
                  <Trash2Icon size={16} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {
      isOpemModalCreate && <ModalCreateUser setIsOpenModal={setIsOpemModalCreate} />
    }
    {
      isOpemModalUpdate && userSelected && <ModalUpdateUser setIsOpenModal={setIsOpemModalUpdate} userSelected={userSelected} />
    }

  </Layout>
}