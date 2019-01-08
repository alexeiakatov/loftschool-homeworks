import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {

  wrapInConsumer = (WrappedComponent) => {
      const { Consumer } = this.props;
      return class extends React.Component {
          render () {
            return (
              <Consumer>
                  {
                      ({isAuthorized, email, logout}) => {
                          if (WrappedComponent.name === 'Header') {
                              return <WrappedComponent isAuthorized={isAuthorized} email={email} logout={logout}/>
                          }
                          else if (WrappedComponent.name === 'Footer') {
                              return <WrappedComponent isAuthorized={isAuthorized} email={email}/>
                          }
                      }
                  }
              </Consumer>
            )
          }
      }
  };

  renderHeader(HeaderChild) {

    return 'empty';
  }

  renderFooter(FooterChild) {
    return 'empty';
  }

    render() {
        const {header, footer} = this.props;
        const WrappedHeader = header ? this.wrapInConsumer(header) : null;
        const WrappedFooter = footer ? this.wrapInConsumer(footer) : null;

        return (
            <Fragment>
                {WrappedHeader && <WrappedHeader/>}
                  {this.props.children}
                {WrappedFooter && <WrappedFooter/>}
            </Fragment>
        )
    }
}

export default Layout;
