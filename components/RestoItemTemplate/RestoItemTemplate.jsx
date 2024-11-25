import { Image, Text, View } from "react-native";
import {s} from "./RestoItemTemplate.style"
import { memo } from "react";

export function RestoItemTemplate({resto}){
    const path = "https://cdn.smood.ch/" + resto?.imgMobile || resto?.imgItem;
    var priceRange="";
    for (let i = 0; i < resto.priceRange; i++) {
      priceRange=priceRange+"$";
    }
    return(
        
        <View style={s.container}>
            <Image source={{uri:path}} style={s.img} />
            <View>
                <View style={s.infos}>
                    {
                        resto.isNew ? <Text style={s.newTag}>Nouveau</Text>:null
                    }
                    <Text style={s.price}>{priceRange}</Text>
                </View>
                <View style={s.tags}>
                    {
                        resto.storeTags.map((storeTags)=>{
                            return <Text lineBreakMode="head" numberOfLines={3} style={s.tagName}>{storeTags.name}</Text>
                        })
                    }
                </View>
                <View>
                    <Text>Temps estimé : {resto.estimatedArrivalTime} min - Fees : {resto.deliveryFee.toFixed(2)} CHF</Text>
                </View>
                <View>
                    <Text>Zone : {resto.zone}</Text>
                </View>
                <Text style={s.restoName}>{resto.name}</Text>
            </View>
        </View>
    );
}