import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/data-context";
import { toast } from "react-toastify";

const Login = () => {
  const { users, setUserAuthenticated } = useContext(DataContext);

  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = users.find((user) => user.cpf === cpf && user.password === password);

    if (user && user.isAdmin) {
      setUserAuthenticated(user)
      navigate("/home/admin");
    } else if (user && !user.isAdmin) {
      setUserAuthenticated(user)
      navigate("/home");
    } else {
      toast.error("CPF ou senha incorretos!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <input
            type="text"
            required
            placeholder="Digite seu CPF"
            onChange={(e) => setCpf(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            required
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Entrar
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link
            to="/cadastro"
            className="text-indigo-600 hover:text-indigo-500 transition-colors"
          >
            Não possui conta? Registre-se
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
