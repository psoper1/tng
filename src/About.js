import { NavLink } from "react-router-dom";
import ImageText from "./ImageText";
import Nav from "./Nav";

function About({activeLink, setActiveLink}) {
    return (
        <>
        <ImageText activeLink={activeLink} setActiveLink={setActiveLink} />
        <Nav activeLink={activeLink} setActiveLink={setActiveLink} />

        <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center text-white">About True Nature Gaming</h2>
            <div className="mb-4">
              <h3 className="text-white"><u>Our Story</u></h3>
              <p className="text-white">
                True Nature Gaming was founded by a passionate group of friends
                who share an insatiable love for gaming. We spend
                countless hours competing and bonding,
                cherishing the camaraderie and excitement that gaming can bring.
                Inspired by our shared passion and the desire to bring the gaming
                community together, we decided to create something truly special:
                a platform that hosts exciting gaming tournaments where players can
                showcase their skills and forge unforgettable memories.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-white"><u>Our Mission</u></h3>
              <p className="text-white">
                Our mission at True Nature Gaming is simple yet profound - to create
                an inclusive and welcoming environment for gaming
                enthusiasts. We want to provide a space where gamers of all skill
                levels can gather, learn, and grow together. Our tournaments are
                not just about the competition, but about fostering a sense of
                community, sportsmanship, and celebration of the gaming spirit.
              </p>
              <p className="text-white">
                At True Nature Gaming, we believe that gaming is not just a hobby but
                a way of life. We are driven by our genuine love for gaming
                and the incredible connections it enables.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-white"><u>What Sets Us Apart</u></h3>
              <p className="text-white">
                At True Nature Gaming, we stand out from the crowd in several ways:
              </p>
              <ul>
                <li className="text-white">
                  <strong>Player-Centric Approach:</strong> Our tournaments are designed
                  with players in mind, ensuring fair play, exciting challenges, and
                  engaging experiences for everyone involved.
                </li>
                <li className="text-white">
                  <strong>Community Building:</strong> We believe in building a close-knit
                  community where players can interact, form teams, and make new friends
                  with shared interests.
                </li>
                <li className="text-white">
                  <strong>Passionate Organizers:</strong> Our team of organizers and
                  moderators are avid gamers themselves, and they are dedicated to
                  delivering well-organized and enjoyable tournaments.
                </li>
                <li className="text-white">
                  <strong>Prizes and Rewards:</strong> Get ready for some fantastic rewards!
                  True Nature Gaming hosts tournaments with attractive prizes and recognition
                  for top-performing teams and players.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white"><u>Join Us</u></h3>
              <p className="text-white">
                We welcome players of all gaming backgrounds to be a part of the True Nature
                Gaming community. Whether you are a seasoned vet or a newcomer
                eager to dive into the fun, there's a place for you here. <NavLink to="/signup" onClick={() => setActiveLink("signup")}>Join our upcoming
                tournaments</NavLink>, connect with fellow gamers, and embark on an adventure of
                skill, strategy, and endless excitement.
              </p>
              <h3 className="text-center text-white">
                Let's embrace the True Nature of gaming together!
              </h3>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default About;