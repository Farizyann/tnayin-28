import axios from 'axios';

export default function Male({ user }) {  // Destructure `user` from props
  return (
    <div>
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
    </div>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios.get('https://randomuser.me/api?results=10&gender=male');
  
  return { props: { user: data.results } };
};
