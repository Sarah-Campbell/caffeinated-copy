import {Dissolve} from "./dissolve";
import {Noise} from "./noise";
import {SummitLabels} from "./summit-labels";
import {Tourism} from "./tourism";

export function Portfolio() {
  return (
    <>
      <SummitLabels />
      <Dissolve />
      <Tourism />
      <Noise />
    </>
  );
}
