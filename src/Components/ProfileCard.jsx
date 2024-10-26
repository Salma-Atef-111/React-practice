import "../Css/ProfileCard.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
];

export default function ProfileCard() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="cardProfileBody">
          <div className="card">
            <Avatar />
            <div className="data">
              <Intro />
              <SkillList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Avatar() {
  return (
    <>
      <img src="ProfileCard/Profile.jpg" className="avatar" alt="pic" />
    </>
  );
}
function Intro() {
  return (
    <>
      <div>
        <h1>Salma Atef</h1>
        <p>
          I'm A Front End Developer working with JavaScript and React developer
        </p>
      </div>
    </>
  );
}
function SkillList() {
  return (
    <>
      <div className="skill-list">
        {skills.map((skill) => (
          <Skill skill={skill.skill} color={skill.color} level={skill.level} />
        ))}
        {/* <Skill skill="Html & Css " emojy="💪" color="blue"/>
            <Skill skill="Java Script" emojy="💪" color="yellow"/>
            <Skill skill="React" emojy="😎" color="green"/>
            <Skill skill="Git&GitHub" emojy="💪" color="red"/> */}
      </div>
    </>
  );
}
function Skill({ skill, color, level }) {
  return (
    <>
      <div className="skill" style={{ backgroundColor: color }}>
        <span>{skill} </span>
        <span>
          {level === "beginner" && "👶"}
          {level === "intermediate" && "👍"}
          {level === "advanced" && "💪"}
        </span>
      </div>
    </>
  );
}
