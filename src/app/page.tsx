import Link from "next/link";

import Button from "@/components/ui/button";

function Header() {
  return (
    <header className="px-6 py-4">
      <nav className="flex items-center justify-between">
        <Link className="text-xl font-bold" href={"/"}>
          propel
        </Link>
        <div className="flex items-center justify-between gap-x-2">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href={"/register"}>
            <Button>register</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-4 mt-16">
      <h1 className="text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-stone-700 to-stone-200">
        Master New Skills, Shape Your Future
      </h1>
      <p className="text-sm font-medium text-stone-500 mt-2">
        Access world-class education at your fingertips with courses designed
        for the digital age
      </p>
      <Button className="w-full mt-4">Get Started</Button>
    </section>
  );
}

function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
    </main>
  );
}

export default HomePage;
