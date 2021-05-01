import { useOktaAuth } from "@okta/okta-react";
import React, { useState, useEffect } from "react";

const Profile = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

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
        <div>
          <p>Welcome , {userInfo.name}!</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
