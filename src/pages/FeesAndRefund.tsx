import { Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import { FC } from 'react'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { globalStyles } from './styles'
import BulletList from '../components/BulletList';
import Table from '../components/Table';

const styles = StyleSheet.create({
    fontBody: {
        fontSize: 10,
    },

});

const { fontBody } = styles

const { pMarginBtm, page, primary, subTitle, center } = globalStyles

const FeesAndRefund: FC = () => {


    const listItems = [
        "Maintaining a sufficient amount in our account so that so we are able to repay all tuition fees already paid.",
        "Through our membership of the Tuition Protection Scheme (TPS). The role of the TPS is to assist international students where we are unable to fully deliver their course of study. The TPS ensures that you are able to either complete their studies in another course or with another education provider or receive a refund of your unspent tuition fees.",
        "Not requiring you to pay more than 50% of course fees prior to commencement, except where a course is less than 26 weeks. However, you may choose to pay your fees in full or a greater amount than 50%. Please contact us if you would like to pay more than is documented in your student agreement.",
    ];

    const secondList = [
        "Overseas Student Health Cover",
        "Accommodation arrangements",
        "Airport Pick-up",
    ];

    const thirdList = [
        "First warning letter: failing to pay an invoice within 5 days of receipt or contacting us to make alternative arrangements.",
        "Second warning letter: failing to pay an invoice within 5 days of receipt of the first warning letter or contacting us to make alternative arrangements.",
        "Notice of intention to report: failing to pay an invoice within 5 days of receipt of the second warning letter or contacting us to make alternative arrangements.",
    ];


    const t1head = ["Additional Fees that may apply", "Amount (in AUD)"];
    const t1body: (string | number)[][] = [
        ["Re-assessment fee (students have a total of 2 attempts and any attempt thereafter will incur the stated fee) - Non-Refundable", "$150"],
        ["Replacement of Statement of Attainment - Non-Refundable", "$150"],
        ["Replacement Certificate - Non-Refundable", "$150"],
        ["Replacement of Transcript (Record of Results) - Non-Refundable ", "$150"],
        ["Student Record (printed) Fee - Non-Refundable", "$150"],
        ["Approved Leave and Course Deferment Fee - Non-Refundable", "$150"],
        ["Course Withdrawal Fee - Non-Refundable", "$150"],
        ["Change of Class Fee (Subject to approval) - Non-Refundable", "$150"],
        ["Change of Timetable Fee - Non-Refundable", "$150"],
        ["Printing / photocopying - Non-Refundable", "$150"],
        ["Tuition fee late payment penalty (each week delay attracts penalty) - Non-Refundable", "$150"],
        ["Credit Card surcharge ", "$150"],
        ["Recognition of Prior Learning (RPL) assessment per unit - NonRefundable", "$150"],
        ["Document urgent processing fee - Non-Refundable", "$150"],
    ];

    return (
        <Page size="A4" style={page}>
            <Header />
            {/* body */}
            <View style={fontBody}>

                <Text style={[subTitle, primary, center]}>Student Agreement</Text>
                <Text style={[subTitle, primary, center]}>Terms and conditions</Text>

                <Text style={[subTitle]}>Fees and Refunds</Text>

                <Text style={pMarginBtm}>We want to make sure you understand all fees and charges associated with your course so please carefully
                    read this section before signing the Student Agreement.</Text>
                <Text style={pMarginBtm}>Students are advised of the potential for fees and charges to change over the duration of their course.
                    All fees and charges will be reviewed annually, and all marketing material and student information will be
                    updated accordingly. New fees and charges will generally only apply to incoming students.</Text>

                <Text style={[subTitle, pMarginBtm]}>Any fees and charges documented in the agreement will not change during the duration of your
                    course.
                </Text>

                <Text style={pMarginBtm}>We protect the pre-paid fees all times by:</Text>

                <BulletList items={listItems} />

                <Text style={pMarginBtm}>Please note that the following fees can apply in addition to the fees advertised in the Course Brochure.</Text>

                <BulletList items={secondList} />


                <Text style={pMarginBtm}>(You will be advised of the above charges only if you request Velocity Education and Training to
                    make arrangements for you. The charges for the above request will be based on the prevailing
                    market charges at the time of request.)
                </Text>

                <Text style={pMarginBtm}>Additional fees that may apply in addition to tuition and non-tuition fees, if the student request, include:</Text>

                <Table
                    headItems={t1head}
                    bodyItems={t1body}
                    headCss={[{
                        backgroundColor: "#C09F41",
                        color: "#1D1A57",
                        textAlign: "center"
                    }]}
                    colWidth={[
                        { width: "70%" },
                        { width: "30%" },
                    ]}
                />

                <Text style={pMarginBtm}>If these fees apply, they will be included in the amounts shown on the previous page. You are required to
                    pay all fees and charges by the date indicated on the invoice. Where you are unable to make a payment
                    by the specified date, please contact us to discuss alternative arrangements.
                </Text>

                <Text style={pMarginBtm}>All payments are to be made by bank transfer into the account specified on the invoice.</Text>

                <Text style={pMarginBtm}>Where fees are overdue and you have not made alternative arrangements, a first warning, second warning
                    and notice of intention to report regarding non-payment of fees will be sent to you as follows:
                </Text>

                <BulletList items={thirdList} />

                <Text style={pMarginBtm}>Following cancellation of enrolment due to non-payment of fees, your debt will be referred to a debt
                    collection agency.
                </Text>

            </View>
            <Footer />

        </Page>
    )
}

export default FeesAndRefund