import React from "react";
import InputEmail from "../../formComponents/InputEmail";
import InputPassword from "../../formComponents/inputPassword";
import GreenButton from "../../formComponents/buttonGreen";
import Header from "../../header/header";
// import { useForm } from 'react-hook-form'

function RegisterUser() {
  // const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <div class="userReg">
        <p class="regH">Buyer's Account Registration</p>

        <form>
           {/* //onSubmit={handleSubmit(onSubmit)} */} */}
          <InputEmail placeholder="Example@example.com" name="email" /*ref={register({required: true,})}*/ />
          {/* {errors.email && <p>Error here</p>} */}
          <InputPassword
            placeholder="Enter Preffered password"
            // ref={register({required: true,})}
          />
          <InputPassword placeholder="Retype password"  />
          <GreenButton text="Register" />
          <div class="register" style={{ margin: "5% auto", padding: "2%" }}>
            <p>
              By Sign Up, you agree to our <span>Terms and conditions</span>
            </p>
          </div>
        </form>
      </div>
      <Header />
    </>
  );
}

export default RegisterUser;
