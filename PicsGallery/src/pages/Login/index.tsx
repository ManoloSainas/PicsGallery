import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Stack } from '../../components/Stack'
import { Text } from '../../components/Text'

export const Login = () => {
  return (
    <Stack
      backgroundColor="#EEEEEE"
      flexDirection="column"
      alignItems="center"
      padding="50px"
      borderRadius="30px"
    >
      <Text>Login</Text>
      <Stack flexDirection="column" justifyContent="center">
        <Text as="p">Email</Text>
        <Input onChange={(value) => console.log(value)} type="text" />
        <Text as="p">Password</Text>
        <Input onChange={(value) => console.log(value)} type="password" />
        <Stack
          flexDirection="column"
          alignItems="center"
          width="100%"
          padding="50px 0px 0px 0px"
          gap="20px"
        >
          <Button
            onClick={() => console.log('clicked')}
            backgroundColor="#0D70EE"
            fontSize="25px"
            borderRadius="20px"
          >
            Accedi
          </Button>
          <Button
            onClick={() => console.log('clicked')}
            fontSize="15px"
            borderRadius="20px"
          >
            Registrati
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
