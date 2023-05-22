import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [showCupom, setShowCupom] = useState(false);

  const handleVerifyLogin = async () => {
    setStatus('');
    setShowCupom(false);

    try {
      const response = await fetch('http://api.b7web.com.br/loginsimples/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const json = await response.json();

      if (json.status === 'ok') {
        setStatus('Login verificado com sucesso.');
        setShowCupom(true);
      } else {
        setStatus('Falha na verificação do login.');
        setShowCupom(false);
      }
    } catch (error) {
      setStatus('Ocorreu um erro ao verificar o login.');
      setShowCupom(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Desconto</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Button title="Verificar" onPress={handleVerifyLogin} />

      <Text style={styles.status}>{status}</Text>
      {showCupom && (
        <View style={styles.cupomArea}>
          <Text style={styles.cupomTitle}>Codigo de cupom: </Text>
          <Text style={styles.cupomCode}>KUEBD56782</Text>
        </View>
      )}
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
