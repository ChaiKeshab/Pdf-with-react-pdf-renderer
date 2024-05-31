import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { FC } from "react";
import { globalStyles } from "../pages/styles";

type NestedArray = (string | number)[][];

interface Table {
    headItems: string[];
    bodyItems: NestedArray;
    headCss: [{ backgroundColor: string }] | [];
    colWidth?: { width: string }[];
}


const styles = StyleSheet.create({
    font: {
        fontSize: 10
    },
    table: {
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderColor: "#999999"
    },
    tableRow: {
        flexDirection: "row",
    },
    tableCellHeader: {
        fontWeight: "bold",
    },
    cellPad: {
        padding: 5
    },
    borderR: {
        borderRight: 1,
        borderColor: "#999999"
    },

    bordTop: {
        borderTop: 1,
        borderColor: "#999999"
    }

});

const { bordTop, borderR, cellPad, font, table, tableCellHeader, tableRow } = styles

const { pMarginBtm } = globalStyles


const Table: FC<Table> = ({
    headItems,
    bodyItems,
    headCss = [{ backgroundColor: "#DDDDDD" }],
    colWidth = [{ width: "50%" }, { width: "50%" }],
}) => {
    return (
        <>
            <View style={[font, pMarginBtm]}>
                <View style={[table]}>
                    {headItems && (

                        // head
                        <View style={[tableRow, ...headCss]}>
                            {headItems.map((header, index) => (
                                <View key={index} style={[borderR, colWidth[index]]}>
                                    <Text style={[tableCellHeader, cellPad]}>{header}</Text>
                                </View>
                            ))}
                        </View>
                    )}

                    {bodyItems && (

                        // body
                        <View>
                            {bodyItems.map((row, rowIndex) => (

                                // tr
                                <View key={rowIndex} style={[tableRow, bordTop]}>
                                    {row.map((cell, cellIndex) => (
                                        <View key={cellIndex} style={[borderR, colWidth[cellIndex]]}>
                                            <Text style={cellPad}>{cell}</Text>
                                        </View>
                                    ))}
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            </View >
        </>
    );
};

export default Table;