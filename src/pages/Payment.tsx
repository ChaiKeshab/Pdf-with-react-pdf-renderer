import { Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import { FC } from 'react'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { globalStyles } from './styles'
import Table from '../components/Table';


const styles = StyleSheet.create({
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
    fontBody: {
        fontSize: 10,
    },
});

const { fontBody, subTitle } = styles

const { pMarginBtm } = globalStyles

const Payment: FC = () => {


    const t1head = ["PAYMENT DETAIL", "AMOUNT", "DUE DATE"];
    const t1body: (string | number)[][] = [
        ["1st Payment tuition fee + enrolment + material", "$2,000.00", "NOW"],
        ["BSB50120 : 2nd Payment tuition fee ", "$1,500.00", "08/07/2024"],
        ["BSB50120 : 3nd Payment tuition fee ", "$1,500.00", "08/07/2024"],
        ["BSB50120 : 4nd Payment tuition fee ", "$1,500.00", "08/07/2024"],
    ];


    const t2body: (string | number)[][] = [
        ["Account Name:", "Velocity Education and Training"],
        ["BSB Number:", " 0000000"],
        ["Account Number:", " 0000000"],
        ["SWIFT Code:", "000000"],
        ["Bank Name:", " ANZ bank"],
        ["Bank Address:", "00000000",]
    ];



    return (
        <Page size="A4" style={styles.page}>
            <Header />
            {/* body */}
            <View style={fontBody}>

                <Text style={subTitle}>Payment Schedule</Text>

                {/* Table */}
                <Table
                    headItems={t1head}
                    bodyItems={t1body}
                    colWidth={[
                        { width: "60%" },
                        { width: "20%" },
                        { width: "20%" }
                    ]}
                />

                <Text style={subTitle}>Bank Details</Text>

                <Text style={pMarginBtm}>Payment maybe made in AUSTRALIAN DOLLAR to the following account:</Text>

                <Table
                    bodyItems={t2body}
                    colWidth={[
                        { width: "20%" },
                        { width: "80%" },
                    ]}
                />

            </View>
            <Footer />

        </Page>
    )
}

export default Payment