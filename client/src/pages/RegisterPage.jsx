'use client';
import { Button, Card, Checkbox, Label, TextInput} from 'flowbite-react';
import { useContext } from 'react';
import { contextApi } from './../contextApi/ContextApi';

export default function RegisterPage() {
  const {name}=useContext(contextApi);
  console.log(name)
  return (
<div className='app' >
      <Card
          className="max-w-lg mx-auto my-16"
          >
            <h1 className='text-center py-5 dark:text-white text-xl font-bold'>Register</h1>
          <form className="flex max-w-lg flex-col gap-4">
          <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="name"
                  value="Your username"
                />
              </div>
              <TextInput
                id="name"
                placeholder="username"
                required
                shadow
                type="text"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email2"
                  value="Your email"
                />
              </div>
              <TextInput
                id="email2"
                placeholder="name@flowbite.com"
                required
                shadow
                type="email"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password2"
                  value="Your password"
                />
              </div>
              <TextInput
                id="password2"
                required
                shadow
                type="password"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="repeat-password"
                  value="Repeat password"
                />
              </div>
              <TextInput
                id="repeat-password"
                required
                shadow
                type="password"
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="agree" />
              <Label
                className="flex"
                htmlFor="agree"
              >
                <p>
                  I agree with the 
                </p>
                <div
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/forms"
                >
                  <p>
                    terms and conditions
                  </p>
                </div>
              </Label>
            </div>
            <Button type="submit">
              Register new account
            </Button>
          </form>
          </Card>
      </div>
  )
}


