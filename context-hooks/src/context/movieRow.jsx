import React , {useContext} from 'react';
import UserContext from './userContext';


// this is how u use context in functional components

function MovieRow(props) {
    const user = useContext(UserContext)
    return (
        <div>
            {"goooooooodbye " + user.name}
        </div>
    );
}

export default MovieRow;