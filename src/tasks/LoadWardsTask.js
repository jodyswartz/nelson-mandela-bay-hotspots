import papa from "papaparse";
import legendItems from "../entities/LegendItems";
import { features } from "../data/wards.json";
//    this.setState(features);

class LoadWardTask {
  covidUrl = "https://raw.githubusercontent.com/jodyswartz/Testdata/main/cases_country.csv";
  
  setState = null;

  load = (setState) => {
    this.setState = setState;

    papa.parse(this.covidUrl, {
      download: true,
      header: true,
      complete: (result) => this.#processCovidData(result.data),
    });
  };

  #processCovidData = (covidWards) => {
    for (let i = 0; i < features.length; i++) {
      const ward = features[i];
      //console.log(ward);
      const covidWard = covidWards.find(
        (covidWard) => ward.properties.ISO_A3 === covidWard.ISO3
      );

      ward.properties.confirmed = 0;
      ward.properties.confirmedText = 0;

      if (covidWard != null) {
        let confirmed = Number(covidWard.Confirmed);
        ward.properties.confirmed = confirmed;
        ward.properties.confirmedText = this.#formatNumberWithCommas(
          confirmed
        );
      }
      this.#setWardColor(ward);
    }

    this.setState(features);
  };

  #setWardColor = (ward) => {
    const legendItem = legendItems.find((item) =>
      item.isFor(ward.properties.confirmed)
    );

    if (legendItem != null) ward.properties.color = legendItem.color;
  };

  #formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
}

export default LoadWardTask;
