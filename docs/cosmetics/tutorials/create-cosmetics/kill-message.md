---
id: kill-message
title: Create Kill Messages
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::tip
If you need additional help, we'll be happy to help you on our [Discord](https://mher.club/discord) server.
:::

## Kill Message category configuration file.

<Tabs groupId="dependency">
    <TabItem value="bedwars1058" label="BedWars1058">
    File location: <code>plugins/BedWars1058/Addons/Cosmetics/Categories/kill-message.yml</code>
    </TabItem>
    <TabItem value="bedwarsproxy" label="BedWarsProxy">
    File location: <code>plugins/BedWarsProxy/Addons/Cosmetics/Categories/kill-message.yml</code>
    </TabItem>
    <TabItem value="standalone" label="Standalone">
    File location: <code>plugins/BedWars1058-Cosmetics/Categories/kill-message.yml</code>
    </TabItem>
</Tabs>

## Adding a new Kill Message cosmetic.

1. Go to [spray's configuration file](#spray-category-configuration-file) and add a new row under the **`cosmetics`** path, as shown in the snippet below.

```yaml title="kill-message.yml (snippet)"
your-kill-message-identifier:
  enabled: true
  material: # The icon's item material.
  amount: # The icon's item amount.
  enchanted: # True if you want to have an enchanted icon otherwise false.
  price: # The price (e.g 5.000, 10.000, 100.000).
  rarity: # The rarity (e.g common, rare, epic, legendary).
  kills-beds-shoutable: # True if you want this message to shout final kills, otherwise false.
```

2. Open your desired language file for your [mode](../../compatibility#dependencies) and then add a new row under the **`addons.cosmetics.cosmetics.kill-message`** path, as shown in the snippet below.

There are two types of Kill Messages:
- Normal -  kill, void, bow, fall, minion, and bed messages.
- Kills Shoutable - all messages in 1st + kills message which is used to shout the final kills.

If you want to add a normal message **kill**, **void**, **bow**, **fall**, **minion**, and **bed** you may use placeholders `{player}` and `{victim}` for the **kill**, **void**, **bow**, **fall**, **minion**, and `{bed}`, `{destroyer}` for the **bed** one.

If you want to add a kills shoutable one it will apply everything in normal and plus you'll be able to use placeholders `{player}`, `{victim}`, and `{count}` for kills, and also use the `{count}` placeholder with the **bed** message.

```yml title="messages_(lang).yml (snippet)"
your-kill-message-identifier:
  display-name: # The display name for the current language.
  description: # The description for the current language.
  - 'Description line 1'
  - 'Description line 2'
  messages:
    kill: 'Player kills a player.'
    void: 'Player void kills a player.' 
    bow: 'Player kills a player with a bow.' 
    fall: 'Player kicks the player into the void.' 
    minion: 'Victim killed by Player minion' 
    bed: 'Player breaks a bed' 
    kills: "Victim was Player's final #5"  
```

3. Save all these files and restart your server.
4. You're done, now you should see your custom Kill Message on the Kill Messages menu via **`/cosmetic menu kill-message`**.