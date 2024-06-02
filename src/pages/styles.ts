import { StyleSheet } from "@react-pdf/renderer";

export const globalStyles = StyleSheet.create({
    page: {
        paddingTop: 10,
        paddingRight: 30,
        paddingBottom: 10,
        paddingLeft: 30,
    },
    title: {
        fontWeight: 'semibold',
        fontSize: 16,
        textAlign: "center",
        marginBottom: 10
    },
    subTitle: {
        fontWeight: 'semibold',
        marginBottom: 10
    },
    primary: {
        color: "#1D1A57"
    },
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
        marginBottom: 4,
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
        marginBottom: 10,
        lineHeight: 1.5
    },
    lineHeight: {
        lineHeight: 1.5
    },
    center: {
        textAlign: "center",
        fontSize: 12
    },
});
