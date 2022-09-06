
export const ErrorBlock = ({ error }) => {
    const { message, name, code, status } = error;
    return (<div style={{ marginTop: "2rem", color: 'red' }} >
        <p>{code} | <span>{status}</span> </p>
        <p>{message} </p>
        <p>{name} </p>
    </div>);
}