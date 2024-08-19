import About from "@/components/About";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecentPojects from "@/components/RecentPojects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";


export default function Home() {
  return (
    <>
    <Header />
   <main className=" relative bg-black-100 flex jsutify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <About />
      <RecentPojects />
    </div>
   </main>
   </> 
  );
}
