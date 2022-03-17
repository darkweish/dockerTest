# Sequelize 

|query|example|SQL|
|----|-----|----|
|insert|**await** User.create({ firstName: "Jane", lastName: "Doe" });|INSERT INTO User VALUES('Jane','Doe')|
|update|**await** await User.update({ lastName: "Doe" }, { where: { lastName: null } });|update User SET lastname='Doe' WHERE LASTNAME IS NULL|
|delete|**avait** await User.destroy({ where: { firstName: "Jane" } }); | DELETE FROM user WHERE firstname = 'Jane'|

# Insertion d'enregistrement

Lorsqu'on veut ajouter une valeur a une base de données nous avons deux façons de le faire : 
- `Create` : permet d'ajouter qu'un seul element
- `BulkCreate` : permet d'ajouter plusieurs elements en même temps, en lui donnant un tableau en paramètre

# HasOne
```js
  Foo.hasOne(Bar);
  Bar.belongsTo(Foo);
```  
   GIVES: 
```sql
CREATE TABLE IF NOT EXISTS "foos" (
  /* ... */
);
CREATE TABLE IF NOT EXISTS "bars" (
  /* ... */
  "fooId" INTEGER REFERENCES "foos" ("id") ON DELETE SET NULL ON UPDATE CASCADE
  /* ... */
);
```
# HasMany

```js
Team.hasMany(Player);
Player.belongsTo(Team);
```
  GIVES:
```SQL
  CREATE TABLE IF NOT EXISTS "Teams" (
  /* ... */
);
CREATE TABLE IF NOT EXISTS "Players" (
  /* ... */
  "TeamId" INTEGER REFERENCES "Teams" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  /* ... */
);
```



