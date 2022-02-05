import {
  AboutMe,
  FreshIdeas,
  Portfolio,
  Splash,
  // Working,
  WorkingWithMe,
} from "./components";

export function App() {
  return (
    <>
      <Splash />
      <WorkingWithMe />
      {/*<Working />*/}
      <Portfolio />
      <FreshIdeas />
      <AboutMe />
    </>
  );
}
