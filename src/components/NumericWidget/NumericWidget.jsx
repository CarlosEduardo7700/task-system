export default function NumericWidget({ title, data }) {
    return (
        <div className="container-widgets">
            <h2>{title}</h2>
            <p>{data}</p>
        </div>
    );
}