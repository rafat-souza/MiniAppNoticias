import { Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardNoticia from './CardNoticia';
import { styles } from '../App';

const DADOS_TECNOLOGIA = [
    {
        id: '1',
        titulo: 'Uma nova IA Revoluciona a Programação',
        resumo: 'Uma nova inteligência artificial agora consegue escrever código complexo...',
        conteudoCompleto: 'Uma nova inteligência artificial agora consegue escrever código complexo de forma mais eficiente que programadores humanos. A comunidade está debatendo as implicações desta nova tecnologia no mercado de trabalho.'
    },
    {
        id: '2',
        titulo: 'Lançamento do Novo Processador Quântico',
        resumo: 'Empresa anuncia o primeiro processador quântico comercialmente viável...',
        conteudoCompleto: 'Empresa anuncia o primeiro processador quântico comercialmente viável, prometendo revolucionar a capacidade de processamento de dados para pesquisa científica e finanças.'
    }
]

export default function TecnologiaScreen({ navigation }) {
    const handleCardPress = (noticia) => {
        navigation.navigate('Detalhes', {noticia: noticia});
    };

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
        <FlatList
            data={DADOS_TECNOLOGIA}
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
