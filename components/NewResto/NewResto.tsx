import { ScrollView, Text, View } from 'react-native';
import { s } from './NewResto.style';
import { useEffect, useState } from 'react';
import { SmoodAPI } from '../../api/SmoodAPI';
import { RestoItemTemplate } from '../RestoItemTemplate/RestoItemTemplate';
import { NewsItem } from '../../types/NewsItem';

export function NewResto() {
  useEffect(() => {
    getNewResto();
  }, []);

  const [restoListing, setRestoListing] = useState<NewsItem>();

  async function getNewResto() {
    try {
      console.log('getResto');
      const response = await SmoodAPI.getNewRestos();
      setRestoListing(response.data.find((item: NewsItem) => item.type === 'news'));
    } catch (error) {
      console.log('Failed to get new resto');
    }
  }

  return (
    <View>
      <Text style={s.title}>{restoListing?.title}</Text>
      <ScrollView horizontal={true}>
        {restoListing?.stores.map((resto) => {
          return <RestoItemTemplate key={resto.id} resto={resto} />;
        })}
      </ScrollView>
    </View>
  );
}
