import React from "react";
import { useSelector } from "react-redux";
import { Membershipcard } from "./Membershipcard";

export const MembershipPage = () => {
  const [tiers, setTiers] = React.useState([]);

  const { token } = useSelector((state) => state.auth);
  React.useEffect(() => {
    fetch(`https://patreon-data.herokuapp.com/users/${token}`)
      .then((res) => res.json())
      .then((data) => setTiers(data.creator_mode.tiers))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "20px",
          }}
        >
          {tiers?.map((ele, ind) =>
            ind < 3 ? <Membershipcard tier={ele} /> : null
          )}
        </div>
      </div>
      <div
        style={{
          display: "grid",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "30px",
        }}
      ></div>
    </>
  );
};
