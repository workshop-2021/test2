import React  from 'react';
import './App.css';
import Component from './component'



class App extends React.Component {
  constructor(props){
    super(props)
this.state = {
    Fullname: "Ghada Bouzaiene",
    Profession:"An Automation Engineer & a Fullstack Js Developer ",
    Bio:" After I finally graduated the  3rd of last Otober as an Electric Automation enginner, I told myself that life is too short to stop after one accomplishment. And eager to learn other skills, I jumped into web development field without any previous knowledge aiming to be a fullstack JS developer, and I think I finally found my Purpse! " ,
    imageSrc:'https://lh6.googleusercontent.com/proxy/tOVbXNQD7UtosV-95hHC95uleVyXZZlY9EVl0E89wNnqYv205HLCK8WmkPwS411auP4qt6Wv=s0-d',
  
     content:"The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science." ,
      source:"Albert Einstein, The World As I See It",
      show: false,
    time:0,
  };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  

  render() {
    
    
    
  return (
<div className="app">

        <Component></Component>
        {this.state.show && (
          <>
          
           <div className="image" style={{backgroundImage: 'url(' + this.state.imageSrc + ')', boxShadow :" 10px 15px 10px 12px grey"}}>
            
             </div>
         
          <h1 className="Fullname">
            {this.state.Fullname}
            </h1>
            <div className="Bio">{this.state.Bio}</div>
              <p>{this.state.profession}</p>
            <div className="quote">
            <blockquote>&ldquo; {this.state.content} &rdquo;</blockquote>
            </div>
            <br></br>
            <div className="source">&mdash;{this.state.source}</div>
            
          </>
        )}

        
        <button className="btn" onClick={this.handleShowPerson} style ={{ color : "grey"}}>Profile show/hide</button>
        <div className="counter">
          The last component was mounted since: {this.state.time} seconds
        </div>
      </div>
    );
        }}

export default App;
