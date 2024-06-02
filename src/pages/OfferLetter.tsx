import { Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import { FC } from 'react'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { globalStyles } from './styles'
import Table from '../components/Table';
import BulletList from '../components/BulletList';

const styles = StyleSheet.create({
    fontBody: {
        fontSize: 10,
    },
});

const { fontBody } = styles

const { pMarginBtm, page, title } = globalStyles

const OfferLetter: FC = () => {


    const t1head = ["Course ", "Cricos Code", "Start Date", "Finish Date", "Duration", "Tuition Fee"];
    const t1body: (string | number)[][] = [
        ["BSB50120: Diploma of Business ", "105638M", "08/04/2024", "06/04/2025", "52 week(s)", "$6,000.00"],
    ];


    const t2head = ["Campus Location ", "Sydney"];
    const t2body: (string | number)[][] = [
        ["Campus Address", "Level 1, 616-620 Harris St, ULTIMO NSW 2007"],
    ];

    const listItems = ["First item", "Second item", "Third item"];

    return (
        <Page size="A4" style={page}>
            <Header />
            {/* body */}
            <View style={fontBody}>
                <Text style={title}>Letter of Offer</Text>

                <Text style={pMarginBtm}>Date: 02 April 2024</Text>
                <Text style={pMarginBtm}>Dear XXXXXXXXX</Text>


                <Text style={pMarginBtm}>Thank you for your application for admission to Velocity Education & Training. We would like to take this
                    opportunity to congratulate you on your decision to study with us. The details of your Offer are outlined
                    below.
                </Text>


                {/* Table */}
                <Table
                    headItems={t1head}
                    bodyItems={t1body}
                    colWidth={[
                        { width: "30%" },
                        { width: "14%" },
                        { width: "14%" },
                        { width: "14%" },
                        { width: "14%" },
                        { width: "14%" }
                    ]}
                />

                <Table
                    headItems={t2head}
                    bodyItems={t2body}
                    colWidth={[
                        { width: "30%" },
                        { width: "70%" },

                    ]}
                />


                <Text style={pMarginBtm}>We look forward to welcoming you to Velocity Education & Training Do not hesitate to contact us should
                    you have any further queries.</Text>

                <Text style={pMarginBtm}>Please note:</Text>

                {/* list */}
                <BulletList items={listItems} />

                <Text style={pMarginBtm}>Please ensure that you attend the ORIENTATION SESSION per schedule prior to the Course
                    Commencement Date. To confirm your acceptance and secure a place in the course/s, please sign and
                    return the Acceptance of Offer and Written Agreement attached. Please do not hesitate to contact the
                    Administration Manager if you require any further assistance.
                </Text>

                <Text style={{ marginTop: 20 }}>Yours sincerely</Text>

                <View>
                    <Text style={{ marginTop: 100 }}>Danu Darai</Text>
                    <Text>Admission Officer</Text>
                </View>

            </View>
            <Footer />

        </Page>
    )
}

export default OfferLetter