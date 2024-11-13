import axios from "axios";

export default function Home({ user }) {
  console.log(user);
  return (
    <>
      <p>Home</p>
      <table border={2}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {user.map((elm) => (
            <tr key={elm.login.uuid}>
              <td>{elm.name.first}</td>
              <td>{elm.name.last}</td>
              <td>{elm.login.username}</td>
              <td>{elm.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export const getServerSideProps = async () => {
    const { data } = await axios.get('https://randomuser.me/api?results=20');
    return { props: { user: data.results } };
};
