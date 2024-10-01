import { createContext, useState } from "react";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      cpf: "12345678900",
      email: "johndoe@example.com",
      password: "123456",
      isAdmin: true,
      createdAt: new Date().toLocaleDateString(),
    },
  ]);
  const [userAuthenticated, setUserAuthenticated] = useState(null);

  return (
    <DataContext.Provider
      value={{
        products,
        setProducts,
        users,
        setUsers,
        userAuthenticated,
        setUserAuthenticated,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
