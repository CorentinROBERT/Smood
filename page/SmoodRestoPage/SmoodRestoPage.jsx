import { ScrollView, Text, View } from "react-native";
import { s } from "./SmoodRestoPage.style";
import { Header } from "../../components/Header/Header";
import { useState } from "react";
import { SmoodContext } from "../../Contexts/SmoodContext";
import { Univers } from "../../components/Univers/Univers";
import { NewResto } from "../../components/NewResto/NewResto";
import { RestoList } from "../../components/RestoList/RestoList";

export function SmoodRestoPage({}){

    const [address,setAddress] = useState();

    return(
        <SmoodContext.Provider value={{setAddress}}>
            <ScrollView>
                <View style={s.container}>
                    <Header style={s.header}/>
                    <Univers style={s.univers}/>
                    <NewResto/>
                    <RestoList/>
                </View>
            </ScrollView>
        </SmoodContext.Provider>
    );
}