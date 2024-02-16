import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>Next.js Auth</div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/users/create" title="Role-based, Admin only">Create User</Link>
          <Link href="/client" title="Client side rendering">Client</Link>
          <Link href="/member" title="Server side rendering">Member</Link>
          <Link href="/public" title="Public page | No authentication needed">Public</Link>
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href="/api/auth/signin">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
