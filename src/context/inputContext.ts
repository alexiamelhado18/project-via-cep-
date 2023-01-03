import { createContext } from "react";

interface IProps {
    zipCode: string,
    setZipCode: React.Dispatch<React.SetStateAction<string>>
};
const InputContext = createContext({} as IProps);

export default InputContext;
