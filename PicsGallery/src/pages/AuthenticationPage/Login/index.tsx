import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Stack } from '../../../components/Stack'
import { Text } from '../../../components/Text'

export const Login = () => {
  return (
    <Stack flexDirection="column" justifyContent="center" height="100%">
      <Text as="p">Email</Text>
      <Input onChange={(value) => console.log(value)} type="text" />
      <Text as="p">Password</Text>
      <Input onChange={(value) => console.log(value)} type="password" />
      <Stack flexDirection="column" alignItems="center" width="100%" padding="4rem 0 0 0">
        <Button
          onClick={() => console.log('clicked')}
          backgroundColor="#8bfa85"
          fontSize="1.8rem"
          borderRadius="20px"
          border="0.1rem solid white"
        >
          Accedi
        </Button>
      </Stack>
    </Stack>
  )
}
