import "../src/styles/global.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import api from "../src/services/api";
import { useContext } from "react";
import InputContext from "./context/inputContext";


export const App = () => {
  const { zipCode }: any = useContext(InputContext);
  // console.log(zipCode);

  const getByZipCode = () => {
    console.log("getByZipCode", zipCode);

    api.getZipCode(zipCode)
      .then((response) => {
        if (response.status === 200) {
          // exibir os dados do endereço
          // onClick(response.data);
          console.log(response.data);

        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <main className="w-100 d-flex align-items-center">
      <form className="w-100 d-flex flex-column">
        <section className="d-flex w-100 align-items-end justify-content-between">
          <Input />
          <Button name={"consultar"} click={async () => getByZipCode()} />
        </section>
        <hr className="w-100" />
      </form>
    </main>

  )
}
