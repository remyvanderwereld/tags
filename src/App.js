import styled from 'styled-components';
import Header from './components/Header';
import TagPage from './pages/TagPage';

const StyledPage = styled.div`
  padding: 24px 64px;
`;

const App = () => (
  <div>
    <Header />
    <StyledPage>
      <TagPage />
    </StyledPage>
  </div>
);

export default App;
