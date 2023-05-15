import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Desconto</Text>

      <TextInput style={styles.input} placeholder="Digite seu email" />
      <TextInput style={styles.input} placeholder="Digite sua senha" />

      <Button title="Verificar" />

      <Text style={styles.status}>...</Text>
      <View style={styles.cupomArea}>
        <Text style={styles.cupomTitle}>Codigo de cupom: </Text>
        <Text style={styles.cupomCode}>KUEBD56782</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
  },
  header: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 45,
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#555',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  status: {
    margin: 50,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  cupomArea: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 30,
  },
  cupomTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  cupomCode: {
    textAlign: 'center',
    fontSize: 40,
  },
});

export default App;
