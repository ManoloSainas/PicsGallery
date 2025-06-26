import './App.css'
import { Button } from './components/button'
import { Stack } from './components/stack'
import { Text } from './components/text'

function App() {
  return (
    <Stack flexDirection="column">
      <Text>Benvenuto nella tua galleria di immagini!</Text>
      <Button>Ciao!</Button>
    </Stack>
  )
}

export default App
