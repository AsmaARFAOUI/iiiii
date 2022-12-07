import "./login.css";
const Login = () => {
  return (
    <>
      <div className="globalContainer">
        <form>
          <div class="container">
            <h1>Sign In </h1>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember" />{" "}
              Remember me
            </label>
            <div className="container">
              <span className="psw">
                Forgot <a href="#">password?</a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
