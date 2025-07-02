import './App.css'
import { Button } from './components/Button'
import { Icon } from './components/Icon'
import { Input } from './components/Input'
import { Stack } from './components/Stack'
import { Text } from './components/Text'
import { TextArea } from './components/TextArea'

function App() {
  function stampaScelta() {
    console.log('scelta')
  }

  return (
    <Stack flexDirection="column" alignItems="center" gap="50px">
      <Text>Benvenuto su PicsGallery!</Text>
      <Input type="text" onChange={(value) => console.log(value)} />
      <Button onClick={() => stampaScelta()}>Premi</Button>
      <TextArea
        onChange={(value) => console.log(value)}
        placeholder="Scrivi il tuo testo"
        height="10rem"
        width="20rem"
      />
      <Icon iconName={'Heart'} size="6x" color="red" />
    </Stack>
  )
}

export default App
