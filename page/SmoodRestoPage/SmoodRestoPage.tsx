import { FlatList, ScrollView, Text, View, Platform, TouchableOpacity } from 'react-native';
import { s } from './SmoodRestoPage.style';
import { Header } from '../../components/Header/Header';
import { useEffect, useRef, useState } from 'react';
import { SmoodContext } from '../../Contexts/SmoodContext';
import { Univers } from '../../components/Univers/Univers';
import { NewResto } from '../../components/NewResto/NewResto';
import { SmoodAPI } from '../../api/SmoodAPI';
import { RestoItemTemplate } from '../../components/RestoItemTemplate/RestoItemTemplate';
import Ionicons from '@expo/vector-icons/Ionicons';

export function SmoodRestoPage({}) {
  const [address, setAddress] = useState();
  const [page, setPage] = useState(1);
  const [restos, setRestos] = useState<any[]>([]);
  const [isRefresh, setIsRefresh] = useState(false);

  const flatListRef = useRef<FlatList>(null);

  const isScrollToTopVisible = Platform.OS === 'android';

  useEffect(() => {
    getResto();
  }, []);

  async function getResto() {
    try {
      setIsRefresh(true);
      const response = await SmoodAPI.getRestoList(page);
      if (response.data?.stores) {
        setRestos(response.data.stores);
      } else {
        console.error('No stores data in response');
      }
    } catch (error: any) {
      console.error('Failed to get restos list:', error.message);
    } finally {
      setIsRefresh(false);
    }
  }

  async function loadMore() {
    try {
      const nextPage = page + 1;
      const response = await SmoodAPI.getRestoList(nextPage);
      if (response.data?.stores) {
        setRestos((prevRestos) => [...prevRestos, ...response.data.stores]);
        setPage(nextPage);
      }
    } catch (error) {
      console.error('Failed to load more restos:', error);
    }
  }

  async function refresh() {
    try {
      setRestos([]);
      setPage(1);
      const response = await SmoodAPI.getRestoList(1);
      if (response.data?.data?.stores) {
        setRestos(response.data.data.stores);
        return true;
      }
      return false;
    } catch (error) {
      console.log('failed to refresh');
      return false;
    }
  }

  function scrollToTop() {
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
  }

  return (
    <SmoodContext.Provider value={{ setAddress }}>
      <View style={s.container}>
        <FlatList
          ref={flatListRef}
          data={restos}
          renderItem={({ item }) => <RestoItemTemplate resto={item} isLarge={true} />}
          onEndReached={loadMore}
          onRefresh={refresh}
          refreshing={isRefresh}
          ListHeaderComponent={
            <View style={s.container}>
              <Header />
              <Univers />
              <NewResto />
              <Text style={s.title}>Nos partenaires</Text>
            </View>
          }
        />
        {isScrollToTopVisible && (
          <TouchableOpacity style={s.scrollToTop} onPress={scrollToTop}>
            <Ionicons name="arrow-up" size={24} />
          </TouchableOpacity>
        )}
      </View>
    </SmoodContext.Provider>
  );
}
