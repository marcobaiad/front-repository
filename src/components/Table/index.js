import './table.css'

const TableComponent = ({ columnsData, sourceData }) => {
  return (
    <table className='table-component'>
      <thead>
        <tr>
          {Object.entries(columnsData).map(([key, value]) => (
            <th key={key}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sourceData?.map((row, index) => (
          <tr key={index}>
            {Object.keys(columnsData).map((key, indexCol) => (
              <td key={row?.timestamp + indexCol}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default TableComponent
