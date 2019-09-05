class Composant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compteur: 0,
        };
    }

    handlePress() {
        this.setState({
            compteur: this.state.compteur + 1,
        });
    }
    
    render() {
        return (
            <View>
                <Text>
                    Je suis le n°{this.state.compteur}
                </Text>
                <TouchableOpacity onPress={this.handlePress}>
                    <Text>Cliquez-moi dessus</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
