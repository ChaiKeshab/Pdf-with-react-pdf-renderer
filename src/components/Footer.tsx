import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { FC } from "react";

const styles = StyleSheet.create({
    footer: {
        fontSize: 10,
        textAlign: 'center',
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
});


export const Footer: FC = () => {
    return (
        <View fixed style={styles.footer} >
            <Text
                render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
                fixed
            />
        </View>
    )
};
