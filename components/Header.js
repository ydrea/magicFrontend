import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

import styles from "../styles/Header.module.css";

export default () => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  const { user } = useContext(AuthContext);

  const goBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className={styles.nav}>
      {!isHome && (
        <div className={styles.back}>
          <a href="#" onClick={goBack}>
            {"<"} Back{" "}
          </a>
        </div>
      )}
      <div className={styles.title}>
        <Link href="/">
          <a>
            <img src="/glogo.svg" height="150" alt="logo" />
            <h3 className={styles.h3}>WHITE TREE</h3>
          </a>
        </Link>
      </div>

      <div className={styles.title}>
        <Link href="/products">
          <a>
            <h3 className={styles.h3}>products</h3>
          </a>
        </Link>
      </div>

      <div className={styles.title}>
        <Link href="/restaurants">
          <a>
            <h3 className={styles.h3}>restaurants</h3>
          </a>
        </Link>
      </div>

      <div className={styles.title}>
        <Link href="/producers">
          <a>
            <h3 className={styles.h3}>producers</h3>
          </a>
        </Link>
      </div>

      <div className={styles.title}>
        <Link href="/menus">
          <a>
            <h3 className={styles.h3}>menus</h3>
          </a>
        </Link>
      </div>

      <div className={styles.auth}>
        {user ? (
          <Link href="/account">
            <a>
              account
              <img src="/user_avatar.png" alt={user.email} />
            </a>
          </Link>
        ) : (
          <Link href="/login">
            <a>Log In</a>
          </Link>
        )}
      </div>
    </div>
  );
};
