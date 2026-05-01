# Anotações React

Criar react:
```bash
npm create vite@latest .
```

Baixar react-router-dom:
```bash
npm i react-router-dom
```

Go live do React
```bash
npm run dev
```

Interpretar como variavel e não texto:
```bash
{ variavel }
```

## Estrutura do React

Main:
```bash
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

App:
```bash
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Ex01 from './pages/Ex01'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Ex01' element={<Ex01 />} />
      </Routes>
    </>
  )
}
export default App
```

Home:
```bash
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h2>Exercícios</h2>
      <Link to="/Ex01"><button>Exercício 1</button></Link>
      <Link to="/Ex02"><button>Exercício 2</button></Link>
    </>
  )
}
export default Home
```

Exercícios:
```bash
import { useState } from 'react'

function Ex01() {
  const [valor, setValor] = useState('')
  const [resultado, setResultado] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setResultado(/* lógica aqui */)
  }

  return (
    <>
      <h2>Exercício 01</h2>
      <form onSubmit={handleSubmit}>
        <label>Campo:</label>
        <input
          type="text"
          value={valor}
          onChange={(event) => setValor(event.target.value)}
        />
        <button type="submit">Calcular</button>
      </form>
      {resultado && <p>{resultado}</p>}
    </>
  )
}
export default Ex01

Navegação entre Páginas:
```bash

```