'use client';

import {
  AddIcon,
  Backdrop,
  Button,
  CloseIcon,
  IconButton,
  Modal,
  Portal,
  TextField,
} from '@repo/ui/components';
import ContactItem from './ContactItem';
import contacts from '@repo/mocks/contacts';
import { useState } from 'react';

export interface Person {
  avatar: string;
  name: string;
  email: string;
}

const ContactList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddContact = () => {
    setIsOpen(true);
  };

  return (
    <div className="px-8 py-6 bg-default-white dark:bg-text-dark-02 rounded-[1.25rem]">
      <div className="flex justify-between items-center mb-6">
        <strong className="h2 text-text-light-01 dark:text-text-dark-03">
          Contact
        </strong>
        <IconButton
          className="bg-default-brand dark:bg-default-brand size-10 p-1"
          onClick={handleAddContact}
        >
          <AddIcon className="text-default-white" />
        </IconButton>
      </div>
      <div className="flex flex-col gap-6 max-h-[25rem] overflow-auto">
        {contacts.data.map((contact: Person) => (
          <ContactItem key={contact.email} person={contact} />
        ))}
      </div>

      {isOpen && (
        <Portal>
          <Backdrop show={isOpen} onClick={() => setIsOpen(false)} />
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="min-w-80">
              <div className="text-center relative flex items-center justify-center">
                <span className="h3 py-5 text-text-light-01 dark:text-text-dark-03">
                  Add Contact
                </span>
                <IconButton
                  className="absolute top-0 right-0 bottom-0 text-text-light-02/50 dark:text-text-dark-03/50 shadow-none"
                  onClick={() => setIsOpen(false)}
                >
                  <CloseIcon />
                </IconButton>
              </div>
              <div className="flex flex-col gap-6 pt-4 pb-6 px-6">
                <TextField
                  label="Please enter Email"
                  placeholder="Please enter Email"
                  className="bg-transparent text-center shadow-none [&_input]:border-text-dark-03 [&_input]:border [&_input]:rounded-full [&_input]:p-4 [&_input]:w-full p-0 [&_input]:placeholder:text-center [&_input]:mt-3 [&_input]:mb-8 [&_label]:body2 [&_label]:text-text-light-02 dark:[&_label]:text-text-dark-03/50"
                />
                <Button
                  variant="primary"
                  className="w-full py-4 justify-center"
                >
                  Add
                </Button>
              </div>
            </div>
          </Modal>
        </Portal>
      )}
    </div>
  );
};

export default ContactList;
