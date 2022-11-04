import { Area } from "./components/Area";
import * as S from "./styles";
import { Widget1 } from "./widgets/Widget1";
import { Widget2 } from "./widgets/Widget2";
import { Widget3 } from "./widgets/Widget3";
import { Widget4 } from "./widgets/Widget4";
import { Widget5 } from "./widgets/Widget5";
import { Widget6 } from "./widgets/Widget6";

export function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <S.Container>
        <Widget1 />
        <Widget2 />
        <Widget3 />
        <Widget4 />
        <Widget5 />
        <Widget6 />
      </S.Container>
    </>
  );
}
