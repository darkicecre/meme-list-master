import "./App.css";
import { Row, Col } from "antd";
import { useEffect, useState } from "react";
const api_meme = "https://api.imgflip.com/get_memes";

function App() {
  const [memeArray, setMemeArray] = useState([]);
  const getImage = () => {
    fetch(api_meme)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMemeArray(data.data.memes);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="App">
      <h3 className="App-header">Meme List</h3>
      <button onClick={(event) => getImage(event)}>Meme</button>
      <Row>
        {memeArray.length !== 0 &&
          memeArray.map((item, index) => {
            return (
              <Col span={8} className="gutter-row image-item" key={`${index}`}>
                <img src={item.url} className="meme_image" alt={item.name} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default App;
