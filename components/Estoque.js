import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";


const Estoque = (props) => {
  const [quantidadeProduto, setQuantidadeProduto] = useState("");

  const handleAdicionarQuantidade = () => {
    if (quantidadeProduto) {
      props.adicionarQuantidade(props.text, quantidadeProduto);
      setQuantidadeProduto("");
    }
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}>
        <TextInput
          style={styles.inputQuantidade}
          placeholder=""
          value={quantidadeProduto}
          onChangeText={(text) => setQuantidadeProduto(text)}
          keyboardType="numeric"
        />
        <Button title="Adicionar Quantidade" onPress={handleAdicionarQuantidade} />
        <Button title="Excluir" onPress={() => props.excluirProduto(props.text)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});

export default Estoque;