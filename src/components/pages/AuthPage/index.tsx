import styled from "styled-components";
import { memo, useCallback } from 'react';
import { useNavigate } from "react-router-dom";

import { GoogleSvg } from '@svgs';
import colors from '@atoms/colors';
import { Paragraph, Title } from "@atoms";
import authImage from '@images/auth-image.png';

type Props = {
  authorize?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.background};
  .auth-img {
    height: 100%;
    width: 583px;
  }
  .title {
    color: #4F4F4F;
    margin-bottom: 15px;
  }
  .content-container {
    margin-left: 100px;
  }
  .auth-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 225px;
    height: 46px;
    background-color: ${colors.white};
    padding: 8px;
    border: 1px solid ${colors.light_gray};
    border-radius: 6px;
    cursor: pointer;
  }
  .google-logo {
    margin-right: 8px;
  }
`
export default  memo(function AuthPage(props: Props) {
  const { authorize } = props;
  const navigate = useNavigate();
  
  const handleAuth = useCallback(() => {
    authorize && authorize(true);
    navigate('/dashboard');
  },[authorize, navigate])

  return (
    <Wrapper>
      <img
        src={authImage}
        alt="Ocean"
        className="auth-img"
      />
      <div className="content-container">
        <Title className="title">Product Name</Title>
        <button onClick={handleAuth} className='auth-btn'>
          <GoogleSvg className="google-logo" />
          <Paragraph size="md">Sign up with Google</Paragraph>
        </button>
      </div>
    </Wrapper>
  )
})