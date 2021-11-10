print("Start ####################");
db = db.getSiblingDB("api_seminario_dev");
db.createUser({
  user: "api_user",
  pwd: "123",
  roles: [{ role: "readWrite", db: "api_seminario_dev" }],
});

db = db.getSiblingDB("api_seminario_test");
db.createUser({
  user: "api_user",
  pwd: "123",
  roles: [{ role: "readWrite", db: "api_seminario_test" }],
});

db = db.getSiblingDB("api_seminario_production");
db.createUser({
  user: "api_user",
  pwd: "123",
  roles: [{ role: "readWrite", db: "api_seminario_production" }],
});

print("End  ###################3");
