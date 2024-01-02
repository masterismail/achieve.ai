import Image from 'next/image';
import SideNavbar from '../src/app/components/side-navbar'; 
import ListboxComponent from '../src/app/components/listbox';
import supabase from '@/app/supabaseclient';
import Goals from '@/app/components/goals';
import Layout from '@/app/components/layout';
import BasicModal from '@/app/components/goalmodal';
async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) console.log('Error logging out:', error.message);
}

export default function Home() {
  return (
    <div>
      
      
      
      
      <BasicModal />
      <Goals />
    </div>
  );
}
