export function ProjectList(props) {
  const { key, name, homepage, default_language } = props;

  return (
    <li key={key} style={{ padding: 5 }}>
      {name}
      <br />
      {homepage}
      <br />
      {default_language}
    </li>
  );
}
