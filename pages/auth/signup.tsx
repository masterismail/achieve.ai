import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from '@/app/supabaseclient';
import { Theme } from '@supabase/auth-ui-shared';
import styles from 'pages/auth/signup.module.css';



const Page: React.FC = () => {
  return (
    <div>
    <header className={styles.mainContent}>
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }} // Apply predefined theme
    />
    </header>
    </div>
  );
};

// Assuming this file is in the pages directory
export default Page;
