import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../Molecules/Custom Button/CustomButton";
import styles from "./BirthdayCard.module.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

function BirthdayCard() {
  let data = JSON.parse(localStorage.getItem("userlist")) || "";
  const [localdata, setLocalData] = useState(data);
  const [newdata1, setNewData1] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); 
    let data = localdata.filter((el) => {
      let Data = el.birthdate.split("-");
      return +Data[1] == mm && +Data[2] == dd;
    });
    setNewData1(data);
  }, [localdata]);

  return (
    <div className={styles.MainParentContainer}>
      <div className={styles.MainBirthdayCardContainer}>
        {newdata1.map((item, index) => (
          <div key={index} className={styles.CardContainer}>
            <img
              className={styles.CardImage}
              src={item.image}
              alt={`${item.firstName} ${item.lastName}`}
            />
            <div className={styles.UserDeetsContainer}>
              <span className={styles.UserNameContainer}>
                Name: {item.firstName} {item.lastName}
              </span>
              <p className={styles.UserAgeContainer}>Age: {item.age}</p>
              <p className={styles.UserBirthdateContainer}>
                Birthdate: {item.birthdate}
              </p>
            </div>
          </div>
        ))}
      </div>
      <CustomButton
        buttonText="Simon Go Back!"
        onClick={() => navigate("/")}
        className={styles.BackButton}
      />
    </div>
  );
}

export default BirthdayCard;
