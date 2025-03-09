import {
  AddUserIcon,
  CameraIcon,
  CategoryIcon,
  CloseIcon,
  DashboardIcon,
  DropdownIcon,
  EmailIcon,
  FacebookIcon,
  FolderIcon,
  GoogleIcon,
  HistoryIcon,
  ImageIcon,
  InviteFriendsIcon,
  ListIcon,
  MoonIcon,
  NotificationIcon,
  OtherIcon,
  RecentFileIcon,
  SharedIcon,
  SunIcon,
  TrashIcon,
  UploadIcon,
  VideoIcon,
} from '../../components/Icons';

const Icons = () => {
  return (
    <section className="flex flex-col gap-8 text-text-light-01 dark:text-text-dark-03">
      <h1 className="h1">Icons</h1>

      <div className="flex flex-col gap-4">
        <h2 className="h2">Logo</h2>
        <div className="grid grid-cols-12 gap-8">
          <FacebookIcon />
          <GoogleIcon />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="h2">Bold</h2>
        <div className="grid grid-cols-12 gap-8">
          <AddUserIcon />
          <CameraIcon />
          <CategoryIcon />
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
          <OtherIcon />
          <RecentFileIcon />
          <SharedIcon />
          <SunIcon />
          <TrashIcon />
          <UploadIcon />
          <VideoIcon />
        </div>
      </div>
    </section>
  );
};

export default Icons;
