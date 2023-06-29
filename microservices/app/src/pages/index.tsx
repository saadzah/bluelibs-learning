import { useGuardian } from "@bluelibs/x-ui-guardian-bundle";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUserGetLazyQuery, useUserGetQuery } from "../bundles/UIAppBundle/queries/generated/graphql";
import { User } from "../routes";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {

  const guardian = useGuardian();
  const router = useRouter();
  const [loggedin, setLoggedIn] = useState(false);


  useEffect(() => {
    guardian.login("szahid@agencybox.com", "test@123").then((data) => {
      console.log(data);
      console.log("loggedin")
      setLoggedIn(true);
      router.push(User.path)
    })
  }, [guardian]);

  return <div className={styles.container}>
    logginIn
  </div>;
};

export default Home;
