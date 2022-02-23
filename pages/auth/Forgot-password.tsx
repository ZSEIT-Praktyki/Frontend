import { Formik } from 'formik'
import loginSchema from '@utils/helpers/loginSchema'
import { Button, Input } from '@components/index'
import useAuthenticate from '@utils/hooks/useAuthenticate'
import Head from 'next/head'
import Link from 'next/link'

export default function Remind() {
  const { onLogin } = useAuthenticate('login')
  return (
    <main className='w-full h-screen flex justify-center items-center'>
      <Head>
        <title>Send me a password</title>
      </Head>
      <Formik
        initialValues={{
          email: '',
          password: '',
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
          <div className='w-full flex flex-col h-full md:w-3/4 justify-center max-w-sm p-4 sm:h-3/4 md:h-2/4 bg-gray-800 '>
            <p className='text-4xl text-center mt-5 mb-10 font-bold p-2 text-purple-800 '>
              Remind password
            </p>

            <label
              htmlFor='name'
              className={`ml-2 font-medium text-gray-300 ${
                !!errors.email && '!text-rose-600'
              }`}
            >
              {errors.email ?? 'Email'}
            </label>
            <Input
              value={values.email}
              name='email'
              placeholder='Email'
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
              classes={`mt-0 mb-0 bg-gray-900 text-white`}
              error={!!errors.email}
            />
            <p className=' mb-4 ml-2 text-xs text-gray-300'>
              Must be a valid email
            </p>

            <Button
              variants='fire'
              disabled={!(isValid && dirty)}
              onClick={() => handleSubmit()}
              type='submit'
              classes='!border-0'
            >
              Send me my e-mail
            </Button>
            <div className='text-center text-l text-purple-800 font-medium mt-2'>
              <Link href='/auth/login'>log in</Link>
            </div>
          </div>
        )}
      </Formik>
    </main>
  )
}
