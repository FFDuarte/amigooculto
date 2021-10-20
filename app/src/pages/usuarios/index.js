import React , { useState, useEffect} from 'react';
import { Table , ButtonGroup , Button} from 'reactstrap';
import api from '../../services/api';
import {  Row, Col } from 'reactstrap';
import SideBar from '../../components/sidebar';
import { useHistory } from "react-router-dom";


const style = {
  padding: 40
}


const Example = (props) => {

  let history = useHistory();

  const Cadastrar = () => history.push('/usuarios/cadastrar');

  const [ usuarios , setUsuarios] = useState([]);
  useEffect(() => {
    
    async function loadUsuarios(){
      const response = await api.get('http://localhost:5000/api/usuarios')
      setUsuarios(response.data);
    }
    loadUsuarios();
  },[])

  async function handleDelete(id){
    if(window.confirm("Deseja realmente deletar o usuario ? ")){
      var result = await api.delete('http://localhost:5000/api/usuarios/'+ id);
      if(result.status === 200){
        window.location.href = '/usuarios' ;
      }else{
        alert('Ocorreu um erro! Tente novamente.')
      }
    }
  }
  return (
    <div>
        <Row >
          <Col xs="2"><SideBar></SideBar></Col>
          <Col xs="auto" style={style}>
          <Button color="secondary" onClick={Cadastrar}>Cadastrar</Button>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Email</th>

                </tr>
              </thead>
              <tbody>
              {usuarios.map((row) => (
                                
                                <tr
                                  key={row._id}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                  <td># </td>
                                  <td component="th" scope="row">
                                    {row.nome_usuario}
                                  </td>
                                  <td align="center"> { row.email_usuario } </td>
                                  <td align="right">
                                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                      <Button color="secondary" href={'/usuarios/editar/'+row._id}>Atualizar</Button>
                                      <Button color="primary"   onClick={() => handleDelete(row._id)}>Excluir</Button>
                                    </ButtonGroup>
                                  </td>
                                </tr>
                              ))}
              </tbody>
          </Table>
        </Col>

        </Row>
    </div>
    
  );
}

export default Example;
   