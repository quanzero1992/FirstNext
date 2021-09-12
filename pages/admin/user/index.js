import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const UserIndex = () => {
  const router = useRouter();
  const clickHandle = (e) => {
    e.preventDefault();
    return router.push("./post");
  };

  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <h1>User pages</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <Link href="/">
            <a
              style={{
                display: "inline-block",
                border: "1px solid gray",
                margin: "1rem",
                padding: "1rem",
              }}
            >
              Go to homepage
            </a>
          </Link>
        </div>
        <div>
          <Link href="/admin/post">
            <a
              style={{
                display: "inline-block",
                border: "1px solid gray",
                margin: "1rem",
                padding: "1rem",
              }}
            >
              Go to posts
            </a>
          </Link>
        </div>
        <button onClick={clickHandle}>Go to posts</button>
      </div>
    </>
  );
};

export default UserIndex;
