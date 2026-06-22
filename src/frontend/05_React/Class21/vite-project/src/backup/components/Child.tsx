
type SearchProps = {
    onSearch: (text: string) => void;
}

function Child(props: SearchProps) {

    return(
        <input 
        type="text"
        placeholder="Search Products"
        onChange={(e) => props.onSearch(e.target.value)}
         />
    )
}

export default Child;