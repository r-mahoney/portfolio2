import reddit1 from "../../images/reddit1.png";
import reddit2 from "../../images/reddit2.png";
import reddit3 from "../../images/reddit3.png";
import note1 from "../../images/note1.png";
import note2 from "../../images/note2.png";
import note3 from "../../images/note3.png";
import res1 from "../../images/res1.PNG";
import res2 from "../../images/res2.PNG";
import res3 from "../../images/res3.PNG";
import res4 from "../../images/res4.PNG";
import { IoLogoVercel } from "react-icons/io5";
import { SiRender } from "react-icons/si";

export const projects = [
    {
        name: "Reddit Clone",
        githubLink: "https://github.com/r-mahoney/RedditClone",
        liveLink: "https://reddit-clone-ten-flax.vercel.app/",
        liveIcon: IoLogoVercel,
        summary: `A clone of the popular social media App reddit. 
            Current functionality allows a user to create and delete posts and comments as well as vote on posts and comments. 
            State managament was done using Recoil. App was written in Typescript using Next.js and React. 
            Styling using ChakraUI. Firebase was used for user authentication allowing for user sign up as well as log in. 
            Firebase was also used for database management using NoSQL.`,
        images: [reddit1, reddit2, reddit3],
    },
    {
        name: "Frontmatter Button",
        subheading: "3rd Party Obsidian Plugin",
        githubLink: "https://github.com/r-mahoney/FrontmatterButton",
        summary: `Obsidian is a note-taking app allowing users to write up notes using markdown language. Part of this app allows a user to add
            front matter, or a block of YAML text key/value pairs, that translates into metadata for that users note. Currently, unless a user already knows how
             to add the YAML code block to their note and what key properties Obsidian accepts, using the front matter is not intuitive. Working with a UI/UX designer,
              our hope is to make this functionality more accessible by showing a button on title hover and adding a more user friendly UI to any note a user wants to add metadata to.`,
        images: [note1, note2, note3],
    },
    {
        name: "Reservation App",
        subheading: "First Full Stack App I Built",
        githubLink: "https://github.com/r-mahoney/ReservationApp",
        liveLink: "https://reservationapp-raoj.onrender.com/dashboard",
        liveIcon: SiRender,
        summary: `This was the first full stack application that I built during my software engineering program. Previous to this, I had only worked exclusively on the back-end portion 
        or the front-end portion. It is supposed to emmulate a restaurant information management system showing reservations for the current day along with reservation status. It also shows available tables and table status. 
        A user is able to create, edit, and delete a reservation as well as create a table. Reservations can then be assigned to a table as long as it is unnocupied and the capacity of the table 
        is greater than the capacity of the reservation party size. A user can also search for a reservation using a partial or full phone number. React and Bootstrap were used for the front end UI. Back-end implemented React Router 
        and express to build a RESTful API in order to make HTTP requests for all of the reservation data stored on the connected PostgreSQL database. 
        Renders unpaid hosting spins down pages due to inactivity, so pre-added tables or reservations may not be fetched from the back-end, but functionality still works the same.`,
        images: [res1, res2, res3, res4],
    },
];
