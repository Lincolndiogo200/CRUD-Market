import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataContext } from "../contexts/data-context";
import axios from "axios";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("cliquei");

    if (password !== confirmPassword) {
      return toast.error("As senhas não são iguais!");
    }

    if (!name || !cpf || !email || !password || !confirmPassword) {
      return toast.error("Por favor, preencha todos os campos corretamente.");
    }

    const novoDado = {
      name,
      cpf,
      email,
      password,
      isAdmin,
      createdAt,
    };

    const criarDado = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/user",
          novoDado
        );
        console.log("Dado criado:", response.data);
      } catch (error) {
        console.error("Erro ao criar dado:", error);
      }
    };

    criarDado();

    toast.success("Conta criada com sucesso!");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <ToastContainer />
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Criar Conta</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <label className="flex flex-col space-y-2">
              <span className="text-gray-700">Nome</span>
              <input
                type="text"
                required
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="flex flex-col space-y-2">
              <span className="text-gray-700">CPF</span>
              <input
                type="text"
                required
                placeholder="Digite seu CPF"
                onChange={(e) => setCpf(e.target.value)}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="flex flex-col space-y-2">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                required
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="flex flex-col space-y-2">
              <span className="text-gray-700">Senha</span>
              <input
                type="password"
                required
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="flex flex-col space-y-2">
              <span className="text-gray-700">Confirmar senha</span>
              <input
                type="password"
                required
                placeholder="Confirme sua senha"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Criar Conta
            </button>
            <div className="flex justify-center text-blue-500 hover:text-blue-600 transition-colors duration-300">
              <Link to="/">Já possui uma conta? clique aqui.</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
