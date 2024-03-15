import React, { useState } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { bodyParts } from '../constants';
import { router, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInRight } from 'react-native-reanimated';

export default function BodyParts() {
  const router=useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: hp(2) }}>
                <TextInput
                    placeholder="Search Body Part..."
                    style={{ flex: 1, backgroundColor: 'lightgrey', padding: hp(1), borderRadius: hp(1), fontSize: hp(2.5), marginRight: wp(5), marginLeft: wp(5) }}
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>
            <View style={{ marginLeft: hp(2), marginRight: hp(2), marginBottom: hp(7)}}>
              <FlatList
                  data={filterBodyParts(searchQuery)}
                  numColumns={2}
                  keyExtractor={item => item.name}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ paddingBottom: 30, paddingTop: 40 }}
                  columnWrapperStyle={{ justifyContent: 'space-between' }}
                  renderItem={({ item, index }) => <BodyPartCard index={index} item={item} />}
              />
            </View>
        </View>
    );
}

const filterBodyParts = (query) => {
    if (!query) return bodyParts;
    return bodyParts.filter(part => part.name.toLowerCase().includes(query.toLowerCase()));
};

const BodyPartCard = ({ item, index }) => {
    return (
        <Animated.View entering={FadeInRight.duration(400).delay(index * 200).springify()}>
            <TouchableOpacity onPress={()=>router.push({pathname:'/exercises',params:item})}
                style={{ width: wp(44), height: wp(52) }}
                className="flex justify-end p-4 mb-4"
            >
                <Image
                    source={item.image}
                    resizeMode='cover'
                    style={{ width: wp(44), height: wp(52) }}
                    className="rounded-[35px] absolute"
                />
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.9)']}
                    style={{ width: wp(44), height: hp(15) }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className="absolute bottom-0 rounded-b-[35px]"
                />
                <Text style={{ fontSize: hp(2.3) }} className="text-white font-semibold text-center tracking-wide">
                    {item?.name}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

