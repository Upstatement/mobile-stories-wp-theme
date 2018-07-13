# Mobile Stories WordPress Theme

This starter kit is used to create the following:

* nginx PHP-FPM container with WordPress
* MySQL container
## Setup

1. Make sure [Ups Dock](https://github.com/Upstatement/ups-dock) is installed and up and running
2. In the directory where you want to store this project folder, enter:

```
git clone git@github.com:Upstatement/mobile-stories-wp-theme.git
cd mobile-stories-wp-theme
```

3. Create a `.env` file in the root of your project directory and copy the values in the "Mobile Stories - Dotenv" secure note into that file. You can find this note in 1Password. 
4. Run `npm install` and then `composer install` from the root directory to install all the required packages and plugins. 
5. From the root directory run `./bin/install.sh`

Once completed, you should be able to access your WordPress installation via `ups.dock`. 

Once the container is running, head to [ups.dock](http://ups.dock/) and click on the Mobile Stories project link. To login in at `/wp-admin`, the initial admin username is `admin` and the password is `password`.

To start using Gutenberg, head to "Plugins" in the left sidebar and activate both the Gutenber plugin and the Mobile Stories plugin for Gutenberg.

If you need to SSH into your container, from your project root run `docker-compose exec wordpress /bin/bash`

## Running

`./bin/start.sh` will start the container, if it's not running already (check [ups.dock](http://ups.dock/)). 

Quitting this process (`Ctrl-C`) will shut down the container.

When the container is running, head to [ups.dock](http://ups.dock/) and click on the Mobile Stories project link. To login in at `/wp-admin`, the initial admin username is `admin` and the password is `password`.

### Importing

There is a basic database import script in `/bin/import.sh`. Just update the SQL file name, old URL, and local URL.

## wp-cli

`docker-compose exec wordpress wp [command]`
