import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { FC } from "react";
import { globalStyles } from "../pages/styles";

type NestedArray = (string | number)[][];

type CssStyle = Record<string, string | number>;

type CssStyleWithWidth = CssStyle & { width: string | number };

interface ExtraRow {
    content: string[];
    css: CssStyleWithWidth[];
}

interface TableProps {
    headItems?: string[];
    bodyItems?: NestedArray;
    headCss?: CssStyle[] | [];
    colWidth?: CssStyle[] | [];
    extraRowBottom?: ExtraRow[] | null
    extraRowTop?: ExtraRow[] | null
}

const styles = StyleSheet.create({
    font: {
        fontSize: 10,
    },
    table: {
        width: "auto",
        borderWidth: 0,
        borderColor: "#999999",
    },
    tableRow: {
        flexDirection: "row",
    },
    tableCellHeader: {
        fontWeight: "bold",
    },
    cellPad: {
        padding: 5,
    },
    borderLeft: {
        borderLeftWidth: 1,
        borderColor: "#999999",
    },
    borderRight: {
        borderRightWidth: 1,
        borderColor: "#999999",
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderColor: "#999999",
    },
    borderTop: {
        borderTopWidth: 1,
        borderColor: "#999999",
    }
});

const { borderTop, borderBottom, borderLeft, borderRight, cellPad, font, table, tableCellHeader, tableRow } = styles;
const { pMarginBtm } = globalStyles;

const Table: FC<TableProps> = ({
    headItems,
    bodyItems = [[]],
    headCss = [{ backgroundColor: "#DDDDDD" }],
    colWidth = [{ width: "50%" }, { width: "50%" }],
    extraRowBottom = null,
    extraRowTop = null
}) => {

    return (
        <>
            <View style={[font, pMarginBtm]}>
                <View style={[table]}>
                    {headItems && (
                        // head
                        <View style={[tableRow, borderTop, ...headCss]} fixed>
                            {headItems.map((header, index) => (
                                <View key={index} style={[index === 0 ? borderLeft : {}, borderRight, colWidth[index]]}>
                                    <Text style={[tableCellHeader, cellPad]}>{header}</Text>
                                </View>
                            ))}
                        </View>
                    )}

                    {(bodyItems || extraRowBottom || extraRowTop) && (
                        // body
                        <View>
                            {bodyItems.map((row, rowIndex) => (
                                <View key={rowIndex}>

                                    {extraRowTop && rowIndex === 0 &&
                                        extraRowTop.map((row, extraRowIndex) => (
                                            <View key={`extraBottom-${rowIndex}`} style={[tableRow, rowIndex === 0 ? borderTop : {}]} wrap={false}>
                                                {row?.content.map((cell, cellIndex) => (
                                                    <View key={`extraBottom-${extraRowIndex}-${cellIndex}`} style={[cellIndex === 0 ? borderLeft : {}, borderRight, row.css[cellIndex]]}>
                                                        <Text style={cellPad}>{cell}</Text>
                                                    </View>
                                                ))}
                                            </View>
                                        ))
                                    }

                                    <View key={`body-${rowIndex}`} style={[tableRow, row.length ? borderBottom : {}, rowIndex === 0 ? borderTop : {}]} wrap={false}>
                                        {row.map((cell, cellIndex) => (
                                            <View key={`body-${rowIndex}-${cellIndex}`} style={[cellIndex === 0 ? borderLeft : {}, borderRight, colWidth[cellIndex]]}>
                                                <Text style={cellPad}>{cell}</Text>
                                            </View>
                                        ))}
                                    </View>

                                    {extraRowBottom && rowIndex === bodyItems.length - 1 &&
                                        extraRowBottom.map((row, extraRowIndex) => (
                                            <View key={`extraBottom-${rowIndex}`} style={[tableRow, borderBottom, rowIndex + 1 === 0 ? borderTop : {}]} wrap={false}>
                                                {row?.content.map((cell, cellIndex) => (
                                                    <View key={`extraBottom-${extraRowIndex}-${cellIndex}`} style={[cellIndex === 0 ? borderLeft : {}, borderRight, row.css[cellIndex]]}>
                                                        <Text style={cellPad}>{cell}</Text>
                                                    </View>
                                                ))}
                                            </View>
                                        ))
                                    }

                                </View>
                            ))}
                        </View>
                    )}
                </View>
            </View>
        </>
    );
};

export default Table;
