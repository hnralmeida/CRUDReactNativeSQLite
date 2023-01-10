import React, { useState, useEffect } from 'react';
import {
    View,
    SafeAreaView,
} from 'react-native';

import MyImageButton from './components/MyImageButton';
import { DatabaseConnection } from '../database/database-connection';

const db = DatabaseConnection.getConnection();


function clickSync(){ 
    
}

const Syncronize = () => {
    
    const [dados, setDados] = useState([]);

    useEffect(() => {
        db.transaction(function (txn) {
          txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
            [],
            function (tx, res) {
              console.log('item:', res.rows.length);
              if (res.rows.length == 0) {
                txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                txn.executeSql(
                  'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
                  []
                );
              }
            }
          );
        });
      }, [clickSync()]);

    useEffect(() => {
        fetch('https://siad.com.br/apimobile/api.php?funcao=get_pessoas')
            .then(res => res.json())
            .then(json => { setDados(json.dados) })
            .catch(() => alert('Error'))
    
        dados.map((dados) => {
            db.transaction(function (tx) {
                tx.executeSql(
                    'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
                    [dados.nome, dados.telefone, dados.endereco],
                    (tx, results) => {
                        console.log('Results', results.rowsAffected);
                    }
                );
            });
        });
    }, [clickSync]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>

                    <MyImageButton
                        title="Sincronizar"
                        btnColor='#A45BB9'
                        btnIcon="wifi"
                        customClick={() => clickSync()}
                    />

                </View>
            </View>
        </SafeAreaView>
    );
};

export default Syncronize;