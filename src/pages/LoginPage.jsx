
import '../styles/login.css';
import Logo from '../assets/logo.png'; 

const LoginPage = () => {
  return (
    <div>
      <header>
        <img className="logo" src={Logo} alt="logo" />
        <nav>
          <ul className="nav-links">
            <li><a href="/signup.html">Sign Up</a></li> 
            <li><a href="/">Home</a></li> 
          </ul>   
        </nav>
      </header>
      <div style={
        {
          alignItems: 'center',
          justifyContent: "center",
          display: "flex"
        }
      }>
        
        <div className="container">
        <h1>Log In</h1>
        <form action="/submit" method="post">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
