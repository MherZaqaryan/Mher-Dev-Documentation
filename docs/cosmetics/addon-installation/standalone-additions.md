---
id: standalone-additions
title: Standalone Additions
---

:::info
If you are using BedWars1058 in **SHARED**, **MULTIARENA**, or **BUNGEE** (with BedWarsProxy) you can skip this page, the database credentials is being filled automatically in these type of servers.
:::

If you have STANDALONE mode server (read [this](../compatibility#dependencies) article for modes) you have to fill the credentials of the database in the configuration file of BedWars1058 Cosmetics.

You can find the configuration file at `plugins/BedWars1058-Cosmetics/config.yml`

```yaml title="config.yml"
database: SQLITE # (Options: SQLITE, MYSQL)
mysql:
  host: localhost
  port: 3306
  database: bedwars1058-cosmetics
  username: root
  password: root
  ssl: false
```

There are two options for database types, you should use **MYSQL** if you have MySQL database to sync the servers, and **SQLITE** if you want to store the data locally (not recommended for **STANDALONE**).

When the `database: MYSQL` is set to **MYSQL** you have to fill the **mysql** credentials below, otherwise if it is `database: SQLIE` just leave it.