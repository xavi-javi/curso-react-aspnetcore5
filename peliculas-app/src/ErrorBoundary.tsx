import React, { PropsWithChildren, ReactElement } from "react";

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hayError: false, mensaje: "" };
  }

  // este es el metodo que no existe en los functionals components
  componentDidCatch(error: any, errorInfo: any) {
    console.log(error);
    console.log(errorInfo);
  }


  // esta función es la que va a cambiar el estado en caso de que haya un error
  static getDerivedStateFromError(error: any) {
    console.log(error);
    return { hayError: true, mensaje: error };
  }

  render() {
    if (this.state.hayError) {
      if (this.props.errorUI) {
        return this.props.errorUI;
      } else {
        return <h3>{this.state.mensaje}</h3>;
      }
    }

    return this.props.children;
  }
}

interface ErrorBoundaryState {
  hayError: boolean;
  mensaje: string;
}

// en el curso no indico que tenias que heredar de "PropsWithChildren" para poder ocupar el children
// al parecer esto es porque yo estoy ocupando React 18 y el curso React 17

interface ErrorBoundaryProps extends PropsWithChildren {
  errorUI?: ReactElement;
}
