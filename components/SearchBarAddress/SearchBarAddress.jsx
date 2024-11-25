import { TextInput, TouchableOpacity, View, Text } from "react-native";
import {s} from "./SearchBarAddress.style"
import { useState } from "react";
import { GeoApi } from "../../api/GeoApi";
import { useContext } from "react";
import { SmoodContext } from "../../Contexts/SmoodContext";

export function SearchBarAddress({}){

    const [isSearchResult,setIsSearchResult] = useState(false);
    const [proposals,setProposals] = useState([])
    const [isProposalVisible,setIsProposalVisible]=useState(false);
    const [searchText,setSearchText]=useState("");
    const {setAddress} = useContext(SmoodContext);

    async function getAddressFromName(addressName){
        if(isSearchResult===true)return;
        setIsSearchResult(true);
        var response = await GeoApi.getAddressFromName(addressName);
        setProposals(response);
        setIsProposalVisible(addressName?.length > 0)
        setIsSearchResult(false);
    }

    return(
        <View style={s.container}>
            <View>
                <TextInput value={searchText} onChangeText={(text)=>{
                    setSearchText(text)
                    getAddressFromName(text)
                    }} style={s.input}/>
            </View>
            {isProposalVisible ? proposals.length>0 ? <View style={s.proposalContainer}>
                {
                    proposals.map((proposal,index) => {
                        return(
                            <TouchableOpacity onPress={()=>{
                                setIsProposalVisible(false);
                                setSearchText(proposal.display_name);
                                setAddress(proposal);
                            }} key={proposal.place_id}>
                                <Text>
                                    {proposal.display_name}
                                </Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View> : <View style={s.proposalContainer}><Text>No results for this address</Text></View> : null}
            
        </View>
    );
};