var React = require('react');

class Popular extends React.Component{
  constructor(props) {
    super(); //always define for constructor
    this.state = {
      selectedLanguage: 'All', //auto select all
    };
    this.updateLanguage = this.updateLanguage.bind(this); //bind will bound the updatelang to (this) any condition
  }
  updateLanguage(lang) {
    this.setState(function () { //only bound when updatelang invoked
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
                    <li
                        style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null}
                        onClick={this.updateLanguage.bind(null, lang)}
                        key={lang}>
                        {lang}
                    </li>
                    )
                })}
            </ul>
        )
    }
}

module.exports = Popular;