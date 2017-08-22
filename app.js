import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet,ScrollView } from 'react-native'
import { FIRST_URL,SECOND_URL } from './constants'
import { connect } from 'react-redux'
import { fetchDataFromAPI } from './actions'

let styles

const App = (props) => {
  
  const {
    container,
    text,
    button,
    buttonText
  } = styles
  const { datamodle, isFetching } = props.datamodle;
  state={
      myText: 'Data loading'
  }
  return (
    <View style={container}>
      <Text style={text}>Redux Example</Text>
      <TouchableHighlight style={button} onPress={() => props.getDataRes(FIRST_URL)}>
        <Text style={buttonText}>Load City</Text>
      </TouchableHighlight>
      
        <TouchableHighlight style={button} onPress={() => props.getDataRes(SECOND_URL)}>
        <Text style={buttonText}>Load Country</Text>
      </TouchableHighlight>
      <ScrollView style={container}>
      
      {
        isFetching && <Text>{this.state.myText}</Text>
      }
      {
        datamodle.length ? (
          datamodle.map((resulttext, i) => {
            return <View key={i} >
                 <View style={styles.boxone}> 
              <Text style={buttonText}>First Value: {resulttext[0]}</Text>
              <Text style={buttonText}>Second Value: {resulttext[1]}</Text>
               </View> 
            </View>
          })
        ) : null
      }
      </ScrollView>
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom:20,
  },
  text: {
    textAlign: 'center',
     color: 'white'
  },
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  boxone: {
    padding:20,
    backgroundColor:'#00DCB4',
    marginTop:10

  }
})

function mapStateToProps (state) {
  return {
    datamodle: state.datamodle
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getDataRes: (url) => dispatch(fetchDataFromAPI(url)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)