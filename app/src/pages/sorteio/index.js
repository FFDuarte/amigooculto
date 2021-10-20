import React , { useState, useEffect} from 'react';
import { Table } from 'reactstrap';
import api from '../../services/api';
import {  Row, Col ,   } from 'reactstrap';
import SideBar from '../../components/sidebar';
import "./index.css";

const style = {
  padding: 40
}


const Example = (props) => {

  const [ usuarios , setUsuarios] = useState([]);

  useEffect(() => {
    async function enviarEmail(email){
     
      const responde = await api.post('http://localhost:5000/send' + email)
    }
  },[])

  useEffect(() => {
    
    async function loadUsuarios(){
      const response = await api.get('http://localhost:5000/api/usuarios')
      setUsuarios(response.data);
    }
    loadUsuarios();
  },[])
  
  const initialDelay = 50;
  const limit = 30;

  const [name, setName] = React.useState(null);
  const [count, setCount] = React.useState(limit);
  const [names, setNames] = React.useState([]);
  const [delay, setDelay] = React.useState(initialDelay);
 
  const [isFinal, setIsFinal] = React.useState(false);
  const [originalNames, setOriginalNames] = React.useState("");

  const randomizeName = () => {
    let index = Math.floor(Math.random() * names.length);
    setName(names[index]);
  };

  const shouldRandomizeName = () => {
    if (count < limit) {
      randomizeName();
      setCount(count + 1);
      switch (count) {
        case limit * 0.5:
          setDelay(delay * 2);
          break;
        case limit * 0.7:
          setDelay(delay * 1.5);
          break;
        case limit * 0.8:
          setDelay(delay * 1.2);
          break;
        default:
          break;
      }
    }
    if (count === limit && name) {
      setIsFinal(true);
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      shouldRandomizeName();
    }, delay);
  }, [count, delay, shouldRandomizeName]);

  const startRandomize = () => {
    setDelay(initialDelay);
   
    setIsFinal(false);
    setCount(0);
  };
    
  const buildNewNames = newNames => {

    setOriginalNames(newNames);
    newNames = newNames
      .replace(/(.+)\n/g, "$1,")
      .split(",")
      .filter(item => !!item);

    setNames(newNames);
  };


  return (
    <div>
        <Row >
          <Col xs="2">
            <SideBar></SideBar>
          </Col>
          <Col style={style}>
              <div
                className={`text-center d-flex flex-column align-items-center justify-content-center ${isFinal && " text-white"}`}
                style={{  backgroundColor: `${isFinal ? "#0644A0" : "white"}` }}
              >
                <div>
                  <h1 className={`display-1`}>{name}</h1>
                </div>
                <div className="container-fluid">
                
                
                    <div className="row mt-2">
                      <div className="col-6 col-lg-4 m-auto">
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
                                <td component="th" scope="row" >
                                  {row.nome_usuario}
                                </td>
                                <td align="center" > 
                                  { row.email_usuario } 
                                </td>
                              </tr>
                            ))}
                          </tbody>
                      </Table>
                      </div>
                    </div>  
               
                  <div className="text-center mt-2">
                    <button className="btn btn-secondary" onClick={startRandomize}>
                      Sortear
                    </button>
                    {usuarios.map((row) => (  
                      <button className="ml-2 btn btn-outline-secondary"   onClick={() => enviarEmail(row.nome_usuario , row.email_usuario)}>
                        Enviar Email
                      </button>
                    ))}         
                  </div>
                </div>
              </div>
            
          </Col>
        </Row>
    </div>
    
  );
}

export default Example;
   