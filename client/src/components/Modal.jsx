function Modal() {
  const openModal = () => {
    document.getElementById("modal").showModal();
  };

  const closeModal = () => {
    document.getElementById("modal").close();
  };

  return (
    <div className="container flex items-center justify-center h-screen bg-gray-100">
      {/* Button to Open Modal */}
      <button
        onClick={openModal}
        className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Open Modal
      </button>

      {/* Modal */}
      <div className="mx-auto">
        <dialog
          id="modal"
          className="p-6  bg-white rounded-lg shadow-lg w-[400px]"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Modal Title</h2>
            <button
              onClick={closeModal}
              className="text-gray-600 hover:text-gray-900 text-2xl"
            >
              ×
            </button>
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typeset ever
            since the 1500s...
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default Modal;
