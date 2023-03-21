import { useState } from "react";

import ("../css/TextBox.css")
const TextBox = ()=> {
  const [bgColor, setBgColor] = useState('indigo');
  return(
  <>
  <article title="articulo principal" style={{backgroundColor: bgColor}}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto eligendi cumque praesentium mollitia quae quis dicta excepturi vitae dolores inventore molestiae facere quos, tempore maiores sed fugit quo laborum!
  </article>
  <button onClick={()=>setBgColor(bgColor === 'indigo' ? 'dodgerblue': 'indigo')}>Pulsa para cambiar</button>
  </>
  )
}

export default TextBox;