import { Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import { FC } from 'react'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { globalStyles } from './styles'
import Table from '../components/Table';

const styles = StyleSheet.create({
    fontBody: {
        fontSize: 10,
    },
});

const { fontBody } = styles

const { pMarginBtm, page, primary, subTitle } = globalStyles

const Refund: FC = () => {

    const t1head = ["Circumstance", "Refund due"];
    const t1body: (string | number)[][] = [
        [
            "Velocity Education and Training cancels course before commencement due to insufficient numbers or other unforeseen circumstances, including a sanction being imposed on the Velocity Education and Training (known as provider default).",
            "Full refund of all fees"
        ],
        [
            "Velocity Education and Training cancels course due to unforeseen circumstances, including a sanction being imposed on the Australian Pacific International College (known as provider default)",
            "Application fee not refunded. Full refund of all unspent fees calculated as follows: Weekly tuition fee multiplied by the weeks in the default period (calculated from the date of default)."
        ],
        [
            "Student withdraws up to 4 weeks prior to course commencement.",
            "Application fee not refunded. Refund of 90% of tuition fee paid."
        ],
        [
            "The student does not commence course on the agreed start date and has not previously withdrawn. ",
            "No refund. Fees for full study period (term) to be paid."
        ],
        [
            "Student withdraws after course commencement.",
            "No refund. Fees for full study period (term) to be paid. "
        ],
        [
            "Student’s enrolment is cancelled due to disciplinary action.",
            "No refund. Fees for full study period (term) to be paid."
        ],
        [
            "The student has supplied incorrect or incomplete information causing Velocity Education and Training to withdraw the offer of the course prior to commencement.",
            "No refund. Fees for full study period (term) to be paid."
        ],
    ];


    return (
        <Page size="A4" style={page}>
            <Header />
            {/* body */}
            <View style={fontBody}>

                <Text style={[subTitle, primary]}>Refunds</Text>

                <Text style={pMarginBtm}>Please carefully read the following information about refunds</Text>

                <Text style={pMarginBtm}>Refunds for international students are calculated in accordance with the ESOS framework</Text>

                <Text style={pMarginBtm}>All application fees are non-refundable except where Velocity Education and Training cancels a course prior
                    to commencement due to insufficient numbers or other unforeseen circumstances, including a sanction
                    being imposed on Velocity Education and Training.
                </Text>

                <Text style={pMarginBtm}>Where Velocity Education and Training cancels a course either before or after commencement, students
                    will receive an automatic refund and do not need to complete the Refund Application Form. This will be
                    provided within 10 working days of the default.
                </Text>

                <Text style={pMarginBtm}>In all other circumstances, students are required to complete a Refund Application Form which can be
                    accessed from our office. This form must be submitted within 10 working days of the event that led to the
                    request for the refund. The outcome of the refund assessment will be forwarded to the student in writing
                    within 20 working days, as well as any applicable refund.
                </Text>

                <Text style={pMarginBtm}>Refunds will be paid to the person or entity from whom the original payment was received and in Australian
                    Dollars.
                </Text>

                <Text style={pMarginBtm}>The refund policy does not remove the right of the student to take further action under Australian Consumer
                    Law.
                </Text>

                <Text style={[subTitle, primary]}>Domestic Student Refund:</Text>

                <Text style={pMarginBtm}>In addition to the above circumstances, refunds for domestic students will be calculated as follows:</Text>

                <Table
                    headItems={t1head}
                    bodyItems={t1body}
                    headCss={[{
                        backgroundColor: "#C09F41",
                        color: "#1D1A57",
                        textAlign: "center"
                    }]}
                    colWidth={[
                        { width: "55%" },
                        { width: "45%" },
                    ]}
                />

                <Text style={[subTitle, primary]}>International Student Refund:</Text>

                <Text style={pMarginBtm}>In addition to the above circumstances, refunds for international students will be calculated as follows:</Text>


                <Table
                    headItems={t1head}
                    bodyItems={t1body}
                    headCss={[{
                        backgroundColor: "#C09F41",
                        color: "#1D1A57",
                        textAlign: "center"
                    }]}
                    colWidth={[
                        { width: "55%" },
                        { width: "45%" },
                    ]}
                />


            </View>
            <Footer />

        </Page>
    )
}

export default Refund