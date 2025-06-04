import CartWidget from './CartWidget'; 
import logoTienda from '../assets/logo.png'; 

function navBar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.5rem 1rem',
      backgroundColor: '#282c34',
      color: 'white'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {logoTienda
          ? <img src={logoTienda} alt="Logo Mi Tienda" style={{ height: '2rem' }} />
          : <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Mi Tienda</span>
        }
      </div>

      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '1rem',
        margin: 0,
        padding: 0
      }}>
        <li style={{ cursor: 'pointer' }}>Home</li>
        <li style={{ cursor: 'pointer' }}>Productos</li>
        <li style={{ cursor: 'pointer' }}>Contacto</li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default navBar;
