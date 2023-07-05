'use client';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

export default function AddStudent() {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  return (
    <>
      <div className='mt-10 flex justify-center'>
        <Button onClick={() => props.setOpenModal('form-elements')}>Add Student </Button>
      </div>
      <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add Student</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput id="name" placeholder="name" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput id="email" placeholder="name@company.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="course" value="Course" />
              </div>
              <TextInput id="course" placeholder="course" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Phone" />
              </div>
              <TextInput id="phone" placeholder="Phone" required />
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


