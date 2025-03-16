import { PropsWithChildren } from 'react';

export interface ModalProp extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, children }: ModalProp) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center">
      <div className="bg-default-white dark:bg-text-dark-02 rounded-xl">
        {children}
      </div>
    </div>
  );
};

export default Modal;
