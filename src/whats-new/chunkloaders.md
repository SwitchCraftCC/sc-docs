---
title: Chunkloaders
---

# {{ $frontmatter.title }}

[[toc]]

The chunkloading solution for SwitchCraft 3 is a custom Krist-based server-side chunkloader mod. View your chunkloader
information in-game by running `/chunkloader`.

## Quick reference

- `/chunkloader` - View your chunkloader information
- `/chunkloader list` - List all your loaded chunks
- `/chunkloader unlock` - Pay to increase your chunkloading limit
- `/chunkloader load` - Load the chunk you are standing in
- `/chunkloader load offline` - Offline-load the chunk you are standing in
- `/chunkloader unload` - Unload the chunk you are standing in

## Overview

There are two types of chunks:
- Loaded chunks: These chunks are only loaded when you are **online**.
- Offline chunks: These chunks are **always loaded**, even when you are offline, for up to 30 days since your last login.

You can have a maximum of **9** loaded chunks, and a maximum of **2** offline chunks. Chunks can be 'loaded' and 
'unloaded' (allocated and unallocated) at-will at no cost by running `/chunkloader load` and 
`/chunkloader unload`.

By default, your chunkloading limit will be 0 loaded chunks and 0 offline chunks. You can increase your chunkloading
limit with a **one-time payment** by running `/chunkloader unlock`. Every 4 loaded chunks you unlock will grant you 1 
offline chunk. 

If you are offline for more than 30 days, your offline chunks will no longer be loaded. When you next log in, they will
automatically become loaded again.

## Prices

The **one-time** prices for unlocking more loaded chunks are as follows:

<table>
    <tr>
        <td>New loaded limit</td>
        <td>New offline limit</td>
        <td>Cost</td>
    </tr>
    <tr><td>1</td> <td></td>  <td><KristValue :value="100" /></td></tr>
    <tr><td>2</td> <td></td>  <td><KristValue :value="150" /></td></tr>
    <tr><td>3</td> <td></td>  <td><KristValue :value="200" /></td></tr>
    <tr><td>4</td> <td>1</td> <td><KristValue :value="250" /></td></tr>
    <tr><td>5</td> <td></td>  <td><KristValue :value="300" /></td></tr>
    <tr><td>6</td> <td></td>  <td><KristValue :value="350" /></td></tr>
    <tr><td>7</td> <td></td>  <td><KristValue :value="400" /></td></tr>
    <tr><td>8</td> <td>2</td> <td><KristValue :value="450" /></td></tr>
    <tr><td>9</td> <td></td>  <td><KristValue :value="500" /></td></tr>
    <tr>
        <td colspan="2" align="right">Total</td>
        <td><KristValue :value="2700" /></td>
    </tr>
</table>

All payments are one-time only. You will not be charged for having chunks loaded - you only pay to increase your limit.

## Public services and free chunkloading

If you operate a public service on SwitchCraft, you may be eligible for free chunkloading. Free chunkloading is 
guaranteed offline chunk loading with no 30-day limit, and does not count towards your loaded chunk limits. Please 
contact a member of the staff team to discuss your eligibility. 

A chunk containing parts of your base that are not part of your public service will not be eligible for free
chunkloading.
