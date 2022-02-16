import { Formik } from "formik";
import loginSchema from "@utils/helpers/loginSchema";
import { Button, Input } from "@components/index";
import useAuthenticate from "@utils/hooks/useAuthenticate";
import Head from "next/head";
import Link from "next/link";

export default function Login() {
  const { onRegister } = useAuthenticate("register");
  return (
    <main className="w-full flex justify-center h-screen flex-col items-center">
      <Head>
        <title>Register</title>
      </Head>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={onRegister}
        validateOnBlur
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
          <div className="w-full flex flex-col md:w-3/4 justify-center max-w-sm p-4 h-2/4 bg-white rounded">
            <h1 className="text-5xl text-center mt-5 mb-10 font-bold p-2">
              Register
            </h1>

            <label
              htmlFor="name"
              className={`ml-2 font-medium ${errors.email && "text-red-600"}`}
            >
              {errors.email || "Email"}
            </label>
            <Input
              value={values.email}
              name="email"
              placeholder="Email"
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              error={!!errors.email}
              classes={`mt-0 mb-0`}
            />
            <p className="ml-2 text-xs">Must be a valid email</p>
            <label
              htmlFor="name"
              className={`ml-2 font-medium mt-4 ${
                errors.password && "text-red-600"
              }`}
            >
              {errors.password || "Password"}
            </label>

            <Input
              value={values.password}
              name="password"
              placeholder="Password"
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              type="password"
              error={!!errors.password}
              classes={`mt-0 mb-0`}
            />

            <p className="ml-2 text-xs">
              Password must be at least 6 characters long
            </p>
            <Button
              disabled={!(isValid && dirty)}
              //@ts-ignore
              onClick={handleSubmit}
              type="submit"
              classes="mt-6"
            >
              Login
            </Button>
            <div className="text-center text-sm text-purple-800 font-medium mt-2">
              <Link href="/auth/register">Sign up</Link>
            </div>
          </div>
        )}
      </Formik>
    </main>
  );
}
