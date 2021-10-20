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

const Login = () =>{
    return(
        <StyledLoginContainer>
            <StyledLoginButton href="http://localhost:8888/login">
                Login with Spotify
            </StyledLoginButton>
        </StyledLoginContainer>
    )
}

export default Login;