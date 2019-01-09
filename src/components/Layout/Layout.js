import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {

  renderHeader(HeaderChild) {

      return HeaderChild ?
          (<header className="header">
              <SectionTitle className="header__title">Header</SectionTitle>
              <div className="header__content">
                  <HeaderChild/>
              </div>
          </header>)
          : null;
  }

  renderFooter(FooterChild) {
      return FooterChild ?
          (<footer className="footer">
              <SectionTitle className="footer__title">Footer</SectionTitle>
              <FooterChild/>
          </footer>)
          : null;
  }

    render() {
        const { header, footer, children } = this.props;

        return (
            <Fragment>
                {this.renderHeader(header)}

                <main className={`main
                        ${header ? 'main--with-header' : ''}
                        ${footer ? 'main--with-footer' : ''}
                        `}>
                    <SectionTitle className="main__title">Main</SectionTitle>
                    {children}
                </main>

                {this.renderFooter(footer)}
            </Fragment>
        )
    }
}

export default Layout;
