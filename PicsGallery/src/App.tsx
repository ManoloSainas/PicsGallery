import './App.css'
import { Button } from './components/Button'
import { Stack } from './components/Stack'
import { Text } from './components/Text'

function App() {
  return (
    <Stack flexDirection="column" alignItems="center">
      <Text>Benvenuto nella tua galleria di immagini!</Text>
      <Button onClick={() => console.log('Tasto premuto')}>Ciao!</Button>
    </Stack>
  )
}

export default App
