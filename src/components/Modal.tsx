import { createPortal } from "react-dom"

interface ModalProps {
    isOpen: boolean;
    onClose: React.Dispatch<boolean>;
    children?: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: Readonly<ModalProps>) {
    return (
        createPortal(
            <section className={`fixed grid place-content-center inset-0 z-10 transition-all duration-500 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
                <div className={`absolute bg-black inset-0 cursor-pointer opacity-50`} onClick={() => onClose(false)}/>
                <section className={`overflow-y-auto bg-white m-auto z-10 transition-all duration-300 ${isOpen ? "w-[95vw] sm:w-[75vw] h-[75vh]" : "size-0"}`}>
                    {children}
                </section>
            </section>,
            document.body
        )
    )
}