import GrandChild from "./GrandChild"

type AncestorProps = {
    dial: string;
}

function Child({dial} : AncestorProps) {
    return (
        
            <GrandChild dial = {dial} />
        
    )
}

export default Child;