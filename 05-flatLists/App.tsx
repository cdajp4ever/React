import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  RefreshControl,
  Text,
  View,
  Image,
  FlatList,
  TouchableHighlightBase
} from "react-native";
import { Images, Colors, Metrics } from "./App/Themes";
import IDCard from "./App/Components/IDCard";
import { IPerson } from "./App/Types";
import { people, generatePeople, createPerson } from "./App/pojo/people";
import Icon from "react-native-vector-icons/FontAwesome";

interface IState {
  buttonText: string;
  people: IPerson[];
  refreshing: boolean;
}

export default class App extends React.Component<{}, IState> {
  state = {
    buttonText: "Show me your ID Card!",
    people: [...people],
    refreshing: false
  };

  constructor(props: {}) {
    super(props);
  }

  showCard = () => {
    console.log("Network!");
    this.setState({ people: generatePeople() });
  };

  _keyExtractor = (item: IPerson, index: number) => index.toString();

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.setState({
      people: [...this.state.people, createPerson()],
      refreshing: false
    });
  };

  render() {
    const myIcon = <Icon name="rocket" size={30} color="#900" />;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          refreshControl={
            <RefreshControl
              colors={["#9Bd35A", "#689F38"]}
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
          data={[...this.state.people]}
          renderItem={({ item }) => <IDCard {...item} />}
          keyExtractor={this._keyExtractor}
        />
        {myIcon}
        <Button title={this.state.buttonText} onPress={this.showCard} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow,
    alignItems: "center",
    justifyContent: "center"
  }
});
