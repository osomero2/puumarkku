import React from 'react';
import HeaderComponent from './Components/HeaderComponent';
import Menu from './Components/Menu';
import Dashboard from './Components/Dashboard';
import Drawer from 'material-ui/Drawer';
import Contact from './Components/Contact';
import Email from './Components/Email';
import CloseIcon from 'material-ui/svg-icons/content/mail';
import OpenIcon from 'material-ui/svg-icons/content/drafts';
import Image1 from './Components/imgs/sauna.jpg'
import Image2 from './Components/imgs/sauna2.jpg'

export class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
          background: true,
          firstScene: true,
          screenWidth: window.innerWidth,
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
      this.handleScroll();
    }

    componentDidUpdate() {
    }

    handleScroll() {
      let Y = window.pageYOffset;
      let windowHeight =  window.innerHeight;
      windowHeight = windowHeight - 80;

      if (Y > windowHeight) {
        this.setState({background: false})
        this.setState({firstScene: true})
      } else if (Y < windowHeight){
        this.setState({background: true})
        this.setState({firstScene: false})
      }
    }

    handleOverlayStyle() {
      if (this.state.background === true) {
        return 'menuBGFadeIn menuBG'
      } else {
        return 'menuBGFadeIn menuBG semiTrans'
      }
    }

    componenDidReceiveProps() {
    }

    handleToggle() {
      let Y = window.pageYOffset;
      let windowHeight = window.innerHeight;
      windowHeight = windowHeight - 80;

      this.setState({open: !this.state.open})
      if (this.state.open === true && Y > windowHeight) {
        this.setState({background: false})
      }
    }

    getIcon() {
      if (this.state.open === true) {
        return <OpenIcon color='white'/>
      } else {
        return <CloseIcon color='white'/>
      }
    }


    render() {
        return (
          <div>
              <Drawer
              containerStyle={{marginTop: '60px', backgroundColor: this.state.firstScene ? 'rgba(0, 0, 0, .9)' : 'rgba(0, 0, 0, .025)'}}
              zDepth={0}
              docked={false}
              width={this.state.screenWidth}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
              overlayStyle={this.handleOverlayStyle()}
              >
              <div style={{width: '100%', marginTop: '30px'}}>
                <Contact/>
              </div>
            </Drawer>

          <Menu
          backgroundColor={this.handleOverlayStyle()}
          collideId='header'
          onClick={() => this.handleToggle()}
          icon={this.getIcon()}
          logoText='Puu Markku'
          />
              <div>
                <HeaderComponent
                image={Image1}
                headerText="Valmislauteet suurella sydämellä."
                />
                <Email collideId='email'/>
                <HeaderComponent
                image={Image2}
                headerText="Markku Somero / Toimitusjohtaja"
                />
                <Dashboard/>
              </div>
          </div>
        );
    }
}

export default Application;
