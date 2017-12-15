import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';


class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        return (
          <div style={{
            width: '100%',
            zIndex: '99',
            position: 'fixed',
            height: '60px',
            top: '0px',
            left: '0px',}}>
          <div className="row" style={{paddingTop: '5px'}}>
          <div className={this.props.backgroundColor} style={{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px', zIndex: '-7', alignItems: 'center'}}></div>
                <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1' style={{position: 'relative', top: '2px'}}>
                  <div style={{display: 'inline-block'}}>
                    <FlatButton
                      className='menu_button'
                      labelPosition='after'
                      labelStyle={{fontSize: '12px', color: 'white'}}
                      label="Kontakti"
                      disableTouchRipple={true}
                      iconColor='white'
                      style={{minWidth: '40px', top: '5px'}}
                      icon={this.props.icon}
                      onClick={this.props.onClick}
                    />
                  </div>
                </div>
                <div id={this.props.collideId} className="col-lg-11 col-md-11 col-sm-11 col-xs-11 logoFontTextAlign logoText" style={{paddingRight: '25px'}}>
                    <span className="logoText" style={{zIndex: '999', color: 'white'}}>{this.props.logoText}</span>
                </div>
          </div>
          </div>
        );
    }
}

Menu.PropTypes = {
  backgroundColor: PropTypes.string,
  collideId: PropTypes.string,
  logoText: PropTypes.string,
  icon: PropTypes.function,
  onClick: PropTypes.function
};


export default Menu;
