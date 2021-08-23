import React from "react";
import Heading from "../components/Heading";
import UserList from "../components/UserList";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <Heading />
      <UserList />
    </>
  );
};

export default Home;
