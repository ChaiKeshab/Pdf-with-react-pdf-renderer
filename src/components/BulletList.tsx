import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { FC } from "react";

interface BulletListProps {
    items: string[];
}

const styles = StyleSheet.create({
    body: {
        marginBottom: 5
    },
    list: {
        paddingLeft: 10,
    },
    listItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 5,
        gap: 6
    },
    bullet: {
        width: 5,
        height: 5,
        backgroundColor: "black",
        borderRadius: "100%",
    },
    itemContent: {
        fontSize: 10,
    },
});

const { body, list, listItem, bullet, itemContent } = styles

const BulletList: FC<BulletListProps> = ({ items }) => {
    return (
        <View style={body}>
            <View style={list}>
                {items.map((item, index) => (
                    <View key={index} style={listItem}>
                        <Text style={bullet}></Text>
                        <Text style={itemContent}>{item}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default BulletList;
