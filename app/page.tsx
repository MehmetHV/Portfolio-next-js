import Image from 'next/image';
import React from "react";

interface ProjectProps {
    title: string;         // Type for the project title
    description: string;   // Type for the project description
    imageSrc: string;      // Type for the image source
    projectLink: string;   // Type for the project link
    codeLink: string;      // Type for the code link
}

// Define a Project component to represent individual projects
const Project: React.FC<ProjectProps> = ({ title, description, imageSrc, projectLink, codeLink }) => {
    return (
        <div className="project">
            <Image src={imageSrc} alt={title} width={400} height={300}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-links">
                {projectLink && (
                    <a href={projectLink} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                )}
                {codeLink && (
                    <a href={codeLink} target="_blank" rel="noopener noreferrer">
                        View Code
                    </a>
                )}
            </div>
        </div>
    );
};

export default function Home() {
    // Define an array of project data
    const projects = [
        {
            title: 'Project 1',
            description: 'Description of project 1',
            imageSrc: '/project1.jpg',
            projectLink: 'https://example.com/project1',
            codeLink: 'https://github.com/yourusername/project1',
        },
        // Add more project objects here
    ];

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* About Me section (Top) */}
            <section className="about-me centered-section">
                <h2 className="text-center text-bold-outline" style={{ fontSize: '60px' }}>
                    Hi my name is Mehmet, also known as Memo!
                </h2>
                <div className="text-center">
                    <p className="text-bold-outline">
                        This is my portfolio website. Here you will know more about me, my projects and my skills!
                    </p>
                    <p className="text-bold-outline">
                        I currently study System Development in Trollhättan, Sweden at Högskolan Väst!
                    </p>
                    <p className="text-bold-outline">
                        This is the third row of text, and you can continue to add more rows as needed.
                    </p>
                </div>
                <div className="text-center rounded-full overflow-hidden">
                    <img
                        src="https://cdn.discordapp.com/attachments/1112951735321907235/1171993449529094214/image0.jpg?ex=655eb2f4&is=654c3df4&hm=b934d77d01ade6ba9347416851742d5349c026e9060121f48b760e59af67d88b&"
                        alt="Your Photo"
                        style={{
                            width: '250px', // Adjust the width as needed
                            height: '250px', // Adjust the height as needed
                            objectFit: 'cover',
                            objectPosition: 'center top',
                            borderRadius: '50%', // Makes it a circle
                        }}
                    />
                </div>
            </section>

            {/* Header section */}
            {/* Add your header content here */}

            {/* Projects section (Middle) */}
            <section className="projects">
                <h2 className="text-bold-outline">My Projects</h2>
                <div className="project-list">
                    {projects.map((project, index) => (
                        <Project key={index} {...project} />
                    ))}
                </div>
            </section>

            {/* Something Else section (Bottom) */}
            <section className="something-else">
                <h2>Something Else</h2>
                {/* Add content for the "Something Else" section here */}
            </section>
        </main>
    );
}