import React, { useState, useEffect } from "react";
import logoBookmark from 'assets/logo-bookmark.svg'
import ilustration1 from 'assets/illustration-hero.svg'
import ilustration2 from 'assets/illustration-features-tab-1.svg'
import ilustration3 from 'assets/illustration-features-tab-2.svg'
import ilustration4 from 'assets/illustration-features-tab-3.svg'
import chromeIcon from 'assets/logo-chrome.svg'
import firefoxIcon from 'assets/logo-firefox.svg'
import operaIcon from 'assets/logo-opera.svg'
import dots from 'assets/bg-dots.svg'
import Accordion from 'react-bootstrap/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css';
import facebookIcon from 'assets/icon-facebook.svg'
import twiterIcon from 'assets/icon-twitter.svg'





const MainPage = () => {
    const [visibleElement, setVisibleElement] = useState(localStorage.getItem('visibleElement') || 'element1');
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");



    const toggleVisibility = (element) => {
        setVisibleElement((prev) => {
            const newState = prev === element ? null : element;

            localStorage.setItem('visibleElement', newState);
            return newState;
        });
    };

    useEffect(() => {
        if (!localStorage.getItem('visibleElement')) {
            localStorage.setItem('visibleElement', 'card1');
        }
    }, []);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (!validateEmail(value)) {
            setError("Niepoprawny adres e-mail");
        } else {
            setError("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            alert("Adres email nie jest poprawnie zapisany (powinien posiadać @ )");
        } else {
            setError("Proszę wpisać poprawny adres e-mail");
        }
    };

    return (
        <>
            <div className="container">
                <div className="Navigation-package">

                    <div className="Navigation-brand">
                        <img src={logoBookmark} />
                    </div>
                    <div className="Navigation-link">
                        <p className="Navigation-single-link">features</p>
                        <p className="Navigation-single-link">pricing</p>
                        <p className="Navigation-single-link">contact</p>
                        <button className="Navigation-button">Login</button>
                    </div>
                </div>
            </div>
            <section className="First-section">
                <div className="container">
                    <div className="First-section-package">
                        <div className="First-section-text">
                            <p className="First-section-text-up">A simple Bookmark manager</p>
                            <p className="First-section-text-down">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                            <div className="First-section-buttons">
                                <button className="First-section-buttons-left">Get it on Chrome</button>
                                <button className="First-section-buttons-right">Get it on Firefox </button>
                            </div>
                        </div>
                        <div className="First-section-img-package">
                            <img className="First-section-img img-sm-fluid" clas src={ilustration1} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="Second-section">
                <div className="container">
                    <p className="Second-section-up-title">Features</p>
                    <p className="Second-section-mid-title">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                    <div className="Second-section-link-package">
                        <p className="Second-section-single-link" tabindex="0" onClick={() => toggleVisibility('card1')} style={{ cursor: "pointer" }} >Simple Bookmarking</p>
                        <p className="Second-section-single-link  extra-margin" tabindex="0" onClick={() => toggleVisibility('card2')} style={{ cursor: "pointer" }} >Speedy Searching</p>
                        <p className="Second-section-single-link" tabindex="0" onClick={() => toggleVisibility('card3')} style={{ cursor: "pointer" }}>Easy Searching</p>
                    </div>

                    {visibleElement === 'card1' &&
                        <div className="Second-section-text-img-package">
                            <div className="Second-section-img">
                                <img src={ilustration2} />
                            </div>
                            <div className="Second-section-text">
                                <p className="Second-section-up-title">Bookmark in one click</p>
                                <p className="Second-section-mid-title">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourites sites.</p>
                                <button className="Second-section-btn">More Info</button>
                            </div>
                        </div>
                    }
                    {visibleElement === 'card2' && (
                        <div className="Second-section-text-img-package">
                            <div className="Second-section-img">
                                <img src={ilustration3} />
                            </div>
                            <div className="Second-section-text">
                                <p className="Second-section-up-title">Intelligent search</p>
                                <p className="Second-section-mid-title">Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                                <button className="Second-section-btn">More Info</button>
                            </div>
                        </div>
                    )}

                    {visibleElement === 'card3' && (
                        <div className="Second-section-text-img-package">
                            <div className="Second-section-img">
                                <img src={ilustration4} />
                            </div>
                            <div className="Second-section-text">
                                <p className="Second-section-up-title">Share your bookmarks</p>
                                <p className="Second-section-mid-title">Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button. </p>
                                <button className="Second-section-btn">More Info</button>
                            </div>
                        </div>
                    )}

                </div>
            </section>
            <section className="Third-section">
                <div className="container">
                    <p className="Second-section-up-title text-center">Download the extension</p>
                    <p className="Second-section-mid-title width-text">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to priori</p>

                    <div className="Third-section-card-package">
                        <div className=" text-center border-card">
                            <img className="Third-section-card-img" src={chromeIcon} />
                            <p className="Third-section-card-title">Add to Chrome</p>
                            <p className="Third-section-card-subtitle">Minimum version 62</p>
                            <div className="Third-section-dots">
                                <img src={dots} />
                            </div>
                            <button className="Third-section-card-button">Add & Install Extension</button>
                        </div>
                        <div className="text-center border-card size-one">
                            <img className="Third-section-card-img" src={firefoxIcon} />
                            <p className="Third-section-card-title">Add to Chrome</p>
                            <p className="Third-section-card-subtitle">Minimum version 55</p>
                            <div className="Third-section-dots">
                                <img src={dots} />
                            </div>
                            <button className="Third-section-card-button">Add & Install Extension</button>
                        </div>
                        <div className="text-center border-card size-two">
                            <img className="Third-section-card-img" src={operaIcon} />
                            <p className="Third-section-card-title">Add to Chrome</p>
                            <p className="Third-section-card-subtitle">Minimum version 46</p>
                            <div className="Third-section-dots">
                                <img src={dots} />
                            </div>
                            <button className="Third-section-card-button">Add & Install Extension</button>
                        </div>
                    </div>

                </div>
            </section>
            <section className="Four-section">
                <div className="container">
                    <p className="Second-section-up-title text-center">Frequently asked questions</p>
                    <p className="Second-section-mid-title text-center">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>

                    <Accordion className="custom-item custom-acordion" defaultActiveKey="0">
                        <Accordion.Item className="custom-item" eventKey="0">
                            <Accordion.Header className="custom-header">What is Bookmark</Accordion.Header>
                            <Accordion.Body>
                                A bookmark is a thin marking tool, commonly made of card, leather, or fabric, used to keep track of a reader's progress in a book and allow the reader to easily return to where the previous reading session ended.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="custom-item" eventKey="1">
                            <Accordion.Header className="custom-header">How can I request a new browser</Accordion.Header>
                            <Accordion.Body>
                                To download a different web browser, you need to go to the browser manufactorer's website or use your Phone/Tablet's "App Store" and get the latest version of it. NEVER download a web browser from anywhere other than the official website or store - you risk getting viruses, malware or spyware otherwise
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="custom-item" eventKey="2">
                            <Accordion.Header className="custom-header">Is there a mobile app</Accordion.Header>
                            <Accordion.Body>
                                TIn today's digital age, mobile apps are an essential part of most people's daily lives. From social networking and entertainment to productivity and business, mobile apps play a vital role in how we interact with technology.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="custom-item" eventKey="3">
                            <Accordion.Header className="custom-header">What about a other Chromium browsers</Accordion.Header>
                            <Accordion.Body>
                                Many browsers besides Google Chrome are based on Chromium, offering similar performance and features, but with distinct customization and functionality. Some popular Chromium-based browsers include Microsoft Edge, Opera, Brave, and Vivaldi. These browsers often offer unique features, such as integrated VPNs, ad blockers, privacy enhancements, and streamlined browsing experiences.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <div className="text-center">
                        <button className="Four-section-info-btn Second-section-btn">More Info</button>
                    </div>

                </div>
            </section>
            <section className="Five-section">
                <div className="container">
                    <p className="Five-section-small-title">35.000 + Already joined</p>
                    <p className="Five-section-big-title">Stay up-to-date with what we're doing</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            value={email}
                            onChange={handleChange}
                            className="Five-section-input"
                            placeholder="example@gmail.com"
                            required
                        />
                        {error && <p style={{ color: "red", fontWeight: "500" }}>{error}</p>}
                        <button className="Five-section-contact-btn" type="submit">Contact Us</button>
                    </form>
                </div>
            </section>
            <footer className="Footer-section">
                <div className="container">
                    <div className="Footer-section-package">
                        <div className="Footer-section-brand-link">
                            <img className="footer-brand-img" src={logoBookmark} />
                            <p className="Footer-link">Features</p>
                            <p className="Footer-link">Pricing</p>
                            <p className="Footer-link">Contact</p>
                        </div>
                        <div className="Footer-section-social-icon">
                            <img className="Footer-social-icon" src={facebookIcon} />
                            <img src={twiterIcon} style={{cursor:"pointer"}} />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}


MainPage.PropTypes = {};

export default MainPage;