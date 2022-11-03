import { Center, Text, Icon } from "native-base";
import { Fontisto } from '@expo/vector-icons';

import Logo from '../assets/logo.svg'
import { Button } from '../components/Button'

export function SignIn() {
  return (
  <Center flex={1} bgColor="gray.900" p={7}>
    <Logo width={212} height={40} /> 
    <Button
      mt={12}
      type="SECONDARY"
      title="Entrar com Google"
      leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
    />
    <Text color="white" textAlign="center" mt={4}>
    Não utilizamos nenhuma informação além{'\n'}do seu e-mail para criação de sua conta.
    </Text>
  </Center>
  )
}