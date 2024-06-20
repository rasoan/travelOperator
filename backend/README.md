## MongoDB

-----

### Как сохранить и восстановить БД mongodb

2 команды В `command prompt`:

- сохранить dump БД;
```bash
mongodump -d traveloperatorDB --out D:\hhru\traveloperator\backend\mongodump\traveloperatorDB
```

- восстановить dump БД (с перезаписью существующих документов);
```bash
mongorestore D:\hhru\traveloperator\backend\mongodump\traveloperatorDB --drop
```

---

## Docker

- The default docker images will show all top level images, 
their repository and tags, and their size.
```bash
docker image ls
```

- The docker ps command only shows running containers by default.
To see all containers, use the --all (or -a) flag:
```bash
docker ps
```

- Removes (and un-tags) one or more images from the host node:
```bash
docker image rm <imageId> -f
```

- Use the docker container prune command to remove all stopped containers:
```bash
docker container rm <containerId> -f
```

- Logs of container:
```bash
docker logs <containerId>
```

- Run container (-d phone mode without use terminal):
```bash
docker run -d <containerId>
```

- Builds, (re)creates, starts, and attaches to containers for a service.
Unless they are already running, this command also starts any linked services.  
The command looks for the services specified in the `docker-compose.yml` file
and creates containers for them. If the images required by those services 
are unavailable locally, Docker will pull them from Docker Hub or any other 
configured registry. If the images are already available locally, 
Docker will use them instead of pulling them again (you can add flag "-d" for not show console").
```bash
docker compose up
```

- Delete all images
```bash
docker rmi $(docker images -a -q) -f
```

- Delete all containers
```bash
docker rm $(docker ps -qa) -f
```

- Delete all containers and images
```bash
docker rm $(docker ps -qa) -f && docker rmi $(docker images -a -q) -f
```

Список пройденного материала по Docker:
1) https://www.youtube.com/watch?v=n9uCgUzfeRQ
2) https://www.youtube.com/watch?v=pg19Z8LL06w&t=238s
3) https://dev.to/drsimplegraffiti/docker-with-mongodb-57g8
4) https://dev.to/chukwutosin_/step-by-step-guide-setting-up-a-nestjs-application-with-docker-and-postgresql-5hei
5) https://docker-curriculum.com
---
