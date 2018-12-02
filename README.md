# IdleEmpirePromotionsHideButton
Add Show/Hide buttons on the Idle-Empire.com Promotions page, as well as remember locally which ones were hidden before.

You will likely need a UserScript Manager before continuing to install the UserScript. Please check this link to find one:
https://github.com/OpenUserJs/OpenUserJS.org/wiki/Userscript-beginners-HOWTO#how-do-i-get-going

After you've installed a UserScript Manager, visit this page and install the script:
https://github.com/Devviedehm/IdleEmpirePromotionsHideButton/raw/master/Idle-Empire%20Promotions%20Hide%20Button.user.js

It uses your browser's localStorage to remember which Promotions you've hidden, and should only load after the rest of the page is loaded (so on slower connections all Promotions may still sohw up at first).

You can always unhide a Promotion after you've hidden it.

The script should reset itself to show all Promotions if a new one is added or an old one is removed (if it detects the amount of promotions has changed, it will reset itself).

It won't reset if a Promotion has changed (e.g. one added and one removed) or if the Promotions have changed order, which may cause some confusion. In those cases, you'll need to re-click the buttons to the way that you want them again.

If you have any problems with it, please let me know.
