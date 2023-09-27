import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Login button clicked');
    const res = await axios.post("http://localhost:4000/signup", { name, email });
    setEmail(" ");
    setName(" ");
    console.log(res);
    navigate("/home");

  };
  const navi=()=>{
    navigate("/Sigin");
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">SigUp</div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div><br />
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <br />
                <center>  <button type="submit" className="btn btn-primary">
                  SignUp
                </button>
                <br/><br/>
                <p>OR</p>
                <button onClick={navi} className="btn btn-primary">
                  SignIn
                </button>
                </center>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
