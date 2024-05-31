import { Image, Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { globalStyles } from '../pages/styles'


const styles = StyleSheet.create({
    mb1: {
        marginBottom: 1
    }
});

const { mb1 } = styles

const { gap, flexRow, bold, light, header, image, spaceBetween, section, justifyStart, marginBottom } = globalStyles

export const Header = () => {

    const imageUrl = 'https://images.freeimages.com/images/large-previews/b23/d-link-switch-1243624.jpg';

    return (
        <View fixed style={[header, flexRow, spaceBetween]}>
            <Image style={[image]} src={imageUrl} />

            {/* right side */}
            <View style={[section]}>

                <View style={[marginBottom]}>
                    <View style={[flexRow, mb1]}>
                        <Text style={bold}>ABN No: </Text>
                        <Link style={light}>53 364 659 556</Link>
                    </View>

                    <View style={[flexRow, justifyStart, gap, mb1]}>
                        <View style={flexRow}>
                            <Text style={bold}>RTO No: </Text>
                            <Text style={light}>4429411</Text>
                        </View>

                        <View style={flexRow}>
                            <Text style={bold}>CRICOS Provider No: </Text>
                            <Text style={light}>4429411</Text>
                        </View>
                    </View>
                </View>

                {/* second row */}
                <View style={[marginBottom]}>
                    <View style={[flexRow, mb1]}>
                        <Text style={bold}>Address: </Text>
                        <Text style={light}>Level 1 lajflajiofjlksafoiajofjad</Text>
                    </View>

                    <View style={[flexRow, justifyStart, gap, mb1]}>
                        <View style={flexRow}>
                            <Text style={bold}>Phone: </Text>
                            <Text style={light}>02 9865 7793</Text>
                        </View>

                        <View style={flexRow}>
                            <Text style={bold}>Email: </Text>
                            <Text style={light}>bullshit@gmail.com</Text>
                        </View>
                    </View>
                </View>

                {/* third row */}
                <View>
                    <View style={[flexRow, mb1]}>
                        <Text style={bold}>Address: </Text>
                        <Text style={light}>Level 1 lajflajiofjlksafoiajofjad</Text>
                    </View>

                    <View style={[flexRow, justifyStart, gap, mb1]}>
                        <View style={flexRow}>
                            <Text style={bold}>Phone: </Text>
                            <Text style={light}>02 9865 7793</Text>
                        </View>

                        <View style={flexRow}>
                            <Text style={bold}>Email: </Text>
                            <Text style={light}>bullshit@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
