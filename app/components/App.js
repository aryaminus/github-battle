var React = require('react');
var Popular = require('./Popular');

class App extends React.Component{
    render(){
        return(
            <div>
                <Popular />
            </div>
        )
    }
}

module.exports = App;//needed for validity of require in index