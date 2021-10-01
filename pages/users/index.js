import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
};

const Users = ({ users }) => {
  console.log("users :", users);
  return (
    <section className="w-100 h-screen ">
      <div className="container mx-auto p-4">
        <h1 className="text-xl my-4 bg-gray-800 text-white p-4 rounded-2xl text-center">All Users</h1>
        <div className="px-1">
          {users.map((user) => (
            <Link href={"/users/" + user.id} key={user.id} className="m-4 ">
              <a className="text-center p-2 block rounded-md hover:text-yellow-600 cursor-pointer hover:border-gray-300 border-transparent border hover:border-current">
                {user.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Users;
