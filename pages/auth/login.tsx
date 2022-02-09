import { Formik } from "formik";
import loginSchema from "@utils/helpers/loginSchema";
import { Button, Input } from "@components/index";
import useAuthenticate from "@utils/hooks/useAuthenticate";

export default function Login() {
  const { onLogin } = useAuthenticate("login");
  return (
    <main className="w-full h-screen">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={onLogin}
      >
        {({
          errors,
          values,
          handleBlur,
          handleChange,
          handleSubmit,
          isValid,
          dirty,
        }) => (
          <div className="w-full flex flex-col md:w-3/4 justify-center">
            <h1 className="text-5xl text-center mt-5 mb-5 font-bold">Login</h1>

            <Input
              value={values.email}
              name="email"
              placeholder="Email"
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            <Input
              value={values.password}
              name="password"
              placeholder="Password"
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              type="password"
            />
            <Button
              disabled={!isValid && !dirty}
              //@ts-ignore
              onClick={handleSubmit}
              type="submit"
            >
              Login
            </Button>
          </div>
        )}
      </Formik>
    </main>
  );
}
