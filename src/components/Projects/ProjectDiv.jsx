export default function ProjectDiv({ cardArr, count }) {
  return (
    <div className="project-div">{cardArr.find((card, i) => count == i)}</div>
  );
}
