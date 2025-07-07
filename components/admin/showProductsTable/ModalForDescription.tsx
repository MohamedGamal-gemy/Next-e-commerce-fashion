import { X } from "lucide-react";

const ModalForDescription = ({
  setOpenModal,
  openModal,
}: {
  openModal: string | null;
  setOpenModal: (value: string | null) => void;
}) => {
  return (
    <div className="bg-black/50 fixed inset-0 flex flex-col justify-center items-center">
      <div className="relative text-gray-950 bg-gray-50 w-[20rem] min-h-1/4 rounded-lg p-4">
        <button
          className="cursor-pointer absolute top-1 right-1 text-red-600"
          onClick={() => setOpenModal(null)}
        >
          <X />
        </button>
        <h2 className="font-bold">Descriptions:</h2>
        <p>{openModal}</p>
      </div>
    </div>
  );
};

export default ModalForDescription;
