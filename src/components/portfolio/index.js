import {Element} from "react-scroll";
import {SummitLabels} from "./summit-labels";
import {Dissolve} from "./dissolve";
import {Tourism} from "./tourism";
import {Noise} from "./noise";

export function Portfolio() {
  return (
    <>
      <Element name="portfolio" />
      <SummitLabels />
      <Dissolve />
      <Tourism />
      <Noise />
    </>
  );
}
