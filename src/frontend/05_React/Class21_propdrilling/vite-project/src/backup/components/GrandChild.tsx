import GrandGrandChild from "./GrandGrandChild"

type AncestorProps = {
    dial: string;
}

function GrandChild({dial} : AncestorProps) {
    return (
        
            <GrandGrandChild dial = {dial} />
       
    )
}

export default GrandChild;