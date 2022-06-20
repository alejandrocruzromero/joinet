import logo from '../assets/images/joinet.png';
import './NavBar.css';
import CartWidget from './CartWidget';
function NavBar() {
  return (
    <section >
      <header className="navbar">        
          <a src="#inicio"><img src={logo} width ="80" /></a>
          <a src="#audio">Audio</a>
          <a src="#Hogar">Hogar</a>
          <a src="#Computo">Computo</a>
          <a src="#Electronica">Electronica</a>
          <a src="#Quienes">Quienes Somos?</a>
          <CartWidget />
      </header>    
      
    </section>
  );
}

export default NavBar;
