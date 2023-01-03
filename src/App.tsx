import "../src/styles/global.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import api from "../src/services/api";
import { useState } from "react";

export const App = () => {
  const [cep, setCep] = useState<string>("");
  const [endereco, setEndereco] = useState({});

  const obterEnderecoCep = (value: string) => {
    api.getZipCode(value)
      .then((response) => {
        if (response.status === 200) {
          setEndereco(response.data);
        }
        else if (response.status === 404) {
          alert("CEP não encontrado!");
          setCep("");
        }
      })
      .catch((error) => console.log(error))
    // .finally(() => { setCep(""); });
  };

  function validaCEP(value: string) {
    let RegExp = /^[0-9]{5}[0-9]{3}$/;

    if (value.length > 0) {
      if (RegExp.test(value)) {
        obterEnderecoCep(value);
      } else {
        alert("CEP INVÁLIDO");
        setCep("");
      }
    } else {
      alert("Por favor digite seu CEP!");
    }
  }

  return (
    <main className="w-100 d-flex align-items-center">
      <form className="w-100 d-flex flex-column">
        <section className="d-flex w-100 align-items-end justify-content-between">
          <Input
            name={"cep"}
            cep={async (value) => setCep(value)}
            isReadonly={false}
            placeholder={"xxxxx-xxx"}
            value={cep}
          />

          <Button
            name={"consultar"}
            click={async () => { validaCEP(cep) }}
          />
        </section>
        <hr className="w-100" />
        <section className="d-flex w-100">
          <div className="w-100 pr-5">
            <Input
              name={"Logradouro"}
              cep={async () => { }}
              isReadonly={true}
              placeholder={"Ex: R. Av. Trav."}
              value={endereco.logradouro}
            />

            <Input
              name={"Bairro"}
              cep={async () => { }}
              isReadonly={true}
              placeholder={"Bairro"}
              value={endereco.bairro}
            />
          </div>

          <div className="w-100 pl-5">
            <Input
              name={"Localidade"}
              cep={async () => { }}
              isReadonly={true}
              placeholder={"Localidade"}
              value={endereco.localidade}
            />
            <Input
              name={"uf"}
              cep={async () => { }}
              isReadonly={true}
              placeholder={"UF"}
              value={endereco.uf}
            />
          </div>
        </section>
      </form>
    </main>

  )
}
