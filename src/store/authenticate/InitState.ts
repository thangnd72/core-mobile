import * as Yup from "yup";
import { DialogMessage } from "models/message";

import { emailRegExp, passRegExp, nameRegExp } from "constant";
import { FormStage, Stage, TypeField } from "models/form";
import { LoginUser, Register } from "models/auth";

export const Forms: FormStage[] = [
  {
    stage: Stage.LOGIN,
    title: "Login",
    descriptions: "",
    rows: [
      {
        controls: [
          {
            fieldName: "email",
            label: "Email",
            placeholder: "Email",
            type: TypeField.TEXT,
          },
        ],
      },
      {
        controls: [
          {
            fieldName: "password",
            label: "Password",
            placeholder: "Password",
            type: TypeField.PASSWORD,
          },
        ],
      },
    ],
  },
  {
    stage: Stage.SIGNUP,
    title: "Register",
    descriptions: "",
    rows: [
      {
        controls: [
          {
            fieldName: "lastName",
            label: "LastName",
            placeholder: "LastName",
            type: TypeField.TEXT,
          },
        ],
      },
      {
        controls: [
          {
            fieldName: "firstName",
            label: "FirstName",
            placeholder: "FirstName",
            type: TypeField.PASSWORD,
          },
        ],
      },
      {
        controls: [
          {
            fieldName: "email",
            label: "Email",
            placeholder: "Email",
            type: TypeField.TEXT,
          },
        ],
      },
      {
        controls: [
          {
            fieldName: "password",
            label: "Password",
            placeholder: "Password",
            type: TypeField.PASSWORD,
          },
        ],
      },
      {
        controls: [
          {
            fieldName: "repeatpassword",
            label: "Re-Password",
            placeholder: "Re-Password",
            type: TypeField.PASSWORD,
          },
        ],
      },
    ],
  },
];

export const validationSignUpSchema = Yup.object().shape({
  lastName: Yup.string()
    .required("LastName is require")
    .matches(nameRegExp, "LastName can not have special character"),
  firstName: Yup.string()
    .required("FirstName is require")
    .matches(nameRegExp, "FirstName can not have special character"),
  email: Yup.string()
    .required("Email is require")
    .matches(emailRegExp, "Email not match format user@gmail.com"),

  password: Yup.string()
    .matches(
      passRegExp,
      "Your password MUST have at least one UPPERCASE character and one Special (Non-Alphanumeric) character (eg. ! @ # $ % ^ & * ) "
    )
    .required("Password is require"),
  repeatpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password not match"
  ),
});

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Nhập tài khoản!")
    .matches(emailRegExp, "Email không đúng định dạng user@gmail.com"),

  password: Yup.string().required("Nhập mật khẩu"),
});

export interface AuthenticateState {
  stage: Stage;
  forms: FormStage[];
  user?: LoginUser;
  isLoggedIn?: boolean;
  validationSchema?: any;
  validationSignUpSchema?: any;
  commited: boolean;
  message?: DialogMessage;
  register?: Register;
  email?: string;
}
export const InitState: AuthenticateState = {
  stage: Stage.LOGIN,
  forms: Forms,
  user: {
    email: "",
    password: "",
  },
  register: {
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    repeatPassword: "",
  },
  validationSchema: validationSchema,
  validationSignUpSchema: validationSignUpSchema,
  commited: false,
  isLoggedIn: false,
};
