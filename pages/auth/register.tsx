import { Formik } from "formik";
import { registerSchema } from "@utils/helpers/loginSchema";
import { Button, Input } from "@components/index";
import useAuthenticate from "@utils/hooks/useAuthenticate";
import Head from "next/head";
import Link from "next/link";

export default function Login() {
  const { onRegister, state } = useAuthenticate("register");
  return (
    <main className="w-full min-h-[calc(100vh-100px)] flex justify-center items-center">
      <Head>
        <title>Register</title>
      </Head>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          phone: "",
          email: "",
          password: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(v) => {
          onRegister({
            ...v,
            email: v.email.trim(),
            password: v.password.trim(),
          });
        }}
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
        }) => (
          <div className="w-full flex flex-col md:w-3/4 justify-center max-w-sm p-4 m-3 bg-zinc-900 rounded-lg ">
            <h1 className="text-4xl mb-5 font-bold p-2 text-white">Register</h1>

            <Input
              label={!!errors.name && touched.name ? errors.name : "Name"}
              value={values.name}
              name="name"
              placeholder="Name"
              onChange={handleChange("name")}
              onBlur={handleBlur("name")}
              classes={`mt-0 bg-zinc-950 text-white mb-2`}
              error={!!errors.name && touched.name}
            />

            <Input
              label={
                !!errors.surname && touched.surname ? errors.surname : "Surname"
              }
              value={values.surname}
              name="surname"
              placeholder="Surname"
              onChange={handleChange("surname")}
              onBlur={handleBlur("surname")}
              classes={`mt-0 mb-0 bg-zinc-950 text-white mb-2`}
              error={!!errors.surname && touched.surname}
            />

            <Input
              label={!!errors.phone && touched.phone ? errors.phone : "Phone"}
              value={values.phone}
              name="phone"
              placeholder="Like +48213742069"
              onChange={handleChange("phone")}
              onBlur={handleBlur("phone")}
              type="tel"
              classes={`mt-0 mb-0 bg-zinc-950 text-white mb-2`}
              error={!!errors.phone && touched.phone}
            />

            <Input
              label={!!errors.email && touched.email ? errors.email : "Email"}
              value={values.email}
              name="email"
              placeholder="Email"
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              classes={`mt-0 mb-0 bg-zinc-950 text-white mb-2`}
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
              <div className="font-medium mt-2 text-red-600">
                {state.error?.message}
              </div>
            )}

            <div className="w-full mt-2 p-2">
              <Button
                disabled={!(isValid && dirty)}
                onClick={() => handleSubmit()}
                type="submit"
                variants="fire"
                classes="active:scale-[0.95] !py-3 !border-0 w-full"
              >
                Register
              </Button>
            </div>
            <div className="text-center underline text-base text-zinc-400 font-medium mt-2">
              <Link href="/auth/login">Or log in</Link>
            </div>
          </div>
        )}
      </Formik>
    </main>
  );
}
