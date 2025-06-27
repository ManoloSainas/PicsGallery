import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Stack } from './components/Stack'
import { Text } from './components/Text'

function App() {
  return (
    <Stack flexDirection="column" alignItems="center" gap="50px">
      <Text>Benvenuto nella tua galleria di immagini!</Text>
      <Button onClick={() => console.log('Tasto premuto')}>Ciao!</Button>
      <Input type="text" onChange={(value) => console.log(value)} />
    </Stack>
  )
}

export default App
