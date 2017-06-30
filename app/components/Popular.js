var React = require('react');

class Popular extends React.Component{
  constructor(props) {
    super(); //always define for constructor
    this.state = {
      selectedLanguage: 'All', //auto select all
    };
  }
  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang, //select actual lang
      }
    });
  }
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