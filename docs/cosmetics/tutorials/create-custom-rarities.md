---
id: create-custom-rarities
title: Create Custom Rarities
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::tip
If you need additional help, we'll be happy to help you on our [Discord](https://mher.club/discord) server.
:::

This addon lets to create custom rarities and apply them to any cosmetic you want.

## Default built-in rarities.

1. **<span style={{color: '#55FF55'}}>Common</span>** has a priority of 1.
2. **<span style={{color: '#55FFFF'}}>Rare</span>** has a priority of 2.
3. **<span style={{color: '#AA00AA'}}>Epic</span>** has a priority of 3.
4. **<span style={{color: '#FFAA00'}}>Legendary</span>** has a priority of 4.

## Add a new rarity.

1. Open to the configuration file for you corresponding [mode](../compatibility.md#dependencies).

<Tabs groupId="dependency-plugin">
    <TabItem value="bedwars1058" label="BedWars1058">
    File location: <code>plugins/BedWars1058/Addons/Cosmetics/config.yml</code>
    </TabItem>
    <TabItem value="bedwarsproxy" label="BedWarsProxy">
    File location: <code>plugins/BedWarsProxy/Addons/Cosmetics/config.yml</code>
    </TabItem>
    <TabItem value="standalone" label="Standalone">
    File location: <code>plugins/BedWars1058-Cosmetics/config.yml</code>
    </TabItem>
</Tabs>

2. Add a new row under the **`rarities`** path as shown in the snippet below.
   
The `color` path should be a color from [ChatColor](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html).

```yml title="config.yml (snippet)"
your-rarity-name:
  priority: # The priority of the rarity (Should be a number).
  color: # The color of the rarity that's gonna be displayed.
```
3. Open your desired language file for your [mode](../../compatibility#dependencies) and then add a new row under the **`addons.cosmetics.rarities`** path, as shown in the snippet below.

<Tabs groupId="dependency">
    <TabItem value="bedwars1058" label="BedWars1058">
    File location: <code>plugins/BedWars1058/Languages/messages_(lang).yml</code>
    </TabItem>
    <TabItem value="bedwarsproxy" label="BedWarsProxy">
    File location: <code>plugins/BedWarsProxy/Languages/messages_(lang).yml</code>
    </TabItem>
    <TabItem value="standalone" label="Standalone">
    File location: <code>plugins/BedWars1058-Cosmetics/Languages/messages_(lang).yml</code>
    </TabItem>
</Tabs>

```yml title="messages_(lang).yml (snippet)"
your-rarity-name:
  display-name: # The name you want it to be displayed for the current language.
```

4. Save all these files.
5. You're done, now you can use it for any cosmetic you want, as shown below.


<details>

<summary>Example usage of your custom rarity</summary>

```yml
example-cosmetic:
  enabled: true
  material: DIAMOND_BLOCK
  amount: 1
  enchanted: true
  price: 500000
  rarity: your-rarity-name
```

</details>

