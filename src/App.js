import styled from 'styled-components'
import Header from './components/Header'
import TagPage from './pages/TagPage'

const StyledPage = styled.div`
  padding: 88px 64px 24px 64px;

  @media only screen and (max-width: 600px) {
    padding: 72px 16px 24px 16px;
  }
`

const App = () => (
  <div>
    <Header />
    <StyledPage>
      <TagPage />
    </StyledPage>
  </div>
)

export default App
