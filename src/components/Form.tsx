import { FormEvent, useState } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validate";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState<User | null>(null);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    const user: User = {
      name,
      email,
      agree,
    };

    const validatedErrors = validate(user);

    if (Object.keys(validatedErrors).length > 0) {
      setError(validatedErrors);
    } else {
      alert("Usuário cadastrado com sucesso!");
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-sn" htmlFor="name">
          Nome
        </label>
        <input
          type="text"
          id="name"
          placeholder="Insira seu nome"
          className="rounder-lg py-2 px-2 text-sm placeholder:text-stone-400 w-100"
          onChange={(ev) => setName(ev.target.value)}
          value={name}
        />
        {error && (
          <small className="text-red-500 mt-1 text-xs">{error.name}</small> // Aqui o JavaScript irá acessar todos os objetos que está dentro do state de error (esses objetos são os objetos retornados da função, e irá procurar por um objeto que tem a propriedade "name")
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-sn" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Insira seu melhor e-mail"
          className="rounder-lg py-2 px-2 text-sm placeholder:text-stone-400"
          onChange={(ev) => setEmail(ev.target.value)}
          value={email}
        />
      </div>
      {error && (
        <small className="text-red-500 mt-1 text-xs">{error.email}</small>
      )}
      <div className="flex flex-col">
        <a className="text-xs mb-2 underline" href="#">
          Leia os termos
        </a>
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="agree"
            className="rounder-lg py-2 px-2 text-sm placeholder:text-stone-400"
            onChange={(ev) => setAgree(ev.target.checked)}
            checked={agree}
          />
          <label className="text-sn" htmlFor="agree">
            Concordo com os termos
          </label>
        </div>
        {error && (
          <small className=" text-red-500 text-xs">{error.agree}</small>
        )}
      </div>
      <button
        type="submit"
        className="bg-slate-600 hover:bg-slate-800 font-medium text-sm py-2 px-4 rounder-lg text-white"
      >
        Cadastrar
      </button>
    </form>
  );
};
export default Form;
