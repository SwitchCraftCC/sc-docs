---
title: Pronouns
---

# {{ $frontmatter.title }}

[[toc]]

The server supports showing your preferred pronouns in the tab list and above player names in-game. You can set your
pronouns by running the `/pronouns <pronouns>` command. You can clear them at any time by running `/pronouns clear`.

### PronounDB integration

The server automatically integrates with [PronounDB](https://pronoundb.org) to fetch your pronouns. If you have an
account with PronounDB, and have linked your Minecraft account, then your pronouns will be automatically fetched when
you log in. If they are different to your current pronouns on the server, you will be prompted to change them. You can
accept the change by clicking the "Yes" button, or disable this entirely by clicking the "Don't ask again" button.

Pronouns from PronounDB are mapped according to the following rules:
- If your first pronoun set is a meta set (i.e. `any`, `ask`, `avoid`, `other`), it is used as-is and the rest of the
  sets are ignored.
- If you have two or more nominative pronoun sets, the first pronoun from the first set and the first pronoun from the 
  second set are used. The third set is always ignored. For example, `he/him` + `they/them` would be mapped 
  to `he/they`.
- If you have only one pronoun set, it is used as-is.

### Supported pronouns

The server currently supports the following pronouns, sorted alphabetically to avoid bias:

#### Single pronouns

- `any` - Any pronouns
- `ask` - Ask me my pronouns
- `avoid` - Avoid pronouns, use my name
- `other` - Other pronouns

#### Pair pronouns

Combine any two of the following words, in any order, separated by a slash (`/`):

- `he`
- `her`
- `him`
- `it`
- `its`
- `she`
- `them`
- `they`

For example: `he/him`, `he/they`, `it/its`, `she/her`, `she/they`, `they/them`

### Neopronouns

SwitchCraft currently does not have a command to set your pronouns to any pronouns not listed on this page. If you would 
like neopronouns to be added to your user, please contact a member of staff.

### Disabling pronouns above player heads

If you would like to hide pronouns above player heads, you can do so by going to Options > Quick Settings >
SwitchCraft Client Mod > Miscellaneous > Pronouns above player heads. Pronouns will still be visible in the tab list.

### Pronouns in command feedback

When your pronouns are set, they may be used in the output for some server commands. Currently, the following rules
are used to determine which pronoun to use:

- If no pronouns are set, "them" is used
  - e.g. "Lemmmy would like you to teleport to them"
- If any pronoun is preferred, "them" is used
- If a pronoun pair is set, the first pronoun is used (e.g. "he" in "he/they")
  - e.g. "Lemmmy would like you to teleport to him" 
- Otherwise (ask/avoid/other/neopronouns), the username is used instead of any pronoun
  - e.g. "Lemmmy would like you to teleport to Lemmmy" 

If you find any command that does not accurately represent your pronouns, and you think it should, please contact a
member of staff, and we will see what we can do to fix this. Adding support may not be possible in all cases, such as 
for a third party mod.
