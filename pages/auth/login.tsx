import { Formik } from "formik";
import loginSchema from "@utils/helpers/loginSchema";
import { Button, Input } from "@components/index";
import useAuthenticate from "@utils/hooks/useAuthenticate";
import Head from "next/head";
import Link from "next/link";

export default function Login() {
  const { onLogin } = useAuthenticate("login");
  return (
    <main className="w-full h-screen flex items-center justify-center bg-gray-900">
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
          <div className="w-full flex flex-col md:w-3/4 justify-center max-w-sm p-2 bg-white rounded">
            <h1 className="text-5xl text-center mt-5 mb-10 font-bold p-2">
              Log in
            </h1>

            <label
              htmlFor="name"
              className={`ml-3 font-medium ${errors.email && "text-red-600"}`}
            >
              {errors.email || "Email"}
            </label>
            <Input
              value={values.email}
              name="email"
              placeholder="Email"
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              classes={errors.password && "border-red-500"}
            />

            <label
              htmlFor="name"
              className={`ml-3 font-medium ${
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
              classes={errors.password && "border-red-500"}
            />
            <Button
              disabled={!isValid && !dirty}
              //@ts-ignore
              onClick={handleSubmit}
              type="submit"
            >
              Login
            </Button>
            <div className="text-center text-sm text-purple-800 font-medium">
              <Link href="/auth/register">Sign up</Link>
            </div>
          </div>
        )}
      </Formik>
    </main>
  );
}
