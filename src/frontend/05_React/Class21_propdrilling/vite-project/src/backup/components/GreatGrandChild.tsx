
type AncestorProps = {
    dial: string;
}

function GreatGrandChild({dial} : AncestorProps) {
    return (
        <h3>
            Finally, this message shows from Great Grand Child: <br /> {dial}
        </h3>
    )
}

export default GreatGrandChild;