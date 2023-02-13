---
title: sc-goodies
---

# {{ $frontmatter.title }}

[sc-goodies](https://github.com/SwitchCraftCC/sc-goodies) is a Fabric 1.19 content mod for the SwitchCraft server. It
contains a variety of features specifically designed for SwitchCraft, many of which were inspired by previous 1.12 mods
on SwitchCraft 2 such as Iron Chests, EnderStorage, and Quark.

## Table of Contents
[[toc]]

## Useful links

#### sc-goodies
- [sc-goodies on Modrinth](https://modrinth.com/mod/sc-goodies)
- [sc-goodies on CurseForge](https://www.curseforge.com/minecraft/mc-mods/sc-goodies)
- [sc-goodies on GitHub](https://github.com/SwitchCraftCC/sc-goodies)

## Iron Chests
Several versions of chests and shulker boxes are added to the game.

Slots:
- Iron - 54
- Gold - 81
- Diamond - 108

Upgrades between chest versions can be crafted as well:
- Regular -> Iron
- Iron -> Gold
- Iron -> Diamond
- Gold -> Diamond

These chests behave as normal inventories when interacted with by a ComputerCraft Computer.
## Ender Storage
Ender Storage allows players to store their items in a special chest that features a changeable color coded frequency. Any chest with the same code will share inventory, enabling item transfer over any distance and even across dimensions. Codes are composed by 3 different color slots and each of them are defined with color dyes by right clicking each slot with one.

If a player right clicks the chest with a diamond the chest is locked to the player's private "color space".  

If a player right clicks the chest with an emerald the chest becomes accessible by a ComputerCraft Computer through a peripheral API, this nullifies the cost of using a dye.

If a player shift right clicks the chest with an empty hand the emerald and the diamond can be recovered, this is important as if the chest is broken by the player it retains all of it's configuration. One should be careful with who gets access to private chests and should especially avoid giving out access to privated chests with emeralds
### Peripheral API
An Ender Storage Chest can be wrapped as a peripheral with the name "ender_storage", e.g.:
```lua
local chest = peripheral.wrap("ender_storage")
```
The following methods are available:
- ``chest.getFrequency(): Array(left: number, middle: number, right: number)`` (get current frequency)
- ``chest.getOwner(): String`` (get name of Owner, if any)
- ``chest.isPersonal(): Boolean`` (check if chest is diamond-locked)
- ``chest.areComputerChangesEnabled(): Boolean`` (check if chest has emerald)
- ``chest.setFrequency(left: number, middle: number, right: number)`` (will fail if chest does not have emerald)
## Hover Boots
Hover boots, when worn (trinkets slot), allow players to jump higher and reduce the falling impact. The boots also allow players to walk up steps of one-block height, making it easier to climb up mountains.

They don't need charge nor have durability and can be dyed by the player.
## Item Magnet
Item Magnet, when worn (trinkets slot), allows players to pick up items from a higher radius according to the magnet's level.  

It does require recharging which is equivalent to mending, a higher level magnet does not feature any larger of a charge buffer.
## Popcorn
Creative-only food that does not disappear when consumed but also does not fill hunger/saturation.
## Concrete additions
Players walking on concrete will benefit of a speed-up, concrete stairs and slabs are also added in all colors.
## Trees
TODO
## Grass
TODO
## Ported from Quark
### Renewable Shulkers
Endermites will rarely bury into Purpur Blocks, much like how Silverfish bury into stone. When they do, they fuse with the block, forming a Shulker.
### Dragon Scales
When an Enderdragon that was spawned by the player is killed, it will drop a Dragon Scale.
The scale can be combined with an Elytra in a crafting table, creating a new one. The old Elytra stays behind untouched, therefore making Elytras renewable.
### Dyeable Elytra
The Elytra can be dyed with any of the 16 dyes, as many times as desired.
Some special variations are available as well: Lesbian, Non-Binary, Pride and Trans.
### Ancient Tomes
Can enchant an item one level beyond the maximum vanilla level. Found only in loot chests of mob spawner dungeons
Existing Tomes:
- Feather Falling (max. V)
- Swift Sneak (max. IV)
- Thorns (max. IV)
- Sharpness (max. VI)
- Smite (max. VI)
- Bane of Arthropods (max. VI)
- Knockback (max. III)
- Fire Aspect (max. III)
- Looting (max. IV)
- Sweeping Edge (max. IV)
- Efficiency (max. VI)
- Unbreaking (max. IV)
- Fortune (max. IV)
- Power (max. VI)
- Punch (max. III)
- Luck of the Sea (max. IV)
- Lure (max. IV)
- Loyalty (max. IV)
- Riptide (max. IV)
- Impaling (max. VI)
- Piercing (max. V)
### Glass Item Frame
Crafting an Item Frame with Glass Panes makes a Glass Item Frame. The frame itself will not render while an item is inside, and items inside render a bit larger than a normal Item Frame.
