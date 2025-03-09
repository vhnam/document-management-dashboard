import Image from 'next/image';
import { Person } from './ContactList';

interface ContactItemProps {
  person: Person;
}

const ContactItem = ({ person }: ContactItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <Image
        className="overflow rounded-full size-11 object-cover"
        src={person.avatar}
        width={44}
        height={44}
        alt={person.name}
      />
      <div className="flex flex-col gap-1">
        <strong className="subtitle2 dark:text-text-dark-03">
          {person.name}
        </strong>
        <p className="body2 dark:text-text-dark-03/50">{person.email}</p>
      </div>
    </div>
  );
};

export default ContactItem;
