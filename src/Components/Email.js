import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import EmailIcon from 'material-ui/svg-icons/communication/mail-outline';

class Email extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        return (
          <div className="row" style={{paddingTop: '20px', paddingBottom: '20px', textAlign: 'center'}} id={this.props.collideId}>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{paddingTop: '15px', paddingBottom: '15px'}}>
          <h1>Tarjouspyyntö</h1>
          </div>
          <Divider color="#cacaca"/>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <TextField
              defaultValue="Saunan pituus"
              hintText="Saunan pituus"
              errorText="Pakollinen tieto"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <TextField
              defaultValue="Saunan leveys"
              hintText="Saunan leveys"
              errorText="Pakollinen tieto"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <TextField
              defaultValue="Lauteiden materiaali"
              hintText="Materiaali"
              errorText="Pakollinen tieto"
            />
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <TextField
              defaultValue="Nimi"
              hintText="Nimi"
              errorText="Pakollinen tieto"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <TextField
              defaultValue="Puhelinnumero"
              hintText="Puhelinnumero"
              errorText="Pakollinen tieto"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <TextField
              defaultValue="Sähköposti"
              hintText="Sähköposti"
              errorText="Pakollinen tieto"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <TextField
              defaultValue="Osoite"
              hintText="Osoite"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <TextField
              defaultValue="Postinumero"
              hintText="Postinumero"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <TextField
              defaultValue="Kaupunki"
              hintText="Kaupunki"
            />
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{paddingTop: '20px'}}>
            <RaisedButton
              label="Lähetä"
              icon={<EmailIcon/>}
            />
          </div>


          </div>

        );
}
}

Email.propTypes = {
  collideId: PropTypes.string,
  headerText: PropTypes.string
};

export default Email;
