import Child from "./Child"

type AncestorProps = {
    dial: string;
}

function Parent({dial} : AncestorProps) {
    return (
        <h1>
            <Child dial = {dial} />
        </h1>
    )
}

export default Parent;