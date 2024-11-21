import { memo } from 'react';


interface SearchResultsProps {
  query : string
}

function SearchResults({ query } : SearchResultsProps) {
  // Log once. The actual slowdown is inside SlowItem.
  console.log('[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />');

  const items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} query={query} />);
  }
  return (
    <ul className="items">
      {items}
    </ul>
  );
};

interface SearchResultsProps {
  query : string
}
function SlowItem({ query } : SearchResultsProps) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li className="item">
      query: {query}
    </li>
  )
}


export default memo(SearchResults)
