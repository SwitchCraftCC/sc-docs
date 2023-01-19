---
title: ClaimKit
---

# {{ $frontmatter.title }}

ClaimKit is SwitchCraft's land claim plugin. Its features and interface should be familiar for SwitchCraft 2 players.

The tools needed to create ClaimKit claims can be acquired by running `/kit ck`.

[[toc]]

### Creating claims

Right click on two blocks on opposite corners with a golden shovel to create a claim bounding this area.
To clear a misplaced point, left-click on a block with a golden shovel.

To create a three-dimensional claim, hold shift while placing your first point. Clear the point to exit 3D claim mode.

To abandon a claim, run `/abandon` while standing in the claim.

### Resizing claims

A golden axe is used to resize claims.
To resize a claim, select one corner with right click, then right click again on a new corner position.

You can also resize a claim with `/expand <amount>`.
`/expand` resizes the claim in the direction you are looking.

### Listing claims

You can list your claims with `/claimlist`.
Click on individual claims to list additional info, or click on the coordinates to teleport to that claim.

You can see additional info about a claim you are standing in by running `/claiminfo`.

### Trusting players

You can trust other players in your claims with `/trust <username> <level>`.

Valid trust levels are:

- `MONITOR`: allows interaction with CC: Tweaked monitors
- `ACCESS`: allows interaction with monitors, doors, buttons, and levers
- `BASIC`: allows opening inventories, placing and breaking blocks, and interacting with computers
- `MANAGER`: an extension of BASIC; it allows additional claim management permissions, such as creating subclaims

To give all players trust on your claim, use the metaname `.public` in place of the username.

There are also separate commands for the individual levels:

- `/monitortrust <username>`
- `/accesstrust <username>`
- `/trust <username>`
- `/managertrust <username>`

### Transferring claims

To transfer a claim to another player, stand in the claim and run `/transfer <username>`.
The other player must have enough claim blocks for the claim.

### Subclaims

You can create subclaims within your claims with the golden shovel.
Subclaims inherit trust from the parent claim, but may have additional players trusted and different flags enabled.

### Claim blocks

Claim creation is limited by two factors: how many claim blocks you have, and how many claims you have already created.

You earn claim blocks over time, as you play.
The rate at which you earn blocks is visible in `/playerinfo`, as is your current amount of claim blocks.
The number of claim blocks used by a claim is determined by the dimensions of the claim.

A three-dimensional claim has the same cost as a two-dimensional claim with the same X and Z size.

### Flags

Enabled claim flags are visible in `/claiminfo`.
To toggle a flag, run `/toggleflag <flag name>`.

Valid flag names are:

- `explosions`: allows explosions within the claim, disabled by default
- `mobSpawn`: allows mobs to spawn within the claim, disabled by default
