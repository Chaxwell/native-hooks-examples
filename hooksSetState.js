const Composant = (props) => {
    const [compteur, setCompteur] = React.useState(0);

    const handlePress = () => {
        setCompteur(compteur + 1);
    }

    return (
        <View>
            <Text>
                Je suis le n°{compteur}
            </Text>
            <TouchableOpacity onPress={handlePress}>
                <Text>Cliquez-moi dessus</Text>
            </TouchableOpacity>
        </View>
    );
}
