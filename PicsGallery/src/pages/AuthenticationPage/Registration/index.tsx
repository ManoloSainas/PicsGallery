import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Stack } from '../../../components/Stack'
import { Text } from '../../../components/Text'

export const Registration = () => {
  return (
    <Stack flexDirection="column">
      <Text as="p">Nome</Text>
      <Input onChange={(value) => console.log(value)} type="text" />
      <Text as="p">Email</Text>
      <Input onChange={(value) => console.log(value)} type="text" />
      <Text as="p">Password</Text>
      <Input onChange={(value) => console.log(value)} type="text" />
      <Text as="p">Conferma password</Text>
      <Input onChange={(value) => console.log(value)} type="text" />
      <Stack flexDirection="column" alignItems="center" width="100%" padding="4rem 0 0 0">
        <Button
          onClick={() => console.log('clicked')}
          backgroundColor="#8bfa85"
          fontSize="1.8rem"
          borderRadius="20px"
          border="0.1rem solid white"
        >
          Registrati
        </Button>
      </Stack>
    </Stack>
  )
}
