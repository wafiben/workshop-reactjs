import "./home.css";
function Home() {
  const person = { firstName: "islem", lastName: "wesleti", age: 22 };
  return (
    <div className="heading">
      <h1>welcome</h1>
      <h2>welcome</h2>
      <p>{person.firstName}</p>
    </div>
  );
}
export default Home;
