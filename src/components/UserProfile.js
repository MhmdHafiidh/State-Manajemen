"use client";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function UserProfile() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users/1",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name : {data?.name}</p>
      <p>Name : {data?.email}</p>
    </div>
  );
}
