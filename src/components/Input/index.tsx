import './styles.css';
import { useState } from "react";
import InputContext from '../../context/inputContext';

interface IProps {
    zipCode: number,
    setZipCode: (value: number) => void
};

export const Input: React.FC = () => {
    const [zipCode, setZipCode] = useState(0);

    // function handleZipCode(value: number) {
    //     setZipCode(value);
    // }
    
    return (
        <InputContext.Provider value={{ zipCode, setZipCode }}>

            <div className="d-flex w-100">
                <label htmlFor="cep">cep</label>
                <input
                    className="w-100"
                    type="text"
                    name="cep"
                    id="cep"
                    placeholder="xxxxx-xxx"
                    onChange={(e) => {
                        setZipCode(e.target.value)
                    }}
                />
            </div>
        </InputContext.Provider>
    );
};