import { useNavigate } from 'react-router-dom';
import styled, { css } from "styled-components";


const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

const Heading = styled.h1`
${props => props.as === 'h1' && css`
    font-size: 30px;
    font - weight: 200;
    color: ${props.color};
`}`;


function PageNotFound() {
  const navigate = useNavigate();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1" color='green'>
          The page you are looking for could not be found 😢
        </Heading>
        <button onClick={() => navigate(-1)} size="large">
          &larr; Go back
        </button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
