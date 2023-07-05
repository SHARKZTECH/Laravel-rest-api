'use client';

import { Table } from 'flowbite-react';
import { useContext } from 'react';
import { contextApi } from '../contextApi/contextApi';

export default function Students() {
   const {students} =useContext(contextApi);

  return (
    <Table striped hoverable>
      <Table.Head>
        <Table.HeadCell>
          Name
        </Table.HeadCell>
        <Table.HeadCell>
          Course
        </Table.HeadCell>
        <Table.HeadCell>
          Email
        </Table.HeadCell>
        <Table.HeadCell>
          Phone
        </Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            Edit
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {
        students?.map(student=>(
          <Table.Row key={student.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {student.name}
            </Table.Cell>
            <Table.Cell>
            {student.course}
            </Table.Cell>
            <Table.Cell>
            {student.email}
            </Table.Cell>
            <Table.Cell>
            {student.phone}
            </Table.Cell>
            <Table.Cell>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p>
                  Edit
                </p>
              </a>
            </Table.Cell>
          </Table.Row>
        ))}

      </Table.Body>
    </Table>
  )
}


