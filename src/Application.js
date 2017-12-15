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
          screenWidth: window.innerWidth,
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }

    componentDidUpdate() {
    }

    handleScroll() {
      let Y = window.pageYOffset;
      let windowHeight =  window.innerHeight;
      windowHeight = windowHeight - 80;

      if (Y > windowHeight) {
        this.setState({background: false})
      } else {
        this.setState({background: true})
      }
    }

    componenDidReceiveProps() {
    }

    handleToggle() {
      this.setState({open: !this.state.open})
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
              containerStyle={{backgroundColor: 'transparent' , marginTop: '60px'}}
              zDepth={0}
              docked={false}
              width={this.state.screenWidth}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
              >
              <div style={{width: '100%', marginTop: '30px'}}>
                <Contact/>
              </div>
            </Drawer>

          <Menu
          backgroundColor={this.state.background ? 'menuBGFadeIn menuBG' : 'menuBGFadeIn menuBG semiTrans'}
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
