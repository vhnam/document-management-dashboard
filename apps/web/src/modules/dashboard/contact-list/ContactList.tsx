import { AddIcon, IconButton } from '@repo/ui/components';
import ContactItem from './ContactItem';

export interface Person {
  avatar: string;
  name: string;
  email: string;
}

const contactItems: Person[] = [
  {
    avatar:
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=75&fm=jpg&w=200&fit=max',
    name: 'Alice Emma',
    email: 'emmaart1234@gmail.com',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?q=75&fm=jpg&w=200&fit=max',
    name: 'Anne Jennifer',
    email: 'jennifer@gmail.com',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?q=75&fm=jpg&w=200&fit=max',
    name: 'Bush Matthew',
    email: 'matthew0909@gmail.com',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=75&fm=jpg&w=200&fit=max',
    name: 'Henry Rebecca',
    email: 'henryrebeccca1234@gmail.com',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1587397845856-e6cf49176c70?q=75&fm=jpg&w=200&fit=max',
    name: 'Geogre Michael',
    email: 'art1234@gmail.com',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1611594547712-9e5d7da58684?q=75&fm=jpg&w=200&fit=max',
    name: 'Robert Laura',
    email: 'lauralauralaura@gmail.com',
  },
];

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
      <div className="flex flex-col gap-6">
        {contactItems.map((contact) => (
          <ContactItem key={contact.email} person={contact} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
