import styled from "styled-components/macro";

const StyledLoginContainer = styled.main `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height: 100vh;
`;

const StyledLoginButton = styled.a `
 display: inline-block;
 background-color: var(--pink);
 color:var(--black);
 border-radius:var(--border-radius-pill);
 font-weight: 700;
 font-size: var(---fz-lg);
 padding:var(--spacing-sm) var(--spacing-xl);
  
 &:hover,
 a:focus{
    text-decoration: none;
    filter:brightness(1.1);
 }
 
`;

const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://audio-fuse.herokuapp.com/login';

const Login = () =>{
    return(
        <StyledLoginContainer>
            <StyledLoginButton href={LOGIN_URI}>
                Login with Spotify
            </StyledLoginButton>
        </StyledLoginContainer>
    )
}

export default Login;