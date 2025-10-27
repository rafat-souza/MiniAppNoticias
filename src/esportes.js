import { Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CardNoticia from './CardNoticia';
import { styles } from '../App';

const DADOS_ESPORTES = [
  {
    id: '1',
    titulo: 'Final do Campeonato Termina em Empate',
    resumo: 'O jogo decisivo da temporada foi para os pênaltis após...',
    conteudoCompleto: 'Após um jogo emocionante de 90 minutos mais prorrogação, a grande final foi decidida nos pênaltis. O goleiro "Silva" defendeu duas cobranças e garantiu o título para o time da casa.'
  },
  {
    id: '2',
    titulo: 'Atleta Quebra Recorde Mundial nos 100m',
    resumo: 'Correndo em 9.57 segundos, a nova estrela do atletismo...',
    conteudoCompleto: 'O recorde anterior, que durava 5 anos, foi quebrado hoje na final do mundial. "Eu treinei minha vida inteira por este momento", disse o atleta em lágrimas após a corrida.'
  },
];

export default function EsportesScreen({ navigation }) {
  
  const handleCardPress = (noticia) => {
    navigation.navigate('Detalhes', { noticia: noticia });
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <FlatList
        data={DADOS_ESPORTES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardNoticia 
            noticia={item} 
            onPress={() => handleCardPress(item)} 
          />
        )}
      />
    </SafeAreaView>
  );
}
