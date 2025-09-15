import './App.css';
import logo from "./logo.png";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg " id='navbar'>
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="/"><img className='img-fluid'
            src={logo} alt="logo of brand" width={100} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/">For Enterprise</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">Driver Partner</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link " href="/">Support</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="row row1 g-0 d-flex justify-content-center">
        <div className="col-md-6 col-9 mb-2 ms-3 mt-5 me-5" id='intro'>
          <button className="btn">PICK PORTER ENTERPRISE</button>
          <h1 className='mb-4'>Realiable Goods Transportation Service With Seamless Control</h1>
          <a href="/">Hassel-Free Enterprise Logistics  | </a>
          <a href="/">Centralized Management  | </a><br />
          <a href="/">Transparent Operations & Full Control |</a>

        </div>

        <div className="col-md-4 col-9 d-flex flex-column me-4 mb-2" id='loginForm'>
          <h4 className='text-center'>Fill out for more details</h4>
          <i class="bi bi-person-fill"></i>
          <input type="text" name="" id="" placeholder='Enter your Name*' />
          <i class="bi bi-person-vcard-fill"></i>
          <input type="text" name="" id="" placeholder='Enter your company Name*' />
          <i class="bi bi-telephone-fill"></i>
          <input type="text" name="" id="" placeholder='Enter your Phone Number*' />
          <i class="bi bi-envelope-open-fill"></i>
          <input type="text" name="" id="" placeholder='Enter your Email ID' />
          <button className="btn">Get In Touch</button>
        </div>

      </div>
    </>
  );
}

export default App;
