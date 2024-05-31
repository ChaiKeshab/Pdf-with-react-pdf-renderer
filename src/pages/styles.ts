import { StyleSheet } from "@react-pdf/renderer";

export const globalStyles = StyleSheet.create({
    green: {
        backgroundColor: "green"
    },
    red: {
        backgroundColor: "red"
    },
    blue: {
        backgroundColor: "blue"
    },
    bold: {
        fontWeight: "bold"
    },
    wFull: {
        width: "100%"
    },
    light: {
        fontWeight: "light"
    },
    flexRow: {
        display: "flex",
        flexDirection: "row",
    },
    justifyStart: {
        justifyContent: "flex-start"
    },
    gap: {
        gap: 15
    },
    marginBottom: {
        marginBottom: 4
    },
    spaceBetween: {
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    header: {
        gap: "1rem",
        paddingBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
    },
    section: {
        fontSize: 8
    },
    pMarginBtm: {
        marginBottom: 10
    }
});
