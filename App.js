import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Button, Text, ScrollView } from 'react-native';
import Task from './componenet/Task';
import makeId from './componenet/MakeId';

export default function App() {

  const [value, setValue] = useState("")
  const [todos, setTodo] = useState([])

  const onPress = (() => {
    if (value !== "" ){
      setTodo([...todos, { id: makeId(5), todo : value, status: false}])
      alert("succes")
      setValue("")
    } else {
      alert('form wajib diisi')
    }
  })

  const onChange = (e) => {
    setValue(e)
   }

   console.log("==>", todos)

  return (
    <View style={styles.container} >
        <SafeAreaView >
          <ScrollView style={styles.scroll}>
            <Text style={styles.title}>TODO LIST</Text>
            <TextInput onChangeText={onChange} value={value} style={styles.input} />
            <Button title='submit' onPress={onPress}/>
            <StatusBar style="auto" />
            <View style={styles.task}>
                {todos?.map((e) => <Task text={e.todo} setTodo={setTodo} todo={e} todos={todos}/>)}
            </View>
          </ScrollView>
        </SafeAreaView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  title : {
    fontSize : 20,
    textAlign: "center",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    width : 250,
    marginBottom : 5,
    borderWidth: 1,
    padding: 10,
  },
  task : {
    marginTop: 10,
    color: "black",
  },
  scroll: {
    marginTop: 200,
  }
});
