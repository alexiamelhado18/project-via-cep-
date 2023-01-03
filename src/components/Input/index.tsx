import { useState } from 'react';
import './styles.css';

type Props = {
    name: string,
    cep: (value: string) => {},
    isReadonly: boolean,
    placeholder: string,
    value: any
};

export const Input = ({ cep, name, isReadonly, placeholder, value }: Props) => {
    return (
        <div className="d-flex w-100">
            <label htmlFor="cep">{name}</label>
            <input
                className="w-100"
                type="text"
                name={name}
                placeholder={placeholder}
                onChange={(e) => {
                    cep(e.target.value)
                }}
                readOnly={isReadonly ? true : false}
                value={value}
            />
        </div>
    );
};