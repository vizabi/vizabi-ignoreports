import "./styles.scss";

import { 
  BaseComponent,
  LocaleService,
  LayoutService,
} from "VizabiSharedComponents";
import VizabiIgnoReports from "./component.js";

export default class IgnoReportChart extends BaseComponent {

  constructor(config){
    config.subcomponents = [{
      type: VizabiIgnoReports,
      placeholder: ".vzb-chart",
      //model: this.model
      name: "chart"
    }];

    config.template = `
      <div class="vzb-chart"></div>
    `;

    config.services = {
      locale: new LocaleService(),
      layout: new LayoutService(config)
    };

    //register locale service in the marker model
    config.model.config.data.locale = config.services.locale;

    super(config);
  }
}
