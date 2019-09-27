"use strict";

var http = require('http');

var Datastore = require('nedb');

var Sdb = new Datastore({
  inMemoryOnly: true
});

var ODataServer = require('simple-odata-server');

var Adapter = require('simple-odata-server-nedb');

var db = new Datastore({
  inMemoryOnly: true
});
var model = {
  namespace: "jsreport",
  entityTypes: {
    "UserType": {
      "_id": {
        "type": "Edm.String",
        key: true
      },
      "test": {
        "type": "Edm.String"
      }
    },
    "WorkerType": {
      "_id": {
        "type": "Edm.String",
        key: true
      },
      "name": {
        "type": "Edm.String"
      },
      "lastname": {
        "type": "Edm.String"
      },
      "email": {
        "type": "Edm.String"
      },
      "age": {
        "type": "Edm.Int32"
      }
    }
  },
  entitySets: {
    "users": {
      entityType: "jsreport.UserType"
    },
    "workers": {
      entityType: "jsreport.WorkerType"
    }
  }
};
var odataServer = ODataServer("http://localhost:666").model(model).adapter(Adapter(function (es, cb) {
  cb(null, db);
}));
http.createServer(odataServer.handle.bind(odataServer)).listen(666);
//# sourceMappingURL=index.js.map
