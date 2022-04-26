import React, { useState } from "react";
import axios from "axios";
import styles from "./styles/style.module.scss";

axios.defaults.withCredentials = true;
function Home() {
  const [state, setState] = useState({
    value: "Private Protected Route - Home",
  });

  /*  The UseEffect below is used to verify the working of Protected Route. 
	 Do not use it aimlessly as it will cause performance issue and server timout due to infinite execution in loop

	useEffect(() => {
		console.log(state.value)
		axios
			.post('http://localhost:8888/home', {
				withCredentials: true
			})
			.then(function(res) {
				// console.log(res.data);
				setState({ ...state, value: res.data });
			})
			.catch(function(error) {
				console.log(error.response);
			});
	},[state]);
	*/

  const redirect = () => {
    // axios
    //   .get("")
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   });
    // window.location.reload();
  };
  return (
    <>
      <div className={styles.thirdwrapper}>
        <img id={styles.greentick} src="/images/greentickvector.svg" alt="" />
        <h1>Signup successful</h1>
        <p>Congratulations, your account has been successfully created</p>
        <h2>
          <strong>NOVA</strong>
        </h2>
        <div className={styles.overlay}>
          {/* <Image src={overlay} /> */}
          <img src="/images/signupoverlay.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
