---
id: maven-dependency
title: Maven Dependency
sidebar_position: 1
---

:::important
You **must** replace all the `x.x.x` with the current version, which you can find from [here](https://api.polymart.org/v1/getResourceInfoSimple/?resource_id=1620&key=version).
:::

Currently, there is no repository for Private Games API dependency, you must manually upload the API **.jar** file and add the dependency with *system* scope.

## 1. Get the API .jar file from the Discord server.

Join my [Discord](https://mher.club/discord) server, create a ticket and ask for Private Games API `.jar` file.

The author (Mher) will give you the jar file which must has `private-games-api-x.x.x.jar` name, but `x.x.x` replaced with the [current version](https://api.polymart.org/v1/getResourceInfoSimple/?resource_id=1620&key=version).

## 2. Creating your Maven project.

Create a new [Maven](https://maven.apache.org/) project and put the jar file into the {projectDirectory}/libraries directory.

```bash
my-project
├── libraries
│   ├── private-games-api-x.x.x.jar
```

## 3. Adding the Maven dependency.

Now open your project's `pom.xml` file and add the block below in dependencies.

```xml
<dependency>
  <groupId>club.mher</groupId>
  <artifactId>private-games-api</artifactId>
  <version>x.x.x</version>
  <scope>system</scope>
  <systemPath>${project.basedir}\libraries\private-games-api-x.x.x.jar</systemPath>
</dependency>
```