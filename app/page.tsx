import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col ">
      <h1 className="text-6xl mt-4">Welecome to Users App</h1>
      <Link
        href="/login"
        className="text-2xl bg-white text-black p-2 hover:bg-slate-600 mt-[200px] rounded-lg"
      >
        LogIn
      </Link>
    </div>
  );
}
