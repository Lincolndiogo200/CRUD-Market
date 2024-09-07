import { useContext } from "react";
import { Layout } from "../components/Layout"
import { DataContext } from "../contexts/data-context";
import { PackageIcon, UserIcon } from "lucide-react";

export const HomeAdminPage = () => {
  const { users, products } = useContext(DataContext);

  return <Layout>
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="flex items-center gap-2">
        <div className="flex gap-2 items-center border border-zinc-200 p-5 rounded-md w-[240px]">
          <UserIcon size={60} />

          <div>
            <h2 className="text-2xl font-semibold">Users</h2>
            <p>Total: <span className="font-bold text-lg">{users.length}</span> </p>
          </div>
        </div>

        <div className="flex gap-2 items-center border border-zinc-200 p-5 rounded-md w-[240px]">
          <PackageIcon size={60} />

          <div>
            <h2 className="text-2xl font-semibold">Products</h2>
            <p>Total: <span className="font-bold text-lg">{products.length}</span> </p>
          </div>
        </div>
      </div>
      
    </div>

  </Layout>
}