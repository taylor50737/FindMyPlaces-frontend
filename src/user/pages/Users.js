import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Taylor",
      image:
        "https://i.etsystatic.com/25924315/r/il/b87247/4826173692/il_794xN.4826173692_e7xp.jpg",
      places: 2,
    },
    {
      id: "u2",
      name: "Kuri",
      image:
        "https://www.thesprucepets.com/thmb/GEbKdMXYZLs4jIrdx2Xm9K0EK74=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/top-friendliest-dog-breeds-4691511_hero-5c6a918dcf56409c888d78b0fac82d18.jpg",
      places: 1,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
