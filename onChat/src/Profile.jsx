import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import githubLogo from "./assets/github.svg";
import youtubeLogo from "./assets/youtube.svg";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
};

const skills = [
  { name: "Vite", href: "https://vitejs.dev", logo: viteLogo, id: 1 },
  { name: "React", href: "https://react.dev", logo: reactLogo, id: 2 },
  { name: "GitHub", href: "https://github.com", logo: githubLogo, id: 3 },
  { name: "YouTube", href: "https://youtube.com", logo: youtubeLogo, id: 4 },
];

const Profile = () => {
  const listSkills = skills.map((skill) => (
    <a href={skill.href} target="_blank" key={skill.id}>
      <img src={skill.logo} className="logo" alt={skill.name + " logo"} />
    </a>
  ));

  return (
    <>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        className="logo"
        alt={"Photo of " + user.name}
        style={{ borderRadius: "50%" }}
      />
      <h3>{"Skills of " + user.name}</h3>
      <div>{listSkills}</div>
      <h1>Vite + React</h1>
    </>
  );
};

export default Profile;
