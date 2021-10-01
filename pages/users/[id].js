import Link from "next/link"
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { user: data }
  };
};

export const Details = ({user}) => {
  return (
    <div className="container mx-auto p-4 h-screen flex flex-col justify-center items-center">
      <div className="bg-yellow-600 px-4 py-2 rounded-md text-center ">
        <span className="text-gray-100 text-xl">User Details</span>
      </div>
      <div className="flex flex-col text-center p-4">
        <span className="my-2 text-sm">
          {" "}
          Name : <strong className="text-lg">{user.name}</strong>
        </span>
        <span className="my-2 text-sm">
          {" "}
          Email : <strong className="text-lg">{user.email}</strong>
        </span>
        <span className="my-2 text-sm">
          {" "}
          Website : <strong className="text-lg">{user.website}</strong>
        </span>
      </div>
      <Link href="/users">
        <a className="bg-gray-300 p-2 hover:text-gray-600 cursor-pointer rounded-md hover:border-gray-300 border-transparent border hover:border-current">
          back
        </a>
      </Link>
    </div>
  );
};

export default Details;
