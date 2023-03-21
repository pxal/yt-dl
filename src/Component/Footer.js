import '../App.css';
import { Instagram } from 'react-feather';
import { Twitter } from 'react-feather';
import { Facebook } from 'react-feather';
function Footer() {

  return (
    
    <footer>
      <div className="social">
        <div className="Icon">
       <a href="https://instagram.com/alvian_cyber"> <Instagram /></a>
       <a href="https://www.facebook.com/xempyang"> <Facebook /></a>
       <a href="https://twitter.com"><Twitter /></a>
        </div>
      </div>

      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#kontak">Kontak</a>
      </div>
      <div className="credit">
        <p>Created by <span>Alvian</span></p>
      </div>
    </footer>
    
  );
}


export default Footer;