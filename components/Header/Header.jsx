import { Image, Text, TouchableOpacity, View } from "react-native";
import {s} from "./Header.style"
import profileImg from "./../../assets/profile.png"
import { SearchBarAddress } from "../SearchBarAddress/SearchBarAddress";

export function Header({}){
    return(
        <View style={s.container}>
            <Text style={s.title}>Smood</Text>
            <SearchBarAddress style={s.searchbar}/>
            <TouchableOpacity>
                <Image source={profileImg} style={s.img} />
            </TouchableOpacity>
        </View>
    );
}