---
title: SwitchCraft 2 Computer Dump
---

# {{ $frontmatter.title }}

You can download a .zip archive of your computers and homes from SwitchCraft 2 by running the `/sc2dump` command. The 
dump contains a listing of all your computers, and all their files in the computer directory. The server may take a few 
moments to generate the archive, so please be patient.

<div class="spread-lists">

<a href="/img/sc2-dump-index.png" target="_blank">
  <img src="/img/sc2-dump-index.png" alt="SwitchCraft 2 Computer Dump" 
    style="max-width: 280px; float: right; margin-left: 16px" />
</a>

The archive contains:
- An `index.html` file that can be opened in a web browser to view and search the contents of the archive
- An `index.json` file containing even more information than the HTML file, but in a machine-readable format
- A `computercraft` directory, which contains:
  - `computer` - All your computers, turtles, and pocket computers, separated by ID
  - `neural` - All your neural interfaces, separated by ID
  - `disk` - All your floppy disks, separated by ID

The following locations were searched for items and placed blocks:
- Your inventory
- Your ender chest
- Your private ender storage frequencies
- Blocks placed in claims that you own (e.g. computers and turtles)
- Containers in claims that you own (e.g. chests, disk drives)
- Entities in claims that you own (e.g. item frames, mobs with neural interfaces)

The scan is based off of the world data as of the end of SwitchCraft 2's world at December 27th 2022, 18:10 UTC.

::: warning IMPORTANT
**Do not share the .zip file or dump link with anyone**, as they may contain sensitive information such as Krist 
passwords, private keys, and API tokens.
:::

Things to note:
- The archive only includes **claims that you own**. If you were just trusted in a claim (including manager trust), you
  will not receive the computers in that claim.
  - If there is a computer in a claim that you do not own that you would like access to, please contact the claim owner
    to run `/sc2dump` and find the computer for you, or contact a member of staff to help you.
  - Wolf Mall computers are not included in the dump, but you may contact staff to request a copy of your Wolf Mall
    computer.
- <b class="red-text">Do not share the .zip file or dump link with anyone</b>, as they may contain sensitive information 
  such as Krist passwords, private keys, and API tokens. 
- The archive link will expire after 24 hours, but you can run `/sc2dump` again to get a new link.
- Empty computers will be listed in the index, but will not have a folder in the archive.
- **Extract the .zip file fully** before trying to open `index.html` in your browser.
- [WinRAR](https://www.rarlab.com/download.htm) or [7-Zip](https://www.7-zip.org) is recommended to extract the archive 
  on Windows, especially for players with larger archives, as they are very large and may take a long time to extract. 
  Explorer is not very good at extracting lots of small files.
- Larger archives may "hang" for a while when downloading while they are scanned for viruses. This takes a while as they
  contain lots of small files.
- When extracting the archive on Windows, you may see several warnings about files being too long. All warnings can be
  ignored, as the majority of the archive will still be extracted correctly. Since the server ran on Linux, there are
  many files in the archives that are not compatible with Windows filesystems (due to case insensitivity and reserved
  filenames). If you are concerned about the files that were not extracted, extract the archive on another filesystem
  (not NTFS) or view the contents directly with an archive viewer such as [WinRAR](https://www.rarlab.com/download.htm) 
  or [7-Zip](https://www.7-zip.org).
  - "File already exists" - choose to replace the file ("Yes to All" on WinRAR)
  - "File name is too long" - can be ignored
  - "Access is denied" - can be ignored
  - Files named `aux`, `com1`, `com2`..., `lpt1`, `lpt2`..., `con`, `nul`, `prn` will fail but can be ignored.

If you have any questions, please ask in the [SwitchCraft Discord](https://discord.sc3.io).

</div>
