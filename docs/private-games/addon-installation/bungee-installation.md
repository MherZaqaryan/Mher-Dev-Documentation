---
id: bungee-installation
title: Bungee Installation
description: 'Addon installation on bungee mode.'
---
```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

Addon installation on bungee mode.

:::important
 If you are using this addon with Bungee mode you do need to have [BedWarsProxy](https://polymart.org/r/2167) installed!
:::

1. Download the plugin from [Polymart](https://polymart.org/r/1620).
2. Put the BedWars1058-PrivateGames-x.x.x.jar file into both BedWarsProxy and BedWars1058 servers' plugins folder.
3. Start your server, let it to fully start, and then stop it.
4. Open both BedWars1058's and BedWarsProxy's authentication files
<Tabs groupId="dependency-plugin">
  <TabItem value="bedwars1058" label="BedWars1058">
  File location: <code>plugins/BedWars1058/Addons/Private-Games/authentication.yml</code>
  </TabItem>
  <TabItem value="bedwarsproxy" label="BedWarsProxy">
  File location: <code>plugins/BedWarsProxy/Addons/Private-Games/authentication.yml</code>
  </TabItem>
</Tabs>

> Put your personal license key that you got from the result of [these steps](/private-games/how-to-verify#get-the-license-and-your-roles-for-bedwars1058-private-games) on the `license-key` path of each file.

5. Start your server, let it to fully start, and then stop it again.

6. Open `plugins/BedWarsProxy/Addon/Private-Games/config.yml` and set the `remote-port` to your desired port.

:::note
`remote-port` Must **not** be the same as [server.properties](https://www.spigotmc.org/wiki/spigot-configuration-server-properties/) or BedWarsProxy's port
:::

7. Restart your BedWarsProxy server.

8. Open `plugins/BedWars1058/Addon/Private-Games/config.yml`, and then add the lobby server where you've installed BedWarsProxy at, under `lobby-sockets` path, like shown below:

```yml title="plugins/BedWars1058/Addon/Private-Games/config.yml" 
lobby-sockets:
- 0.0.0.0:2022
```
:::note
The socket IP and the port must be from `plugins/BedWarsProxy/Addon/Private-Games/config.yml` file's `port` path, it's **not** the server port.
:::

9. Start your server, let it fully start.
10. <span style={{color: '#FFD700'}}>Profit!</span>