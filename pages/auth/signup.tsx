import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from '@/app/supabaseclient';
import { useRouter } from 'next/router';

interface AuthEvent {
  user: any;
  error: any;
}

const Page: React.FC = () => {
  const router = useRouter();

  const handleSupabaseAuth = async (event: AuthEvent) => {
    const { user, error } = event;

    if (user) {
      // Successful sign-in
      router.push('/dashboard'); // Replace with your desired redirect path
    } else if (error) {
      console.error(error); // Handle authentication errors
      // Optionally display error messages to the user
    }
  };

  return (
    <div>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        redirectTo="/goals" // Redirect to the current page after login/signup
        SITE_URL="http://localhost:3000"
        onAuthStateChange={handleSupabaseAuth} // Handle authentication events
      />
    </div>
  );
};

export default Page;
