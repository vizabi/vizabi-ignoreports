import { BaseComponent } from "VizabiSharedComponents";
import { LegacyUtils as utils} from "VizabiSharedComponents";
import { Icons } from "VizabiSharedComponents";

const {ICON_WARN, ICON_QUESTION} = Icons;
const COLOR_BLACKISH = "rgb(51, 51, 51)";
const COLOR_WHITEISH = "rgb(253, 253, 253)";

const PROFILE_CONSTANTS = {
  SMALL: {
    margin: {top: 60, right: 20, left: 5, bottom: 20},
    headerMargin: {top: 10, right: 20, bottom: 20, left: 20},
    infoElHeight: 16,
    infoElMargin: 5,
    barHeight: 18,
    barMargin: 3,
    barLabelMargin: 5,
    barValueMargin: 5,
    barRankMargin: 6,
    scrollMargin: 25,
    longestLabelLength: 12 //chars
  },
  MEDIUM: {
    margin: {top: 60, right: 25, left: 5, bottom: 20},
    headerMargin: {top: 10, right: 20, bottom: 20, left: 20},
    infoElHeight: 16,
    infoElMargin: 5,
    barHeight: 21,
    barMargin: 3,
    barLabelMargin: 5,
    barValueMargin: 5,
    barRankMargin: 10,
    scrollMargin: 30,
    longestLabelLength: 12 //chars
  },
  LARGE: {
    margin: {top: 60, right: 30, left: 5, bottom: 20},
    headerMargin: {top: 10, right: 20, bottom: 20, left: 20},
    infoElHeight: 16,
    infoElMargin: 5,
    barHeight: 28,
    barMargin: 4,
    barLabelMargin: 5,
    barValueMargin: 5,
    barRankMargin: 10,
    scrollMargin: 30,
    longestLabelLength: 12 //chars
  }
};

const PROFILE_CONSTANTS_FOR_PROJECTOR = {
  MEDIUM: {
    margin: {top: 60, right: 30, left: 10, bottom: 40},
    headerMargin: {top: 10, right: 20, bottom: 20, left: 20},
    infoElHeight: 25,
    infoElMargin: 10,
    barHeight: 25,
    barMargin: 6
  },
  LARGE: {
    margin: {top: 60, right: 35, left: 10, bottom: 40},
    headerMargin: {top: 10, right: 20, bottom: 20, left: 20},
    infoElHeight: 16,
    infoElMargin: 10,
    barHeight: 30,
    barMargin: 6
  }
};

export default class VizabiIgnoReports extends BaseComponent {

  constructor(config) {
    config.template = `
      <div class="vzb-igno-page vzb-igno-allqestions"></div>
    `;
    super(config);
  }


  setup() {
    this.state = {};

    this.DOM = {
      page_allquestions: this.element.select(".vzb-igno-allquestions"),
    };

    this._cache = {};
  }
  
  draw() {
    //JASPER: i can't move this to "setup", ideally would avoid running getters on each time ticklk
    this.MDL = {
      result: this.model.encoding.get("result"),
    };
    this.localise = this.services.locale.auto();

    if (this._updateLayoutProfile()) return; //return if exists with error
    this.addReaction(this._drawData);
  }

  _updateLayoutProfile(){
    this.services.layout.width + this.services.layout.height;

    this.profileConstants = this.services.layout.getProfileConstants(PROFILE_CONSTANTS, PROFILE_CONSTANTS_FOR_PROJECTOR);
    this.height = this.element.node().clientHeight || 0;
    this.width = this.element.node().clientWidth || 0;
    if (!this.height || !this.width) return utils.warn("Chart _updateProfile() abort: container is too little or has display:none");
  }

  _drawData() {
    console.log([...this.model.dataMap.groupBy("survey")])
  }
}