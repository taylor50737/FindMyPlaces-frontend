import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Taylor Lo",
      image:
        "https://i.etsystatic.com/25924315/r/il/b87247/4826173692/il_794xN.4826173692_e7xp.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
