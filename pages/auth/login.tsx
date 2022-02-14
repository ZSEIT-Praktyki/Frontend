import { Formik } from "formik";
import loginSchema from "@utils/helpers/loginSchema";
import { Button, Input } from "@components/index";
import useAuthenticate from "@utils/hooks/useAuthenticate";
import Head from "next/head";
import Link from "next/link";

export default function Login() {
  const { onLogin } = useAuthenticate("login");
  return (
    <main className="w-full flex justify-center h-screen flex-col items-center">
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
        }) => (
          <div className="w-full flex flex-col md:w-3/4 justify-center max-w-sm p-4 h-2/4 bg-white ">
            <h1 className="text-5xl text-center mt-5 mb-10 font-bold p-2">
              Log in
            </h1>

            <label
              htmlFor="name"
              className={`ml-2 font-medium ${errors.email && "text-rose-600"}`}
            >
              {errors.email || "Email"}
            </label>
            <Input
              value={values.email}
              name="email"
              placeholder="Email"
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              classes={`mt-0 mb-0 `}
              error={!!errors.email}
            />
            <p className="ml-2 text-xs">Must be a valid email</p>
            <label
              htmlFor="name"
              className={`ml-2 font-medium mt-4 ${
                !!errors.password && "text-rose-600"
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
              classes={`mt-0 mb-0`}
              error={!!errors.password}
            />

            <p className="ml-2 text-xs">
              Password must be at least 6 characters long
            </p>
            <Button
              disabled={!(isValid && dirty)}
              //@ts-ignore
              onClick={handleSubmit}
              type="submit"
              classes="mt-6 hover:ring hover:ring-3 hover:ring-purple-800 ring-offset-2 active:scale-[0.95]"
            >
              LOGIN
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
