import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

//sorting function
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history =useHistory();
  const location = useLocation();

  // built-in JS contructor in browser
  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get('sort') === 'asc';
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const ChangeSortingHandler = () => {
    history.push( '/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));
    // Another way for above 
    // history.push( `${location.pathname}?sort=${(isSortingAscending ? 'desc' : 'asc')}`);
  }
  return (
    <Fragment>
      <div>
        <h1 className={classes.mainlabel}>Share Your Inspirational Quotes</h1>
      </div>
      <div className={classes.sorting}>
        <button onClick={ChangeSortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
