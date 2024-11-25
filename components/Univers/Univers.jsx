import { Image, ScrollView, Text, View } from "react-native";
import {s} from "./Univers.style"
import { useEffect, useState } from "react";
import { SmoodAPI } from "../../api/SmoodAPI";

export function Univers(){

    const [univers,setUnivers] = useState([])
    async function getUnivers(){
        try {
            var results = await SmoodAPI.getUnivers()
            setUnivers(results.data)
        } catch (error) {
            console.log("failed to get univers")
        }
    }

    useEffect(()=>{
        getUnivers();
    },[])

    return(
        <View style={s.container}>
            <Text style={s.title}>Univers</Text>
            <View>
                <ScrollView horizontal={true} style={s.scrollContainer}>
                    {
                        univers.length > 0 ? univers.map((univer) => {
                            const path = univer.images?.logo;
                            return path ? (
                                <View key={univer.id} style={{ marginRight: 10 }}>
                                    <Image 
                                        source={{ uri: path }} 
                                        style={{ width: 100, height: 100, resizeMode: 'contain' }} 
                                    />
                                    <Text style={s.text}>{univer.name}</Text>
                                </View>
                            ) : null;
                        }) : <Text>Aucun univers disponible</Text>
                    }
                </ScrollView>
            </View>
        </View>
    );
}