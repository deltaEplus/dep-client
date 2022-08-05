import { View, Text, Image, StyleSheet } from "react-native";
import logo from '../../assets/logo.png'
const AppHeader = () => (
    <View style={styles.appBarContainer}>
     <Image style={styles.imageContainer} source={logo} />
     <Text style={styles.title}>DeltaE+</Text>
    </View>
);

const styles = StyleSheet.create({
    appBarContainer: {
        width: '100%',
        backgroundColor: 'rgba(240, 240, 240, 250)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '50px'
    },
    imageContainer: {
        height: '50px',
        width: '50px',
    },
    title: {
        position: 'absolute',
        fontSize: '18px',
        fontFamily: 'akshar',
        textAlign: 'center',
        width: '100%',
    }
});
export default AppHeader;