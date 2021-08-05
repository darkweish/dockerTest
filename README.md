docker

# Sequelize 

|query|example|SQL|
|----|-----|----|
|insert|**await** User.create({ firstName: "Jane", lastName: "Doe" });|INSERT INTO User VALUES('Jane','Doe')|
|update|**await** await User.update({ lastName: "Doe" }, { where: { lastName: null } });|updaye User SET lastname='Doe' WHERE LASTNAME IS NULL|
|delete|**avait** await User.destroy({ where: { firstName: "Jane" } }); | DELETE FROM user WHERE firstname = 'Jane'|






