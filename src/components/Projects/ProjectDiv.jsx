export default function ProjectDiv({ cardArr, count }) {
  return (
    <div className="project-div">
      {cardArr.map((card, i) => {
        if (count == i) return card;
      })}
    </div>
  );
}
