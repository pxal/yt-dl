import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import '../App.css';

function Body() {
    const [link, setLink] = useState("");
  const [currentLink, setCurrentLink] = useState("");

  function handleChangeText (e) {
  setLink(e.target.value);
  }

  function handleSubmit() {
    setCurrentLink(link);
  }
  return (
    <Card className="text-center">
      <Card.Header className="Card-Header">Unduh Video</Card.Header>
      <Card.Body>
      <div>


      <div className="Content">
      <input type="text" className="Form-yt" placeholder="Tempel Link Youtube Anda Disini"onChange={handleChangeText} />
     <button className="Yt-submit" onClick={handleSubmit}>Unduh</button>
      </div>


    
    <iframe title="frame-dl" className="Widget" 
    src={`https://convert2mp3s.com/api/widget?url=${currentLink}` }
    allowtransparency="true" 
    scrolling="yes" 
    style={{border: "none"}}
    ></iframe>
    </div>
    

      </Card.Body>
    </Card>
  );
}

export default Body;