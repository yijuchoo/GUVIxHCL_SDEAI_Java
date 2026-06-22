import GreatGrandChild from "./GreatGrandChild"

type AncestorProps = {
    dial: string;
}

function GrandGrandChild({dial} : AncestorProps) {
    return (
       
            <GreatGrandChild dial = {dial} />
        
    )
}

export default GrandGrandChild;