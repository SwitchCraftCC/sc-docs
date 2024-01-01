---
title: SwitchCraft Rules
---

<script setup>
import Rule from "./components/Rule.vue";
import RuleHeading from "./components/RuleHeading.vue";
import KristValue from "./components/KristValue.vue";
</script>

# Rules

Above all the rules, please use common sense, and be nice to other people.

<div class="rules-list [&_h3]:!mt-8 [&_h3]:!mb-4">

[//]: # (Rule 1)
<RuleHeading rule="1">
  Do not grief or deface the world:
</RuleHeading>

<Rule rule="1.1">
  Griefing any player's work without their consent, even if it is unclaimed, is not allowed.
</Rule>
<Rule rule="1.2">
  Leave chests, computers and other valuables as you found them, unless you know they're naturally generated.
</Rule>
<Rule rule="1.3">
  Huge quarries, general purging of land/biomes etc. near spawn and other cities is unsightly and not allowed, but it is 
  fine if it is far away from a city.
</Rule>
<Rule rule="1.4">
  Branding the world with anything that could be considered breaking another rule (e.g. abuse towards other players, 
  profanity, swastikas and other hate symbols) is not allowed. Staff may remove these without warning, and will punish 
  the player(s) involved.
</Rule>
<Rule rule="1.5">
  Sending disruptive messages via modem or rednet (e.g. spamming rednet, "spoofing" GPS) is not allowed.
</Rule>

[//]: # (Rule 2)
<RuleHeading rule="2">
  Do not attempt to crash the server or use excessive resources with malicious intent:
</RuleHeading>

<Rule rule="2.1">
  Abusing any bugs, creating large laggy contraptions/farms (including mob farms), and writing bad programs that cause 
  lag are all considered excessive use of server resources.
</Rule>
<Rule rule="2.2">
  Staff might modify your programs to make them less laggy, and/or contact you about them.
</Rule>
<Rule rule="2.3">
  Intentional abuse of server resources is bannable (e.g. trying to DoS other services from the server, or the server 
  itself).
</Rule>
<Rule rule="2.4">
  Don't build massive mob farms, or active mob farms of any kind (aggro farms).
</Rule>
<Rule rule="2.5">
  Ensure XP and items are collected immediately. Do not leave them to accumulate, as this can cause substantial lag.
</Rule>
  <Rule rule="2.5.1" sub>
    Staff may place command blocks or computers to remove XP and items that are causing lag.
  </Rule>
<Rule rule="2.6">
  Do not artificially inflate computer or peripheral IDs by creating them in excessive numbers.
</Rule>
<Rule rule="2.7">
  Do not store more than 50 MB of data (e.g. with computers or floppy disks) per player, service, company, or building.
</Rule>
<Rule rule="2.8">
  "Cinema" computers (e.g. video computers running Juroku or Sanjuuni) are limited to four 8x6 monitors at 10 FPS. Staff 
  may turn them off at any time to help with server performance.
</Rule>
<Rule rule="2.9">
  Attempting to corrupt the world or "chunk-ban" yourself or another player by creating invalid items, blocks, or 
  network packets, is considered crashing the server and is a bannable offence.
</Rule>
  <Rule rule="2.9.1" sub>
    Nesting containers, including shulker boxes, is considered an "invalid item" and is a bannable offence.
  </Rule>
  <Rule rule="2.9.2" sub>
    Creating items or blocks with excessive NBT data, legitimately or illegitimately, is a bannable offence.
  </Rule>
<Rule rule="2.10">
  Arrays and "swarms" of computers or turtles are limited to the following quantities:
</Rule>
  <Rule rule="2.10.1" sub>
    Laser turtles/manipulators: <b>maximum of 16 lasers</b>.
  </Rule>
  <Rule rule="2.10.2" sub>
    Mining/farming turtles: <b>maximum of 32 turtles</b>.
  </Rule>
  <Rule rule="2.10.3" sub>
    Other turtle arrays: <b>maximum of 64 turtles</b>.
  </Rule>
  <Rule rule="2.10.4" sub>
    If you have more than four turtles in an array with block scanners, please talk to a member of staff so we can see
    if it may be a performance concern.
  </Rule>
<Rule rule="2.11">
  Large poster grids are limited to a <b>maximum size of 8x8</b> in the general vicinity of spawn, or otherwise public
  areas.
</Rule>
  <Rule rule="2.11.1" sub>
    Staff reserve the right to remove any poster anywhere for any reason.
  </Rule>
  <Rule rule="2.11.2" sub>
    The classification of a public area is determined at the discretion of staff.
  </Rule>
<Rule rule="2.12">
  Please remember that the staff are only trying to keep the server fair for everybody. We are all sharing the same
  resources, do not be greedy or selfish with how you play as it is disrespectful to other players and the server.
</Rule>

[//]: # (Rule 3)
<RuleHeading rule="3">
  Do not exploit bugs or cheat in any way. If you find a bug, it must be disclosed responsibly to the staff:
</RuleHeading>

<Rule rule="3.1">
  Exploiting any bug, new or old, is not allowed.
</Rule>
<Rule rule="3.2">
  Exploiting duplication bugs (and bugs of a similar nature), including bugs in vanilla Minecraft, is not allowed. 
  Exploiting duplication bugs intentionally for monetary gain is a permanently bannable offence with little to no chance 
  of appeal.
</Rule>
<Rule rule="3.3">
  X-raying, wallhacking, etc. with texture packs or mods is not allowed. Plethora Block Scanners are allowed.
</Rule>
<Rule rule="3.4">
  Using hacked clients, hack mods, macro mods, macro software or macro hardware of any kind is forbidden.
</Rule>
  <Rule rule="3.4.1" sub>
    Using legitimate vanilla mechanics, ComputerCraft or Plethora to automate gameplay is allowed.
  </Rule>
  <Rule rule="3.4.2" sub>
    No other automated activity is allowed, including Mineflayer bots, macro mods, macro/automation software, macro 
    hardware, and any other tools or methods that may be used to automate Minecraft gameplay. This includes but is not 
    limited to: chat-bots, auto-clickers, auto-fishers, auto-miners, and pathfinders.
  </Rule>
<Rule rule="3.5">
  Using the world seed to predict generation is forbidden.
</Rule>
<Rule rule="3.6">
  Any bug found that has any potential to be exploited by other players, e.g. duplication bugs, spam bugs, claim bypass 
  bugs, should be <b>silently</b> and <b>responsibly</b> disclosed 
  <a href="https://github.com/SwitchCraftCC/issues#reporting-exploits" target="_blank"><b>to a member of staff</b></a> 
  and NOT shown/told to ANY other players while they are unpatched. Irresponsible disclosure of exploits may lead to an 
  immediate mute or ban.<br /><br />If you do find an exploit, you may be eligible for 
  <a href="https://github.com/SwitchCraftCC/issues#reporting-exploits" target="_blank"> at least 
  <KristValue value="500" /> bug bounty reward</a>.
</Rule>

[//]: # (Rule 4)
<RuleHeading rule="4">
  Do not spam the chat or advertise:
</RuleHeading>

<Rule rule="4.1">
  Spamming public or private chats with repeated words, repeated messages, pinging users, or any other unwanted 
  behaviour that could be considered disruptive to chatting in-game or in Discord is forbidden.
</Rule>
<Rule rule="4.2">
  Spamming any other platform that could be considered a chat (or used as a chat), e.g. Discord, chatboxes, chatbox 
  commands, regular commands (to annoy staff) is forbidden.
</Rule>
<Rule rule="4.3">
  Inviting players to other servers, sharing server links, etc. unless previously allowed by a member of staff is 
  forbidden.
</Rule>

[//]: # (Rule 5)
<RuleHeading rule="5">
  Do not harass or troll other players, exhibit hate speech, or post explicit content:
</RuleHeading>

<Rule rule="5.1">
  Insulting other players in any way, especially if repeated, is bullying and considered harassment.
</Rule>
<Rule rule="5.2">
  Harassing players extends to both in-chat and in-game.
</Rule>
<Rule rule="5.3">
  Claim bordering is considered harassment/trolling.
</Rule>
<Rule rule="5.4">
  Coercing players into installing potentially malicious or dangerous software that is publicly disclosed as such is 
  considered trolling.
</Rule>
<Rule rule="5.5">
  Minor use of profanity is acceptable, but excessive use of profanity is not.
</Rule>
<Rule rule="5.6">
  Use of hate speech, racial slurs, threats, and any other language that could be considered harmful to a person or a 
  group of people is not allowed. Discussion of such language, when it is clear that it is not being used for the intent 
  of harm, is okay, but should be undertaken with caution.
</Rule>
<Rule rule="5.7">
  Explicit content of any form, including but not limited to: adult themes, erotic imagery, explicit innuendo, self-harm 
  and suicide, gore, shock content, etc. is not allowed.
</Rule>
  <Rule rule="5.7.1" sub>
    This is a server for a children's game. A large number of players are under the age of 18. Be considerate of other 
    players in all behavior.
  </Rule>
  <Rule rule="5.7.2" sub>
    This includes discussion of these topics in in-game chat, on Discord, chatboxes, or in <b>any other public
    forum</b>.
  </Rule>
  <Rule rule="5.7.3" sub>
    This includes in <b>private messages</b> to a player who did not consent to discussing them, or who no longer wishes 
    to discuss them.
  </Rule>
  <Rule rule="5.7.4" sub>
    This includes but is not limited to: depictions of explicit content in builds, signs, computers, monitors, posters, 
    map art, speakers, overlay glasses, printouts, banners, links in chat, etc.
  </Rule>
  <Rule rule="5.7.5" sub>
    This includes "softcore" adult imagery. Anime art is not automatically considered adult imagery. Where this line is 
    drawn is at the discretion of the staff and cannot be argued.
  </Rule>
  <Rule rule="5.7.6" sub>
    Discussing any of the above topics with players who are under the age of 18 is completely disallowed, <i>even in 
    private messages, even if they are contributing to the discussion, and even outside SwitchCraft</i>. <b>Any</b> 
    disrespect to the age of consent will result in a ban.
  </Rule>
  <Rule rule="5.7.7" sub>
    Do not allude to any "not safe for work" topics at all, even if you are not discussing them directly, including in
    innuendo, suggestive jokes, etc.
  </Rule>

[//]: # (Rule 6)
<RuleHeading rule="6">
  Do not steal or scam items or KST from other players:
</RuleHeading>

<Rule rule="6.1">
  Stealing items from a player, even if they have trusted you in their claim, is forbidden.
</Rule>
<Rule rule="6.2">
  Stealing items from a player via an introspection module is forbidden.
</Rule>
<Rule rule="6.3">
  Stealing Krist in any way, from a player, a service/shop, or the server itself, is not allowed.
</Rule>
<Rule rule="6.4">
  Abusing alt accounts to increase your Krist income (via faucet and daily login bonuses) is considered theft.
</Rule>
<Rule rule="6.5">
  Redistributing paid software is considered piracy, and thus theft.
</Rule>
<Rule rule="6.6">
  Scamming in any way is not allowed. This includes unclear deals, or retroactively changing the terms of a deal, or not 
  upholding your end of a transaction.
</Rule>
<Rule rule="6.7">
  Ransomware or similar software used to steal Krist or items from players is not allowed.
</Rule>
<Rule rule="6.8">
  Impersonating any player in any way (e.g. chat recorders, fake chat messages, using someone else's Discord username) 
  is considered scamming.
</Rule>
<Rule rule="6.9">
  It is not required for shops to refund failed or invalid purchases, but it is encouraged.
</Rule>
<Rule rule="6.10">
  Automatically taking items from public sources, such as ender chests, is considered theft.
</Rule>

[//]: # (Rule 7)
<RuleHeading rule="7">
  Do not solicit or beg for items or KST from players who have previously declined, or from inactive players:
</RuleHeading>

<Rule rule="7.1">
  It is fine to ask a single inactive player about their property once.
</Rule>
<Rule rule="7.2">
  If they have declined once, it is not okay to ask again in the immediate future.
</Rule>
<Rule rule="7.3">
  It is not allowed to ask a group of inactive players for <i>anything</i>, especially going through the server list in
  bulk.
</Rule>
<Rule rule="7.4">
  Excessively begging for items or Krist in-chat is not allowed.
</Rule>

[//]: # (Rule 8)
<RuleHeading rule="8">
  Do not use a chat box to send a public message if a private message would suffice:
</RuleHeading>

<Rule rule="8.1">
  Public chat bots/services of any kind that are not explicitly opt-in are not allowed.
</Rule>
<Rule rule="8.2">
  It is okay to create a chat service if players have to manually opt in to receiving messages from them, or if there is 
  a clear way to trigger them (e.g. sending a \command, and the service responds to that player only).
</Rule>
<Rule rule="8.3">
  Bots in the SwitchCraft Discord are not allowed, even self-bots.
</Rule>

[//]: # (Rule 9)
<RuleHeading rule="9">
  Do not write or install software on computers belonging to other players without their informed consent:
</RuleHeading>

<Rule rule="9.1">
  Installing <i>any</i> software on computers belonging to other players without their consent is forbidden, even if 
  they have trusted you in their claim.
</Rule>
<Rule rule="9.2">
  Encouraging players to install software they don't fully understand the purpose of is forbidden. This means <b>no</b> 
  malware of any kind, or any similar harmful or malicious software.
</Rule>
<Rule rule="9.3">
  Advertising or installing software that could be considered malicious or dangerous without the player's <b>informed</b>
  consent is forbidden.
</Rule>
<Rule rule="9.4">
  It is absolutely unacceptable to pretend a malicious program is not actually malicious, and it must be made very clear
  that it is malicious during every interaction.
</Rule>

</div>

[//]: # (Evasion)
<h1 id="evasion" class="!mt-8 !mb-4">
  <a class="!no-underline" href="#evasion">Evasion</a>  
</h1>

Attempting to evade a previous punishment may result in extension or escalation of the punishment. A mute may be 
extended, or could be turned into a temporary ban.

- <b>Staff interpret the rules. You cannot argue about special cases.</b>
- "Talking back" to staff or otherwise being rude or disrespectful can result in a mute, escalation to a temporary ban, 
  or the extension of an existing mute or temporary ban.
  - Remember that staff are only trying to make the server a safe, fair and fun place for everybody, and have no reason
    to tolerate disrespect when they are trying to help you.
- Evading a chat mute in-game (e.g. with another account, by proxy of another player, via chatboxes, chatbox commands,
  regular commands) can result in extension of the mute, or escalation to a temporary ban.
- Evading a Discord mute (e.g. with another account, or by proxy of another player) can result in extension of the mute,
  or escalation to a temporary ban.
- Evading a ban, in-game and/or in Discord, by creating/using alt accounts can result in a permanent ban on all
  associated accounts.
- Harassing other players or staff regarding the reasoning for a mute or ban, or arguing with the terms of the mute or
  ban, can result in extension of the mute or ban, even permanently.

[//]: # (Alt accounts)
<h1 id="alts" class="!mt-8 !mb-4">
  <a class="!no-underline" href="#alts">Alt accounts</a>  
</h1>

- Players are allowed up to **2 accounts**, that is one main account and one alt account.
- Players are allowed to AFK (e.g. for farms) with an alt account. ~~You **must** connect with the IP `afk.sc3.io`
  in this scenario.~~ (*Note:* This is currently not implemented.)
- Using alt accounts to evade any punishment is forbidden and can result in a permanent ban on all associated accounts.
- Using alt accounts to evade inter-player mutes (`/ignore`) is also not allowed.
- Alt accounts **must** donate 100% of their Krist income from the server (starting balance, daily login bonus, faucet 
  rewards) back to the server (`/welfare opt out` and then `/welfare return`). Not doing so is considered theft.
- Bot accounts are no longer allowed on the server. Automated activity falls under Rule 3.4 and is not allowed.
  
