import AvailableStorage from '../../src/modules/dashboard/available-storage';
import ContactList from '../../src/modules/dashboard/contact-list';

const HomePage = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <AvailableStorage />
      </div>
      <div>
        <ContactList />
      </div>
    </div>
  );
};

export default HomePage;
