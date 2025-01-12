import React from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';
import Link from './components/Link';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            page: '/'
        };

        // binding navigasi
        this.navigate = this.navigate.bind(this);
    }

    //function untuk navigasi
    navigate(target) {
        this.setState(() => {
            return {
                page: target
            };
        });
    }

    render() {
      return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link target='/' navigate={this.navigate}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link target='/about' navigate={this.navigate}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link target='/faq' navigate={this.navigate}>
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
            {this.state.page === '/' && <HomePage />}
            {this.state.page === '/about' && <AboutPage />}
            {this.state.page === '/faq' && <FAQPage />}
            </main>
        </>
      )
    }
  }

const root = createRoot(document.getElementById('root'));
root.render(<App />);
