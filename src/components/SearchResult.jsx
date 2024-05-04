import "./SearchResult.css";

const SearchResult = ({ results }) => {
    return (
        <div className="results-list">
            {results.map((result, id) => {
                return <div key={id}>{result.id}</div>
            })}
        </div>
    )
}
export default SearchResult