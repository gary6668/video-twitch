import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Page() {
  return (
    
    <div className="flex flex-col gap-y-4 p-4">
      <h1>Dashboard</h1>
      <div className="bg-red-500 text-white p-4">TEST</div>

      <SignedIn>
        <UserButton />
      </SignedIn>


      <SignedOut>
        <SignInButton mode="modal">
          <button className="px-4 py-2 rounded bg-blue-600 text-white">
            Sign-in / Sign-up
          </button>
        </SignInButton>
      </SignedOut>
    </div>
    
  );
  
}
