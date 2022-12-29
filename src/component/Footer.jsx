const FootReact = ({props2: {name, celular, email}}) => {
    return(
        <>
        <footer className="fotRect">
            <h4>va a ser un navbar eaaaaa creado por {name}</h4>
            <h4> Mi contacto es: {celular}</h4>
            <h4> Mi correo es: {email}</h4>
        </footer>
        </>
    );

}
export default FootReact;