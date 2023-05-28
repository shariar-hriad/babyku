import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

export const ModalContext = createContext()

const ModalContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const onOpenModal = () => {
        setIsOpen(true)
    }

    const onCloseModal = () => {
        setIsOpen(false)
    }

    return <ModalContext.Provider value={{ isOpen, onOpenModal, onCloseModal }}>{children}</ModalContext.Provider>
}

export default ModalContextProvider

ModalContextProvider.propTypes = {
    children: PropTypes.node,
}
