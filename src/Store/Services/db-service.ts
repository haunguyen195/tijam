import { openDatabase } from "react-native-sqlite-storage";
import { SETTING_OPTIONS } from "../../Utils/Values/const";
// enablePromise(true);

export const TABLE_SETTING = "TABLE_SETTING";
export const TABLE_POST = "TABLE_POST";
export const TABLE_CATEGORY = "TABLE_CATEGORY";
export const TABLE_NOTIFICATION = "TABLE_NOTIFICATION";
let DB = openDatabase({ name: "app.db", createFromLocation: "~/www/app.db", location: "Library" });

export const createDB = async (defaultSettings) => {
  new Promise((resolve, reject) => {
    DB.transaction(function(tx) {
      tx.executeSql("CREATE TABLE IF NOT EXISTS " + TABLE_SETTING + " (key, value)");
      tx.executeSql("CREATE TABLE IF NOT EXISTS " + TABLE_NOTIFICATION + " (id, title, body, time, data)");
      defaultSettings.map((item) => {
        tx.executeSql("INSERT INTO " + TABLE_SETTING + " VALUES (?,?)", [item.key, item.value]);
      });
    }, function(error) {
      console.log("Populated database ERROR: " + error.message);
    }, function() {
      console.log("Populated database OK");
    });
  });
};

//Setting
export const getAllSetting = async () => {
  return await new Promise((resolve, reject) => {
    DB.transaction(async (tx) => {
      await tx.executeSql(`SELECT * FROM ${TABLE_SETTING}`, [], (tx, results) => {
        let items = {};
        for (let i = 0; i < results.rows.length; i++) {
          let row = results.rows.item(i);
          items = { ...items, [row.key]: SETTING_OPTIONS[row.key][row.value] };
        }
        resolve(items);
      });
    });
  });
};

export const updateSetting = async (key, value) => {
  DB.transaction(function(tx) {
    tx.executeSql(`UPDATE ${TABLE_SETTING} SET value = ? WHERE key = ?`, [value, key]);
  }, function(error) {
    console.log("Update setting ERROR: " + error.message);
  }, function() {
    console.log("Update setting OK");
  });
};


//Notification
export const getAllNotifications = async () => {
  return await new Promise((resolve, reject) => {
    DB.transaction(async (tx) => {
      await tx.executeSql(`SELECT * FROM ${TABLE_NOTIFICATION}`, [], (tx, results) => {
        let items = [];
        for (let i = 0; i < results.rows.length; i++) {
          let row = results.rows.item(i);
          items.push({
            id: row.id,
            title: row.title,
            body: row.body,
            time: row.time,
            data: JSON.parse(row.data)
          });
        }
        resolve(items);
      });
    });
  });
};


export const insertNotifications = async (notificationItems) => {
  DB.transaction(function(tx) {
    notificationItems.map((item) => {
      tx.executeSql(`INSERT INTO ${TABLE_NOTIFICATION} (id, title, body, time, data) VALUES (?,?,?,?,?)`,
        [item.id, item.title, item.body, item.time, JSON.stringify(item.data)]);
    });
  }, function(error) {
    console.log("Insert notification ERROR: " + error.message);
  }, function() {
    console.log("Insert notification OK");
  });
};

