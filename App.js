import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/pages/HomeScreen';
import RegisterUser from './src/pages/RegisterUser';
import UpdateUser from './src/pages/UpdateUser';
import ViewUser from './src/pages/ViewUser';
import ViewAllUser from './src/pages/ViewAllUser';
import DeleteUser from './src/pages/DeleteUser';
import Syncronize from './src/pages/Syncronize';

import * as React from 'react';
import { useEffect, useState } from 'react';
//import { DatabaseConnection } from './src/database/database-connection';

//const db = DatabaseConnection.getConnection();
const Stack = createStackNavigator();

// function syncroDB() {
//   useEffect(() => {
//   db.transaction(function (txn) {
//     txn.executeSql(
//       "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
//       [],
//       function (tx, res) {
//         console.log('item:', res.rows.length);
//         if (res.rows.length == 0) {
//           txn.executeSql('DROP TABLE IF EXISTS table_user', []);
//           txn.executeSql(
//             'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), contact INT(10), address VARCHAR(255))',
//             []
//             );
//           }
//         }
//         );
//       });
//     }, []);
      
//   const [dados, setDados] = useState([]);

//   useEffect(() => {
//     fetch('https://siad.com.br/apimobile/api.php?funcao=get_pessoas')
//       .then(res => res.json())
//       .then(json => {setDados(json.dados)})
//       .catch(() => alert('Error'))
    
//       dados.map((dados) => {
//         db.transaction(function (tx) {
//           tx.executeSql(
//             'INSERT INTO table_user (name, contact, address) VALUES (?,?,?)',
//             [dados.nome, dados.telefone, dados.endereco],
//             (tx, results) => {
//               console.log('Results', results.rowsAffected);
//             }
//           );
//         });
//       });
//   }, []);
// };

const App = () => {
  //syncroDB();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Registro de Usuários',
            headerStyle: {
              backgroundColor: '#00AD98',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterUser}
          options={{
            title: 'Cadastrar Usuário',
            headerStyle: {
              backgroundColor: '#2992C4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Update"
          component={UpdateUser}
          options={{
            title: 'Atualizar Usuário',
            headerStyle: {
              backgroundColor: '#A45BB9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="View"
          component={ViewUser}
          options={{
            title: 'Visualizar Usuário',
            headerStyle: {
              backgroundColor: '#F9AD29',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ViewAll"
          component={ViewAllUser}
          options={{
            title: 'Visualizar Todos os Usuários',
            headerStyle: {
              backgroundColor: '#384F62',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Delete"
          component={DeleteUser}
          options={{
            title: 'Excluir Usuário',
            headerStyle: {
              backgroundColor: '#D1503A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Syncronize"
          component={Syncronize}
          options={{
            title: 'Sincronizar',
            headerStyle: {
              backgroundColor: '#D1503A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;