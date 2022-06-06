import TableComponent from '../Table'
import { columnsDictionary } from './utils/columnsDictionary'

const TransferencesComponent = ({ data }) => {
  return (
    <div>
      <h3>Transferencias</h3>
      <TableComponent columnsData={columnsDictionary} sourceData={data} />
    </div>
  )
}
export default TransferencesComponent
