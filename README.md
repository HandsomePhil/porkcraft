# World of Porkcraft
This guide is designed to help you install, configure, and connect to the private World of Porkcraft: Wrath of the Lich King server. Keeping all this documentation on Discord was convenient; however, it wasn't easy for new players. Please note this is not a server that is open to the public, and you must have an account created for you by the server's administrator.

Understand that you proceed at your own risk, and we takes no responsibility for errors, broken links, or misbehaving computers.

## Setup
### Installation
1. Download the [ChromieCraft 3.3.5a](https://www.chromiecraft.com/en/downloads/) client for your operating system.
2. Extract the contents of the zip file on your computer.
3. Tip: If you don't have the retail version of World of Warcraft, you can create a new folder under your Program Files folder. Once complete, it should look like this: `C:\Program Files\World of Warcraft\`.

### Configuration
Next, we'll need to configure your client to connect to the Porkcraft server.
1. Open the installation folder you created for the game.
2. Navigate to `...\Data\enUS\realmlist.wtf`.
3. If you don't see `realmlist.wtf`, may need to create the file.
4. Open `realmlist.wtf` with a text editor (like notepad.exe) and add the following: `set realmlist porkchopexpress.servebeer.com`.
5. Save the file and close it.

## Recommended Fixes
### HD Patch
Would you like to upgrade the textures and models of the in-game assets? Here's how you do it:
1. Download the [ChromieCraft HD Patch](https://www.chromiecraft.com/en/downloads/).
2. Open the installation folder you created for the game.
3. Extract the contents of the zip file to your `...\Data\` folder.
4. If you run into trouble, you can always read the `readme.txt` file included in the zip folder.
5. Please note that if you install the HD Patch, you will need to follow the Large Address Aware instructions below.

### Large Address Aware (Windows)
Experiencing crashes in large cities like Shattrath or Dalaran? Here's how to fix that:
1. Download the [Large Address Aware.zip](https://cdn.discordapp.com/attachments/1363880440938762453/1410364158280470622/Large_Address_Aware.zip?ex=6964b43a&is=696362ba&hm=acf801d587b71f031a222a681edaa51e6f9248a9f42fdbd83764622f058c34f1&) file.
2. Unzip the contents of the file to your installation folder.
3. Create a copy of the `wow.exe` file, renaming it to `wow_backup.exe`.
4. Launch the `Large Address Aware.exe` file.
    1. Under Step 1, click the button with three dots, and navigate to your client installation folder and select `wow.exe`, and click open.
    2. Step 2: Check the box.
    3. Step 3: Click save.

### Large Address Aware (Linux)
Experiencing crashes in large cities like Shattrath or Dalaran? Do you also worship at the altar of the Penguin? Ok, here's how to fix that for our Linux nerds:
1. Navigate to System Options under the launch configuration.
2. Click the `Enable Feral GameMode` toggle.
3. Under Environment variables, click Add
4. Create a key named `LARGE_ADDRESS_AWARE` with a value of 1.

### Sound Mod Fix for Naxxramas (windows)
Have you noticed that when you go into Naxxramas there is a near-constant sound clip of wailing tortured souls playing in the background? Here's how you fix that:
1. Download the [sound.zip](https://cdn.discordapp.com/attachments/1363880440938762453/1408818669877858334/Sound.zip?ex=696503a1&is=6963b221&hm=1f76433aefef3ffc6a2e42921dbbb068b390985bbbb7b6b7862c3ed5120500f9&) file.
2. Unzip the contents of the file into your `...\Data\` folder.

### Full screen (Windows)
If you're unable to Alt-Tab or run the client in windowed mode, here's the fix:
1. Navigate to the installation folder for the game.
2. Open `...\WTF\Config.wtf` with a text editor (like notepad.exe) and add the following lines at the bottom:

```
SET gxWindow "1"
SET gxMaximize "1"
```
3. Save and close the file.

## Porkcraft Server Configurations
### Custom Server Rules
- Instant mail delivery
- Free transmogs
- Instant flight paths (optional and can be toggled on/off at any Flight Master)
- No Hearthstone timers
- Free talent respecs
- Shared mounts and pets between alts
- Server restarts daily at 4:00 AM ET
- Raids and arenas reset on Fridays at 6:00 AM ET
- Heroic dungeons reset daily at 3:00 AM ET
- Instant dungeon/raid resets with Cromie located in Orgrimmar by the bank, and Dalaran by the well.
- Free transmogs vendor next to Cromie
- No timer on `/camp` or `/logout` commands
- All newly created characters start with 1 gold

### Bots
- There are 2,000 bots split evenly between Alliance and Horde.
- Raid bots have a suffix in their name that denotes their role.
    - botnameTANK is a tank
    - botnameDPS is a damage dealer
    - botnameHLR is a healer
- Feel free to invite the bots when questing or running dungeons.
- We do ask that you don't bring the bots into 25-man Wrath of the Lich King raids.
- Bots are able to join and participate in Battlegrounds and Arenas.

### Auction House
- AuctionHouseBot will populate the auction house daily with new random items.
- 20,000 items daily on the Horde auction house.
- 5,000 items daily on the Alliance auction house.
- 5,000 items daily at the neutral auction house.
- AuctionHouseBot will purchase items listed on the auction house daily at 4:10PM ET using the following formula:
    - Common items listed at x3 their vendor price
    - Uncommon items listed at x5 their vendor price
    - Rare items listed at x12 their vendor price
    - Epic items listed at x15 their vendor price
- We have created a [calculator](https://handsomephil.github.io/porkcraft/calculator) to help you determine the price for you items to ensure they are purchased by the AuctionHouseBot.
- We have also created an [addon](https://cdn.discordapp.com/attachments/1363880440938762453/1392689852507488396/aux-addon.zip?ex=6965013f&is=6963afbf&hm=fc5c8e84431dda8f76e08636a025185fbf59788e66b14346045704f947c20da7&) that will automatically list items at the appropriate price.

### Addons
You can download WOTLK-specific addons for Chromiecraft at [felbite.com](https://felbite.com/). Please note that addons may not work or cause errors within your game client. No support for addons is provided by Porkcraft admins.

Addons are installed in the `...\Interface\AddOns` folder.

###### Made with 🤍 by James + Phil