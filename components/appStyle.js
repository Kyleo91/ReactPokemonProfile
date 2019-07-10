import { StyleSheet, Dimensions } from 'react-native';
let viewportWidth = Dimensions.get('window').width;
if (viewportWidth > 700) {
    viewportWidth = 700;
}

const styles = StyleSheet.create({
    pokemonPCApplication: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },

    instructions: {
      fontWeight: "bold"
    },

    appSize: {
        width: viewportWidth,
        height: 350
    },

    profileColour: {
      backgroundColor: "#dddddd"
    },

    mainMenu: {
        borderColor: "#000000",
        borderWidth: 2,
        borderRadius: 8,
        margin: 10,
        backgroundColor: "#ffffff",
        padding: 10
    },

    menuOptions: {
      textAlign: "center",
      height: 40,
      lineHeight: 35,
      fontSize: 20,
      padding: 5,
      color: "#000000",
      fontWeight: "bold"  
    },

    cardSize: {
      margin: 20,
      fontSize:20,
      lineHeight: 20
    },

    cardTop: {
      paddingLeft: 20,
      paddingRight:20,
      backgroundColor: "#1979E6",
      borderColor: "#000000",
      borderWidth: 2,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      height:40,
    },

    cardTopText: {
      textTransform: "uppercase",
      lineHeight:35,
      fontSize: 25,
      color: "#ffffff"
    },

    cardMiddle: {
      padding: 20,
      backgroundColor: "#AFDBF5",
      color: "#121212",
      height: 200,
      fontSize: 15,
      flexDirection: 'row'
    },

    infoTable: {
      width: "70%",
      height:150,
      flexDirection: 'row',
      flexWrap: 'wrap'
    },

    infoTableTitle: {
      width:"30%",
      height:25,
      fontSize:12,
      lineHeight:12
    },
    
    infoTableData: {
      width:"70%",
      height:25,
      fontSize:12,
      lineHeight:12,
      textAlign: 'right'
    },

    dkSprite: {
      textAlign:"center"
    },


    cardBottom: {
      paddingLeft: 20,
      paddingRight:20,
      backgroundColor: "#1979E6",
      borderColor: "#000000",
      borderWidth: 2,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      height:40,
    },
    
    returnToMenu: {
      textAlign: 'right',
      borderLeftColor: '#000000',
      borderLeftWidth: 2,
      borderTopColor: '#000000',
      borderTopWidth: 2,
      borderTopLeftRadius: 20,
      fontSize: 15,
      lineHeight: 30,
      position: 'absolute',
      bottom: 0,
      right: 0,
      textTransform: 'uppercase',
      backgroundColor: '#ffffff',
      color: '#000000',
      fontWeight: 'bold',
      paddingLeft: 10,
      paddingRight: 10
    },

    invisible: {
      opacity: 0
    }

  });

  export default styles;