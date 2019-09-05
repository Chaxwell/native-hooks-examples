const ComposantHooked = (props) => {
    const compteur = ReactRedux.useSelector(state => state.compteur);
    const dispatch = ReactRedux.useDispatch();

    const handlePress = () => {
        dispatch(uneAction());
    };

    return (
        <View style={{ flex: 1 }}>
            <Text>
                Je suis le n°{compteur}
            </Text>
            <TouchableOpacity onPress={handlePress}>
                <Text>Cliquez-moi dessus</Text>
            </TouchableOpacity>
        </View>
    )
};
