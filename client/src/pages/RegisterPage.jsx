import React, { useState, useRef } from 'react';
import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { contextApi } from './../contextApi/ContextApi';

export default function RegisterPage() {
  const { handleInputChange,handleSubmit,formData} = useContext(contextApi);



  return (
    <div className='app'>
      <Card className="max-w-lg mx-auto my-16">
        <h1 className='text-center py-5 dark:text-white text-xl font-bold'>Register</h1>
        <form className="flex max-w-lg flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Your username" />
            </div>
            <TextInput
              id="username"
              placeholder="username"
              required
              shadow
              type="text"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              placeholder="name@flowbite.com"
              required
              shadow
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              required
              shadow
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeatPassword" value="Repeat password" />
            </div>
            <TextInput
              id="repeatPassword"
              required
              shadow
              type="password"
              value={formData.repeatPassword}
              onChange={handleInputChange}
            />
          </div>

          <Button type="submit">
            Register new account
          </Button>
          <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
            Already registered?&nbsp;
            <a href="/login" className="text-cyan-700 hover:underline dark:text-cyan-500">
              Login
            </a>
          </div>
        </form>
      </Card>
    </div>
  );
}
