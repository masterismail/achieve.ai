import { createClient } from "@supabase/supabase-js";
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from '@/app/supabaseclient';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import { use, useState } from "react";
import { useEffect } from "react";
import Layout from "@/app/components/layout";

function Success() {
    const [user, setUser] = useState({});
    const router = useRouter();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                if(value.data?.user) {
                    console.log(value.data.user);
                    setUser(value.data.user);
                }
            })
        }
        getUserData();
    },[]);
    
    async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        localStorage.clear();
        router.push('/login'); 
      }
    

    return (
        <div className="App">
             
            <header className="App-header">
            { Object.keys(user).length !== 0 ?

             <>
              
              <Layout />
              <button onClick={() => signOutUser()}>Sign Out</button> 
            </>

            : 
            <>
                <h1>kya hua sastee hacker ? jao login karke aao</h1>
                <button onClick={() => signOutUser()}>go back home</button>
            </>
            }
            </header>
            
        </div>
    )
    }

    export default Success;