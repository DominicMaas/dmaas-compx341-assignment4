
module.exports = {
  url: process.env.APP_URL,
  elements: {
    inputText: {
      selector: "input[type=text]",
    },
    table: {
      selector: ".table.table-hover",
    },
    cityNotFound: {
      selector: ".alert .alert-danger",
    },
    invalidCity: {
      selector: ".pl-3.row .text-danger",
    },
  },
  sections: {
    cityName: {
      selector: ".table.table-hover",
      elements: {
        firstApp: "tbody > tr:nth-child(1) > td:nth-child(2)",
      },
    },
  },
};
