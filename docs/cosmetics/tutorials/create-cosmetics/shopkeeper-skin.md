---
id: shopkeeper-skin
title: Create Shopkeeper Skins
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::tip
If you need additional help, we'll be happy to help you on our [Discord](https://mher.club/discord) server.
:::

:::tip
Use entity types from [useful resources](/cosmetics/configuration/useful-resources) for your server version.
:::

## Shopkeeper Skin category configuration file.

<Tabs groupId="dependency">
    <TabItem value="bedwars1058" label="BedWars1058">
    File location: <code>plugins/BedWars1058/Addons/Cosmetics/Categories/shopkeeper-skin.yml</code>
    </TabItem>
    <TabItem value="bedwarsproxy" label="BedWarsProxy">
    File location: <code>plugins/BedWarsProxy/Addons/Cosmetics/Categories/shopkeeper-skin.yml</code>
    </TabItem>
    <TabItem value="standalone" label="Standalone">
    File location: <code>plugins/BedWars1058-Cosmetics/Categories/shopkeeper-skin.yml</code>
    </TabItem>
</Tabs>

## Adding a new Shopkeeper Skin cosmetic.

1. Go to [shopkeeper skin's configuration file](#shopkeeper-skin-category-configuration-file) and add a new row under the **`cosmetics`**, as shown in the snippet below.

```yaml title="shopkeeper-skin.yml (snippet)"
your-shopkeeper-skin-identifier:
  enabled: true
  material: # The icon's item material.
  amount: # The icon's item amount.
  enchanted: # True if you want to have an enchanted icon otherwise false.
  price: # The price (e.g 5.000, 10.000, 100.000).
  rarity: # The rarity (e.g common, rare, epic, legendary).
  type: # Type could be SYSTEM, ENTITY, PLAYER, and MIRROR
```

### Type SYSTEM
You may add path option when using type **SYSTEM**. You may use the in-built skins' paths for this option which is set by default when loading the addon for the first time.

```yml title="shopkeeper-skin.yml (snippet)"
your-shopkeeper-skin-identifier:
  ...
  type: SYSTEM
  path: system-skin # There are lots of system skins available which set as default.
```

### Type ENTITY
You may add type option when using type ENTITY. You should specify the entity type for this option (e.g ZOMBIE, CREEPER, etc.).

```yml title="shopkeeper-skin.yml (snippet)"
your-shopkeeper-skin-identifier:
  ...
  type: ENTITY
  entity: SKELETON # The entity type.
```

### Type SKIN
You may add `skin` option when using type **SKIN**, this lets you add your own custom skin. To add the skin, get the URL address of your skin's image, go to [this](https://mher.club/skin-generator) website, then click on the `Generate!` button and you should get the skin's unique id, signature, and texture values, copy each of them and put them under skin option with the order as shown below.

:::info
If you already have the skin credentials, put each of them in the paths.
:::

```yml title="shopkeeper-skin.yml (snippet)"
your-shopkeeper-skin-identifier:
  ...
  type: PLAYER
  skin: 
    unique-id: # Unique ID
    signature: # Signature
    texture: # Texture
```

### Type MIRROR
This is a type that let us display the player's skin that is using the Shopkeeper Skin.

```yml title="shopkeeper-skin.yml (snippet)"
your-shopkeeper-skin-identifier:
  ...
  type: MIRROR
```

2. Open your desired language file for your [mode](../../compatibility#dependencies) and then add a new row under the **`addons.cosmetics.cosmetics.shopkeeper-skin`** path, as shown in the snippet below.

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
your-shopkeeper-skin-identifier:
  display-name: # The display name for the current language.
  description: # The description for the current language.
  - 'Description line 1'
  - 'Description line 2'
```

3. Save all these files and restart your server.
4. You're done, now you should see your custom Shopkeeper Skin on the Shopkeeper Skins menu via **`/cosmetic menu shopkeeper-skin`**.