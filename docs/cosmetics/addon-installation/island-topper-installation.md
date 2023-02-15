---
id: island-topper-installation
title: Island Topper Installation
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## Island Topper Locations Installation

:::note
This is merely an additional criterion for Island Topper category; you do not need to completely re-setup each arena.
:::

Unlike other cosmetic categories, Island Topper necessitates some modifications to each of your BedWars1058 arenas. BedWars1058 Cosmetics Addon has a special command designed just for the Island Topper category.

Set up the topper location for each arena by following the steps below.

1. To disable the arena, run the command `/bw disableArena arena>.`
2. Run `/bw setupArena arena>` to edit the arena after that.
3. After that, you must go to each team's island and select the topper location for that team before issuing the command `/bw setIslandTopper (team)` while standing in the designated spot (the team may be automatically detected if you run without the command without specifying the team name).
4. Once you've completed everything, just type `/bw save` to save the arena, and you're all set.

## Custom Island Topper Schematic Creation And Saving

:::note
The Island Topper schematics must match the software version on your server in order for it to function properly.
:::

:::info
The schematic file must have the Sponge format, which means that your file has to either end with `.schematic` (for 1.8.8-1.12.2) or `.schem` (for 1.13.2-1.19.3).
:::

The requirements you must follow to start building your custom Island Topper are listed below. Either the FastAsyncWorldEdit plugin or WorldEdit must be installed for this.

Remember that the final Island Topper must face **south** before beginning building your custom island topper (this is done to make the toppers face correctly for each team island). If you're not sure what that is, simply check the debug menu (pressing `F3`) and then turn your head till the facing indicates **south** as in the photo.

<img width="500px" src="https://imgur.com/JHafgcz.png"/>

Once you're finished with your custom topper, it's time to copy and then save it as a Sponge schematic. Choose the first and the second positions, and then when you start copying the schematic to save, ensure that you are at the lowest Y position of your island topper, and the best centeral location for your topper (the copying location will be used as an anchor).

Done! Now you have the island topper correctly copied and saved, and can look forward to follow [these steps](../tutorials/create-cosmetics/island-topper#adding-a-new-island-topper-cosmetic) to add the custom island topper to BedWars1058 Cosmetics Addon.

:::info
Uncertain about something? You can always reach us for assistance through our [Discord](https://mher.club/discord) support server.
:::