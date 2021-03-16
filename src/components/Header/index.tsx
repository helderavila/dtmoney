// Styles
import { Container, Content } from './styles'

// Assets
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}