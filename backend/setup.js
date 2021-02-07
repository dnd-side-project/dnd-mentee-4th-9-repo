const db = require('./models');

const reset = async () => {
    console.log('Will rewrite the mysql example database, adding some dummy data.');
    await db.sequelize.sync({ force : true });
    //seed 데이터를 넣는 로직을 추가 해야 함
    console.log("done");
}

reset();