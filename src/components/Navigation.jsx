/* eslint-disable react/prop-types */
const Navigation = (props) =>  {
  return (
    <div className="navegacao">
      <input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked onClick={() => props.setpage(0)}/>
      <label htmlFor="pagina-0">Pratos principais</label>
      <input type="radio" name="opcao-pagina" id="pagina-1" onClick={() => props.setpage(1)}/>
      <label htmlFor="pagina-1">Sobremesas</label>
      <input type="radio" name="opcao-pagina" id="pagina-2" onClick={() => props.setpage(2)}/>
      <label htmlFor="pagina-2">Bebidas</label>
    </div>
  )
}

export default Navigation
