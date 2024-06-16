### Как сохранить и восстановить БД mongodb

-----

В `command prompt` выполняем 2 команды для того что бы сохранить бд и восстановить бд

---

Сохранить dump БД

```bash
mongodump -d traveloperatorDB --out D:\hhru\traveloperator\backend\mongodump\traveloperatorDB
```
---

Восстановить dump БД (с перезаписью существующих документов)
```bash
mongorestore D:\hhru\traveloperator\backend\mongodump\traveloperatorDB --drop
```

---
