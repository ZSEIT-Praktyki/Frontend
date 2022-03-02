import { Formik } from "formik";
import { loginSchema } from "@utils/helpers/loginSchema";
import { Button, Input } from "@components/index";
import useAuthenticate from "@utils/hooks/useAuthenticate";
import Head from "next/head";
import Link from "next/link";

export default function Login() {
  const { onLogin, state } = useAuthenticate("login");
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
        onSubmit={onLogin}
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
          touched,
        }) => {
          return (
            <div className="w-full flex flex-col h-full md:w-3/4 justify-center max-w-sm p-4 sm:h-3/4 md:h-2/4 bg-gray-800 ">
              <h1 className="text-5xl  text-center mt-5 mb-10 font-bold p-2 text-purple-800">
                Log in
              </h1>

              <label
                htmlFor="name"
                className={`ml-2 font-medium text-gray-300 ${
                  !!errors.email && touched.email && "!text-rose-600"
                }`}
              >
                {!!errors.email && touched.email ? errors.email : "Email"}
              </label>
              <Input
                value={values.email}
                name="email"
                placeholder="Email"
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                classes={`mt-0 mb-0 bg-gray-900 text-white`}
                error={!!errors.email && touched.email}
              />
              <p className="ml-2 text-xs text-gray-300">
                Must be a valid email
              </p>
              <label
                htmlFor="name"
                className={`ml-2 font-medium mt-4 text-gray-300 ${
                  !!errors.password && touched.password && "!text-rose-600"
                }`}
              >
                {!!errors.password && touched.password
                  ? errors.password
                  : "Password"}
              </label>

              <Input
                value={values.password}
                name="password"
                placeholder="Password"
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                type="password"
                classes={`mt-0 mb-0 bg-gray-900 text-white`}
                error={!!errors.password && touched.password}
              />

              <p className="ml-2 text-xs text-gray-300">
                Password must be at least 6 characters long
              </p>

              {typeof state.error?.message !== "undefined" && (
                <div className="text-red-600 pl-2 font-medium mt-2">
                  {state.error?.message}
                </div>
              )}
              <Button
                variants="fire"
                disabled={!(isValid && dirty)}
                onClick={() => handleSubmit()}
                type="submit"
                classes="!border-0 !py-3 !mt-4"
              >
                LOGIN
              </Button>

              <div className="text-center text-purple-800 font-medium mt-2">
                <Link href="/auth/register">Sign up</Link>
              </div>
            </div>
          );
        }}
      </Formik>
    </main>
  );
}
