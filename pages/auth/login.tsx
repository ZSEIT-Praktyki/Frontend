import { Formik } from "formik";
import { loginSchema } from "@utils/helpers/loginSchema";
import { Button, Input } from "@components/index";
import useAuthenticate from "@utils/hooks/useAuthenticate";
import Head from "next/head";
import Link from "next/link";

export default function Login() {
  const { onLogin, state } = useAuthenticate("login");
  return (
    <main className="w-full min-h-[calc(100vh-100px)] flex justify-center items-center">
      <Head>
        <title>Log in</title>
      </Head>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(v) =>
          onLogin({
            email: v.email.trim(),
            password: v.password.trim(),
          })
        }
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
            <div className="w-full flex flex-col md:w-3/4 justify-center max-w-sm p-4 bg-zinc-900 rounded-lg">
              <h1 className="text-3xl font-bold p-2 text-white mb-5">Log in</h1>

              <Input
                label={!!errors.email && touched.email ? errors.email : "Email"}
                value={values.email}
                name="email"
                placeholder="Email"
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                classes={`mt-0 mb-0 bg-zinc-950 text-white mb-5`}
                error={!!errors.email && touched.email}
              />

              <Input
                label={
                  !!errors.password && touched.password
                    ? errors.password
                    : "Password"
                }
                value={values.password}
                name="password"
                placeholder="Password"
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                type="password"
                classes={`mt-5 mb-0 bg-zinc-950 text-white`}
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
              <div className="p-2 w-full">
                <Button
                  variants="fire"
                  disabled={!(isValid && dirty)}
                  onClick={() => handleSubmit()}
                  type="submit"
                  classes="!border-0 !py-3 !mt-4 w-full"
                >
                  LOGIN
                </Button>
              </div>

              <div className="text-center text-zinc-400 underline font-medium mt-2">
                <Link href="/auth/register">Or create account</Link>
              </div>
            </div>
          );
        }}
      </Formik>
    </main>
  );
}
