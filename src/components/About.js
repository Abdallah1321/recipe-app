export default function About() {
  const list = [
    "I'm a Computer Science graduate with a passion for coding and creativity.",
    "Cooking has been a love of mine since childhood—nothing beats the joy of creating delicious meals.",
    "This site is a passion project, and I’m always adding more recipes and features.",
    "Stay tuned for updates, as this site is still a work in progress!",
  ];
  return (
    <div className="section about">
      <div className="col img">
        <img src="img/me.jpg" alt="" />
      </div>
      <div className="col typography">
        <h1 className="title">A Little About Me</h1>
        {list.map((item, index) => (
          <p className="about-item" key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
