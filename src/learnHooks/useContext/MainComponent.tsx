
import Nav from "./Nav"
import About from "./About"

interface MainComponentProps {
}

export default function MainComponent ({} : MainComponentProps) {
    return(
        <>
            <About />
            <Nav />
        </>
    )
}