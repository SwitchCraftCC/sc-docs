---
title: What's New in SwitchCraft 3
---

# {{ $frontmatter.title }}

[[toc]]

<div class="whats-new-listing spread-lists">

SwitchCraft 3 has been rebuilt from the ground up for Minecraft 1.20.1 with the Fabric mod loader. Every custom mod and
plugin has been rewritten, and most other plugins have also been rewritten from scratch, to reduce the dependency on
third party code. This gives us much better control over the game and allows us to make changes and bugfixes much more 
quickly.

Here is a high level overview of what to expect in SwitchCraft 3:

### Modpack
- Minecraft 1.20.1
  - Chat reporting has been disabled, and chat now uses custom network packets
- [Fabric](https://fabricmc.net/)
- [Packwiz](https://packwiz.infra.link/)-based modpack updater. All mods using [Modrinth](https://modrinth.com/) or 
  custom Maven repos
- [CC: Tweaked](https://github.com/cc-tweaked/cc-tweaked) - CC:T now running on Fabric
- [Plethora](/whats-new/plethora) - Ported to Fabric 1.20.1 by Lemmmy
  - View the changelist here: [Plethora 1.20.1](/whats-new/plethora)
- [sc-peripherals](https://github.com/SwitchCraftCC/sc-peripherals) - OC 3D prints ported to Fabric 1.20.1 by Lemmmy
  - View the changelist here: [sc-peripherals](/whats-new/sc-peripherals)
- [sc-goodies](https://github.com/SwitchCraftCC/sc-goodies) - Additional gameplay content by Lemmmy
  - Basic iron chests, in the style of cpw's [ironchest](https://github.com/progwml6/ironchest).
    - This is a significantly more primitive take on the iron chests concept with "no BS" - it simply adds iron, gold,
      and diamond versions of chests and shulker boxes.
  - [EnderStorage](https://github.com/TheCBProject/EnderStorage) style chests.
  - Hover Boots, in the style of [OpenComputers](https://github.com/MightyPirates/OpenComputers).
  - Item Magnet
  - Dragon Scales, in the style of [Quark](https://github.com/VazkiiMods/Quark/).
  - Dyeable Elytra, in the style of Quark. Adds Elytra in the 16 dye colors, as well as a few special ones.
  - Ancient Tomes, in the style of Quark.
  - Popcorn
  - Concrete stairs and slabs, speed-up when walking on concrete
  - Endermites bury into Purpur Blocks to form Shulkers, similar to Quark.
  - Sakura Trees, Maple Trees, Blue Trees
  - Pink Grass, Autumn Grass, Blue Grass
- [Trinkets](https://github.com/emilyploszaj/trinkets) - Spiritual successor to Baubles; used by Neural Interfaces, 
  Item Magnets and Hover Boots.
- Resource pack choices when launching the game for the first time:
  - Minecraft - Modern or Programmer Art 
  - CC: Tweaked - [Jummit's Modern Textures](https://github.com/Lemmmy/CC-Jummit-Textures) or Vanilla
    - New ComputerCraft textures in the style of Jappa, Mojang's texture artist 
  - Armor - [Solarflame5's Light Armor](https://github.com/Solarflame5/minecraft-light-armor) or Vanilla
    - Based on [Dresdom's Light Armor pack](https://www.reddit.com/r/Minecraft/comments/7e8zqv/i_made_a_light_armor_resource_pack/)

### Server
- ClaimKit - **Claim protection mod written from scratch by [kotahu](https://github.com/kotahu)**
  - Create a "claim" around your base or belongings, and only allow players you trust to access it, in the style of
    [GriefPrevention](https://github.com/MinecraftPortCentral/GriefPrevention/)
  - View the documentation here: [ClaimKit](/faq/claimkit)
- KristPay - **Krist wallet mod written from scratch by [anemonemma](https://github.com/emmachase)**
  - In-game Balance overlay
  - **/pay autocompletion** when looking at ComputerCraft Monitors, signs, and chat history containing names and 
    metanames (e.g. `example.kst` and `metaname@name.kst`)
  - Names and metanames **can now be clicked in chat** to suggest the command `/pay example.kst`
  - (Experimental) [Krist URIs](https://docs.krist.dev/docs/uri.html) are now supported in chat and show rich KristWeb
    or `/pay` suggestions. Payment URIs may be supported in the future.
  - Opt out of welfare (daily login bonus, faucet rewards) with `/welfare opt out` and `/welfare return`
  - Plugin-initiated payment requests
- [SCPaste](https://p.sc3.io) - **Paste service written from scratch by [anemonemma](https://github.com/emmachase)**
  - Fully featured single-file code hosting solution designed specifically for ComputerCraft and SwitchCraft
  - `pastebin get` and `pastebin run` will work with both SCPaste and Pastebin URLs and IDs
  - Replaces `pastebin put` - all pastes uploaded on SwitchCraft will go to SCPaste instead of Pastebin
  - Log in with GitHub or Discord to save, edit and protect your pastes
- New [Supporter tiers](/faq/supporter) ![Supporter Tier 1](/img/supporter-tier-1.png) ![Supporter Tier 2](/img/supporter-tier-2.png) ![Supporter Tier 3](/img/supporter-tier-3.png)
  - You can now view your supporter status, including lifetime contribution, by simply running `/supporter`
  - You can choose which supporter tier to show publicly by running `/supporter tier <1-3>` or `/supporter tier auto`
  - You can also now opt out of showing your supporter tag publicly by running `/supporter opt out`
  - Supporters now have access to the `/hat` command
- Staff icons in chat ![Staff Icon 1](/img/staff-icon-1.png) ![Staff Icon 2](/img/staff-icon-2.png)
- Monthly Supporter goal in the tablist
- [Krist-based chunkloaders](/whats-new/chunkloaders)
  - Pay once to unlock chunkloading limits
  - Keep chunks loaded only when you are online
  - Offline chunks available to be loaded when you are offline for up to 30 days
- Updated Discord bridge
  - Reimplementation of the Discord bridge from SwitchCraft 2, with support for many new features and quality-of-life
    improvements
  - In-game improvements include:
    - User and channel mentions highlight in chat and can be clicked
    - **@user mention autocompletion** in chat<br />![](/img/discord-autocompletion.png)
    - **Avatars are rendered in chat** next to the message. This can be disabled in the SwitchCraft Client Mod settings.
    - Video and file attachment links
    - Icons for image, video and file attachments
    - Discord icon in chat ![Discord Bridge Icon](/img/discord-bridge-icon.png)
  - Improvements on the Discord side include:
    - `/list` command to list players currently online
    - Pinned messages in `#welcome` and `#server-chat` with the player list and count
    - First-join announcements
    - Username change announcements
    - Death icons in the bridge
    - Underscores in usernames are no longer treated as markdown
- Custom chat packet, with **chat reporting disabled**
  - `/msg` now supports markdown
  - `/reply` (`/r` for short) will reply to the last person who messaged you *and* the last person you messaged
  - **Player heads are rendered in chat** next to the message. This can be disabled in the SwitchCraft Client Mod 
    settings.
  - Messages mentioning you will now be **highlighted in chat**
    - This can optionally play a sound and send a system notification (both on by default)
    - You can also add additional highlight words in the config
  - Your own chat messages can be coloured differently (off by default)
- Death icons in chat ![Death icon - Generic](/img/death-icon-1.png) ![Death icon - Killed by a player](/img/death-icon-2.png) ![Death icon - Burned to death](/img/death-icon-3.png) ![Death icon - Exploded](/img/death-icon-4.png)
- Active time tracking, including per-session and per-day, with in-game overlay in the tablist<br />![](/img/tablist.png)
  - You can now opt out of the public active time leaderboard by running `/activetime opt out`
- Server restart countdowns and notification sound<br />![](/img/restart-countdown.png)
- Server startup progress bar in the lobby based on the average server startup time<br />![](/img/restart-progress.png)
  - Automatically moving from the lobby to the server is also much more responsive and less spammy
- Quick Settings buttons in the Options menu for common mod settings<br />![](/img/quick-settings.png)
- **Pronouns in the tablist** and above player names in-game
  - Automatic integration with [PronounDB](https://pronoundb.org)
  - Manually set your pronouns by running `/pronouns`
  - More information about pronoun support in the [FAQ](/faq/pronouns)
  - Supporter tags, staff icons, `[AFK]`, `[ALT]` and `[BOT]` tags are also shown above player names in-game
- Central End Island now resets every week
- Updated [Chatbox API](/chatbox/changes), **owner-only chatbox commands** (`^command` or `|command`)
- New [API endpoints](/faq/api)
  - `/v3/players` - Number of players online and active
  - `/v3/tps` - Current TPS and milliseconds per tick
  - `/v3/activetime` - Top 50 most active players
  - `/v3/supporter` - Current Supporter goal and progress
  - `/v3/deaths` - Top 50 players by death count
- [`/sc2dump`](/faq/sc2-dump) - Get an **archive of your SwitchCraft 2 computers and homes**
- Signs can be edited by right-clicking with an empty hand

</div>

### Client optimization mods included

- [Fastload](https://modrinth.com/mod/fastload) - Speeds up world loading times
- [FerriteCore](https://modrinth.com/mod/ferrite-core) - Reduces memory usage
- [LazyDFU](https://modrinth.com/mod/lazydfu) - Speeds up game loading times
- [Lithium](https://modrinth.com/mod/lithium) - Optimizes game physics, mob AI, block ticking, etc.
- [Starlight](https://modrinth.com/mod/starlight) - Optimizes lighting engine
- [ToolTipFix](https://modrinth.com/mod/tooltipfix) - Attempts to fit tooltips on the screen

::: warning

[Sodium](https://modrinth.com/mod/sodium), a popular rendering optimization mod, and
[Indium](https://modrinth.com/mod/indium), a Fabric API compatibility layer for it, are **not included** 
in the modpack by default. See the [FAQ page](/faq/sodium) for more information.

:::
