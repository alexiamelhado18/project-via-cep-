import "./styles.css"

type Props = {
    name: string,
    click: (cep: string) => {}
};

export const Button = ({ name, click }: Props) => {
    return (
        <button type="button" onClick={() => click("")}>{name}</button>
    );
};