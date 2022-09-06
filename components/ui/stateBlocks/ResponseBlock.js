export const ResponseBlock = ({ data }) => {
    const { location = {}, current = {} } = data;
    return (<div>
        <p>{location.name}, <span>{location.region}</span> </p>
        <p>{location.localtime} </p>
        <p>{current.condition.text} </p>
    </div>);
}