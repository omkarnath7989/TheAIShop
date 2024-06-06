import { UserButton } from "@clerk/nextjs";
import { SignedIn , SignedOut ,SignInButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <>
      <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
      </div>
    </>
  );
};

export default Home;
