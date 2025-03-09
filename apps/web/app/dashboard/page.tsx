import AvailableStorage from '../../src/modules/dashboard/available-storage';

const HomePage = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <AvailableStorage />
      </div>
      <div>List</div>
    </div>
  );
};

export default HomePage;
