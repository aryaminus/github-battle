var React = require('react');
var PropTypes = require('prop-types');// get proptypes
var api = require('../utils/api');

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

function RepoGrid (props) {
  return (
    <ul className='popular-list'> <!--//unordered list-->
      {props.repos.map(function (repo, index) {
        return (
          <li key={repo.name} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-items'>
              <li>
                <img
                  className='avatar'
                  src={repo.owner.avatar_url}
                  alt={'Avatar for ' + repo.owner.login}
                />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
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
      repos: null,
    };
    this.updateLanguage = this.updateLanguage.bind(this); //bind will bound the updatelang to (this) any condition
  }
  componentDidMount() { //life-cycle event i.e component show to screen
    this.updateLanguage(this.state.selectedLanguage) //when clicked update-lang is envoked for selected lang
  }
  updateLanguage(lang) {
    this.setState(function () { //only bound when updatelang invoked
      return {
        selectedLanguage: lang, //select actual lang
        repos: null
      }
    });
    api.fetchPopularRepos(lang) //ajax request
      .then(function (repos) {
        this.setState(function () {
          return {
            repos: repos //feedback repos
          }
        });
      }.bind(this));
  }
    render(){
        //var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']; 
        return(
          <div>
              <SelectLanguage
                selectedLanguage={this.state.selectedLanguage}
                onSelect={this.updateLanguage} />
              {!this.state.repos
                ? <p>LOADING!</p>
                : <RepoGrid repos={this.state.repos} />}
          </div>
        )
    }
}

module.exports = Popular;