import { Document, Font, StyleSheet } from '@react-pdf/renderer';
import { FC } from 'react';
import OfferLetter from './OfferLetter';
import light from '../assets/Roboto-Light.ttf'
import regular from '../assets/Roboto-Regular.ttf'
import bold from '../assets/Roboto-Bold.ttf'

Font.register({
    family: 'Roboto',
    fonts: [
        {
            src: light,
            fontWeight: 300,
        },
        {
            src: regular,
            fontWeight: 400,
        },
        {
            src: bold,
            fontWeight: 700,
        }
    ]
})

const styles = StyleSheet.create({

    document: {
        fontSize: 10,
        fontFamily: 'Roboto',
        fontWeight: 400
    },

});


const Output: FC = () => {

    return (
        <>
            <Document style={styles.document}>
                <OfferLetter />
                <OfferLetter />
                <OfferLetter />
                {/* <AcceptanceLetter /> */}
            </Document>
        </>
    );
}

export default Output;
