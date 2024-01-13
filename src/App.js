
import { Button } from 'antd';
import './App.css';
import Header from './cpmponents/Header/Header';

function App() {

  return (
    <div className="App">
      <Header/>
      <div className="home-container">
        <div className="home-left ">
          <div className="left-icons">
            
          </div>
          <div className="left-content">
          <h3 className='medium-heading'>---The New Era Has Been Started</h3>
            <h1 className=" mn-headings">Bright Your Future With Learn New Technology From Experts</h1>
            <p className="mn-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto nihil, asperiores quam cupiditate eligendi excepturi tempora consequatur aspernatur molestias. Itaque.</p>
            <div>

              <Button
                className="mn-btn" style={{ margin: "20px 1px" }}>
                Start Free Trail
              </Button>
            </div>

          </div>
        </div>
        <div className="home-right">
          <img src={require("../src/assets/main-img.png")} alt="" />
        </div>
      </div>
     


    </div>
  );
}

export default App;
