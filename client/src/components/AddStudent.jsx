import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useState, useRef, useContext } from 'react';
import { contextApi } from '../contextApi/contextApi';

export default function AddStudent() {
  const {addStudents}=useContext(contextApi);
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const courseInputRef = useRef(null);
  const phoneInputRef = useRef(null);



  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData={
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      course: courseInputRef.current.value,
      phone: phoneInputRef.current.value,
    };

    addStudents(inputData);    

    nameInputRef.current.value=null;
    emailInputRef.current.value=null;
    courseInputRef.current.value=null;
    phoneInputRef.current.value=null;

    props.setOpenModal(undefined);
  };

  return (
    <>
      <div className='mt-10 flex justify-center'>
        <Button onClick={() => props.setOpenModal('form-elements')}>Add Student</Button>
      </div>
      <Modal
        show={props.openModal === 'form-elements'}
        size="xl"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">Add Student</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Name" />
                </div>
                <TextInput
                  id="name"
                  placeholder="name"
                  required
                  ref={nameInputRef}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  required
                  ref={emailInputRef}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="course" value="Course" />
                </div>
                <TextInput
                  id="course"
                  placeholder="course"
                  required
                  ref={courseInputRef}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="phone" value="Phone" />
                </div>
                <TextInput
                  id="phone"
                  placeholder="Phone"
                  required
                  ref={phoneInputRef}
                />
              </div>
              <div className="w-full">
                <Button type="submit">Add Student</Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
