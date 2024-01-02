"use client";
import Image from 'next/image'
import SideNavbar from '../src/app/components/side-navbar'; 
import ListboxComponent from '../src/app/components/listbox'
import BasicSelect from '../src/app/components/listbox';
import TableComponent from '@/app/components/testsupa';
import Tasks from '@/app/components/tasks';
export default function Home() {
  return (
    <div>
        <h1>bhai Tasks page hai ye</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      </div>
      <Tasks />
      </div>
      


  );
}
