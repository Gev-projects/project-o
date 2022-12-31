import styled from "styled-components";


const Wrapper = styled('div')`
  img + span {
    display: flex;
    justify-content: center;
    margin-top: 8px;
  }
  img + button {
       margin: 8px 52px 0 52px;
  }
`;

export default Wrapper;