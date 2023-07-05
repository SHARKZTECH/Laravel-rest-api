import { Card, Checkbox, Label, TextInput,Button } from 'flowbite-react'
import React from 'react'

const LoginPage = () => {
  return (
<div className='app' >
      <Card
          className="max-w-lg mx-auto my-16"
          >
            <h1 className='text-center py-5 dark:text-white text-xl font-medium text-gray-900'>Sing In</h1>
          <form className="flex max-w-lg flex-col gap-4">
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email" placeholder="name@company.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
           
            <div className="w-full flex justify-center">
              <Button>Log in</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a href="/register" className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create account
              </a>
            </div>
          </div>
          </form>
          </Card>
      </div>  )
}

export default LoginPage