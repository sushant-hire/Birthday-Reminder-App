import React from "react";
import styles from "./NavBar.module.css";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import CakeIcon from "@mui/icons-material/Cake";
import StarPurple500RoundedIcon from "@mui/icons-material/StarPurple500Rounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

function NavBar() {
  return (
    <nav>
      <ul className={styles.NavContainer}>
        <li className={styles.NavListContainer}>
          {" "}
          <StarRoundedIcon /> Birthday Memory Palace <StarRoundedIcon />{" "}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
