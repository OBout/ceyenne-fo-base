// translations test
export const TRANSLATIONS = {
  "en": {
    "Ok": "TestOk",
    "Pipe": "TestPipe"
  }
}

// io test
export const STOCK = {
  "result": [
    {
      "type": "StockLocationCode",
      "result": [
        {
          "Id": 3,
          "Barcode": "1357",
          "BackendProductID": "ABCDEF3",
          "Description": "Apple iPhone 3",
          "StockLocationCode": "2AB02A",
          "UrnValue": "URN0000123",
          "StockLocationType": "Bulk Location",
          "Company": "DIRACT",
          "ExpirationDate": "20-08-2018",
          "Lot": "X122D"
        }, {
          "Id": 4,
          "Barcode": "1358",
          "BackendProductID": "ABCDEF4",
          "Description": "Apple iPhone 4",
          "StockLocationCode": "2AB02B",
          "UrnValue": "URN0000124",
          "StockLocationType": "Bulk Location",
          "Company": "DIRACT",
          "ExpirationDate": "21-08-2018",
          "Lot": "X122E"
        }
      ]
    }, {
      "type": "BackendProductID",
      "result": [
        {
          "Id": 2,
          "Barcode": "1351",
          "BackendProductID": "2ABCD",
          "Description": "Apple iPhone 2",
          "StockLocationCode": "1CX01A",
          "UrnValue": "URN0000125",
          "StockLocationType": "Bulk Location",
          "Company": "DIRACT",
          "ExpirationDate": "22-08-2018",
          "Lot": "X122C"
        }
      ]
    }
  ]
}

// io + user tests
export const STOCK_URL : string = "assets/mockeddata/stock.json";


// user tests
export const TOKEN = "1234";

export const CURRENTUSER = {
  "UserID": 1,
  "LoggerInUserDisplayName": "ADMIN"
};

export const LOGINRESULT = {
  "UserID": 1,
  "LoggerInUserDisplayName": "ADMIN",
  "IsCustomAuthenticateResult": false,
  "AuthenticationToken": "1234",
  "Authentication": "Authenticated"
};