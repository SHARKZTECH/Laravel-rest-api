'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

export default function AddStudent() {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  const initialStudentFormData = {
    name: '',
    email: '',
    course: '',
    phone: '',
  };
  const [formDataStudent, setFormDataStudent] = useState(initialStudentFormData);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormDataStudent((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Now you can use the formData values to add the student
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Course:', formData.course);
    console.log('Phone:', formData.phone);

    // Clear the input fields after adding the student
    setFormDataStudent(initialFormData);

    // Close the modal after form submission
    props.setOpenModal(undefined);
  };

  return (
    <>
      <Button onClick={() => props.setOpenModal('form-elements')}>Add Student</Button>
      <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add Student</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput id="name" placeholder="name" required onChange={handleInputChange} value={formDataStudent.name}/>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput id="email" placeholder="name@company.com" required onChange={handleInputChange} value={formDataStudent.email}/>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="course" value="Course" />
              </div>
              <TextInput id="course" placeholder="course" required onChange={handleInputChange} value={formDataStudent.course} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Phone" />
              </div>
              <TextInput id="phone" placeholder="phone" required onChange={handleInputChange} value={formDataStudent.phone} />
            </div>    
     
            <div className="w-full">
              <Button>Add Student</Button>
            </div>
      
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}


