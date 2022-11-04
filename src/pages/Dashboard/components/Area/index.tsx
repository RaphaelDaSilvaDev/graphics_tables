import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import data from "./mock.json";

export function Area() {
  return <HighchartsReact highcharts={Highcharts} options={data} />;
}
