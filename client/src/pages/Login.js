import styled from "styled-components/macro";

const StyledLoginContainer = styled.main `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height: 100vh;
    .login__container{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        text-align:center;
        background-color: rgba(200, 200, 200, 0.47);
        padding:30px;
        min-width: 30em;
        min-height: 40em;
        border-radius: var(--border-radius-pill);
        .logo_login{
            max-width: 15em;
        }
    }
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
const StyledVideoLoginPageBackgroundVideo = styled.video`
    position: fixed;
    min-width: 100vw;
    min-height: 100vh;
`
const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://audio-fuse.herokuapp.com/login';

const Login = () =>{
    return(
        <div className="login_page_container">
            <div>
                <StyledVideoLoginPageBackgroundVideo  src="/assets/space.mp4" muted loop autoPlay></StyledVideoLoginPageBackgroundVideo>
            </div>
            <StyledLoginContainer>
                <div className="login__container">
                    <div>
                        <div>
                            <img className="logo_login" alt="logo image" src="/assets/logo.png"/>
                            <div>
                                <h1>Audio Fuse</h1>
                            </div>
                        </div>

                    </div>
                    <StyledLoginButton href={LOGIN_URI}>
                        Login with Spotify
                    </StyledLoginButton>
                </div>
            </StyledLoginContainer>

        </div>
    )
}

export default Login;