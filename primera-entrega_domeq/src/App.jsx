import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './componentes/navBar'
import ItemListContainer from './componentes/ItemListContainer'

function App() {
  const saludo = 'Bienvenido a mi tienda con Vite + React'
  return (
    <>
      <NavBar />
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
      </div>

      <ItemListContainer mensaje={saludo} />
    </>
  )
}

export default App
