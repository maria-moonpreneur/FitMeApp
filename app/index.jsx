import {View,Text,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import * as Font from "expo-font";

export default function Index(){

  const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
    async function loadFonts() {
        await Font.loadAsync({
          'open-sans-bold': { uri: 'https://fonts.googleapis.com/css2?family=Madimi+One&display=swap' },
          'montserrat-bold': { uri: 'https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459WlhyyTh89ZNpQ.woff2' }
          
        });
        setFontsLoaded(true);
      }
      loadFonts();
    }, []);

    const router=useRouter();

    return(
        <View className="flex-1 flex justify-end">
           <StatusBar style="light"/>
           <Image className="h-full w-full absolute" source={require('../assets/images/wallpaper2.jpg')}/>
        
           <LinearGradient
            colors={['transparent','#18181b']}
            style={{width:wp(100),height:hp(70)}}
            start={{x:0.5,y:0}}
            end={{x:0.5,y:0.8}}
            className="flex justify-end pb-12 space-y-8"
            >
                <Animated.View entering={FadeInUp.delay(900).springify()} className="flex items-center">
                   <Text style={{fontSize:hp(6), fontFamily: 'montserrat-bold'}} className="text-white tracking-wide">Best
                     <Text className="text-blue-500" style = {{fontFamily: 'montserrat-bold'}}> Workouts</Text>
                   </Text>
                   <Text style={{fontSize:hp(6), fontFamily: 'montserrat-bold'}} className="text-white tracking-wide">For You
                    
                   </Text>

                </Animated.View>

                <Animated.View entering={FadeInDown.delay(900).springify()}>
                    <TouchableOpacity onPress={()=>router.push('home')}
                      style={{
                        height:hp(7),
                        width:wp(80),
                        backgroundColor: 'blue',
                        borderRadius: 20
                        }}
                      className="flex items-center justify-center mx-auto"
                    >
                        <Text style={{fontSize:hp(4),color:'white', alignContent:"space-between"}} className="text-pink font-bold tracking-wide">
                            Get Started
                        <AntDesign name="arrowright" size={30} color="white" style={{}} />
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>           
        </View>
    )
}