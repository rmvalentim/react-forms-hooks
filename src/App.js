
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';


function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarFormulario} validarCpf={validarCPF}/>
    </Container>
  );
}

const aoEnviarFormulario = (dados) => {
  console.log(dados);
}

const validarCPF = (cpf) => {
  if(cpf.length !== 11) {
    return {valido: false, texto: 'CPF deve ter 11 dígitos'}
  }
  return {valido: true, texto: ''}
}

export default App;
