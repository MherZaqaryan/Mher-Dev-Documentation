---
id: getting-started
title: Getting Started
sidebar_position: 0
description: Getting started with the Private Games Developer API.
---

## 1. Adding Private Games as a soft dependency.

First, please make sure to add `BedWars1058-PrivateGames` as a **soft dependency** so your plugin will start after Private Games addon.

:::note
It is **not** recommended to use BedWars1058-PrivateGames as a **dependency**, for more information about plugin.yml attributes read [here](https://www.spigotmc.org/wiki/plugin-yml/).
:::

```yaml title="plugin.yml"
softdepend: [BedWars1058-PrivateGames]
```

## 2. Adding Private Games existence check.

:::important 
You **must** add a check for BedWars1058-PrivateGames plugin existence, before initializing the Private Games API.
:::

Checking if the plugin exists on the server startup, this check is important, otherwise your plugin won't work properly.

The sample check below will shut down the server, if it doesn't detect the Private Games addon.

```java title="Main.java"
@Override
public void onEnable() {
    if (Bukkit.getPluginManager().getPlugin("BedWars1058-PrivateGames") == null) {
        getLogger().severe("BedWars1058 Private Games Addon wasn't found. Disabling...");
        Bukkit.getPluginManager().disablePlugin(this);
        return;
    }
}
```

## 3. Initializing the Private Games API

The final step is to initialize the API, below shown the method to access it from Bukkit Services Manager.

```java title="Main.java"
PrivateGames privateGamesAPI = Bukkit.getServicesManager().getRegistration(PrivateGames.class).getProvider();
```