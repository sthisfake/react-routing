import React, { Component } from 'react';
import MovieRow from './movieRow';
import UserContext from './userContext';


class MovieList extends Component {
    state = {  } 

    //with defining like this 
    static contextType = UserContext;

    //it can be used in component did mount with context
    componentDidMount() {
        console.log(this.context)
    }
    

    render() { 
        return (
            <UserContext.Consumer>
                {sth => <div>helloooooooooo  {sth.name}

            <MovieRow/>
                </div>}
                
            </UserContext.Consumer>
           
        );
    }
}
 
export default MovieList;