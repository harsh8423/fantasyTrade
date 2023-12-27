import React, { useEffect } from "react";

export default function Home() {
  const getAuth = () => {
    const apiUrl = "https://api.upstox.com/v2/user/profile";
    const apiMethod = "GET";
    const apiVersion = "2.0";
    const accessToken = "YOUR_ACTUAL_ACCESS_TOKEN";

    const headers = {
      accept: "application/json",
      "Api-Version": apiVersion,
      Authorization: `Bearer ${accessToken}`,
      // Add other headers if needed, such as 'Content-Type' for request payload
    };

    fetch(apiUrl, {
      method: apiMethod,
      headers: headers,
      // Add a request payload if needed (for example, body: JSON.stringify({ key: 'value' }))
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("API response:", data);
        // Handle the API response data here
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors here
      });

    useEffect(() => {
      getAuth();
    }, []);
  };
  return <div>home</div>;
}
