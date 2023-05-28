import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'

export const OverlayContext = createContext()

const OverlayContextProvider = ({ children }) => {
    const [showOverlay, setShowOverlay] = useState(false)

    const onOpenOverlay = () => {
        setShowOverlay(true)
    }

    const onCloseOverlay = () => {
        setShowOverlay(false)
    }

    useEffect(() => {
        if (showOverlay) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    }, [showOverlay])

    return (
        <OverlayContext.Provider value={{ showOverlay, onOpenOverlay, onCloseOverlay }}>
            {children}
        </OverlayContext.Provider>
    )
}

export default OverlayContextProvider

OverlayContextProvider.propTypes = {
    children: PropTypes.node,
}
