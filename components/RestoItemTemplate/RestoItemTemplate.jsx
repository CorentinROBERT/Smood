import { Text, View, Dimensions } from "react-native";
import {s} from "./RestoItemTemplate.style"
import { Helper } from "../../helpers/helper";
import React, { memo, useState } from "react";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import { Image } from 'expo-image';
import restoPlaceholder from "./../../assets/restaurant_placeholder.png";

function _RestoItemTemplate({resto,isLarge=false}){
    const path = "https://cdn.smood.ch/" + resto?.imgMobile;
    const pathPlaceholder = "https://cdn.smood.ch/" + resto?.imgItem;
    var priceRange="";
    const { width, height } = Dimensions.get('window');
    const [hasError, setHasError] = useState(false);
    for (let i = 0; i < resto.priceRange; i++) {
      priceRange=priceRange+"$";
    }

    return(
        
        <View style={isLarge ? {...s.largeContainer,width:width-20} : s.container}>
            <View style={isLarge ? {...s.imgLarge,width:width-20} : s.img}>
                <Image 
                    cachePolicy={"memory-disk"}
                    placeholder={ restoPlaceholder }
                    placeholderContentFit="cover"
                    style={isLarge ? {...s.imgLarge,width:width-20} : s.img}
                    source={{uri:hasError ? pathPlaceholder : path}} 
                    onError={() => {
                        setHasError(true); 
                    }} />
                {
                    resto.isNew ? <Text style={s.newTag}>Nouveau</Text>:null
                }
            </View>
            
            <View style={s.infos}>
                
                <View style={s.topInfos}>
                    <View style={s.infosTagPrice}>
                    <Text style={s.price}>{priceRange}</Text>
                    </View>
                    {
                        resto.zone ? (<View style={s.timeFee}>
                        <Entypo name="location-pin" size={15} color="#D83965" />
                            <Text> {resto.zone}</Text>
                        </View> ): null
                    }
                    
                </View>

                <View style={isLarge ? s.tagsLarge : s.tags}>
                    {
                        resto.storeTags.reduce((acc, storeTag, index) => {
                            acc.push(
                            <Text
                                key={storeTag.id}
                                numberOfLines={3}
                                ellipsizeMode="clip"
                                style={s.tagName}
                            >
                                {storeTag.name}
                            </Text>
                            );

                            if (index < resto.storeTags.length - 1) {
                            acc.push(
                                <Text key={`separator-${index}`} style={s.separator}> · </Text>
                            );
                            }
                            return acc;
                        }, [])
                    }
                </View>

                <View style={s.timeFee}>
                    <FontAwesome5 name="clock" size={15} color="#D83965" />
                    <Text> {resto.estimatedArrivalTime} min - Fees : {resto.deliveryFee.toFixed(2)} CHF</Text>
                </View>
                <Text style={s.restoName}>{resto.name}</Text>
            </View>
        </View>
    );
}

export const RestoItemTemplate = memo(_RestoItemTemplate)