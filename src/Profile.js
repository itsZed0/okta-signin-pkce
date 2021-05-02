import { useOktaAuth } from "@okta/okta-react";
import React, { useState, useEffect } from "react";
import { fetchHome } from "./Api";

const Profile = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  const fetchhome = () => {
    const accessToken = authState.accessToken.accessToken;

    fetch("http://localhost:8080/home", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    if (!authState.isAuthenticated) {
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info) => {
        console.log(info);
        setUserInfo(info);
      });
    }
  }, [authState, oktaAuth]);

  return (
    <div>
      {userInfo && (
        <>
          <div>
            <p>Welcome , {userInfo.name}!</p>
          </div>
          <button onClick={() => fetchhome()}>Home</button>
        </>
      )}
    </div>
  );
};

export default Profile;
