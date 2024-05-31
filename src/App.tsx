import React from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Output from './pages/Output';

const App: React.FC = () => {
  return (
    <div>
      <div>
        <PDFViewer width="100%" height="600">
          <Output />
        </PDFViewer>
      </div>

      <PDFDownloadLink document={<Output />} fileName="offer_letter.pdf">
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>


      <div className='bg-teal-200 w-full'>
        lol
      </div>
    </div>
  );
}

export default App;
