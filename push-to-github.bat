@echo off
title Push Portfolio to GitHub & Vercel
color 0A
echo ======================================================================
echo   SATYABRAT PANDEY PORTFOLIO - GITHUB ^& VERCEL DEPLOYMENT HELPER
echo ======================================================================
echo.

:: Check if git is available
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [!] Git was not detected in PATH.
    echo Please make sure Git is installed, or upload files directly at https://github.com/new
    echo.
    pause
    exit /b
)

echo [*] Initializing Git repository...
git init
git add .
git commit -m "Production release: Satyabrat Pandey Portfolio"
git branch -M main

echo.
echo [*] Repository prepared!
echo Please create a new empty repository at https://github.com/new (e.g. named 'portfolio')
echo.
set /p REPO="Paste your GitHub repository URL (e.g. https://github.com/saty159/portfolio.git): "

if "%REPO%"=="" (
    echo [!] No URL entered. Aborting.
    pause
    exit /b
)

git remote remove origin >nul 2>nul
git remote add origin %REPO%
echo [*] Pushing to %REPO%...
git push -u origin main

echo.
echo ======================================================================
echo   [SUCCESS] Code is pushed to GitHub!
echo   Next Step: Open https://vercel.com/new and click 'Import' on your repo.
echo ======================================================================
echo.
pause
