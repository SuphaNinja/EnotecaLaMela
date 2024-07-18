import LoginBtn from "../components/LoginBtn"
import { useEffect, useState } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Login () {
    const [ user, setUser ] = useState<any>(null);
    const [profile, setProfile] = useState<any>(null);

    const login = useGoogleLogin({
        onSuccess: (data) => setUser(data as any),
        onError: (error) => console.log('Login Failed:', error)
    });

    /* const userProfile = useQuery({
        queryKey: ["userProfile"],
        queryFn: () => {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    },
            }),
        }
    }) */

    const logout = () => {
        googleLogout()
    }
  

    return ( 
        <div>
            <h2>React Google Login</h2>
            <button onClick={()=>console.log(user)}>console.loguser</button>
            <br />
            <button onClick={()=>console.log(profile)}>console.profule</button>
            <br />
            {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={()=>logout()}>Log out</button>
                </div>
            ) : (
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
            )}
        </div>
    )
}