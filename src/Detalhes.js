import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Detalhes ({ route, navigation }) {
    const { noticia } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            tittle: noticia.titulo,
        });
    }, [navigation, noticia]);

    return (
        <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.titulo}>{noticia.titulo}</Text>
                <Text style={styles.conteudo}>{noticia.conteudoCompleto}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles =StyleSheet.create ({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        padding: 16,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    conteudo: {
        fontSize: 16,
        lineHeight: 24,
    },
});