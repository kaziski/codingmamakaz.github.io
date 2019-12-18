import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import proj01 from '../assets/images/thumbs/project1.png'
import proj02 from '../assets/images/thumbs/project2.png'
import proj03 from '../assets/images/thumbs/project3.png'
import { Link } from 'gatsby'


const PROJECT_IMAGES = [
    {
        id: '1', source: proj01, thumbnail: proj01, caption: 'React JS /Rails Happy Trails', url: 'https://happytrails.surge.sh/',
        description: 'Responsive Web application that allows users to browse trails by address, fetching data from Hiking Project Data API. User can also save trails and review trails. Developed with ReactJS / Redux / Thunk, Bulma and Rails. Utilized Google Geocoding API and Hiking Project Data API.'
    },
    {
        id: '2', source: proj02, thumbnail: proj02, caption: 'Rails Platanos', url: 'https://plantalog.herokuapp.com/',
        description: 'A web application that allows users to keep track of all the plants in your garden. Users can keep notes about the plants with dates and actions taken or will be taken with the plants such as seeding, fertilizing and harvesting. Built using the Ruby on Rails, using BCrypt and OmniAuth for authentication.'
    },
    {
        id: '3', source: proj03, thumbnail: proj03, caption: 'Ruby / Sinatra Happy Trails', url: 'https://sinatra-happy-trails.herokuapp.com/',
        description: 'A MVC Sinatra application that lets users track the hikes they take with information about trails. Created custom authentication logic, using Bcrypt for secure user sign-up and login. Designed database schema with ActiveRecord and SQLite3 to work with related models.'
    }
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Kazumi Karbowski"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>My inquisitive mind leads me to continuously learn new techniques and technologies. </h2>
                        </header>
                        <p>Given my previous experience in the hospitality industry, I have a well-developed eye for detail and exceptional skills in time management, communication, and leadership.
                            I'm fluent in Japanese. <br />Programming languages: Ruby, Ruby on Rails, JavaScript, React and SQL.</p>
                        {/* <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul> */}
                    </section>

                    <section id="two">
                        <h2>Projects</h2>

                        <Gallery images={PROJECT_IMAGES.map(({ id, source, thumbnail, caption, url, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            url,
                            description
                        }))} />
                    </section>
                    {/* doing this to until I figure out what I like the best for the UI */}
                    <section id="blog">
                        <h2><Link to="/blog/" activeStyle={{ color: "red" }}>Blog</Link></h2>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Let's talk!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="POST" action="https://formspree.io/mvogqwla">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" required /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="_replyto" id="email" placeholder="Email" required /></div>
                                        <div className="6u 12u$(xsmall)"><input type="text" name="_gotcha" style={{ display: 'none' }} /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4" required></textarea></div>
                                    </div>

                                    <ul className="actions">
                                        <li><input type="submit" value="Send Message" /></li>
                                    </ul>
                                </form>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Pittsburgh, PA<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        415-794-2062
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <p>kazumikarbowski@gmail.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex