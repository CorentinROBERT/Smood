import { FlatList, ScrollView, Text, View } from "react-native";
import { s } from "./SmoodRestoPage.style";
import { Header } from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { SmoodContext } from "../../Contexts/SmoodContext";
import { Univers } from "../../components/Univers/Univers";
import { NewResto } from "../../components/NewResto/NewResto";
import { SmoodAPI } from "../../api/SmoodAPI";
import { RestoItemTemplate } from "../../components/RestoItemTemplate/RestoItemTemplate";

export function SmoodRestoPage({}){

    const [address,setAddress] = useState();
    const [page,setPage] = useState(1)
    const [restos,setRestos] = useState([])
    const [isRefresh,setIsRefresh]=useState(false)

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
            const response = await SmoodAPI.getRestoList(page)
            setRestos(...resto + response.data)
        } catch (error) {
            console.log("failed to get restos list")
        }
    }

    async function refresh(){
        try {
            setRestos([])
            setPage(1);
            const response = await SmoodAPI.getRestoList(page)
            setRestos(response.data)
            return true
        } catch (error) {
            console.log("failed to refresh")
            return false
        }
    }

    return(
        <SmoodContext.Provider value={{setAddress}}>
            <FlatList
                ListHeaderComponent={
                    <View style={s.container}>
                        <Header style={s.header}/>
                        <Univers style={s.univers}/>
                        <NewResto/>
                        <Text style={s.title} >Nos partenaires</Text>
                    </View>
                }
                onEndReached={loadMore}
                onEndReachedThreshold={5}
                data={restos.stores}
                renderItem={ ({index,item})=> <RestoItemTemplate key={item.key} resto={item} isLarge={true} />}/>
                
        </SmoodContext.Provider>
    );
}