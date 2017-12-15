import React from 'react';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import AddressIcon from 'material-ui/svg-icons/action/room';
import PersonIcon from 'material-ui/svg-icons/action/face';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {


        return (
          <div style={{paddingLeft: '15px'}}>
            <div style={{width: '100%'}}>
              <span style={{color: 'white'}}>Yhteystiedot: </span>
            </div>

            <div style={{width: '100%', paddingTop: '30px'}}>
              <div style={{display: 'inline-block'}}>
                <PersonIcon color="white" style={{position: 'relative', top: '6px'}}/>
              </div>
              <div style={{display: 'inline-block', paddingLeft: '15px'}}>
                <span style={{color: 'white'}}>Markku Somero</span>
              </div>
            </div>

            <div style={{width: '100%', paddingTop: '30px'}}>
              <div style={{display: 'inline-block'}}>
                <PhoneIcon color="white" style={{position: 'relative', top: '6px'}}/>
              </div>
              <div style={{display: 'inline-block', paddingLeft: '15px'}}>
                <span style={{color: 'white'}}> 044 199 240</span>
              </div>
            </div>

            <div style={{width: '100%', paddingTop: '30px'}}>
              <div style={{display: 'inline-block'}}>
                <EmailIcon color="white" style={{position: 'relative', top: '6px'}}/>
              </div>
              <div style={{display: 'inline-block', paddingLeft: '15px'}}>
                <span style={{color: 'white'}}>puumarkku@puumarkku.fi</span>
              </div>
            </div>

            <div style={{width: '100%', paddingTop: '30px'}}>
              <div style={{display: 'inline-block'}}>
                <AddressIcon color="white" style={{position: 'relative', top: '6px'}}/>
              </div>
              <div style={{display: 'inline-block', paddingLeft: '15px'}}>
                <span style={{color: 'white'}}>Karjasillantie 16, 28240, Pori</span>
              </div>
            </div>

          </div>
        );
    }
}

export default Contact;
