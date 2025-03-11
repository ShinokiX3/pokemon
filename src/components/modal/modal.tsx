import ReactDOM from "react-dom";

interface Modal {
    oppened: boolean;
    close: () => void;
    children: React.ReactNode;
    header?: string;
}

const Modal: React.FC<Modal> = ({ oppened, close, children, header }) => {
    if (!oppened) return null;
  
    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-gray-50 bg-opacity-50 flex justify-center items-center min-w-[340px] p-[8px]">
            <div className="bg-white p-8 rounded-lg">
                {header && (
                    <div className='flex justify-between'>
                        <h2 className='text-2xl font-bold'>{ header }</h2>
                        <button className='cursor-pointer' onClick={close}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                )}
                { children }
            </div>
        </div>,
        document.body
    );
};

export default Modal;