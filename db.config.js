module.exports = {
    HOST: "dpg-cjgu8gb6fquc73aqgi10-a",
    USER: "grady",
    PORT: 5432,
    PASSWORD: "rL53dcUKMKFTKMKV48mBYgyDXsuiVCj7",
    DB: "mattronsrv",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

// module.exports = {
//     HOST: "localhost",
//     USER: "postgres",
//     PORT: 5432,
//     PASSWORD: "postgres",
//     DB: "boomboom",
//     dialect: "postgres",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };