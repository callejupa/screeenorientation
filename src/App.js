import React from 'react';
import { Dimensions, Text, View, SafeAreaView, ScrollView } from 'react-native'
import Menu from './components/Menu'
import styles from './style'

class App extends React.Component { 

  componentWillMount(){
    this.getOrientation()
  }

  handleLayoutChange(){
    this.getOrientation()
  }

  getOrientation(){
    const { width, height } = Dimensions.get('window')
    const orientation = height > width ? 'Portrait' : 'Landscape'
    console.log('WDTH: '+width +' HEIGHT: '+ height)
    this.setState({
      orientation
    })
  }

  render(){
    return(
      <SafeAreaView
        onLayout={ () => this.handleLayoutChange()}
        style={styles.container}>
          
          
            <Menu orientation={this.state.orientation} />
          <View style={styles.main}>
            <Text>Main Content</Text>
          </View>
                        
      </SafeAreaView>
      
    )
  }
}

export default App;
