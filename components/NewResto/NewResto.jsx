import { ScrollView, Text, View } from "react-native";
import {s} from "./NewResto.style"
import { useEffect, useState } from "react";
import { SmoodAPI } from "../../api/SmoodAPI";
import { RestoItemTemplate } from "../RestoItemTemplate/RestoItemTemplate";

export function NewResto(){

    useEffect(()=>{
        getNewResto();
    },[])

    const [restoListing,setRestoListing]= useState();

    async function getNewResto(){
        try {
            console.log("getResto")
            const response = await SmoodAPI.getNewRestos();
            setRestoListing(response.data.find((item)=> item.type == "news"))
        } catch (error) {
            Console.log("Failed to get new resto")
        }
    }

    return(
        <View>
            <Text style={s.title}>{restoListing?.title}</Text>
            <ScrollView horizontal={true} >
                {
                    restoListing?.stores.map((resto)=>{
                        return(
                            <RestoItemTemplate key={resto.id} resto={resto} />
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}