import HighchartsModules from "highcharts/highcharts-more";
import Speed from "highcharts/modules/solid-gauge";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import data from "./mock.json";

HighchartsModules(Highcharts);
Speed(Highcharts);

export function Velocity() {
  return <HighchartsReact highcharts={Highcharts} options={data} />;
}
