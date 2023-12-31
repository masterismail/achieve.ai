import Image from 'next/image';
import SideNavbar from '../src/app/components/side-navbar'; 
import ListboxComponent from '../src/app/components/listbox';
import supabase from '@/app/supabaseclient';

async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) console.log('Error logging out:', error.message);
}

export default function Home() {
  return (
    <div>
      <h1>bhai goals page hai yee</h1>
      <button onClick={() => signOutUser()}>Sign Out</button>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Add any content you want to display */}
      </div>
      <SideNavbar />
    </div>
  );
}
