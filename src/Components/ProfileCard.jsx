import "../Css/ProfileCard.css"


export default function ProfileCard(){
    

    return <>
    <div className="card">
            <Avatar />
        <div className="data">
            <Intro />
            {/* Should contain one Skill component
            for each web dev skill that you have,
            customized with props */}
            <SkillList />
        </div>
    </div>
    
    </>
}
function Avatar(){
    return <>
        <img src="ProfileCard/Profile.jpg" className="avatar" alt="pic"/>
    </>
}
function Intro(){
    return <>
    <div>
        <h1>Salma Atef</h1>
        <p>I'm A Front End Developer working with JavaScript and React developer</p>
    </div>
    </>
}
function SkillList(){
    return <>
        <div className="skill-list">
            <Skill skill="Html & Css " emojy="💪" color="blue"/>
            <Skill skill="Java Script" emojy="💪" color="yellow"/>
            <Skill skill="React" emojy="😎" color="green"/>
            <Skill skill="Git&GitHub" emojy="💪" color="red"/>

        </div>
    </>
}
function Skill(props){
    return <>
    <div className="skill" style={{backgroundColor: props.color}}>
        <span>{props.skill} </span>
        <span>{props.emojy}</span>
    </div>
    </>
}