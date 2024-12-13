import { useState } from 'react'

type AccordionProps = {
    title: string,
    children: React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({ children, title }) => {
    const [displayed, setDisplayed] = useState<boolean>(false)

    const handleDisplayed = () => {
        setDisplayed(!displayed)
    }

    return (
        <div>
            <div>
                <h1>{title}</h1>
                <button onClick={handleDisplayed}>
                    {
                        displayed ? 'Close' : 'Open'
                    }
                </button>
            </div>
            {
                displayed &&
                <div>
                    {children}
                </div>
            }

        </div>
    )
}

export default Accordion