import { useState } from 'react'
import { Button } from '../../components/Button'
import { Stack } from '../../components/Stack'
import { Login } from './Login'
import { Registration } from './Registration'

export const AuthenticationPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true)

  return (
    <Stack
      backgroundColor="white"
      flexDirection="column"
      alignItems="center"
      borderRadius="30px"
      minWidth="20rem"
      height="30rem"
      border="0.2rem solid #8bfa85"
    >
      <Stack padding="3rem 0 1.5rem 0" width="100%">
        <Stack width="50%">
          <Button
            onClick={() => setIsLogin(true)}
            borderRadius="30px"
            border="0 none white"
            fontSize="1.4rem"
            width="100%"
            backgroundColor="gray"
          >
            Login
          </Button>
        </Stack>
        <Stack width="50%">
          <Button
            onClick={() => setIsLogin(false)}
            borderRadius="30px"
            border="0 none white"
            fontSize="1.4rem"
            width="100%"
            backgroundColor="gray"
          >
            Registrazione
          </Button>
        </Stack>
      </Stack>

      {isLogin ? <Login /> : <Registration />}
    </Stack>
  )
}
