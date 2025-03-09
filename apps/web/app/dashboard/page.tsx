import AvailableStorage from '../../src/modules/dashboard/available-storage';
import ContactList from '../../src/modules/dashboard/contact-list';
import InviteFriend from '../../src/modules/dashboard/invite-friend';

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <AvailableStorage />
      </div>
      <div className="flex flex-col gap-9">
        <ContactList />
        <InviteFriend />
      </div>
    </div>
  );
};

export default DashboardPage;
