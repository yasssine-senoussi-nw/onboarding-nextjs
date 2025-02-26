// app/signin/layout.tsx
export default function SignInLayout(): JSX.Element {
  return (
    <div className="flex h-screen">
      {/* Left hand side - image*/}
      <div className="flex-1 bg-gray-100 hidden md:block"></div>

      {/* Right hand side - form */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white"></div>
    </div>
  );
}
