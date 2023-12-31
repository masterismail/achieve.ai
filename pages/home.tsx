// Import statements
import Image from 'next/image';
import SideNavbar from '/home/tahseer/Desktop/Workshop/achieve.ai/src/app/components/side-navbar';

import BasicModal from '@/app/components/goalmodal';
import TableComponent from '@/app/components/testsupa';
import Frame from './home';
import App from './auth/signup';
import Goals from '@/app/components/goals';
// Component definition
export default function Home() {
  return (
    <div>
      <Goals />
      <div style={{ minHeight: 'calc(100vh - 60px)', position: 'relative' }}>
        {/* Replace '60px' with your footer height */}
        <div style={{ paddingBottom: '60px' }}>
          {/* Content goes here */}
        </div>
        
    </div>
    </div>
  );
}

