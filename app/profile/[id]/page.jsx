'use client'
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Profile from "@components/Profile";

const OtherProfile = ({ params }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const userName = searchParams.get("name");
    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params.id}/posts`);
            const data = await response.json();

            setMyPosts(data);
            console.log(data); // Log the fetched data to the console
        }

        if (params.id) {
            fetchPosts();
        }

    }, [params.id]);



    return (
            <Profile
            name={userName}
            desc={`Welcome to ${userName} personalised profile page`}
            data={myPosts}
            />
    )
}

export default OtherProfile;
