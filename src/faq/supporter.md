---
title: Supporters
---

<script setup>
import SupporterTag from "../components/SupporterTag.vue";
</script>

# Supporters

Players with this <SupporterTag :tier="1" /> tag appearing next to their name in chat and the tablist are 
<span style="color: #55FFFF">SwitchCraft Supporters</span>. This means that they have paid to help keep the server 
online. If you would like to buy <span color="#AAAAFF">Supporter</span> status, visit:
[https://sc3.io/supporter](https://sc3.io/supporter).

Supporter goes directly towards server upkeep and maintenance costs, helping SwitchCraft stay alive for longer!

By becoming a <span color="#55FFFF">Supporter</span>, you will receive multiple tags:
- <SupporterTag :tier=1 /> next to your name in-game
- <SupporterTag :tier=1 svg /> <span style="color: #55FFFF">Supporter</span> role on our [Discord](https://discord.sc3.io)
- <span style="color: #55FFFF">Supporter</span> role on the 
  [ComputerCraft:Tweaked Forums](https://forums.computercraft.cc)

You will also receive the following cosmetic perks in-game:
- The `/hat` command, which allows you to wear any block in your head slot
- The `/sleep` command, which allows you to sleep in any location, without a bed, and even during the day
- The `/fly` command in the lobby

And the following additional perks on our [Discord](https://discord.sc3.io):
- Access to the exclusive `#supporters` chat channel
- Ability to change your own nickname
- Ability to use external emoji and stickers

Tags will last **30 days** for every **$5.00 USD** contributed. The minimum payment is **$5.00 USD**. For example, if 
you spend **$20.00 USD**, you will receive <SupporterTag :tier=1 /> for **120 days**. You may purchase Supporter 
multiple times, and it will stack.

Tags are usually applied within 30 minutes of purchase. Contact staff on [Discord](https://discord.sc3.io) for support.

<div style="text-align: center; font-size: 48px">
    <a href="https://sc3.io/supporter" style="color: #55FFFF">Support Now</a>
</div>

### Supporter Tiers

Supporter Tiers are special badges that are given to players who have cumulatively contributed a certain amount of money 
towards the server over time.

- <SupporterTag :tier="1" /> <b>$5.00 USD</b> or more contributed total
- <SupporterTag :tier="2" /> <b>$25.00 USD</b> or more contributed total
- <SupporterTag :tier="3" /> <b>$75.00 USD</b> or more contributed total

If you do not want to share your Supporter tier, you can choose which tag to show publicly by running 
`/supporter tier <1-3>`. You can revert back to any previous tier for the tag on your username, e.g. if you are a Tier
3 supporter you can show a Tier 1 tag by running `/supporter tier 1`. You can revert this at any time by running
`/supporter tier auto`. Alternatively, if you don't want to show a tag at all, you may [opt out](#opt-out).

### Opt out

You may opt out of publicly showing your Supporter status by running `/supporter opt out`. This will hide the Supporter
tag from your name. You will still need to manually un-link your Discord and Forums accounts if they have been linked.
You may opt back in at any time by running `/supporter opt in`.
