import { AddIcon, IconButton } from '@repo/ui/components';
import ContactItem from './ContactItem';
import contacts from '@repo/mocks/contacts';

export interface Person {
  avatar: string;
  name: string;
  email: string;
}

const ContactList = () => {
  return (
    <div className="px-8 py-6 bg-default-white dark:bg-text-dark-02 rounded-[1.25rem]">
      <div className="flex justify-between items-center mb-6">
        <strong className="h2 text-text-light-01 dark:text-text-dark-03">
          Contact
        </strong>
        <IconButton className="bg-default-brand dark:bg-default-brand size-10 p-1">
          <AddIcon className="text-default-white" />
        </IconButton>
      </div>
      <div className="flex flex-col gap-6 max-h-[25rem] overflow-auto">
        {contacts.data.map((contact: Person) => (
          <ContactItem key={contact.email} person={contact} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
