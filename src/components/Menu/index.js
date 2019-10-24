import React from 'react'
import { View, Text, ScrollView} from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome'

class Menu extends React.Component{

    state = {
        options: [
            {title: 'Dasboard', icon: 'dashboard'},
            {title: 'Inbox', icon: 'inbox'},
            {title: 'Graphs', icon: 'pie-chart'},
            {title: 'Search', icon: 'search'},
            {title: 'Settings', icon: 'gear'},
        ]
    }

    renderOption = (option, index ) => {
        const isLandscape = this.props.orientation === 'Landscape'
        const title = isLandscape ? <Text style={styles.title}>{option.title}</Text> : null
        const iconSize = isLandscape ? 27 : 35

        return (            
            <View key={index} style={[styles.option, styles.landscape]}>
                <Icon name={option.icon} size={iconSize} color='#fff' />
                {title}
            </View>
        )
    }

    render(){
        return(
            <ScrollView style={styles.content}>
                {/* <View style={styles.content}> */}
                    {this.state.options.map(this.renderOption)}
                {/* </View> */}
            </ScrollView>
        )
    }
}

export default Menu