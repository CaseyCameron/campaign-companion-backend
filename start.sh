#!/bin/bash

/usr/bin/mysql -hdb -uroot -ppassword -e "CREATE DATABASE IF NOT EXISTS campaign_companion;";

node server.js
