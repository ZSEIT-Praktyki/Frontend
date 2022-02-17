import { Formik } from "formik";
import loginSchema from "@utils/helpers/loginSchema";
import { Button, Input } from "@components/index";
import useAuthenticate from "@utils/hooks/useAuthenticate";
import Head from "next/head";
import Link from "next/link";

export default function Login() {
  const { onRegister } = useAuthenticate("register");
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Head>
        <title>Log in</title>
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
          <div className="w-full flex flex-col md:w-3/4 justify-center max-w-sm p-4 h-2/4 bg-gray-800 ">
            <h1 className="text-5xl text-center mt-5 mb-10 font-bold p-2 text-gray-50">
              Register
            </h1>

            <label
              htmlFor="name"
              className={`ml-2 font-medium text-gray-300 ${
                !!errors.email && "!text-rose-600"
              }`}
            >
              {errors.email ?? "Email"}
            </label>
            <Input
              value={values.email}
              name="email"
              placeholder="Email"
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              classes={`mt-0 mb-0 bg-gray-900 text-white`}
              error={!!errors.email}
            />
            <p className="ml-2 text-xs text-gray-300">Must be a valid email</p>
            <label
              htmlFor="name"
              className={`ml-2 font-medium mt-4 text-gray-300 ${
                !!errors.password && "!text-rose-600"
              }`}
            >
              {errors.password ?? "Password"}
            </label>

            <Input
              value={values.password}
              name="password"
              placeholder="Password"
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              type="password"
              classes={`mt-0 mb-0 bg-gray-900 text-white`}
              error={!!errors.password}
            />

            <p className="ml-2 text-xs text-gray-300">
              Password must be at least 6 characters long
            </p>
            <Button
              disabled={!(isValid && dirty)}
              onClick={() => handleSubmit()}
              type="submit"
              variants="fire"
              classes="active:scale-[0.95] !border-0"
            >
              Register
            </Button>
            <div className="text-center text-sm text-purple-800 font-medium mt-2">
              <Link href="/auth/login">log in</Link>
            </div>
          </div>
        )}
      </Formik>
    </main>
  );
}
