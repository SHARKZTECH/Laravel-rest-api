import React, { useState } from 'react';
import { Card, Label, TextInput, Button } from 'flowbite-react';

const LoginPage = () => {
  const initialFormData = {
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Now you can use these email and password values for authentication or other actions
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);

    // Clear the input fields after form submission
    setFormData(initialFormData);
  };

  return (
    <div className='app'>
      <Card className="max-w-lg mx-auto my-16">
        <h1 className='text-center py-5 dark:text-white text-xl font-medium text-gray-900'>Sign In</h1>
        <form className="flex max-w-lg flex-col gap-4" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                required
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
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full flex justify-center">
              <Button type="submit">Log in</Button>
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
    </div>
  );
};

export default LoginPage;
