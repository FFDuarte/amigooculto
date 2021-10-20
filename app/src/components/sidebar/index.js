import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import {useHistory} from 'react-router-dom';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

function App() {
  const history = useHistory();
    return (
      
      <>
        <div className="p-3 my-2 rounded">
          <Toast>
            <ToastHeader>
              JOGO AMIGO SECRETO
            </ToastHeader>
            <ToastBody>
              Cadastre as pessoas em 'PESSOAS' e faça o sorteio em 'SORTEIO'
            </ToastBody>
          </Toast>
        </div>
        <Navigation
            // you can use your own router's api to get pathname
           
            activeItemId="/management/members"
            onSelect={({itemId}) => {
              history.push(itemId)
            }}
            items={[
              {
                title: 'Pessoas',
                itemId: '/',
                elemBefore: () => <icon name="users" />,
            
              },
              {
                title: 'Sorteio',
                itemId: '/sorteio',
              },
            ]}
          />
      </>
    );
}

export default App;