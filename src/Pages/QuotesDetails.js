
import { Route, useParams, useRouteMatch } from "react-router";
import Comments from '../components/comments/Comments';
import { Link } from 'react-router-dom';
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from "../components/UI/LoadingSpinner";

import HighlightedQuote from '../components/quotes/HighlightedQuote'
import { useEffect } from "react";




const QuotesDetails = () => {
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);
    const params = useParams();
    const { quoteId } = params;
    const match = useRouteMatch();
        
    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);
    if (status === 'pending') {
        return <div className="centered"><LoadingSpinner /> </div>
    }
    if (error) {
        return <p className="centered focus">{error}</p>;
    }
    if (!loadedQuote.text) {
        return <p>No Quote Found.</p>
    }

    return (<div>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
        <Route path={match.path} exact>
            <div className="centered">
                <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
            </div>
        </Route>
        <Route path={`${match.path}/comments`}>
            <Comments></Comments>
        </Route>
    </div>
    )
};

export default QuotesDetails;