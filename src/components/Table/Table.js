import "./Table.css";

function Table(props) {
    const tRow = props.src.map((table) =>
        <tr>
            <td>{table.example}</td>
            <td>{table.example}</td>
            <td>{table.example}</td>
        </tr>
    );
    return (
        <table className="Table">
            {tRow}
        </table>
    );
}

export default Table;