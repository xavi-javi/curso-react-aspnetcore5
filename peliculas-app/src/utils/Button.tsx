import { ReactElement } from "react";

function Button(props: ButtonProps) {
    return (
        <button type={props.type} className="btn btn-primary" onClick={props.onClick}>{props.children}</button>
    );
}

interface ButtonProps {
    children: React.ReactNode;
    onClick?(): void,
    type: 'button' | 'submit'
}

Button.defaultProps = {
    type: 'button'
};

export default Button;
