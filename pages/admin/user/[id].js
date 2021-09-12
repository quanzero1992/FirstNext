import React, { Component } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const UserById = ({ id }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <h1>User id: {router.query.id} </h1>
    </>
  );
};

export default UserById;
