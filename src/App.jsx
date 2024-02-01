import { useState } from 'react'
import './App.css'
import hashtaurant from './assets/hashtaurante.webp'
import { bebidas, pratosPrincipais, sobremesas } from './cardapio'
import Menu from './components/Menu'
import Navigation from './components/Navigation'

function App() {
  const menu_pages = [sobremesas, bebidas, pratosPrincipais]
  const [page, setpage] = useState(0)
  return (
    <>
      <img src={hashtaurant} alt="" className='capa'/>
      <h1>test</h1>
      <Navigation setpage={setpage}/>
      <div className='menu'>
        {
          menu_pages[page].map(prato => (
            <Menu
              key={prato.nome}
              nome={prato.nome}
              descricao={prato.descricao}
              preco={prato.preco}
              imagem={prato.imagem}
            />
          ))
        }
      </div>
    </>
  )
}

export default App
