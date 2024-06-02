import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { FC } from "react";

const styles = StyleSheet.create({
    footer: {
        fontSize: 10,
        paddingTop: 20,
        marginTop: "auto",
        textAlign: "right"
    },
});


export const Footer: FC = () => {
    return (
        <View fixed style={styles.footer} >
            <Text
                render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
            />
        </View>
    )
};
