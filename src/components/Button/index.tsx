import "./styles.css"

type Props = {
    name: string,
    click: (cep: number) => {}
};

export const Button = ({ name, click }: Props) => {
    return (
        <button type="button" onClick={() => click(0)}>{name}</button>
    );
};