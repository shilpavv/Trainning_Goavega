import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
// import FlatCard from './Component/FlatCard'
// import FancyCard from './Component/FancyCard'
import *  as  Yup from 'yup'
 const passwordSchema= Yup.object().shape({
  passwordLength: Yup.number().min(4,'should be min of 4').max(8,'should be max of 8').required('length Required')
})
 export default function Pass ()  {
  const [pass,setpass]=React.useState('')
  const [ispassgenerate,setispassgenerate]=React.useState(false)
  const [lower,setlower]=React.useState(true)
  const [upper,setupper]=React.useState(false)
  const [nmbers,setnumbers]=React.useState(false)
  const [symbol,setsymbol]=React.useState(false)
  const generatepasswordstring=(passwordLength:number)=>{
  }
  const createpasswordstring=(characters:string,passwordLength:number)=>{
    let result=''
    for (let index = 0; index < passwordLength; index++) {
      //round()prevent decimal value
      const characterIndex=Math.round(Math.random()* characters.length)
      // prevent Overwrite (result+=)
      result+=characters.charAt(characterIndex)
      
    }return result

  }
  const resetpasswordstring=(passwordLength:number)=>{

  }

  return (
    <View>
      <Text>App</Text>
      <SafeAreaView>
        <ScrollView>
      {/* <FlatCard/>
      <FancyCard/> */}
        </ScrollView>
      </SafeAreaView>
    </View>

  
  )
}
