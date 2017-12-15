import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        return (
          <Paper style={{
            height: '100vh',
            backgroundImage: 'url(' + this.props.image + ')',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            overFlow: 'hidden',
            backgroundAttachment: 'fixed'
          }} zDepth={4}>
            <div style={{
              backgroundColor: '#000000',
              opacity: '0.5',
              width: '100%',
              height: '100%'
            }}>
            </div>

            <div
            id={this.props.collideId}
            className="headerDiv"
            style={{
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              position: 'relative',
              bottom: '50%',
              textAlign: 'center',
              breakWord: 'break-all',
              paddingBottom: '20px',
              paddingTop: '20px'
            }}>
            <h1 style={{
              color: '#efebe9',
              fontSize: '2em'
            }}>
              {this.props.headerText}
            </h1>
            <div style={{width: '100%', textAlign: 'center'}}>
            </div>
            </div>
          </Paper>
        );
    }
}

HeaderComponent.propTypes = {
  collideId: PropTypes.string,
  headerText: PropTypes.string,
  image: PropTypes.string
};

export default HeaderComponent;
