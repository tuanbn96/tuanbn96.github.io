import React from 'react';
import {
    View,Text,Image,StyleSheet
} from 'react-native';
import Cat from '../assets/black-cat.png';

export default function CategaryListItem(props){
    return <View style={style.container}> 
        <Text style={style.text} >
           text
        </Text>
        <Image style={style.img} source={Cat}></Image>
    </View>
}

const style = StyleSheet.create({
    img:{
        width:64,
        height:64
    },
    text:{
        textAlign:"center",
        fontWeight:"700",
        textTransform:"uppercase",

    },
    container:{
        alignItems:"center",
        padding:16,
        shadowColor:"#000",
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.3,
        shadowRadius:10,
        borderRadius:5,
        backgroundColor:"#fff",
        margin:16

    }
});