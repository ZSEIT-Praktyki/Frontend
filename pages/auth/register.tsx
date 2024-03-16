import { Formik } from "formik";
import { registerSchema } from "@utils/helpers/loginSchema";
import { Button, Input } from "@components/index";
import useAuthenticate from "@utils/hooks/useAuthenticate";
import Head from "next/head";
import Link from "next/link";

export default function Login() {
  const { onRegister, state } = useAuthenticate("register");
  return (
    <main className="w-full h-1/3 flex justify-center items-center">
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
        onSubmit={(v) =>
          onRegister({
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
        }) => (
          <div className="w-full flex flex-col md:w-3/4 justify-center max-w-sm p-4 m-3 bg-zinc-900 ">
            <h1 className="text-5xl text-center mt-5 mb-8 font-bold p-2 text-purple-800">
              Register
            </h1>
            <label
              htmlFor="name"
              className={`ml-2  font-medium text-gray-300 ${
                !!errors.name && touched.name && "!text-rose-600"
              }`}
            >
              {!!errors.name && touched.name ? errors.name : "Name"}
            </label>
            <Input
              value={values.name}
              name="name"
              placeholder="Name"
              onChange={handleChange("name")}
              onBlur={handleBlur("name")}
              classes={`mt-0 mb-0 bg-zinc-950 text-white`}
              error={!!errors.name && touched.name}
            />
            <label
              htmlFor="name"
              className={`ml-2 mt-2 font-medium text-gray-300 ${
                !!errors.surname && touched.surname && "!text-rose-600"
              }`}
            >
              {!!errors.surname && touched.surname ? errors.surname : "Surname"}
            </label>
            <Input
              value={values.surname}
              name="surname"
              placeholder="Surname"
              onChange={handleChange("surname")}
              onBlur={handleBlur("surname")}
              classes={`mt-0 mb-0 bg-zinc-950 text-white`}
              error={!!errors.surname && touched.surname}
            />
            <label
              htmlFor="name"
              className={`ml-2 mt-2 font-medium text-gray-300 ${
                !!errors.phone && touched.phone && "!text-rose-600"
              }`}
            >
              {!!errors.phone && touched.phone ? errors.phone : "Phone"}
            </label>
            <Input
              value={values.phone}
              name="phone"
              placeholder="Like +48213742069"
              onChange={handleChange("phone")}
              onBlur={handleBlur("phone")}
              type="tel"
              classes={`mt-0 mb-0 bg-zinc-950 text-white`}
              error={!!errors.phone && touched.phone}
            />
            <p className="ml-2 mb-2 text-xs text-gray-300">
              Phone number should be 12char with prefix
            </p>
            <label
              htmlFor="name"
              className={`ml-2  font-medium text-gray-300 ${
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
              classes={`mt-0 mb-0 bg-zinc-950 text-white`}
              error={!!errors.email && touched.email}
            />
            <p className="ml-2 text-xs text-gray-300">Must be a valid email</p>
            <label
              htmlFor="name"
              className={`ml-2 font-medium mt-2 text-gray-300 ${
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
              classes={`mt-0 mb-0 bg-zinc-950 text-white`}
              error={!!errors.password && touched.password}
            />

            <p className="ml-2 mb-4 text-xs text-gray-300">
              Password must be at least 6 characters long
            </p>

            {typeof state.error?.message !== "undefined" && (
              <div className="font-medium mt-2 text-red-600">
                {state.error?.message}
              </div>
            )}

            <Button
              disabled={!(isValid && dirty)}
              onClick={() => handleSubmit()}
              type="submit"
              variants="fire"
              classes="active:scale-[0.95] !py-3 !border-0"
            >
              Register
            </Button>
            <div className="text-center text-l text-purple-800 font-medium mt-2">
              <Link href="/auth/login">log in</Link>
            </div>
          </div>
        )}
      </Formik>
    </main>
  );
}
