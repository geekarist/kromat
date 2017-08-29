# KROMAT

A script to launch Google Chrome on linux with a specific account.

## Installation

This script should work on Ubuntu based distributions. It was tested on Ubuntu 16.04 and Mint 18. It needs a recent version of Node.js and npm.

Clone this repository and launch `npm install -g` as an admin:

```
$ sudo npm -g install
/usr/local/bin/kromat -> /usr/local/lib/node_modules/kromat/index.js
/usr/local/lib
└── kromat@1.0.0
```

## Usage

Let's say that you have a work account (using the domain `yourworkaccount.com` on Google Apps) and a home account (using Gmail).

You can start Chrome on your work account using the command `kromat yourwork`. Any part of the domain is OK.

You can start Chrome on your home account using `kromat gmail`.
