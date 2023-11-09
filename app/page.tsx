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
                        .
                    </p>
                </div>
                <div className="text-center rounded-full overflow-hidden mt-10">
                    <img
                        src="https://cdn.discordapp.com/attachments/1112951735321907235/1171993449529094214/image0.jpg?ex=655eb2f4&is=654c3df4&hm=b934d77d01ade6ba9347416851742d5349c026e9060121f48b760e59af67d88b&"
                        alt="Your Photo"
                        style={{
                            width: '250px',
                            height: '250px',
                            objectFit: 'cover',
                            objectPosition: 'center top',
                            borderRadius: '50%',
                        }}
                    />
                    <img
                        src="https://cdn.discordapp.com/attachments/1112951735321907235/1172236326289031279/ElitePortraitbackground.png?ex=655f9527&is=654d2027&hm=fcdb1c66ee3764712fa431a830eed82c7b5bc03c869c044a5dc76857dae15632&"
                        alt="Golden Dragon"
                        style={{
                            width: '500px',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            position: 'absolute',
                            top: '46%',
                            left: '53%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                </div>


            </section>
            <div className="fixed top-0 left-0 h-screen w-1/12 bg-gray-200">
                {/* Content for the left banner */}
            </div>

            <div className="fixed top-0 h-screen w-1/12 bg-gray-200 right-0">
                {/* Content for the right banner */}
            </div>

            {/* Header section */}
            {/* Add your header content here */}

            {/* Projects section (Middle) */}
            <section className="projects" style={{ marginTop:'10rem'}}>
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