var React = require('react');
var PropTypes = require('prop-types');// get proptypes

function SelectLanguage (props) { //props passed as this is undefined and can be named just props for stateless function component(as no state just props)
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='languages'>
      {languages.map(function (lang) {
        return (
          <li
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
              {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

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
        //var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']; 
        return(
          <div>
              <SelectLanguage
                selectedLanguage={this.state.selectedLanguage}
                onSelect={this.updateLanguage} />
          </div>
        )
    }
}

module.exports = Popular;