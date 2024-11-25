import { FlatList, ScrollView, Text, View } from "react-native";
import {s} from "./RestoList.style"
import { useEffect, useState } from "react";
import { SmoodAPI } from "../../api/SmoodAPI";
import { RestoItemTemplate } from "../RestoItemTemplate/RestoItemTemplate";
export function RestoList({}){

    const [page,setPage] = useState(1)
    const [restos,setRestos] = useState([])
    const limit = 100
    const total = 100

    useEffect(()=>{
        getResto();
    },[])

    async function getResto(){
        try {
            const response = await SmoodAPI.getRestoList(page)
            setRestos(response.data)
        } catch (error) {
            console.log("failed to get restos list")
        }
    }

    async function loadMore(){
        try {
            setPage(page+1);
            console.log(page);
            const response = await SmoodAPI.getRestoList(page)
            setRestos(...resto + response.data)
        } catch (error) {
            console.log("failed to get restos list")
        }
    }

    return(
        <View>
            <Text style={s.title}>Nos partenaires</Text>
            <FlatList 
                onEndReached={loadMore}
                onEndReachedThreshold={5}
                data={restos.stores}
                renderItem={ ({index,item})=> <RestoItemTemplate resto={item}/>}/>
        </View>
    );
}