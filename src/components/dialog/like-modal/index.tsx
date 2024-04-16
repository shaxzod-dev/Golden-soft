import { Modal } from "antd";

const LikeModal = ({ handleLike, open }: { handleLike: any; open: any }) => {
  return (
    <Modal title="Like box" open={open} onCancel={handleLike} footer={false}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default LikeModal;
