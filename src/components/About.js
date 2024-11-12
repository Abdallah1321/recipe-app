export default function About() {
  const list = [
    "Computer Science graduate",
    "Loved making food since I was a kid",
    "Filler because I dont know what else to write",
    "MORE FILLER!!!",  
    "This site is still a work in progress"
  ];
  return (
    <div className="section about">
      <div className="col img">
        <img src="img/foodpics/brownies.jpg" alt="" />
      </div>
      <div className="col typography">
        <h1 className="title">Some Things About Me</h1>
        {list.map((item, index) => (
            <p className="about-item" key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}
