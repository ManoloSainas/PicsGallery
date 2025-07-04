import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Stack } from '../../components/Stack'
import { Text } from '../../components/Text'

export const Login = () => {
  return (
    <Stack backgroundColor="#EEEEEE" flexDirection="column" alignItems="center">
      <Text>Login</Text>
      <Stack flexDirection="column" justifyContent="center">
        <Text as="p">Email</Text>
        <Input onChange={(value) => console.log(value)} type="text" />
        <Text as="p">Password</Text>
        <Input onChange={(value) => console.log(value)} type="password" />
        <Stack flexDirection="column" alignItems="center" width="100%">
          <Button onClick={() => console.log('clicked')} backgroundColor="#0D70EE">
            Accedi
          </Button>
          <Button onClick={() => console.log('clicked')}>Registrati</Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
