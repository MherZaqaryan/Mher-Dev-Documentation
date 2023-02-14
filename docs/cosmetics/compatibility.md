---
id: compatibility
title: Compatibility
---

## Server Software
This addon is made for [Spigot](https://www.spigotmc.org/), however, it supports some forks like [PaperSpigot](https://papermc.io/).

Please note that this addon is packet-based, which means [Spigot](https://www.spigotmc.org/) forks without [NMS](https://www.spigotmc.org/wiki/general-introduction-of-packets-nms/) aren't supported.

## Software Version

:::warning Warning
We may drop support for some versions depending on BedWars1058.
:::

This addon is compatible with the following versions of [Spigot](https://www.spigotmc.org/).
* **1.8.8** (1_8_R3).
* **1.12.2** (1_12_R1).
* **1.16.5** (1_16_R3).
* **1.17.1** (1_17_R1).
* **1.18.2** (1_18_R2).
* **1.19.x** (1_19_R1).

:::note
Version string 1.19.x means that it supports all the sub-versions of that version (1.19, 1.19.1, 1.19.2).
:::

## Java Version

You must use **Java 8** or higher to run this addon.

However, we recommend that you use:

* **Java 8** for 1.8.8 - 1.11.x versions.
* **Java 11** for 1.12.x - 1.16.4 versions.
* **Java 16** for 1.16.5 - 1.17.x versions.
* **Java 17, 18** for 1.18x version.

## Dependencies

This addon is standalone which means it's not required to install [BedWars1058](https://polymart.org/r/1152) or [BedWarsProxy](https://polymart.org/r/2167) to make it work, however using it as standalone may only give the ability to buy or select cosmetics from the cosmetics menu.

Addon supports for **SHARED**, **MULTIARENA**, **BUNGEE**, and **BUNGEE_LEGACY** server types. Read more about server types here.

BedWars1058 Cosmetics Addon has 3 different modes depedning on your installation.

### BedWars1058
If the server has the BedWars1058 plugin in **SHARED**, **MULTIARENA**, **BUNGEE**, or **BUNGEE_LEGACY** mode Cosmetics addon will enable `BedWars1058` mode, in this mode you'll be able to either both cosmetics via the `/cosmetics menu` and see them playing in-game events, such as final killing, projectile launching, etc.

### BedWarsProxy
If the server has the BedWarsProxy plugin running Cosmetics addon will enable in `BedWarsProxy` mode, this mode only lets players choose cosmetics via the `/cosmetics menu`. You won't be able to see any cosmetics being displayed in this mode ever.

### Standalone
If the server neither has BedWars1058 nor BedWarsProxy plugins Cosmetics enables in `Standalone` mode, which is mostly being used in servers that have BedWars1058 in **BUNGEE_LEGACY** mode and running the Cosmetics plugin in the lobby server. this mode only lets players choose cosmetics via the `/cosmetics menu` like `BedWarsProxy` mode. The difference between `Standalone` and `BedWarsProxy` modes are almost the same they are being used as a place to store the cosmetics configurations. You won't be able to see any cosmetics being displayed in this mode ever.

:::info
For more about BedWars1058 server types you can read [here](https://wiki.andrei1058.dev/docs/BedWars1058/configuration/main-configuration).
:::

## Optional Soft-Dependencies

This add-on is integrated with some plugins, which will make addon work with some other ways.

* **Citizens** (Optional, but required for [Shopkeeper Skin](cosmetic-categories/shopkeeper-skin) category).
* **FAWE** / **WorldEdit** (Optional, but required for [Island Topper](cosmetic-categories/island-topper) category).
* **Vault** (Optional).
* **PlaceholderAPI** (Optional).