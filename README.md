# Ups Dock WordPress Starter Kit

This starter kit is used to create the following:

* nginx PHP-FPM container with WordPress
* MySQL container
## Setup

1. Make sure [Ups Dock](https://github.com/Upstatement/ups-dock) is installed and up and running
2. Create a `.env` file in the root of your directory and Copy the values in the *Mobile Stories - Dotenv* secure note into that file. You can find this note in 1Passwoed. 
3. Run `npm install` and then `composer install` from the root directory to install all the required packages and plugins. 
3. From the root directory run `./bin/install.sh`

Once completed, you should be able to access your WordPress installation via `ups.dock`. 

If you need to SSH into your container, from your project root run `docker-compose exec wordpress /bin/bash`

## Running

`./bin/start.sh` will start the container. 

Quitting this process (`Ctrl-C`) will shut down the container.

### Importing

There is a basic database import script in `/bin/import.sh`. Just update the SQL file name, old URL, and local URL.

## wp-cli

`docker-compose exec wordpress wp [command]`
