const mapStateToProps = (state, ownProps) => {
    return {
        compteur: state.compteur,
        props: ownProps,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        uneAction: (payload) => (dispatch) => dispatch(uneAction(payload)),
    };
};

const ComposantConnect = ({uneAction}) => {
    const handlePress = () => {
        uneAction();
    };

    return (
        <View style={{ flex: 1 }}>
            <Text>
                Je suis le n°{props.compteur}
            </Text>
            <TouchableOpacity onPress={handlePress}>
                <Text>Cliquez-moi dessus</Text>
            </TouchableOpacity>
        </View>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ComposantConnect);
