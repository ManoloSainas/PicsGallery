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
      borderRadius="30px"
      width="20rem"
      height="30rem"
    >
      <Stack padding="3rem 0 1.5rem 0" width="100%">
        <Stack width="50%">
          <Button
            onClick={() => console.log('clicked login')}
            borderRadius="30px"
            border="0 none gray"
            fontSize="1.4rem"
            width="100%"
          >
            Login
          </Button>
        </Stack>
        <Stack width="50%">
          <Button
            onClick={() => console.log('clicked registrazione')}
            borderRadius="30px"
            border="0 none gray"
            fontSize="1.4rem"
            width="100%"
          >
            Registrazione
          </Button>
        </Stack>
      </Stack>

      <Stack flexDirection="column" justifyContent="center" height="100%">
        <Text as="p">Email</Text>
        <Input onChange={(value) => console.log(value)} type="text" />
        <Text as="p">Password</Text>
        <Input onChange={(value) => console.log(value)} type="password" />
        <Stack
          flexDirection="column"
          alignItems="center"
          width="100%"
          padding="4rem 0 0 0"
        >
          <Button
            onClick={() => console.log('clicked')}
            backgroundColor="#83b9ff"
            fontSize="1.8rem"
            borderRadius="20px"
            border="0.1rem solid blue"
          >
            Accedi
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
