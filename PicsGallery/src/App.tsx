import './App.css'
import { Stack } from './components/stack'
import { Text } from './components/text'

function App() {
  return (
    <Stack flexDirection="column">
      <Text>Benvenuto nella tua galleria di immagini!</Text>
      <Text as="p">paragrafo 1</Text>
      <Text as="h2">questo invece è un h3</Text>
      <Text as="h5">questo invece è un h5</Text>
    </Stack>
  )
}

export default App
