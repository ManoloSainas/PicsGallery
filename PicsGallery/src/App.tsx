import './App.css'
import { Button } from './components/button'
import { Stack } from './components/stack'
import { Text } from './components/text'

function App() {
  return (
    <Stack flexDirection="column" alignItems="center">
      <Text>Benvenuto nella tua galleria di immagini!</Text>
      <Button onClick={() => console.log('Tasto premuto')}>Ciao!</Button>
    </Stack>
  )
}

export default App
