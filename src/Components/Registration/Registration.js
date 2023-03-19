import React, { useState, useEffect, useRef } from "react";
import styles from "./Registration.module.css";
import CustomInput from "../../Molecules/Custom Input/CustomInput";
import CustomButton from "../../Molecules/Custom Button/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { userData } from "../../Constant/Constant";

function Registration() {
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [birthdate, setBirthdate] = useState("");

  let navigate = useNavigate();

  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
  };
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("userlist")) || [];
    if (localData.length === 0) {
      localStorage.setItem("userlist", JSON.stringify(userData));
    }
  }, []);

  const handleUserSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      birthdate: birthdate,
      image: image,
    };

    let olddata = localStorage.getItem("userlist");
    if (olddata == null) {
      olddata = [];
      olddata.push(newUser);

      localStorage.setItem("userlist", JSON.stringify(olddata));
    } else {
      let oldArr = JSON.parse(olddata);
      oldArr.push(newUser);
      localStorage.setItem("userlist", JSON.stringify(oldArr));
    }
    alert("Successfully registered!");
    setFirstName("");
    setLastName("");
    setAge("");
    setBirthdate("");
    setImage(null);
  };

  return (
    <div className={styles.MainRegistrationContainer}>
      {image ? (
        <img
          className={styles.ProfilePhoto}
          onClick={handleImageClick}
          src={image}
          height="80"
          width="80"
          alt="Profile"
        />
      ) : (
        <img
          className={styles.ProfilePhoto}
          onClick={handleImageClick}
          src="https://media.istockphoto.com/id/1248723171/vector/camera-photo-upload-icon-on-isolated-white-background-eps-10-vector.jpg?s=612x612&w=0&k=20&c=e-OBJ2jbB-W_vfEwNCip4PW4DqhHGXYMtC3K_mzOac0="
          height="80"
          width="80"
          alt="Profile"
        />
      )}

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageUpload}
        style={{ display: "none" }}
        value=""
      />
      <CustomInput
        type="text"
        className={styles.InputBox}
        placeholder="Your first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <CustomInput
        type="text"
        className={styles.InputBox}
        placeholder="Your last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <CustomInput
        type="number"
        className={styles.InputBox}
        placeholder="Years on Earth"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <div className={styles.BirthdayInputContainer}>
        <span className={styles.BirthdayText}>When's your birthday?</span>
        <input
          type="date"
          value={birthdate}
          onChange={handleBirthdateChange}
          className={styles.BirthdayInput}
        />
      </div>
      <div className={styles.ButtonContainer}>
        <CustomButton
          className={styles.CustomButton}
          buttonText="Submit Details"
          onClick={handleUserSubmit}
        />
        <Link to="birthday">
          <CustomButton
            className={styles.CustomButton}
            buttonText="Show Birthdays"
          />
        </Link>
      </div>
    </div>
  );
}

export default Registration;
