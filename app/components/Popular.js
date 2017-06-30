var React = require('react');

class Popular extends React.Component{
  constructor(props) {
    super();
    this.state = {
      selectedLanguage: 'All',
    };
    render(){
        var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']; 
        return(
            <ul className='languages'>
                {languages.map(function(lang){
                    return(
                        <li key={lang}>
                            {lang}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

module.exports = Popular;