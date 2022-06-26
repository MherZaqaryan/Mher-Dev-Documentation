---
id: bungee-installation
title: Bungee Installation
sidebar_position: 1
---

:::important
 If you are using this addon with Bungee mode you do need to have [BedWarsProxy](https://polymart.org/r/2167) installed!
:::

1. Download the plugin from [Polymart](https://polymart.org/r/1620).
2. Put the plugin into both BedWarsProxy and BedWars1058 server's plugins folder.
3. Open `plugins/BedWarsProxy/Addon/Private-Games/config.yml` and set the `remote-port` to your disired port.

:::note
`remote-port` Must **not** be the same as [server.properties](https://www.spigotmc.org/wiki/spigot-configuration-server-properties/) or BedWarsProxy's port
:::

4. Restart your BedWarsProxy server.

5. Open `plugins/BedWars1058/Addon/Private-Games/config.yml`, and then add the lobby server where you've installed BedWarsProxy at, under `lobby-sockets` path, like shown below:

```yml title="plugins/BedWars1058/Addon/Private-Games/config.yml" 
lobby-sockets:
- 0.0.0.0:2022
```
:::note
The socket IP and the port must be from `plugins/BedWarsProxy/Addon/Private-Games/config.yml`, it's **not** the server port.
:::

6. Restart your server, and now you're all done!