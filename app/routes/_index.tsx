import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-4 text-purple-200">
      <div>
        <h1 className="text-xl font-black text-yellow-400">New design</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-black text-yellow-400 pb-2">Guest book</h2>
        <div className="flex flex-col gap-4">
          <div className="border-b border-b-purple-400 pb-4">
            <div className="font-bold">Nice!</div>
            <div>/Jalle</div>
          </div>
          <div>
            <div className="font-bold">Wow!</div>
            <div>/Kalle</div>
          </div>
        </div>
      </div>
    </div>
  );
}
