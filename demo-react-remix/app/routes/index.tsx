import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

interface LoaderData {
  items: number[];
}

export async function loader({ request }: LoaderFunction) {
  return json<LoaderData>({
    items: [1, 2, 3, 4],
  });
}

export default function Index() {
  const data = useLoaderData<LoaderData>();
  const { items } = data;

  return (
    <div>
      <header>
        <h1>Demo React Remix</h1>
      </header>
      <ul>
        {items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
