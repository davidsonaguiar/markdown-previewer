import { useState } from "react"
import Container from "./components/container"
import Title from "./components/title"
import Input from "./components/input"
import Output from "./components/output"

const initialState = `
  # Título
  ## Subtítulo

  textos: 

  * **negrito**
  * *italic*
  * [link](https://www.freecodecamp.org/)
  * ${"`CODE`"}
  ~~~
    function sum(a, b) {
      return a + b
    }
  ~~~

  > Blockquote

  ![Minha imagem](https://styles.redditmedia.com/t5_34mfx/styles/communityIcon_odbxo8lc3tv41.png)
`

function App() {

  const [ state, setState ] = useState<string>(initialState)

  return (
    <Container>
      <Title>Markdown Previewer</Title>
      <div className="flex">
        <Input
          label="Digite aqui seu Markdown:"
          name="editor"
          value={state}
          handleChange={setState}/>
        <Output>
          {state}
        </Output>
      </div>
    </Container>
  )
}

export default App
