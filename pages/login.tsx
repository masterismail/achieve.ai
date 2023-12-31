import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from '@/app/supabaseclient';
import { useRouter } from 'next/router';
import { useEffect } from "react";

function Login() {
    const router = useRouter();
     
    useEffect(() => {
    supabase.auth.onAuthStateChange(async(event)=> {
        if (event === 'SIGNED_IN'){
            router.push('/success');
        }else {
            router.push('/login');
        }
    })
},[]);
    
    return (
        <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <header className="App-header">
                <Auth
                supabaseClient={supabase}
                appearance={{theme : ThemeSupa}}
                providers={['google', 'github']}
                redirectTo="http://localhost:3000/success"
                />
            </header>
        
        </div>
    )
    }

    export default Login;