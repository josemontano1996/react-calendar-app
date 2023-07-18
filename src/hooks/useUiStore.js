import { useDispatch, useSelector } from 'react-redux';
import { onCloseDateModal, onOpenDateModal } from '../store/ui';

export const useUiStore = () => {
  const dispatch = useDispatch();

  const { isDateModalOpen } = useSelector((state) => state.ui);

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };

  const toggleDateModal = () => {
    isDateModalOpen
      ? dispatch(onOpenDateModal())
      : dispatch(onCloseDateModal());
  };

  return {
    //Properties
    isDateModalOpen,

    //Methods
    closeDateModal,
    openDateModal,
    toggleDateModal,
  };
};
