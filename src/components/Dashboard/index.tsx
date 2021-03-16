// Styles
import { Container } from './styles'

// Components
import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}