# This script should be run to setup a new PC with my workflow.


# Installs Chocolatey.
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))


# Installs Visual Studio 2022.
choco install visualstudio2022community
#   Instructions from the Rust Book:
#       When asked which workloads to install, include:
#           - “Desktop Development with C++”
#           - The Windows 10 or 11 SDK
#           - English language pack component, along with any other language pack of your choosing


# Installs rustup.
choco install rustup.install


# Installs the Nu shell.
#   This might not work out of the box. See https://www.nushell.sh/book/installation.html#installing-a-compiler-suite for more details.
winget install nu


cargo install bat