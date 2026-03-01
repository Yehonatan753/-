@echo off
echo ===================================================
echo Backing up your Artificial Intelligence Chat History!
echo ===================================================
echo.
echo Please wait a moment while the files are compressed...
powershell -Command "Compress-Archive -Path '%USERPROFILE%\.gemini\antigravity' -DestinationPath '%USERPROFILE%\Desktop\Antigravity_Backup.zip' -Force"
echo.
echo ===================================================
echo DONE! 
echo Please check your Desktop for 'Antigravity_Backup.zip'.
echo You can easily upload this file to Google Drive, Telegram, or put it on a USB stick.
echo ===================================================
echo.
pause
