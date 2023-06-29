import { useGuardian } from "@bluelibs/x-ui-guardian-bundle";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useUserGetLazyQuery, useUserGetQuery } from "../bundles/UIAppBundle/queries/generated/graphql";

import styles from "../styles/Home.module.css";

const User: NextPage = () => {

  const guardian = useGuardian();

  const {data:s, loading} = useUserGetQuery();

  return <div className={styles.container}>
  {!loading && <section>
    <div>Roles: {s?.UsersFind.map((user) => {
      return user?.roles.map(role => <span key={role}>{role}</span>)
    })}</div>
  </section>
  }
  {!loading && <section>
    <div>Books: {s?.UsersFind.map((user) => {
      return user?.Books.map(book => <span key={book?.name}>{book?.name}</span>)
    })}</div>
  </section>
  }
</div>;
};

export default User;
