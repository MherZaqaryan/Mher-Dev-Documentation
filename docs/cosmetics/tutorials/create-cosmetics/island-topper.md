---
id: island-topper
title: Create Island Topper
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::tip
If you need additional help, we'll be happy to help you on our [Discord](https://mher.club/discord) server.
:::

:::note
Island Topper schematics must be the same version as your server's software version, otherwise, it will not work properly.
:::

:::info
The schematic file must have the Sponge format, which means that your file has to either end with `.schematic` (for 1.8.8-1.12.2) or `.schem` (for 1.13.2-1.19.3).
:::

## Island Topper category configuration file.

<Tabs groupId="dependency">
    <TabItem value="bedwars1058" label="BedWars1058">
    File location: <code>plugins/BedWars1058/Addons/Cosmetics/Categories/island-topper.yml</code>
    </TabItem>
    <TabItem value="bedwarsproxy" label="BedWarsProxy">
    File location: <code>plugins/BedWarsProxy/Addons/Cosmetics/Categories/island-topper.yml</code>
    </TabItem>
    <TabItem value="standalone" label="Standalone">
    File location: <code>plugins/BedWars1058-Cosmetics/Categories/island-topper.yml</code>
    </TabItem>
</Tabs>

## Adding a new Island Topper cosmetic.

1. Get your schematic file and put it in the directory according to your [mode](../../compatibility#dependencies).
<Tabs groupId="dependency">
    <TabItem value="bedwars1058" label="BedWars1058">
    Folder location: <code>plugins/BedWars1058/Addons/Cosmetics/Island-Topper</code>
    </TabItem>
    <TabItem value="bedwarsproxy" label="BedWarsProxy">
    Folder location: <code>plugins/BedWarsProxy/Addons/Cosmetics/Island-Topper</code>
    </TabItem>
    <TabItem value="standalone" label="Standalone">
    Folder location: <code>plugins/BedWars1058-Cosmetics/Island-Topper</code>
    </TabItem>
</Tabs>

2. Go to the [island topper's configuration file](#island-topper-category-configuration-file) and add a new row under the **`cosmetics`** path, as shown in the snippet below.

```yaml title="island-topper.yml (snippet)"
your-island-topper-identifier:
  enabled: true
  material: # The icon's item material.
  amount: # The icon's item amount.
  enchanted: # True if you want to have an enchanted icon otherwise false.
  price: # The price (e.g 5.000, 10.000, 100.000).
  rarity: # The rarity (e.g common, rare, epic, legendary).
  path: # Island Topper's schematic file path (e.g car.schematic, car.schem).
```

3. Open your desired language file for your [mode](../../compatibility#dependencies) and then add a new row under the **`addons.cosmetics.cosmetics.island-topper`** path, as shown in the snippet below.

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

```yaml title="messages_(lang).yml (snippet)"
your-island-topper-identifier:
  display-name: # The display name for current language.
  description: # The description for current language.
  - 'Description line 1'
  - 'Description line 2'
```

4. Save all these files and restart your server.
5. You're done, now you should see your custom Island Topper cosmetic on the Island Topper's menu via **`/cosmetic menu island-topper`**.