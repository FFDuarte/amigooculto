import React  , {useState} from 'react';
import { Button, Form, FormGroup, Label, Input ,  Row , Col } from 'reactstrap';
import SideBar from '../../components/sidebar';
import api from '../../services/api';


const style = {
    padding: 40
  }
  
  function CadastroUsuario() {
  
      const [nome, setNome] = useState('');
      const [email, setEmail] = useState('');
      
      async function handleSubmit(){
          const data  = {
          nome_usuario:nome, 
          email_usuario:email, 
          }
  
          const response = await api.post('http://localhost:5000/api/usuarios' , data);
  
          if(response.status===200){
              window.location.href=('/');
          }else{
              alert('erro ao cadastrar o usuario');
          }
  
      }
      
      return (

          <Row >
              <Col xs="2"><SideBar></SideBar></Col>
              <Col xs="auto" style={style}>
                  <Form>
                    <FormGroup>
                        <Label for="nome">Nome</Label>
                        <Input type="nome" name="nome" id="nome" placeholder="Nome do pessoa" value={nome}
                            onChange={ e => setNome(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email da pessoa" value={email}
                            onChange={ e => setEmail(e.target.value)}/>
                    </FormGroup>
                    <Button onClick={handleSubmit}>Salvar</Button >
                  </Form>
              </Col>    
          </Row>  
    );
  }
  
  export default CadastroUsuario;