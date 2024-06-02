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

const { pMarginBtm, page, title, subTitle } = globalStyles

const AcceptanceLetter: FC = () => {


    const t1head = ["Course", "Cricos Code", "Start Date", "Finish Date", "Duration", "Tuition Fee"];
    const t1body: (string | number)[][] = [
        ["BSB50120: Diploma of Business ", "105638M", "08/04/2024", "06/04/2025", "52 week(s)", "$6,000.00"],
    ];


    const t2head = ["Fees* ", "Amount in $AUD"];
    const t2body: (string | number)[][] = [
        ["Non-refundable enrolment fee", "$200.00"],
        ["Material Fee Per Course", "$200.00"],
        ["Total Tuition fee ", "$200.00"],
        ["TOTAL INITIAL FEE PAYABLE", "$200.00"],
    ];

    const listItems = [
        "This offer will expire within 4 weeks from the date of issue.",
        "If you have received a Conditional Offer, you must provide documentary evidence of meeting the conditions of admission as outlined in this offer.",
    ];

    return (
        <Page size="A4" style={page}>
            <Header />
            {/* body */}
            <View style={fontBody}>
                <Text style={title}>Acceptance of Offer and Written Agreement</Text>

                <Text style={pMarginBtm}>Date: 02 April 2024</Text>
                <Text style={pMarginBtm}>Dear Miss Sushila Thapa,</Text>


                <Text style={pMarginBtm}>Please sign this agreement and return it together with your fees and the Confirmation of Enrolment
                    (CoE/s) will be issued for you to apply for your Student Visa. Please note that the (CoE/s) will not be
                    issued until this agreement is signed and returned with receipt of payment.
                </Text>

                {/* Table required */}

                <Text style={pMarginBtm}>I hereby accept the offer of admission as a fee-paying international student to undertake the following course/s I
                    have applied for at Velocity Education & Training.
                </Text>

                <Text style={pMarginBtm}>I agree to all terms and conditions as listed below regarding the following course/s at Velocity Education &
                    Training
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
                    extraRowTop={[
                        {
                            content: ["Student ID:", "14425"],
                            css: [{ width: "16%" }, { width: "84%" }]
                        },
                        {
                            content: ["Student ID:", "14425"],
                            css: [{ width: "16%" }, { width: "84%" }]
                        }
                    ]}
                />

                <Text style={subTitle}>Payment of fees and associated charges as follows:</Text>

                <Table
                    headItems={t2head}
                    bodyItems={t2body}
                    colWidth={[
                        { width: "50%" },
                        { width: "50%" },
                    ]}
                    extraRowBottom={[
                        {
                            content: ["Conditions of Offer:", "lol"],
                            css: [{ width: "20%" }, { width: "80%" }]
                        },
                        {
                            content: ["Conditions of Offer:"],
                            css: [{ width: "100%" }]
                        }
                    ]}
                />


                <Text style={pMarginBtm}>Please note:</Text>

                <BulletList items={listItems} />

                <Text style={pMarginBtm}>*All fees are quoted in Australian Dollars. The total initial fee is equal to the tuition fees for the first term and
                    other fees (if applicable).
                </Text>

                <Text style={pMarginBtm}>Prices are subject to change without notice. Please see attached Terms and Conditions for more information
                    regarding fees.
                </Text>

            </View>
            <Footer />

        </Page>
    )
}

export default AcceptanceLetter