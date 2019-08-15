import React from 'react';
import {
  Text,
  Alert,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,

} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {

  constructor(Props) {
    super(Props);

    this.state = {
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1
    }
  }

  componentDidMount() {
    this.initializeGame();
  }

  getWinner() {
    const NUM_TILE = 3;
    var arr = this.state.gameState;
    var sum;
    // check rows
    for (var i = 0; i < NUM_TILE; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum == 3) { return 1; }
      else if (sum == -3) { return -1 }
      //check columns
    }
    for (var i = 0; i < NUM_TILE; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum == 3) { return 1; }
      else if (sum == -3) { return -1 }
    }
    //check leading Diagonal

    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum == 3) { return 1; }
    else if (sum == -3) { return -1 }

    //check other Diagonal

    sum = arr[2][0] + arr[1][1] + arr[0][2];
    if (sum == 3) { return 1; }
    else if (sum == -3) { return -1 }

    return 0;
  }



  onTilePress(row, col) {
    //Dint change tiles

    var value = this.state.gameState[row][col];
    if (value !== 0)
      return;

    // set The current tile
    var currentPlayer = this.state.currentPlayer;
    var arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({ gameState: arr });
    // Switch to other player
    var nextPlayer = (currentPlayer == 1 ? -1 : 1);
    this.setState({ currentPlayer: nextPlayer });

    //Display winner
    var winner = this.getWinner();
    if (winner == 1) {
      Alert.alert("Player 1 is the winner");
      this.initializeGame();
    }
    else if (winner == -1) {
      Alert.alert("Player 2 is the winner");
      this.initializeGame();
    }

  }


  initializeGame = () => {
    this.setState({
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1,
    });
  }

  onPressButton=()=>{
    this.initializeGame();
  }

  renderIcon = (row, col) => {
    var value = this.state.gameState[row][col];
    switch (value) {
      case 1: return <Icon name="close" style={styles.tilex} />
      case -1: return <Icon name="circle-o" style={styles.tileO} />
      default: return <View />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 59, backgroundColor: "green" }}><Text>Welcome To Benndip's TicTacToe</Text></View>
        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity onPress={() => this.onTilePress(0, 0)}
            style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]}>
            {this.renderIcon(0, 0)}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.onTilePress(0, 1)}
            style={[styles.tile, { borderTopWidth: 0 }]}>
            {this.renderIcon(0, 1)}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.onTilePress(0, 2)}
            style={[styles.tile, { borderRightWidth: 0, borderTopWidth: 0 }]}>
            {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity onPress={() => this.onTilePress(1, 0)}
            style={[styles.tile, { borderLeftWidth: 0 }]}>
            {this.renderIcon(1, 0)}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.onTilePress(1, 1)}
            style={styles.tile}>
            {this.renderIcon(1, 1)}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.onTilePress(1, 2)}
            style={[styles.tile, { borderRightWidth: 0 }]}>
            {this.renderIcon(1, 2)}
          </TouchableOpacity>

        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => this.onTilePress(2, 0)}
            style={[styles.tile, { borderLeftWidth: 0, borderBottomWidth: 0 }]}>
            {this.renderIcon(2, 0)}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.onTilePress(2, 1)}
            style={[styles.tile, { borderBottomWidth: 0 }]}>
            {this.renderIcon(2, 1)}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.onTilePress(2, 2)}
            style={[styles.tile, { borderRightWidth: 0, borderBottomWidth: 0 }]}>
            {this.renderIcon(2, 2)}
          </TouchableOpacity>
        </View>
        <View style={{paddingTop:50}}><Button title=" Start New Game" onPress={this.onPressButton}/></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tile: {
    width: 100,
    height: 100,
    borderWidth: 8,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tilex: {
    color: "red",
    fontSize: 60,

  },
  tileO: {
    color: "green",
    fontSize: 60,

  }
})