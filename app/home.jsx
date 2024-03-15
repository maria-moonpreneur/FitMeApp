// import React, { useState } from 'react';
// import { View, Text, Image, Switch, TouchableOpacity } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { StatusBar } from 'expo-status-bar';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import BodyParts from '../components/BodyParts';import { useFonts } from 'expo-font';

// export default function Home() {

//     const [darkMode, setDarkMode] = useState(false);

//     const toggleDarkMode = () => {
//         setDarkMode(!darkMode);
//     };

//     return (
//         <SafeAreaView style={{ flex: 1, backgroundColor: darkMode ? '#000' : '#fff' }} edges={['top']}>
//             <StatusBar style={darkMode ? 'light' : 'dark'} />
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: wp(5) }}>
//                 <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
//                     <Text style={{ fontSize: hp(4), color: darkMode ? '#fff' : '#000', fontWeight: 'bold', marginTop: hp(3) }}>READY TO</Text>
//                     <Text style={{ fontSize: hp(5), color: darkMode ? 'blue' : 'blue', fontWeight: 'bold' }}>WORKOUT?</Text>                    
//                     <Text style={{ fontSize: hp(3), color: darkMode ? '#fff' : '#000', fontWeight: 'bold', marginTop: hp(5) }}>EXERCISES FOR YOU</Text>
//                     <TouchableOpacity >
//                         <Image source={require('../assets/images/camera-photo-icon.png')} style={{ height: hp(8), width: hp(8), borderRadius: hp(2.5), marginBottom: hp(0) }} />
//                     </TouchableOpacity>
                    
//                 </View>
//                 <View style={{ position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
//                     <View style={{ justifyContent: 'center', alignItems: 'center' }}>     
//                     <TouchableOpacity>                   
//                         <Image source={require('../assets/images/avatar.jpg')} style={{ height: hp(8), width: hp(7), borderRadius: hp(2.5), marginBottom: hp(4)}}/>
//                     </TouchableOpacity>
//                     </View>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <Ionicons name={darkMode ? 'sunny' : 'sunny'} size={20} color={darkMode ? '#fff' : '#000'} style={{ marginRight: -3 }} />
//                         <Switch
//                             trackColor={{ false: "#767577", true: "#767577" }}
//                             thumbColor={darkMode ? "#f4f3f4" : "#f4f3f4"}
//                             ios_backgroundColor="#3e3e3e"
//                             onValueChange={toggleDarkMode}
//                             value={darkMode}
//                         />
//                         <Ionicons name={darkMode ? 'moon' : 'moon'} size={20} color={darkMode ? '#fff' : '#000'} style={{ marginLeft: 2 }} />
//                     </View>
//                 </View>
//             </View>
//             <View style={{ flex: 1 }}>
//                 <BodyParts />
//             </View>
//         </SafeAreaView>
//     );
// }




import React, { useState } from 'react';
import { View, Text, Image, Switch, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BodyParts from '../components/BodyParts';
import { useRouter } from 'expo-router';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    const router=useRouter();

    const navigation = useNavigation();

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const navigateToCamera = () => {
        navigation.navigate('Camera'); // Assuming 'Camera' is the name of your camera screen
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: darkMode ? '#000' : '#fff' }} edges={['top']}>
            <StatusBar style={darkMode ? 'light' : 'dark'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: wp(5) }}>
                <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: hp(4), color: darkMode ? '#fff' : '#000', fontWeight: 'bold', marginTop: hp(3) }}>READY TO</Text>
                    <Text style={{ fontSize: hp(5), color: darkMode ? 'blue' : 'blue', fontWeight: 'bold' }}>WORKOUT?</Text>                    
                    <Text style={{ fontSize: hp(3), color: darkMode ? '#fff' : '#000', fontWeight: 'bold', marginTop: hp(5) }}>EXERCISES FOR YOU</Text>
                    <TouchableOpacity onPress={()=>router.push('camera')}>
                        <Image source={require('../assets/images/camera-photo-icon.png')} style={{ height: hp(8), width: hp(8), borderRadius: hp(2.5), marginBottom: hp(0) }} />
                    </TouchableOpacity>
                </View>
                <View style={{ position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/avatar.jpg')} style={{ height: hp(8), width: hp(7), borderRadius: hp(2.5), marginBottom: hp(4)}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name={darkMode ? 'sunny' : 'sunny'} size={20} color={darkMode ? '#fff' : '#000'} style={{ marginRight: -3 }} />
                        <Switch
                            trackColor={{ false: "#767577", true: "#767577" }}
                            thumbColor={darkMode ? "#f4f3f4" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleDarkMode}
                            value={darkMode}
                        />
                        <Ionicons name={darkMode ? 'moon' : 'moon'} size={20} color={darkMode ? '#fff' : '#000'} style={{ marginLeft: 2 }} />
                    </View>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <BodyParts />
            </View>
        </SafeAreaView>
    );
}
