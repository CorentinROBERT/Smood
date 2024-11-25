import { Image, Text, View, Dimensions } from "react-native";
import {s} from "./RestoItemTemplate.style"

export function RestoItemTemplate({resto,isLarge=false}){
    const path = "https://cdn.smood.ch/" + resto?.imgMobile || resto?.imgItem;
    var priceRange="";
    const { width, height } = Dimensions.get('window');
    for (let i = 0; i < resto.priceRange; i++) {
      priceRange=priceRange+"$";
    }
    return(
        
        <View style={isLarge ? {...s.largeContainer,width:width-20} : s.container}>
            <Image 
                source={{uri:path}} 
                style={isLarge ? {...s.imgLarge,width:width-20} : s.img} />
            <View style={s.infos}>
                <View style={s.infosTagPrice}>
                    {
                        resto.isNew ? <Text style={s.newTag}>Nouveau</Text>:null
                    }
                    <Text style={s.price}>{priceRange}</Text>
                </View>
                <View style={isLarge ? s.tagsLarge : s.tags}>
                    {
                        resto.storeTags.map((storeTags)=>{
                            return <Text key={storeTags.id} lineBreakMode="head" numberOfLines={3} style={s.tagName}>{storeTags.name}</Text>
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