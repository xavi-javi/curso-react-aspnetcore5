import { ReactElement } from "react";

function Button(props: ButtonProps) {
    return (
        <button type="button" className="btn btn-primary" onClick={props.onClick}>{props.children}</button>
    );
}

interface ButtonProps {
    children: React.ReactNode;
    onClick(): void
}

export default Button;
