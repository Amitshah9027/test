import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer(),
  password: yup.string().min(4).max(15).required(),
  confirmPass: yup.string().oneOf([yup.ref("password"), null]),
});
function Form() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="Form">
      <div className="title">Sign Up</div>
      <div className="inputs"></div>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          type="text"
          name="firstName"
          placeholder="FirstName ......"
          ref={register}
        />
        <p>{errors.firstName?.message}</p>
        <input
          type="text"
          name="lastName"
          placeholder="Last name ......"
          ref={register}
        />{" "}
        <p>{errors.lastName?.message}</p>
        <input
          type="text"
          name="email"
          placeholder="Email ......"
          ref={register}
        />
        <p>{errors.email?.message}</p>
        <input type="text" name="age" placeholder="age ......" ref={register} />
        <p>{errors.age?.message}</p>
        <input
          type="text"
          name="password"
          placeholder="Pass ......"
          ref={register}
        />
        <p>{errors.password?.message}</p>
        <input
          type="text"
          name="confirmPass"
          placeholder="confirmPass ......"
        />
        <p>{errors.confirmpass && "password donot match"}</p>
      </form>
    </div>
  );
}

export default Form;
