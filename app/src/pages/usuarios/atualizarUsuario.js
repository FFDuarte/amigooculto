import React , { useState, useEffect , useParams} from 'react';
import { Table , ButtonGroup , Button , Input , FormGroup , Form , Label} from 'reactstrap';
import api from '../../services/api';
import {  Row, Col } from 'reactstrap';
import SideBar from '../../components/sidebar';

const style = {
  padding: 40
}




function AtualizarUsuario() {

const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
const [tipo, setTipo] = useState('');

const {idUsuario} = useParams();

useEffect(() => {
  async function getUsuario(){
    var response = await api.get('http://localhost:5000/api/usuarios.pesquisar/' + idUsuario);
    setNome(response.data.nome_usuario);
    setEmail(response.data.email_usuario);
  }
 getUsuario();
},[])
  
  async function handleSubmit(){
    const data  = {
      nome_usuario:nome, 
      email_usuario:email, 
      _id:idUsuario}

      const response = await api.put('http://localhost:5000/api/usuarios' , data);

      if(response.status===200){
        window.location.href=('/');
      }else{
        alert('erro ao autualizar o usuario');
      }

  }
  return (
        <Row >
            <Col xs="2"><SideBar></SideBar></Col>
            <Col xs="auto" style={style}>
                  <Form>
                    <FormGroup>
                        <Label for="nome">Nome</Label>
                        <Input type="nome" name="nome" id="nome" placeholder={nome} value={nome}
                            onChange={ e => setNome(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder={email} value={email}
                            onChange={ e => setEmail(e.target.value)}/>
                    </FormGroup>
                    <Button onClick={handleSubmit}>Salvar</Button >
                  </Form>
            </Col>    
        </Row>  
    
  );
}

export default AtualizarUsuario;
   