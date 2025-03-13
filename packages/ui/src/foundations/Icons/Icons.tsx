import {
  AddIcon,
  AddUserIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  CameraIcon,
  CategoryIcon,
  CloseIcon,
  ClosedEyeIcon,
  DashboardIcon,
  DetailIcon,
  DownloadIcon,
  DropdownIcon,
  EmailIcon,
  FolderIcon,
  HistoryIcon,
  ImageIcon,
  InviteFriendsIcon,
  ListIcon,
  LogoutIcon,
  MoonIcon,
  NotificationIcon,
  OpenedEyeIcon,
  OtherIcon,
  RecentFileIcon,
  RenameIcon,
  RestoreIcon,
  SearchIcon,
  SharedIcon,
  SunIcon,
  TrashIcon,
  UploadIcon,
  UserIcon,
  VideoIcon,
} from '../../components/Icons';
import OptionIcon from '../../components/Icons/Option';

const Icons = () => {
  return (
    <section className="flex flex-col gap-8 text-text-light-01 dark:text-text-dark-03">
      <h1 className="h1">Icons</h1>

      <div className="flex flex-col gap-4 mb-6">
        <h2 className="h2">Bold</h2>
        <div className="grid grid-cols-12 gap-8">
          <AddUserIcon />
          <CameraIcon />
          <CategoryIcon />
          <ClosedEyeIcon />
          <CloseIcon />
          <DashboardIcon />
          <DropdownIcon />
          <EmailIcon />
          <FolderIcon />
          <HistoryIcon />
          <ImageIcon />
          <InviteFriendsIcon />
          <ListIcon />
          <MoonIcon />
          <NotificationIcon />
          <OpenedEyeIcon />
          <OtherIcon />
          <RecentFileIcon />
          <SharedIcon />
          <SunIcon />
          <TrashIcon />
          <UploadIcon />
          <VideoIcon />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="h2">Line</h2>
        <div className="grid grid-cols-12 gap-8">
          <AddIcon />
          <ArrowDownIcon />
          <ArrowLeftIcon />
          <ArrowUpIcon />
          <DetailIcon />
          <DownloadIcon />
          <LogoutIcon />
          <OptionIcon />
          <RenameIcon />
          <RestoreIcon />
          <SearchIcon />
          <UserIcon />
        </div>
      </div>
    </section>
  );
};

export default Icons;
