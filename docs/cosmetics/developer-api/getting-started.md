---
id: getting-started
title: Getting Started
description: Getting started with the Cosmetics Developer API.
---

## 1. Adding Cosmetics as a soft dependency.

First, please make sure to add `BedWars1058-Cosmetics` as a **soft dependency** so your plugin will start after Cosmetics addon.

:::note
It is **not** recommended to use BedWars1058-Cosmetics as a **dependency**, for more information about plugin.yml attributes read [here](https://www.spigotmc.org/wiki/plugin-yml/).
:::

```yaml title="plugin.yml"
softdepend: [BedWars1058-Cosmetics]
```

## 2. Adding Cosmetics existence check.

:::important 
You **must** add a check for BedWars1058-Cosmetics plugin existence, before initializing the Cosmetics API.
:::

Checking if the plugin exists on the server startup, this check is important, otherwise your plugin won't work properly.

The sample check below will shut down the server, if it doesn't detect the Cosmetics addon.

```java title="Main.java"
@Override
public void onEnable() {
    if (Bukkit.getPluginManager().getPlugin("BedWars1058-Cosmetics") == null) {
        getLogger().severe("BedWars1058 Cosmetics Addon wasn't found. Disabling...");
        Bukkit.getPluginManager().disablePlugin(this);
        return;
    }
}
```

## 3. Initializing the Cosmetics API

The final step is to initialize the API, below shown the method to access it from Bukkit Services Manager.

```java title="Main.java"
CosmeticsAPI cosmeticsApi = Bukkit.getServicesManager().getRegistration(CosmeticsAPI.class).getProvider();
```