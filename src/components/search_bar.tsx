import React from "react";

export interface SearchProps {
  onSearchTermChange: (term: string) => void
}

function SearchBar(props: SearchProps) {

  const [term, setTerm] = React.useState("")

  const onInputChange = (term: string) => {
    setTerm(term)
    props.onSearchTermChange(term);
  }

  return (
    <div className="search-bar">
      <input
        value={term}
        onChange={(event) => onInputChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
