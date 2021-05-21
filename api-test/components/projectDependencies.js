export function ProjectDependencies(props) {
  console.log(props);

  const { homepage, description, language, repository_url } =
    props.packageInfo;

  return (
    <div
      style={{ textAlign: "center", margine: "10px", width: "100%" }}
    >
      <p>Package Info:</p>
      <p>Home Page: {homepage}</p>
      <p>Description: {description}</p>
      <p>Language: {language}</p>
      <p>repository_url: {repository_url}</p>
    </div>
  );
}
